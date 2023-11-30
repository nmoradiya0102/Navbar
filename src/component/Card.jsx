
import React from 'react'

const Card = (props) => {
    const { productname, description , price , status} = props;
    return (
        <div>
            <div class="card" style={{width: '20rem', marginLeft: '10px', margin: '0 auto'}}>
                <div class="card-body">
                    <h5 class="card-title">{productname}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">price : {price}</h6>
                    <p class="card-text">Food description : {description}</p>
                    <p class='card-text'>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;



// import React from "react";

// function Card (props){
//     const { name , image , price , status } = props;

//     return (
//         <div className="row">
//             <div className="card" style={{width : '20rem'}}>
//                 <img className="card-img-top" src={image} alt="Card image cap" />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">{price}</p>
//                     <p className="card-text">{status}</p>
//                     <a href="#" className="btn btn-primary">Order</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card;
