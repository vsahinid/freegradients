import getCookie from "./getCookie";

const checkCookie = cname => {
  // console.log(document.cookie);
  var c_name = getCookie(cname);
  if (c_name !== "") {
    return true;
  } else {
    return false;
  }
};

export default checkCookie;
