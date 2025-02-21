
import './CakeItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react';

const CakeItem = ({id,name,price,description,image}) => {

  
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  
  return (
    <div className='cake-item'>
      <div className="cake-item-img-container">
        <img className='cake-item-image' src={url+"images/"+image} alt="" />
        {
          !cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div className='cake-item-counter'>
<img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
<p>{cartItems[id]}</p>
<img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

          </div>
        }
      </div>

      <div className="cake-item-info">
        <div className="cake-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="cake-item-desc">{description}</p>
        <p className="cake-item-price">${price}</p>
      </div>


    </div>
  )
}

export default CakeItem