"use client"
// pages/cards/[id].js
import React, { useState } from 'react';
import homeData  from "../../components/homeData";

export async function generateStaticParams() {
    return homeData.map((product) => ({
        id: product.id.toString(),
    }));
}

function getProducts() {
    // console.log("object productsData", productsData);
    return homeData;
}
const CardDetail = ({ params }) => {
    const card = getProducts(params.id);
    console.log("params card", card);
    // console.log("params", params);
    // const cardId = parseInt(params.id);
    // const cardData = cardArr.find((card) => card.id === cardId);
    // console.log("params card", card);
    
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Card Details By Id: {params.id}</h2>
            { card!==null && card.map((item) => (
                <div key={item.id} className='card text-center'>
                    <h3>{item.title}</h3>
                    {
                        item.content.map((content)=> {
                            return (
                                <p key={content.id}>{content.desc}</p>
                            )
                        })
                    }
                </div>
            ))}
        </div>
    );
};


export default CardDetail;


// // pages/cards/[id].js
// import React from 'react';
// // import { homeData } from '../../path-to-your-data-source'; // Update the path accordingly
// import { homeData } from "../../components/homeData";


// const CardDetail = ({ card }) => {
//     console.log("card", card);


//     return (
//         <div>
//             {/* <h2>{card.title}</h2>
//       {card.content.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.desc}</p>
//         </div>
//       ))} */}
//         </div>
//     );
// };

// export async function getStaticPaths() {
//     const paths = homeData.map((card) => ({
//         params: { id: card.id.toString() },
//     }));
//     console.log("paths", paths);
//     return {
//         paths,
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }) {
//     const cardId = parseInt(params.id);
//     const card = homeData.find((card) => card.id === cardId);

//     return {
//         props: {
//             card,
//         },
//     };
// }

// export default CardDetail;
