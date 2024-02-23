import Basic from "./component/pricing_page/basic";
import Certification from "./component/desktop/certification";
import ChooseEdusproute from "./component/desktop/chooseEdusproute";
import Cohort from "./component/cohort";
import Community from "./component/desktop/community";
import DiverseTeam from "./component/about_us/diverseTeam";
import Empower from "./component/about_us/empower";
import Feedback from "./component/product_management/feedback";
import Future from "./component/about_us/futureOfLearning";
import Overview from "./component/product_management/overview";
import Payment from "./component/product_management/payment";
import ProductDream from "./component/product_management/productDream."
import Work from "./component/career/work";

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
