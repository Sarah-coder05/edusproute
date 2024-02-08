import "./cohort.scss";
import arrow from '../component/res/arrow.svg';

function Cohort(){
    return(
        <div className="cohort-container">
            <h1 className="title">Join our March 2024 Cohorts</h1>
            <h2>Classes start March 4, 2024</h2>
            <p>Join the over 100+ learners on Edusproute and start a career in Tech.</p>
            <button>Apply now <img className="arrow" src={arrow} alt="" /></button>
        </div>
    );
}

export default Cohort;