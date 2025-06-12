// const express = require('express');
// const student = require('../models/student')
// const router = express.Router();

// router.put('/:id',async(req,res)=>{
//     const userId = req.params.id;
//     const updateData = req.body;
//     const resp = await student.findByIdAndUpdate(userId,updateData,{
//         new:true,
//         runValidators:true
//     })
//     console.log("data updated")
//     res.send(resp)
// })

// module.exports = router;