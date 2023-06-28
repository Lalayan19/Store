import "./style.scss"


export default function Collection() {
    return (<>
            <div className="collection G-padding">
                <div className="summerColl">
                    <h3>SUMMER COLLECTION</h3>
                </div>
                <div className="otherColls">
                    <div className="mensColl"><h3>MEN'S COLLECTION</h3></div>
                    <div className="womensColl"><h3>WOMEN'S COLLECTION</h3></div>
                    <div className="freeShip">
                        <h3>FREE SHIPPING</h3>
                        <h4>On All Orders Above $299</h4>
                        <a className="G-btn" href="">VIEW COLLECTIONS</a>
                    </div>
                </div>
            </div>
    </>)
}