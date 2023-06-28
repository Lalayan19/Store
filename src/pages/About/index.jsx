import Delivery from "../../platform/global/Delivery";
import Girl from "../../platform/global/Girl";
import BeforeGirl from "./components/BeforeGirl";
import Models from "./components/Models";
import BannerAbout from "./components/banner3";


export default function About() {
    return( <div>
        <BannerAbout />
        <BeforeGirl/>
        <Girl />
        <Models/>
        <Delivery />
    </div>)
}