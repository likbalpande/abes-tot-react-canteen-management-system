import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
