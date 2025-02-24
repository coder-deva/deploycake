import './CakeItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const CakeItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  const itemCount = cartItems && cartItems[id] ? cartItems[id] : 0; // Safe access

  return (
    <div className='cake-item'>
      <div className="cake-item-img-container">
        <img className='cake-item-image' src={url + "images/" + image} alt={name} />
        {
          itemCount === 0
            ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
            : <div className='cake-item-counter'>
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
                <p>{itemCount}</p>
                <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Increase quantity" />
              </div>
        }
      </div>

      <div className="cake-item-info">
        <div className="cake-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="cake-item-desc">{description}</p>
        <p className="cake-item-price">${price}</p>
      </div>
    </div>
  );
};

export default CakeItem;
