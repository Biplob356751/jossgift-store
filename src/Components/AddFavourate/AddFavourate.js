import React, { useContext } from 'react';
import { CartContext, FavContext } from '../../App';
import RelatedProduct from '../RelatedProduct/RelatedProduct';
import './AddFavourate.css';

const AddFavourate = () => {
    const [addFavourate, setAddFavourate] = useContext(FavContext);


    //addCart 
    const [addCart, setAddCart] = useContext(CartContext);
    const handleAddFavCart = (fav) => {
        const newCart = [...addCart, fav]
        setAddCart(newCart);
    };

    //remove favourate items
    const handleRemoveFavProduct = (key) => {
        const newCard = addFavourate.filter(pd => pd.key !== key);
        setAddFavourate(newCard);
    }

    return (
        <div className="add_favourate_section">
            <div className="container_fluid">
                <h3>Favourate Item: {addFavourate.length}</h3>
                <div className="favourate_content">
                    {
                        addFavourate.map(fav =>
                            <div className="favourate" key={fav.key}>
                                <img src={fav.image} alt="" />
                                <h5>{fav.productname}</h5>
                                <div>
                                    <del>{fav.price}$</del>
                                    <p>{fav.price - fav.discount / 100 * fav.price}$</p>
                                </div>
                                <div className="remove_favourate_item_icon">
                                    <i onClick={() => handleRemoveFavProduct(fav.key)} className="fa fa-times"></i>
                                </div>
                                <div className="fav_ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>({fav.ratings})</span>
                                </div>
                                <div className="fav_btn_btn">
                                    <button onClick={() => handleAddFavCart(fav)}>Cart</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <RelatedProduct></RelatedProduct>
            </div>
        </div>
    );
};

export default AddFavourate;