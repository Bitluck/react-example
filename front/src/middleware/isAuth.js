export const isAuth = () => {
  if(localStorage.loggedIn === 'true') {
    return true;
  }
  return false;
}
