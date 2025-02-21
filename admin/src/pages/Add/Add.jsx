import axios from "axios";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Add.css';

const Add = ({url}) => {

  

    const[image,setImage] =useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Freshcream Cake"

    })

    const onChangeHandler =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))


    }

    const onSumbitHandler=async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);

        const response = await axios.post(`${url}/api/cake/add`,formData)

        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:""
        
            })
            setImage(false)
            toast.success(response.data.message)
            

        }
        else{
            toast.error(response.data.message)

        }





    }

    


  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSumbitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>

            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name}  type="text" name='name' placeholder='Type here' />

            </div>

            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description}  name="description" rows="6" placeholder='Write content here' required></textarea>


            </div>

            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangeHandler}  name="category">
                        <option value="Freshcream Cake">Freshcream Cake</option>
                        <option value="Chocolate Cake">Chocolate Cake</option>
                        <option value="Cup Cake">Cup Cake</option>
                        <option value="Fondant Cake">Fondant Cake</option>
                        <option value="Hampers">Hampers</option>
                        <option value="Tier Cake">Tier Cake</option>
                        <option value="Number Cake">Number Cake</option>
                        <option value="Desserts">Desserts</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>

                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>



        </form>


        


    </div>
  )
}

export default Add