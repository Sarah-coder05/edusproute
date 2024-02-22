import './futureOfLearning.scss'
import view from "../component/res/Subtract.png"
import view1 from "../component/res/arrow-narrow-down-right.svg"
import view2 from "../component/res/Avatar.jpg"
function Future(){
    return(
        <div>
            <div>
                <h2 className='building'>Building the future of learning</h2>
                <p>
                    We’re a full-service design and development agency who specialise <br/>
                    in simple, useful and beautiful solutions.
                </p>
            </div>
            <img src={view} className='learningImage' alt="view-1"/>
            <div className='futureLearning'>
                <div className='story'>
                    <h3>Our Story</h3>
                    <img src={view1} className='narrowArrow' alt="view-1"/>
                </div>
                <div>
                    <h3>
                        Our founder started Edusproute because he wanted to provide everyone around the 
                        world with access to quality online learning content.
                    </h3>
                    <p className='learningNote'>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a 
                        free, personalized 30-minute onboarding call to get you up and running as soon as 
                        possible.
                    </p>
                    <p className='learningNote'>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you 
                        with a free, personalized 30-minute onboarding call to get you up and running as 
                        soon as possible.
                    </p>
                    <div className='avatar'>
                        <img src={view2} alt="view-1"/>
                        <div>
                            <h4 className='ceo'>John Doe</h4>
                            <p className='founder'>Founder & CEO</p>
                        </div>
                    </div>
                    <p className='learningNote'>
                        “Yes, you can try us for free for 30 days. If you want, we’ll provide you with a 
                        free, personalized 30-minute onboarding call to get you up and running as soon as 
                        possible.”
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Future;