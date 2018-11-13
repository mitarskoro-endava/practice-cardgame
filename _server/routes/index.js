const { Router } = require("express");
const router = Router();

const auth = require("./auth");
router.use(/\/signup.*/, auth);
router.use(/\/login.*/, auth);
router.use(/\/logout.*/, auth);

const monsters = require("./monsters");
router.use("/monsters", monsters);

module.exports = router;
