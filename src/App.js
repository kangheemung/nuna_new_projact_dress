import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './componets/HomePage';
import LoginPage from './componets/LoginPage';
import ProductDetailPage from './componets/ProductDetailPage';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './componets/Navbar';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function App() {
    //로직
    //1.페이지,로그인,상품상세페이지
    //1-1navigationbar
    //2.전체 상품페이지에서는 전체 상품을 볼수 있다.
    //3.로그인 버튼을 누르면 로그인 페이지가 나온다.
    //3.상품데테일을 눌렀으나 로그인이 안되있을 경우에는 로그인페이지가 먼저 나온다.]
    //4.로그인이 되어있을경우에는 상품 디테일 페이지를 볼수 있다.
    //5.로그인을 하면 로그아웃이 보이고 로그아웃하면로그인이보인다
    //6.로그인을 하면 로그아웃이 보이고 로그인이 보인댜
    // 7.상품을 검색 할 수있다
    //로그이웃 되지
    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
