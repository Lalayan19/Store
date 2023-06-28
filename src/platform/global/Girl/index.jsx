import './style.scss'
import girl from '../../../assets/images/smiling-girl.png'
export default function Girl() {
        return (<>
            <div className='girl'>
                <div>
                    <h2>25% OFF</h2>
                    <h4>On All Orders Above $299!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt labore dolore.</p>
                    <a className='G-btn' href="">GRAB THIS OFFER</a>
                </div>
                <img src={girl} alt="" />
            </div>
        </>)

}