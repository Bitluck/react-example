'use strict';

async function selfUser(ctx, next) {
  if(+ctx.state.user.id === +ctx.params.id) {
    await next();
  } else {
    ctx.res.unauthorized();
  }
}

module.exports = selfUser;
