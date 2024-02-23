import './diverseTeam.scss'
import view from "../res/Images.png"
import view1 from "../res/Images (1).png"
import view2 from "../res/Images (2).png"
function DiverseTeam(){
    return(
        <div className='team'>
            <div>
                <h1>Meet our diverse team</h1>
                <p className='diverseNote'>
                    Want to work with some of the best global talent and build software used by all<br/> 
                    the companies you know and love? Join the team — we’re hiring!
                </p>
            </div>
            <div className='diverseTeam'>
                <div className='teams'>
                    <img src={view} alt="view-1"/>
                    <img src={view1} alt="view-1"/>
                </div>
                <div>
                    <img src={view2} alt="view-1"/>
                </div>
            </div>
        </div>
    )
}
export default DiverseTeam;