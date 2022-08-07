const express = require('express');
const membersBL = require('../BL/membersBL');
const router = express.Router()

router.post('/', async function (req, resp) {
    let obj = req.body
    let status = await membersBL.createMember(obj);
    resp.json(status);
})
router.put('/:id', async function(req, resp)
{
    let id = req.params.id;
    let obj = req.body
    let status = await membersBL.updateMember(id,obj);
    return resp.json(status);
})
router.get('/:id', async function (req, resp) {
    let id=req.params.id
    let pers = await membersBL.getMemberById(id);
     resp.json(pers);
})
router.get('/', async function (req, resp) {
    let name=req.params.name
    let pers = await membersBL.getMembers(name);
     resp.json(pers);
})
router.delete('/:id', async function(req, resp)
{
    let id = req.params.id;
    let status = await membersBL.deleteMemberById( id);
    return resp.json(status);
})
module.exports = router