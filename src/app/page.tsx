import Header from "./component/Header-section/Header/header"
import EMPOWER from "./component/Header-section/Empoweyourfuture/empoweyourfuture"
import ExploreOurComprehensive from "./component/Header-section/Explore Our Comprehensive/Explore Our Comprehensive"
import VisionaryLeader from "./component/Header-section/Visionary Leader/Visionary Leader"
import StandOutinLearning from "./component/Header-section/StandOutinLearning/StandOutinLearning"
import ManagementTeam from "./component/Header-section/ManagementTeam/ManagementTeam"
import TrainerTeam from "./component/Header-section/Trainer Team/TrainerTeam"
import Learning from "./component/Header-section/Learning/Learning"
import Footer from "./component/footer/footer"
export default function page() {
  return (
    <>
   <Header />
   <EMPOWER />
   <ExploreOurComprehensive />
   <VisionaryLeader />
  <StandOutinLearning />
  <ManagementTeam />
  <TrainerTeam />
  <Learning />
  <Footer />
   
    </>
  )
}
