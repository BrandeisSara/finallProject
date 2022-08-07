const express = require('express');
const authBL = require('../BL/authBL');
const router = express.Router()

router.post('/', async function (req, resp) {
    let obj = req.body
    let status = await authBL.getSeamUser(obj);
    resp.json(status);
})
module.exports = router