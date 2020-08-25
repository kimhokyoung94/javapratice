var express = requrie("express");
var router = express.Router();

/* GET '/' */

router.get("/", function (req, res, next) {
  console.log("This is Board입니다.");
});
