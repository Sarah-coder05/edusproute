import "./payment.scss";
import view1 from "../res/Image.png";
function Payment() {
    return(
        <div class="payment">
            <div>
                <h1>Tuition payment options</h1>
                <p className="notes">We have flexible options to get you on your way</p>
                <ul>
                    <li> Interest free installment plans</li>
                    <li> Interest free installment plans</li>
                    <li>
                        Enroll three people or more and get a group discount.<br/>
                        <a href="#learn more" class="learn">Learn more</a>
                    </li>
                </ul>
                <div className="buttons">
                    <button className="enrolnow">Enrol now</button>
                    <button className="schedule">Schedule a call</button>
                </div>
            </div>
            <img src={view1} alt="view-1"/>
        </div>
    )
}
export default Payment;