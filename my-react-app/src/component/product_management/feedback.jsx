import './feedback.scss'
import view from "../res/user-square.svg";
import view1 from "../res/hourglass-01.svg";
import view2 from "../res/building-07.svg";
function Feedback() {
    return(
        <div>
            <h1>
                Learn Product Management and land your dream job
            </h1>
            <div className="feedback">
                <div className='feedback-one'>
                    <img src={view} className='product' alt="view-2"/>
                    <p>
                        <b className='subtopic'>Top Edusproute instructors</b><br/>
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors.
                    </p>
                </div>
                <div className='feedback-one'>
                    <img src={view1} className='product' alt="view-2"/>
                    <p>
                        <b className='subtopic'>Instructor time tailored to you</b><br/>
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors.
                    </p>
                </div>
                <div className='feedback-one'>
                    <img src={view2} className='product' alt="view-2"/>
                    <p>
                        <b className='subtopic'>Industry wide recognition</b><br/>
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                        You’ll learn directly from product instructors. You’ll learn directly from product instructors.
                    </p>
                </div>
            </div>
            <button>Enrol now</button>
        </div>
    )
}
export default Feedback;