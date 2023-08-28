// import productsData from '../../../components/homeData';

// export async function generateStaticParams() {
//     return productsData.map((product) => ({
//         id: product.id.toString(),
//     }));
// }

// function getProducts(id) {
//     // console.log("object productsData", productsData);
//     return productsData.id === id;
// }

// const ProductsDetails = ({ params }) => {
//     const product = getProducts();
//     // console.log("product", product);
//     const id = params.id; // Assuming you're passing id as a prop
//     console.log("product id", id);
//     // const productById = product.find((product) => product.id === id);
//     // console.log("params product details by Id", productById);


//     if (!product) {
//         return <div>Product not found.</div>;
//     }


//     return (
//         <div className="container py-5">
//             <h1>Products Details {id} </h1>
//             {/* {
//                 cardData.map((item) => {
//                     return (
//                         <div key={item.id} className="py-3">
//                             <div key={item.id} className="card ">
//                                 <h1>{item.title}</h1>
//                                 {item.content.map((content) => {
//                                     return (
//                                         <p>{content.desc}</p>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     )
//                 })
//             } */}
//         </div>
//     );
// };

// export default ProductsDetails;

// Mock Data json
"use client"
import productsData from '../../../../public/MockHomeData.json';

export async function generateStaticParams() {
    return productsData.map((product) => ({
        id: product.id.toString(),
    }));
}

function getProducts() {
    return productsData;
}
const ProductsDetails = ({ params }) => {
    // const productId = getProducts(params.id);
    const productId = params.id; // Assuming you're passing id as a prop
    console.log("object productsData", productId);
    // Find the product with the matching id
    const product = getProducts().find((product) => product.id ===  parseInt(productId));

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="container py-5">
            <h1>Product Details {product.id}</h1>
            <div className="py-3">
                <div className="card">
                    <h2>{product.title}</h2>
                    {product.content.map((content, index) => (
                        <p key={index}>{content.desc}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;

// // Mock Data json
// "use client"
// import productsData from '../../../../public/MockHomeData.json';

// export async function generateStaticParams() {
//     return productsData.map((product) => ({
//         id: product.id.toString(),
//     }));
// }

// function getProducts() {
//     // console.log("object productsData", productsData);
//     return productsData;
// }

// const ProductsDetails = ({ params }) => {
//     // const id = params.id;
//     // console.log("id: ", id);
//     const singleProduct = getProducts(params.id);
//     console.log("singleProduct", singleProduct);
//     const productById = singleProduct.find((product) => product.id === props.id);
//     console.log("params product details by Id", productById);

//     return (
//         <div className="container py-5">
//             {/* <h1>Products Details {productById?.id}</h1> */}
//             <div className="py-3">
//                 <div className="card ">
//                     {/* {productById?.content.map((content) => {
//                         return (
//                             <>
//                                 <h1>{content.id}</h1>
//                                 <h1>{content.title}</h1>
//                                 <p>{content.desc}</p>
//                             </>
//                         )
//                     })} */}

//                 </div>
//             </div>
//             {/* {
//                 product.map((item) => {
//                     return (
//                         <div key={item.id} className="py-3">
//                             <div key={item.id} className="card ">
//                                 <h1>{item.title}</h1>
//                                 {item.content.map((content) => {
//                                     return (
//                                         <p>{content.desc}</p>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     )
//                 })
//             } */}
//         </div>
//     );
// };

// export default ProductsDetails;