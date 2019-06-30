import getCookie from "./getCookie";

const checkCookie = cname => {
  var cname = getCookie(cname);
  if (cname !== "") {
    return true;
  } else {
    return false;
  }
};

export default checkCookie;
