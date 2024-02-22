import './basic.scss'
import view from "../component/res/check-circle.svg"
import view1 from "../component/res/check-circle-G.svg"
import view2 from "../component/res/arrow-narrow-right (1).svg"
function Basic() {
    return(
        <div className='courses'>
            <div className='basic-courses'>
                <button className='basic'>BASIC</button>
                <h2>Courses</h2>
                <p>Per month</p>
                <hr/>
                <div>
                    <div className='check'>
                        <img src={view1} className='check-circle' alt="view"/>
                        <p>Free professional profile</p>
                    </div>
                    <div className='check'>
                        <img src={view1} className='check-circle' alt="view"/>
                        <p>Free professional profile</p>
                    </div>
                    <div className='check'>
                        <img src={view1} className='check-circle' alt="view"/>
                        <p>Free professional profile</p>
                    </div>
                    <div className='check'>
                        <img src={view1} className='check-circle' alt="view"/>
                        <p>Free professional profile</p>
                    </div>
                    
                </div>
                <hr/>
                <div className="cohort">
                    <p><b>$24.00</b> / cohort</p>
                    <button className='start-one'>Start Now <img src={view2} alt="view"/></button>
                </div>
            </div>
            <div className='most-popular'>
                <button className='popular'>MOST POPULAR</button>
                <h2>1-On-1 Mentorship</h2>
                <p>Per month</p>
                <hr/>
                <div className='list-two'>
                    <div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                    </div>
                    <div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                        <div className='check'>
                            <img src={view} alt="view"/>
                            <p>Free professional profile</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="cohort">
                    <p><b>$60.00</b> / cohort</p>
                    <div>
                        <button className='start-two'>Start Now <img src={view2} alt="view"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Basic;