const express = require('express');
const student = require('../models/student')
const router = express.Router();

router.use(express.json())
router.post('/', async (req,res)=>{
 const data = new student(req.body);
 const result = await data.save();
 res.send(result)
 console.log("data posted!")
})

router.get('/:bg',async(req,res)=>{
    const bg = req.params.bg;
     const rslt = await student.find({blood_group:bg})
     res.send(rslt);
     console.log(rslt)
})

router.get('/studs',async(req,res)=>{
    const data = await student.find();
    res.send(data)
    console.log(data)
})

router.put('/:id',async(req,res)=>{
    const userId = req.params.id;
    const updateData = req.body;
    const resp = await student.findByIdAndUpdate(userId,updateData,{
        new:true,
        runValidators:true
    })
    console.log("data updated")
    res.send(resp)
})

router.delete('/:id',async(req,res)=>{
    const userId = req.params.id;
    const resp = await student.findByIdAndDelete(userId)
    console.log("Data deleted")
    res.send(resp)
})
module.exports = router;