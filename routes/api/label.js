const express = require('express');
const router = express.Router();
const Label = require('../../services/LabelService')
const { asyncHandler } = require('../getSendResult');

router.get('/labeList',asyncHandler(async(req,res) => {
  return  await Label.getLabel(req.query.userId);
}))

router.post('/addLabel',asyncHandler(async(req,res) => {
     // console.log(req.body);
     return await Label.addLabel(req.body);
}));

router.delete('/:id',asyncHandler(async(req,res) => {
  return  await Label.deleteLabel(req.params.id);
}))

module.exports = router;
