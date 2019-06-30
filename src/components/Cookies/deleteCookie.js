const deleteCookie = cname => {
  document.cookie = cname + "=" + "" + ";";
};

export default deleteCookie;
