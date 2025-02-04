import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import ProductForm from "../components/productForm";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const resp = await fetch("http://localhost:1401/api/v1/products");
        const data = await resp.json();
        console.log(data);
        setProducts(data.data.products);
    };

    useEffect(() => {
        getData();
    }, []);
    console.log(products);

    return (
        <div>
            <Navbar />
            <ProductForm></ProductForm>
            <h1>Products Page</h1>
            <div className="card-container">
                {products.map((elem) => {
                    return (
                        <div key={elem._id} className="card">
                            <h4>{elem.title}</h4>
                            <h5>{elem.company}</h5>
                            <h4>{elem.price}</h4>
                            <p>{elem.discount}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductsPage;
