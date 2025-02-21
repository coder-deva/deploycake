import fs from "fs";
import cakeModel from "../models/cakeModel.js";


// add cake item
const addCake = async (req, res) => {

  let image_filename = `${req.file.filename}`;

  const cake = new cakeModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  })
  try {
    await cake.save();
    res.json({ success: true, message: "Cake Added" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error" })
  }
};

//all cake list

const listCake=async(req,res)=>{
  try {
    const cake = await cakeModel.find({});
    res.json({success:true,data:cake})
  }catch(error){
    console.log(error)
    res.json({success:false,message:"Error"})

  }

}

//remove cake item

const removeCake=async (req,res)=>{
  try{
    const cake = await cakeModel.findById(req.body.id);
    fs.unlink(`uploads/${cake.image}`,()=>{})

    await cakeModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Cake Removed"})
  }
  catch(error){
    
    console.log(error);
    res.json({success:false,message:"Error"});

  }

};

export { addCake, listCake, removeCake };

