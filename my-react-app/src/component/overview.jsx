import './overview.scss'
import view from "../component/res/alarm-clock-check.svg";
import view1 from "../component/res/building-07.svg";
import view2 from "../component/res/users-03.svg";
function Overview() {
    return(
        <div className='overview'>
            <div>
                <h2>Overview</h2>
                <p className='overview-note'>
                    You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                    You’ll learn directly from product instructors. You’ll learn directly from product instructors.
                    You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                    You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                    You’ll learn directly from product instructors. You’ll learn directly from product instructors. 
                    You’ll learn directly from product instructors.
                </p>  
                <button>See full course content</button>   
            </div>
            <div>
                <div className="live">
                    <div>
                        <img src={view1} class="photo" alt="view-2"/>
                    </div>
                    <div>
                        <h3>Live classes</h3>
                        <p>delivered online</p>
                    </div>
                </div>
                <div className="live">
                    <div>
                        <img src={view} class="photo" alt="view-2"/>
                    </div>
                    <div>
                        <h3>Flexible timing</h3>
                        <p>to work with your schedule</p>
                    </div>
                </div>
                <div className="live">
                    <div>
                        <img src={view2} class="photo" alt="view-2"/>
                    </div>
                    <div>
                        <h3>Small class sizes</h3>
                        <p>with more 1:1 instructor time</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Overview;