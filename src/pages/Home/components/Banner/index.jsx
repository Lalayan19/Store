import './style.scss'

export default function Banner() {
    return (<>
        <div className='banner G-relative'>
            <div className='G-flex G-flex-column'>
                <p>Summer Collection</p>
                <h1>
                    INTRODUCING NEW ARRIVALS
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <a className='G-btn' href="#collections">VIEW COLLECTIONS</a>
            </div>

        </div>
    </>)
}