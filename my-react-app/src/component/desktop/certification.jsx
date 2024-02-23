import './certification.scss'
import view from "../res/Group.svg"
import view1 from "../res/Group (1).svg"
import view2 from "../res/Group (2).svg"
import view3 from "../res/Group (3).svg"
function Certification() {
    return(
        <div className='certification'>
            <div className='certify'>
                <img src={view} className='cert-image' alt="view-1"/>
                <h3>Product Management</h3>
                <ul className='certify-list'>
                    <li >Get your first product management job</li>
                    <li>Enhance leadership skills</li>
                    <li>Own Product strategy</li>
                </ul>
                <button className='certify-learn'>Learn more</button>
            </div>
            <div className='certify'>
                <img src={view1} className='cert-image' alt="view-1"/>
                <h3>Frontend Development</h3>
                <ul className='certify-list'>
                    <li>Become a Frontend Developer</li>
                    <li>Build the skills you need</li>
                    <li>Get hired and succeed</li>
                </ul>
                <button className='certify-learn'>Learn more</button>
            </div>
            <div className='certify'>
                <img src={view2} className='cert-image' alt="view-1"/>
                <h3>Backend Development</h3>
                <ul className='certify-list'>
                    <li>Become a Backend Developer</li>
                    <li>Build the skills you need</li>
                    <li>Get hired and succeed</li>
                </ul>
                <button className='certify-learn'>Learn more</button>
            </div>
            <div className='certify'>
                <img src={view3} className='cert-image' alt="view-1"/>
                <h3>Product Design</h3>
                <ul className='certify-list'>
                    <li>Land your first Product Design role</li>
                    <li>Build the skills you need</li>
                    <li>Get hired and succeed</li>
                </ul>
                <button className='certify-learn'>Learn more</button>
            </div>
        </div>
    )
}
export default Certification;