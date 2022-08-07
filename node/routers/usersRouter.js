const express = require('express');
const userBL = require('../BL/usersBL');
const router = express.Router()
router.post('/', async function (req, resp) {
    let obj = req.body
    let status = await userBL.createUser(obj);
    resp.json(status);
})
router.get('/:name', async function (req, resp) {
    let name=req.params.name
    let pers = await userBL.getUserByName(name);
     resp.json(pers);
})
router.delete('/:id', async function(req, resp)
{
    let id = req.params.id;
    let status = await userBL.deleteUser( id);
    return resp.json(status);
})
module.exports = router