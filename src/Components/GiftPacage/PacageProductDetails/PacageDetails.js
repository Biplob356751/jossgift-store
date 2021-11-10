import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PacageDetails.css';
import PacageData from '../PacageData/PacageData.json'
 
const PacageDetails = () => {
    document.title = "JossGift || Pacage Product Details"

    const {key} = useParams();
    const [pacageDetails, setPacageDetails] = useState([]);
    useEffect(() =>{
        for(let i=0;i<PacageData.length;i++){
            for (let j = 0; j < PacageData[i].pacageItem.length; j++) {
                if(PacageData[i].pacageItem[j].key === key){
                    setPacageDetails(PacageData[i].pacageItem[j])
                }
            }
        }
        
    },[key]);


    return (
        <div className="pacage_product_details">
            <div className="container_fluid">
                <div className="pacage_details">
                    <div className="pacage_details_content">
                        <img src={pacageDetails.img} alt="" />
                    </div>
                    <div className="pacage_details_content_container">
                        <h3>Product Name: <span>{pacageDetails.name}</span></h3>
                        <h4>Product Price: <span>{pacageDetails.price - pacageDetails.discount/100*pacageDetails.price}$</span></h4>
                        <div className="pacage_details_ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>({pacageDetails.rating})</span>
                        </div>
                        <p>{pacageDetails.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PacageDetails;