const deleteCookie = cname => {
  // console.log(document.cookie);
  document.cookie = cname + "=" + "" + ";";
};

export default deleteCookie;
