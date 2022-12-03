import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";

// import Sidebar from "../src/Components/Sidebar";
// import Dashboard from "../src/pages/Dashboard";
// import PlayerareaAttendence from "./pages/PlayerareaAttendence";
// import PlayerareaPlayers from "./pages/PlayerareaPlayers";
// import PlayerareaSkill from "./pages/PlayerareaSkill";
// import AddSkill from "./pages/AddSkill";
// import Tariningdrills from "./pages/Tariningdrills";
// import AllDrills from "./pages/AllDrills";
// import UploadingDrill from "./pages/UploadingDrill";
// import Playerprofile from "./pages/Playerprofile";
// import Timline from "./pages/Timline";
// import Groups from "./pages/Groups";
// import AddGroups from "./pages/AddGroups";
// import Chat from "./pages/Chat";
// import NewsFeed from "./pages/NewsFeed";
// import Addskillpage2 from "./pages/Addskillpage2";
// import Selectedgroup from "./Components/Selectedgroup";

// import Categories from "./pages/Categories";
// const SideBarLayout = () => {
//   return (
//     <div className="flex ">
//       <Sidebar />
//       <Outlet />
//     </div>
//   );
// };

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route element={<SideBarLayout />}>
//           <Route exact path="/" element={<Dashboard />} />
//           <Route exact path="/dashboard" element={<Dashboard />} />
//           <Route exact path="/playerarea" element={<PlayerareaAttendence/>} />
//           <Route
//             exact
//             path="/playerarea/attendence"
//             element={<PlayerareaAttendence />}
//           />
//           <Route
//             exact
//             path="/playerarea/players"
//             element={<PlayerareaPlayers />}
//           />
//           <Route exact path="/playerarea/skill" element={<AddSkill />} />
//           <Route exct path="/playerarea/addskill" element={<PlayerareaSkill />} />
//           <Route exact path="/traningdrill" element={<Tariningdrills />} />
//           <Route exact path="/traningdrill/alldrills" element={<AllDrills />} />
//           <Route
//             exact
//             path="/traningdrill/uploaddrills"
//             element={<UploadingDrill />}
//           />

//           <Route
//             exact
//             path="/playerprofile/profile"
//             element={<Playerprofile />}
//           />
//           <Route exact path="/playerprofile/timeline" element={<Timline />} />
//           <Route exact path="/newsfeed" element={<NewsFeed />} />
//           <Route exact path="/newsfeed/selectedGroup" element={<Selectedgroup />} />
//           <Route exact path="/selectedGroup" element={<Selectedgroup />} />
//           <Route exact path="/newsfeed/groups" element={<Groups />} />
//           <Route exact path="/newsfeed/addgroups" element={<AddGroups />} />
//           <Route exact path="/chat" element={<Chat />} />
//           <Route exact path="/addskillpage2" element={<Addskillpage2 />} />
//           <Route exact path="/categories" element={<Categories />} />
       
//         </Route>
//       </Routes>
//     </>
//   );
// }

import Sidebar from "../src/admin/AdminSidebar";
import Dashboard from "./admin/1-Admindashbord";
import UserArea from "./admin/2-UserArea";
import CreateProfile from "./admin/3-CreateProfile"
import Playerprofile from "./admin/4-PlayersProfile";
import PlayerTimeline from "./admin/5-playerTimeline"
import NewsFeed from "./admin/6-newsfeed"
import Selectedgroup from "./admin/7-SelectedGroup"
import Groups from "./admin/8-Groups"
import AddGroups from "./admin/9-CreateNewGroup"
import Chats from "./admin/10-chats"
import ClubHub from "./admin/11-clubhub"
import ShopDashboard from "./admin/Shop/dashboard";
import Orders from "./admin/Shop/Orders";
import Items from "./admin/Shop/Items"; 
import AddItems from "./admin/Shop/addItems";

const SideBarLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  return (

    <Routes>
      <Route element={<SideBarLayout />}>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
       <Route exact path="/userarea" element={<UserArea/>} />
       <Route exact path="/userarea/createProfile" element={<CreateProfile/>} />
       <Route exact path="/userarea/playerprofile/profile" element={<Playerprofile/>} />
       <Route exact path="/userarea/playerprofile/timeline" element={<PlayerTimeline/>} />
       <Route exact path="/newsfeed" element={<NewsFeed/>} />
       <Route exact path="/selectgroup" element={<Selectedgroup/>} />
       <Route exact path="/selectgroup/groups" element={<Groups/>} />
       <Route exact path="/selectgroup/addgroups" element={<AddGroups/>} />
       <Route exact path="/chat" element={<Chats/>} />
       <Route exact path="/clubhub" element={<ClubHub/>} />
       <Route exact path="ShopDashboard" element={<ShopDashboard />} />
      <Route exact path="//shopDashboard" element={<ShopDashboard />} />
       <Route exact path="/allItems" element={<Items/>} />
       <Route exact path="/allItems/addItem" element={<AddItems/>} />
       <Route exact path="/allOrders" element={<Orders/>} />
      </Route>
    </Routes> 
    
     
    
  );
}

export default App;
