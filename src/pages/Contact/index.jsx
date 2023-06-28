import Delivery from "../../platform/global/Delivery";
import Girl from "../../platform/global/Girl";
import Featured from "./Featured";
import Questions from "./Questions";
import ContactBanner from "./banner4";

export default function Contact() {
    return(<>
           <ContactBanner /> 
           <Questions />
           <Girl />
           <Featured />
           <Delivery />
    </>)
}