const ProductForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);
        const values = e.target;
        const title = values[0].value;
        const company = values[1].value;

        console.log(title, company);
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
