
// "use client"
// import { useRouter } from 'next/navigation';
// import productsData from '../../components/homeData';
// import Link from 'next/link';

// function getProducts() {
//     console.log("object productsData", productsData);
//     return productsData;
// }
// export default function Products() {
//     const products = getProducts();
//     console.log("products", products);
//     const router = useRouter();

//     function handleClick(id) {
//         router.push(`/products/${id}`);
//         console.log("clicked");
//     }

//     return (
//         <div className="container">
//             {
//                 products.map((product) => {
//                     return (
//                         <div key={product.id} className="card py-3">
//                             <button style={{ cursor: "pointer" }} onClick={() =>  router.push(`/products/${product.id}`)}><h1>{product.title}</h1></button>
//                             {/* <Link style={{ cursor: "pointer" }} href={`/products/${product.id}`}><h1>{product.title} Link</h1></Link> */}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };

// With Mock Data json
"use client"
import { useRouter } from 'next/navigation';
import productsData from '../../../public/MockHomeData.json';

function getProducts() {
    return productsData;
}
export default function Products() {
    const products = getProducts();
    console.log("products", products);
    const router = useRouter();

    function handleClick(id) {
        router.push(`/products/${id}`);
        console.log("clicked");
    }

    return (
        <div className="container">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="card py-3">
                            <button style={{ cursor: "pointer" }} onClick={() =>  router.push(`/products/${product.id}`)}><h1>{product.title}</h1></button>
                        </div>
                    )
                })
            }
        </div>
    );
};

