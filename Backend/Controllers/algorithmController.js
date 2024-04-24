const ErrorHandler=require('../utils/errorHandler');
const catchAsyncError=require('../Middlewares/catchAsyncError');
const algoModel=require('../Models/algorithmModel')
//Get Algorithms
const APIFeatures=require('../utils/apiFeatures')
exports.getAlgorithms=async(req,res,next)=>
{
    const getAlgorithmsByKeyword=new APIFeatures(algoModel.find(),req.query).search().filterbyCategory()
    const algorithm=await getAlgorithmsByKeyword.query;
    res.status(200).json({
        success:true,
        algorithm
    })

}
//create algorithm - /algorithms/new
exports.createAlgorithm = catchAsyncError(async (req, res, next) => {
    // Set the author of the algorithm to the user's id
    let author = req.user._id;
    const{name,descriptions,Long_description,category}=req.body
    let coverpage;
    if(req.file)
    {
        coverpage=`${process.env.BACKEND_URL}/uploads/coverpage/${req.file.originalname}`
    }
    console.log(coverpage);
    // Create a new algorithm document without specifying the _id field
    const algorithm = await algoModel.create(
        {
        coverpage,name,descriptions,Long_description,category,author
});

    // Respond with the created algorithm
    res.status(201).json({
        success: true,
        algorithm
    });
});


//Get Single Blog

exports.getSingleAlgorithm=async(req,res,next)=>
{

    const SingleAlgorithm=await algoModel.findById(req.params.id);
    if(!SingleAlgorithm)
    {
        // return res.status(404).json(
        //     {
        //         success:false,
        //         message:"Could not find the blog"
        //     }
        // );
        // after creating the object it should return to the error middleware located in the middleware/error.js
        return next(new ErrorHandler("Algorithm not found",400));
    }
    res.status(201).json(
        {
            sucesss:true,
            SingleAlgorithm
        }
    )
}

//updateAlgorithm

exports.updateAlgorithm=async(req,res,next)=>
{
    let verifyAlgorithmExist=await algoModel.findById(req.params.id);
    if(!verifyAlgorithmExist)
    {
        return res.status(404).json(
            {
                success:false,
                message:"Could not find the blog"
            }
        );
    }
     verifyAlgorithmExist=await algoModel.findByIdAndUpdate(req.params.id,req.body,
        {
            //to show only the new data
            new:true,
            // to check the required field that we defined in models
            runValidators:true
        })
        res.status(201).json(
            {
                success:true,
                verifyAlgorithmExist
            }
        )

}



//Delete algorithm

exports.deleteAlgorithm=async(req,res,next)=>
{
    let verifyAlgorithmExist=await algoModel.findById(req.params.id);
    if(!verifyAlgorithmExist)
    {
        return res.status(404).json(
            {
                success:false,
                message:"Could not find the blog"
            }
        );
    }
    await algoModel.deleteOne({_id:req.params.id}); 
    res.status(200).json
    (
        {
            success:true,
            message:"Blog Post Deleted"
        }
    )
}

exports.logoutUser=(req,res,next)=>
{
    
    res.cookie('AlgorithmSimplified',null,
{
    expires:new Date(Date.now()),
    httpOnly:true
}).status(200).json(
    {
        success:true,
        message:"Logged Out Successfully"
    }
)
}