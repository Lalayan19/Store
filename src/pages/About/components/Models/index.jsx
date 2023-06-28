import './style.scss'
import Aboutimg1 from "../../../../assets/images/testimonial1.jpg"
import Aboutimg2 from "../../../../assets/images/testimonial2.jpg"
import Aboutimg3 from "../../../../assets/images/testimonial3.jpg"
import Aboutimg4 from "../../../../assets/images/testimonial4.jpg"
import Aboutimg5 from "../../../../assets/images/testimonial5.jpg"
import Aboutimg6 from "../../../../assets/images/testimonial6.jpg"


export default function Models() {
    return (<>
    <div className="mdoelsmain">
        <div className='loveUs'>
        <h2>THEY LOVE US !!!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
    <div className='models'>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg1})` }}>
                <div>
                    <h5>Stella Jones</h5>
                    <p>Super Model</p>
                </div>

            </div>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg2})` }}>
                <h5>Carlos Hughes</h5>
                <p>Student</p>
            </div>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg3})` }}>
                <div>
                    <h5>Chloe Newts</h5>
                    <p>Student</p>
                </div>
            </div>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg4})` }}>
                <div>
                    <h5>Mark Adams</h5>
                    <p>Entrepreneur</p>
                </div>
            </div>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg5})` }}>
                <div>
                    <h5>Brianna Stark</h5>
                    <p>Fasion Model</p>
                </div>
            </div>
            <div className='model' style={{ backgroundImage: `url(${Aboutimg6})` }}>
                <div>
                    <h5>James Hobbs</h5>
                    <p>Businessman</p>
                </div>
            </div>
        </div>
    </div>
        
    </>)
}