import getCookie from "./getCookie";

const checkCookie = cname => {
  var c_name = getCookie(cname);
  if (c_name !== "") {
    return true;
  } else {
    return false;
  }
};

export default checkCookie;
