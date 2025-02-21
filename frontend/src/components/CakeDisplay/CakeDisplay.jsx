import './CakeDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import CakeItem from '../CakeItem/CakeItem';
import { useContext } from 'react';

const CakeDisplay = ({ category }) => {
    const { cake_list } = useContext(StoreContext);

    return (
        <div className='cake-display' id='cake-display'>
            <h2>Top dishes near you</h2>
            <div className="cake-display-list">
                {cake_list.map((item, index) => {
                    // Log for debugging, can be removed later
                    console.log(category, item.category);
                    
                    // Filtering based on the selected category
                    if (category === "All" || category === item.category) {
                        return (
                            <CakeItem
                                key={item._id} // Prefer unique id over index for key
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null; // Ensure nothing is returned if conditions aren't met
                })}
            </div>
        </div>
    );
}

export default CakeDisplay;
