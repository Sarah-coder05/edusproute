import Cohort from "./component/cohort";
import Community from "./component/community";
import Feedback from "./component/feedback";
import Overview from "./component/overview";
import Payment from "./component/payment";

function App() {
  return (
   <>
      <Overview />
      <Feedback />
      <Community />
      <Payment />
      <Cohort/>
   </>
  );
}
export default App;
