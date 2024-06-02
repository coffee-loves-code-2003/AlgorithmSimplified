const express=require('express');
const { getAlgorithms, createAlgorithm, getSingleAlgorithm, updateAlgorithm, deleteAlgorithm ,getUsersAlgorithm} = require('../Controllers/algorithmController');
const {isAuthenticatedUser}=require('../Middlewares/authenticate')
const router=express.Router();
const multer =require('multer');
const path=require('path')
const upload=multer({storage:multer.diskStorage({
    destination:function(req,file,callback)
    {
        callback(null,path.join(__dirname,'..','uploads/coverpage'));
    },
    filename:function(req,file,callback)
    {
        callback(null,file.originalname)
    }
})})
router.route('/algorithms/myposts').get(isAuthenticatedUser,getUsersAlgorithm)
router.route('/algorithms').get(getAlgorithms);
router.route('/algorithms/new').post(isAuthenticatedUser,upload.single('coverpage'),createAlgorithm);
router.route('/algorithms/:id').get(getSingleAlgorithm).put(isAuthenticatedUser,upload.single('coverpage'),updateAlgorithm).delete(isAuthenticatedUser,deleteAlgorithm);
module.exports=router;