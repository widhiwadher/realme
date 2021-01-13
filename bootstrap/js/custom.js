function validateEmail(email) {
    var isLength = false;
    if (email.length >= 3) {
      isLength = true;
    }
    var isSplprst = false;
    if (email.indexOf("@") > -1) {
      isLength = true;
    }
    var isFirst = false;
    if (email.indexOf("@") < email.indexOf(".")) {
      isFirst = true;
    }
    var dotOnce = false;
    if (email.indexOf(".") == email.lastIndexOf(".")) {
      dotOnce = true;
    }
    var isDotlast = false;
    if (email.lastIndexOf(".") != email.length - 1) {
      isDotlast = true;
    }

    if (isLength && isFirst && dotOnce && isDotlast) {
      return true;
    }
    else {
      return false;
    }
  }

  function validatePassword(pass) {
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var nums = "0123456789";
    var spcl = "!@#$%^&*_+";


    var isLength = false;
    var isCaps = false;
    var isSmall = false;
    var isNums = false;
    var isSpcl = false;

    if (pass.length > 8) {
      isLength = true;
    }
    for (i = 0; i < pass.length; i++) {
      var char = pass.charAt(i);
      if (caps.indexOf(char) > -1) {
        isCaps = true;
      }
      if (small.indexOf(char) > -1) {
        isSmall = true;
      }
      if (nums.indexOf(char) > -1) {
        isNums = true;
      }
      if (spcl.indexOf(char) > -1) {
        isSpcl = true;
      }
    }

    if (isCaps && isLength && isSmall && isNums && isSpcl) {
      return true;
    }
    else {
      return false;
    }
  }

  function validateUsername(username) {
    




  }