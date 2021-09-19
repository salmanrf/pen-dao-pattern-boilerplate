const {Router} = require("express");
const Controller = require("../api/Controller");
const router = new Router();

router.get("/", Controller.apiGetItems);

module.exports = router;