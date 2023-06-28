import Delivery from "../../platform/global/Delivery";
import AllCollections from "./components/Allcollections";
import BannerLook from "./components/Banner2";

export default function LookBook() {
    return (<>
        <BannerLook />
        <AllCollections />
        <Delivery />
    </>)
}