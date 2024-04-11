import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/Student/Authentication/SignIn/SignIn";
import SignUp from "./pages/Student/Authentication/SignUp/SignUp";


// Utils
import ScrollToTop from "./utils/ScrollToTop";

// Fallback Screen
import Fallback from "./components/fallback/Fallback";
import MobileScreen from "./components/mobileScreen/MobileScreen";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Navbar from "./components/navbar/Navbar";
import ForgotPassword from "./pages/Student/Authentication/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Student/Account/Dashboard/Dashbord";
import Student from "./pages/Student/Account/Student/Student";
import Teacher from "./pages/Student/Account/Teacher/Teacher";
import Sidebar from "./components/sidebar/Sidebar";
import Performance from "./pages/Student/Account/Dashboard/Components/Performance/Performance";
import Info from "./pages/Student/Account/Dashboard/Components/Performance/Info/Info";
import SchoolPerformance from "./pages/Student/Account/Dashboard/Components/Performance/SchoolPerformance/SchoolPerformance";
import CalendarFinance from "./pages/Student/Account/Dashboard/Components/Performance/CalendarFinance/CalendarFinance";
import Calendar from "./pages/Student/Account/Dashboard/Components/Performance/CalendarFinance/Calendar/Calendar";
import Finance from "./pages/Student/Account/Dashboard/Components/Performance/CalendarFinance/Finance/Finance";
import StudentIntuition from "./pages/Student/Account/Dashboard/Components/Performance/StudentIntuition/StudentIntuition";
import Profile from "./components/Profile/Profile";
import RecentStudents from "./pages/Student/Account/Dashboard/Components/StudentInfo/RecentStudents/RecentStudents";
import Messages from "./pages/Student/Account/Dashboard/Components/StudentInfo/Messages/Messages";
import StudentInfo from "./pages/Student/Account/Dashboard/Components/StudentInfo/StudentInfo";
import FoodMenu from "./pages/Student/Account/Dashboard/Components/StudentInfo/FoodMenu/FoodMenu";
import StudentList from "./pages/Student/Account/Student/Components/StudentData/StudentList/StudentList";
import Header from "./pages/Student/Account/Student/Components/StudentData/Header/Header";
import StudentData from "./pages/Student/Account/Student/Components/StudentData/StudentData";
import TeachersData from "./pages/Student/Account/Teacher/Components/TeachersData/TeachersData";
import Cards from "./pages/Student/Account/Teacher/Components/TeachersData/Cards/Cards";
import Head from "./pages/Student/Account/Teacher/Components/TeachersData/Head/Head";
import ContactAndMessages from "./pages/Student/Account/User/Components/UserData/ContactAndMessages/ContactAndMessages";
import AdminDetails from "./pages/Student/Account/User/Components/UserData/AdminDetails/AdminDetails";
import UserData from "./pages/Student/Account/User/Components/UserData/UserData";
import User from "./pages/Student/Account/User/User";
import Plan from "./pages/Student/Account/User/Components/Activity/Plan/Plan";
import Activity from "./pages/Student/Account/User/Components/Activity/Activity";
import LatestAct from "./pages/Student/Account/User/Components/Activity/LatestAct/LatestAct";
import ChatBox from "./pages/Student/Account/Chat/Components/ChatBox/ChatBox";
import Chat from "./pages/Student/Account/Chat/Chat";

// Pages
// import { MentorDashboard,MentorProfile } from "./pagesImport/mentorPagesImports";

// Route Data
// const mentorRoutes = [
//   {
//     path: "dashboard",
//     element: <MentorDashboard />,
//   },
//   {
//     path: "profile",
//     element: <MentorProfile />,
//   },
// ];

function App() {
  
  return (
    <>
      <ScrollToTop>
        {window.innerWidth > 1000 ? (
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/navbar" element={<Navbar/> } />
            {/* <Route path="/signin" element={<SignIn/>} /> */}
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/forgotPassword" element={<ForgotPassword/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/teacher" element={<Teacher/>} />
            <Route path="/Sidebar" element={<Sidebar/>} />
            <Route path="/performance" element={<Performance/>} />
            <Route path="/info" element={<Info/>} />
            <Route path="/schoolperformance" element={<SchoolPerformance/>} />
            <Route path="/calendarfinance" element={<CalendarFinance/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/finance" element={<Finance/>} />
            <Route path="/studentintuition" element={<StudentIntuition/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/recentstudents" element={<RecentStudents/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/studentinfo" element={<StudentInfo/>} />
            <Route path="/foodmenu" element={<FoodMenu/>} />
            <Route path="/studentlist" element={<StudentList/>} />
            <Route path="/header" element={<Header/>} />
            <Route path="/studentdata" element={<StudentData/>} />
            <Route path="/teachersdata" element={<TeachersData />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/head" element={<Head />} />
            <Route path="/user" element={<User/>} />
            <Route path="/contactandmessages" element={<ContactAndMessages />} />
            <Route path="/admindetails" element={<AdminDetails />} />
            <Route path="/userdata" element={<UserData/>} />
            <Route path="/plan" element={<Plan/>} />
            <Route path="/activity" element={<Activity/>} />
            <Route path="/latestactivity" element={<LatestAct/>} />
            <Route path="/chatbox" element={<ChatBox/>} />
            <Route path="/chat" element={<Chat/>} />



            {/* <Route path="/mentor">
              {mentorRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <React.Suspense fallback={<Fallback />}>
                      {route.element}
                    </React.Suspense>
                  }
                />
              ))}
            </Route>
            <Route path="*" element={<PageNotFound />}></Route> */}
          </Routes>
        ) : (
          <MobileScreen />
        )}
      </ScrollToTop>
      <Toaster position="top-center" reverseOrder={false} />

      {/* <Authentication/> */}
    </>
  );
}

export default App;
