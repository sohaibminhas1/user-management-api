const User = require("../models/user")

async function handleGetAllUsers(req,res) {
     const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handleGetUserById(req,res)
{
     const user = await User.findById(req.params.id)
     if(!user) return res.status(404).json({error : "user not found"})
     return res.json(user);
}

async function handleUpdateUserById(req,res)
{
     await User.findByIdAndUpdate(req.params.id, { new : true})
       return res.json({status : "Edit succesful"})
}

async function handleDeleteUserById(req,res)
{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "User deleted from the database successfully", id:req.params.id });
}

async function handleCreateNewUser(req,res){
      const body = req.body;
    try{
    if
    (   
    !body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title
    )   
    {
       return res.status(400).json({message : "Error fill all the fields"})
    }   
        
     const result = await User.create ({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.Job_Title
    });
    console.log("result", result);
    return res.status(201).json({message : "successfully created a user", id: result._id });
    } catch(err)

    {
        res.status(500).json({status :"Server Service Error"})
    }
} 
module.exports= {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}