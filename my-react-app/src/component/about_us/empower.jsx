import './empower.scss'
import view from "../res/certificate-02.svg"
import view1 from "../res/Featured icon.svg"
import view2 from "../res/atom-02.svg"
function Empower(){
    return(
        <div>
            <h2>At Edusproute we empower our</h2>
            <div className='empower'>
                <div>
                    <img src={view} className='learners' alt="view-1"/>
                    <h4>Learners to</h4>
                    <p className='empowerNote'>
                        Demonstrate curiosity by going where no one else has gone before and being 
                        passionate about your growth and the growth of your peers in the community.
                    </p>
                </div>
                <div>
                    <img src={view1} alt="view-1"/>
                    <h4>Mentors to</h4>
                    <p className='empowerNote'>
                        Serve as a trusted guides and advisor,s offering personalized support to help 
                        students overcome challenges, maximize their potential, and achieve their academic 
                        and professional goals.
                    </p>
                </div>
                <div>
                    <img src={view2} className='learners' alt="view-1"/>
                    <h4>Employees to</h4>
                    <p className='empowerNote'>
                        Improve organizational performance by fostering a positive work environment, boosting 
                        morale, providing work resources and promoting a culture of collaboration and innovation, 
                        and flexibility.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Empower;