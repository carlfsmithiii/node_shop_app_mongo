module.exports = cookiesStr => {
  return cookiesStr.split(";").reduce((cookiesObj, cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookiesObj[key] = value;
    return cookiesObj;
  }, {});
};
