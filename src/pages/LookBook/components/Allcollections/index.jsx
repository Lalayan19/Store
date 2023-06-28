import './style.scss'
import mens from '../../../../assets/images/men-collection.jpg'
import womens from '../../../../assets/images/women-collection-1.jpg'
import blazer from '../../../../assets/images/blazers.jpg'
import trends from '../../../../assets/images/testimonial1.jpg'
import winter from '../../../../assets/images/testimonial2.jpg'

export default function AllCollections() {
    return (<>
        <div className='containerCollections'>
            <div className='coll' style={{ backgroundImage:`linear-gradient(to bottom, rgba(255,105,0,0.1), rgba(223, 130, 90, 0.731)) , url(${mens})` }}>
                <h2>WINTER FOR MEN</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                <a className='G-btn' href="">CHECK STYLE</a>
            </div>
            <div className='coll' style={{ backgroundImage:  `linear-gradient(to bottom, rgba(255,105,0,0.1), rgba(223, 130, 90,0.731)) ,url(${womens})` }}>
            <h2>SUMMER FOR WOMEN</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                <a className='G-btn' href="">CHECK STYLE</a>
            </div>
            <div className='coll' style={{ backgroundImage:  `linear-gradient(to bottom, rgba(255,105,0,0.1), rgba(223, 130, 90,0.731)) ,url(${blazer})` }}>
                <h2>BLAZER COLLECTION</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <a className='G-btn' href="">CHECK STYLE</a>
            </div>
            <div className='coll' style={{ backgroundImage:  `linear-gradient(to bottom, rgba(255,105,0,0.1), rgba(223, 130, 90,0.731)) ,url(${trends})` }}>
                <h2>WOMEN'S FASHION TRENDS</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <a className='G-btn' href="">CHECK STYLE</a>
            </div>
            <div className='coll' style={{ backgroundImage:  `linear-gradient(to bottom, rgba(255,105,0,0.1), rgba(223, 130, 90,0.731)) ,url(${winter})` }}>
                <h2>FALL-WINTER FOR WOMEN</h2>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <a className='G-btn' href="">CHECK STYLE</a>
            </div>
        </div>
    </>)
}