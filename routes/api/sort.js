const express = require('express');
const router = express.Router();
const Sort = require('../../services/soreService');
const { asyncHandler } = require('../getSendResult');

router.get('/sortList',asyncHandler(async (req,res) => {
  return await Sort.getStore(req.query.userId);
}));

router.post('/addSort',asyncHandler(async (req,res) => {
    return  await Sort.addStore(req.body);
}));

router.put('/:id',asyncHandler(async (req,res) => {
    let id = req.params.id;
    if(id){
       return await Sort.updateStore(id,req.body);
    }
    return null;
}));

router.delete('/:id',asyncHandler(async (req,res) => {
  let id = req.params.id;
  if(id) {
    return await Sort.deleteStore(id);
  };
  return null;
}));

module.exports = router;
