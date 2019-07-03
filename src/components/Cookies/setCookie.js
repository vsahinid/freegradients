const setCookie = (cname, cvalue) => {
  // console.log(document.cookie);
  document.cookie = cname + "=" + cvalue + ";";
};

export default setCookie;
