import './work.scss'
import view from "../res/Subtract (1).png"
import view1 from "../res/Image (1).png"
function Work(){
    return(
        <div>
            <div>
                <h1 className='workHeading'>Work with us</h1>
                <p className='workWithUs'>
                    We’re a full-service design and development agency who specialise <br/>in 
                    simple, useful and beautiful solutions.
                </p>
                <button className='viewPosition'>View open positions</button>
            </div>
            <img src={view} className='learningImage' alt="view-1"/>
            <div>
                <h2>We care about you</h2>
                <p className='workNote'>
                    Our guiding principles shape the team's culture, identity, and impact on 
                    its members and broader community. They serve as a <br/>framework for guiding 
                    the actions, decisions, and behaviors of the team, promoting alignment, 
                    cohesion, and effectiveness <br/>in achieving its mission and objectives.
                </p>
            </div>
            <img src={view1} className='learningImage' alt="view-1"/>
        </div>
    )
}
export default Work;