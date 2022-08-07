const express = require('express');
const subscriptionsBL = require('../BL/subscriptionsBL');
const router = express.Router()

router.post('/', async function (req, resp) {
    let obj = req.body
    let status = await subscriptionsBL.createsubscription(obj);
    resp.json(status);
})
router.get('/:id', async function (req, resp) {
    let id = req.params.id
    let pers = await subscriptionsBL.getMemberById(id);
    resp.json(pers);
})
router.delete('/:id', async function (req, resp) {
    let id = req.params.id;
    let status = await subscriptionsBL.deletesubscription(id);
    return resp.json(status);
})
router.put('/:id', async function (req, resp) {
    let id = req.params.id;
    let obj = req.body
    let status = await subscriptionsBL.updatesubscriptionsRouter(id, obj);
    return resp.json(status);
})
module.exports = router