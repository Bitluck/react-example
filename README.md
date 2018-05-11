# TT Developers School project

This repo contains the study project of social network for TT Developers School 2017-2018.

## Project features:
1. Authentication (register/login);
2. Make friends;
3. See user profiles;
3. Add posts;
4. See feed with friends posts.

# How run project

## Heroku
[Project on heroku](https://tt-school-project-template.herokuapp.com/) ( ⚠ recommended use VPN or proxy, 'cause Heroku may not be available)

### Test user
* login: test
* password: test

## Local

### How to use Docker:
* `npm run docker-build` : to download images if it's still not exist
* `npm run docker-start` : start postgres and redis within docker containers
* `npm run docker-clean` : turn containers off.

### Scripts
* `npm run start` : call `npm run dev`
* `npm run dev`   : for local run project in development environment
* `npm run pm2`   : for run project with PM2

# Generating test data

`npm run gen-data` : script for generating test data

### Environment variables for generating test data
* `USERS_COUNT`          : count of users (default: 10)
* `POSTS_PER_USER_COUNT` : count of posts for each user (default: in interval 3-21)
* `RELATIONS_COUNT`      : count of friend relations (default: (`USERS_COUNT` * (`USERS_COUNT` - 1) / 3) )
* `ONLY_KITTENS`         : generating picture for posts with only kittens :) (default: false)

### Test user after generating
* login: test
* password: test
