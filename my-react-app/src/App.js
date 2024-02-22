import Basic from "./component/basic";
import Certification from "./component/certification";
import ChooseEdusproute from "./component/chooseEdusproute";
import Cohort from "./component/cohort";
import Community from "./component/community";
import DiverseTeam from "./component/diverseTeam";
import Empower from "./component/empower";
import Feedback from "./component/feedback";
import Future from "./component/futureOfLearning";
import Overview from "./component/overview";
import Payment from "./component/payment";
import ProductDream from "./component/productDream.";
import Work from "./component/work";

function App() {
  return (
   <>
      <Overview />
      <Feedback />
      <Community />
      <Payment />
      <Cohort/>
      <Certification />
      <ChooseEdusproute />
      <ProductDream />
      <Basic />
      <Future />
      <Empower />
      <DiverseTeam />
      <Work />
   </>
  );
}
export default App;
