import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import NotFound from "./views/errors/NotFound";
import Cart from "./views/Cart";

import './scss/app.scss'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
