import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ROUTES from "./platform/constants/routes";
import About from "./pages/About";
import Shop from "./pages/Shop";
import LookBook from "./pages/LookBook";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Basket from "./pages/Basket";
import { BasketProvider } from "./platform/context/BasketContext";

function App() {
  return (
    <Router>
      <BasketProvider>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SHOP} element={<Shop />} />
          <Route path={ROUTES.LOOKBOOK} element={<LookBook />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.DETAILS} element={<Details />} />
          <Route path={ROUTES.BASKET} element={<Basket />} />
        </Routes>
        <Footer />
      </BasketProvider>
    </Router>
  );
}

export default App;
