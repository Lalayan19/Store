import Delivery from "../../platform/global/Delivery";
import Girl from "../../platform/global/Girl";
import Banner from "./components/Banner";
import Citate from "./components/Citate";
import Collection from "./components/Collection";
import Products from "./components/Products/inex";


export default function Home() {
    return <div>
        <Banner/>
        <Collection />
        <Citate />
        <Girl />
        <Products />
        <Delivery />
    </div>
}