import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Welcome to our cake shop, where we offer a delightful array of treats to satisfy your sweetest cravings. Our mission is to elevate your dessert experience, one delicious slice at a time. Indulge in our diverse menu of cakes, crafted with love and the finest ingredients just for you!</p>
<div className="explore-menu-list">
    {
        menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""}  src={item.menu_image } alt="" />
                    <p>{item.menu_name}</p>
            </div>
            )
        })
    }
</div>
<hr />
    </div>
  )
}

export default ExploreMenu