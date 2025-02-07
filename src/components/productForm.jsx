const ProductForm = () => {
    const postProduct = async (dataObj) => {
        fetch("http://localhost:1401/api/v1/products", {
            method: "POST",
            body: JSON.stringify(dataObj),
            headers: {
                "content-type": "application/json",
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = e.target;
        const title = values[0].value;
        const company = values[1].value;
        const quantity = values[2].value;
        const price = values[3].value;
        const discount = values[4].value;
        const thumbnail = values[5].value;

        const dataObj = {
            title: title,
            company: company || undefined,
            quantity: quantity || undefined,
            price: price,
            discount: discount || undefined,
            thumbnail: thumbnail || undefined,
        };

        console.log(dataObj);

        postProduct(dataObj);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title"></input>
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" name="company"></input>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity"></input>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price"></input>
                </div>
                <div>
                    <label>Discount</label>
                    <input type="number" name="discount"></input>
                </div>
                <div>
                    <label>Thumbnail</label>
                    <input type="text" name="discount"></input>
                </div>
                <button>Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
