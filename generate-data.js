// it's toooo bad solution, I think it was necessary to separate the services from the controllers
// and use service methods for generating correct data
// also, generation of posts made synchronously, so it's long

const fs = require('fs');
const path = require('path');
const http = require('http');
const bcrypt = require('bcrypt');
const fakerator = require('fakerator')();

require('./src/configs');
require('./src/configs/post.config');
const logger = require('./src/configs/logger');
const { User, Profile, Post, FriendRelation, sequelize } = require('./src/models');

const postPictureDirectory = path.join(__dirname, './public/img/posts');

try {
  fs.accessSync(postPictureDirectory, fs.constants.R_OK | fs.constants.W_OK);
} catch (err) {
  try {
    fs.mkdirSync(postPictureDirectory);
  } catch (error) {
    process.exit(error.code);
  }
}

const usersCount = process.env.USERS_COUNT || 10;
const postsPerUserCount = process.env.POSTS_PER_USER_COUNT || 25;
const relationsCount = process.env.RELATIONS_COUNT
                     ? process.env.RELATIONS_COUNT % (usersCount * (usersCount - 1) / 2)
                     : (usersCount * (usersCount - 1) / 4);
const onlyKittens = process.env.ONLY_KITTENS || false;

const genders = ['male', 'female', 'other', 'rather not say'];

const RELATION_STATUS = ['friends', 'request'];

const TEST_USER = {
  login: 'test',
  password: '$2a$10$lPgJz3Dfg8xZSXwhubqM2OkUnM.rKklkjHYzLCE82IKzbM4t6Zo4i'
}

const SALT_ROUNDS = 10;

// to POST /api/auth/signup
const generateUser = async () => {
  const passwordLength = fakerator.random.number(2, 20);

  const flatPassword = fakerator.internet.password(passwordLength);

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashPassword = await bcrypt.hash(flatPassword, salt);

  return {
    login: fakerator.internet.userName(),
    password: hashPassword,
  }
}

const generateUserProfile = (userId) => {
  return {
    email: fakerator.internet.email(),
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    birthdate: fakerator.date.past(10, new Date()),
    gender: fakerator.random.arrayElement(genders),
    country: fakerator.address.country(),
    city: fakerator.address.city(),
    user_id: userId
  }
}

// login user to POST /api/auth/signin
// to POST /api/posts/
const generatePost = async (userId, maxTextLength = 2048) => {
  let text = generatePostText(maxTextLength);
  let picture = null;

  if (text === '') {
    picture = await generatePostPicture();
  } else {
    picture = fakerator.random.boolean()
      ? await generatePostPicture()
      : null;
  }

  if (!picture && text === '') {
    text = generatePostText(maxTextLength);
  }

  return {
    text,
    picture,
    user_id: userId
  }
}

const generatePostText = (maxTextLength = 2048) => {
  let text = fakerator.random.number(0, 10) > 3 ? fakerator.lorem.paragraph() : '';
  while (text && text.length > maxTextLength) {
    text = fakerator.random.boolean() ? fakerator.lorem.paragraph() : '';
  }

  return text;
}

const generatePostPicture = async () => {
  const pictureName = fakerator.random.hex(20) + '.jpeg';
  const height = fakerator.random.number(100, 1000);
  const width = fakerator.random.number(height / 2, 1000);
  const pictureId = fakerator.random.number(0, 1084);
  const pictureUrl = onlyKittens
    ? `http://placekitten.com/${width}/${height}`
    : `http://picsum.photos/${width}/${height}/?${pictureId}`;
  const pictureFullPath = path.join(postPictureDirectory, pictureName);
  let result = null;

  const picture = fs.createWriteStream(pictureFullPath);

  await getFile(pictureUrl)
    .then(res => {
      picture.on('finish', () => {
        logger.info('pipe write end');
      });
      result = '/img/posts/' + pictureName;
      res.pipe(picture);
    })
    .catch(error => {
      fs.unlink(pictureFullPath, err => logger.error(err));
      logger.error(error);
    });

  logger.info('asdfgh' + result);
  return await result;
}

const getFile = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      if (response.statusCode === 200) {
        resolve(response);
      }

      reject('Not 200 http code in response.');
    });
  });
}

// login user to POST /api/auth/signin
// to POST /api/users/:id/friends
const generateRelation = (fromId, toId) => {
  return {
    user_from: fromId,
    user_to: toId,
    state: fakerator.random.arrayElement(RELATION_STATUS)
  }
}

const randomUser = users => fakerator.random.arrayElement(users);

const isUniqueUser = (users = [], user = {}) =>
  users.find(u => u.login === user.login)
    ? false
    : true;

const isUniqueUserProfile = (profiles = [], profile = {}) =>
  profiles.find(p => p.email === profile.email)
    ? false
    : true;

const isUniqueRelation = (relations = [], relation = {}) =>
  relations.find(rel => rel.user_from === relation.user_from && rel.user_to === relation.user_to ||
    rel.user_from === relation.user_to && rel.user_to === relation.user_from) ||
    relation.user_from === relation.user_to
    ? false
    : true;

const users = [];
const posts = [];
const profiles = [];
const relations = [];

sequelize.sync().then(async () => {
  for (let i = 0; i < usersCount; ++i) {
    let user = i === 0 ? TEST_USER : await generateUser();
    while (!isUniqueUser(users, user)) {
      user = await generateUser();
    }

    let newUser;
    try {
      newUser = await User.create(user);
      users.push(newUser);
    } catch (err) {
      logger.error(err);
    } finally {
      user = await generateUser();
      newUser = await User.create(user);
      users.push(newUser);
    }

    logger.info(`generated ${users.length} users of ${usersCount}`);

    let profile = generateUserProfile(newUser.id);
    while (!isUniqueUserProfile(profiles, profile)) {
      profile = generateUserProfile(newUser.id);
    }
    const newProfile = await Profile.create(profile);
    profiles.push(newProfile);

    logger.info(`generated ${profiles.length} profiles of ${usersCount}`);
  }

  for (let i = 0; i < users.length; ++i) {
    const postsCount = fakerator.random.number(postsPerUserCount + 3);
    for (let j = 0; j < postsCount; ++j) {
      const post = await generatePost(users[i].id);

      const newPost = await Post.create(post);
      posts.push(newPost);

      logger.info(`generated ${j + 1} posts of ${postsCount} for ${i + 1} user of ${users.length} [sum ${posts.length}]`);
    }
  }

  for (let i = 0; i < relationsCount; ++i) {
    let relation = generateRelation(randomUser(users).id, randomUser(users).id);
    while (!isUniqueRelation(relations, relation)) {
      logger.info(`relation`);
      relation = generateRelation(randomUser(users).id, randomUser(users).id);
    }
    const newRelation = await FriendRelation.create(relation);
    relations.push(newRelation);

    logger.info(`generated ${relations.length} relations of ${relationsCount}`);
  }
})
  .then(() => process.exit(0));
