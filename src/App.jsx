import "./App.css";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
// import LoginPage from "./components/LoginPage";
// import SignUpPage from "./components/SignUpPage";
// import ForgotPassword from "./components/ForgotPassword";
// import BodyPage1 from "./components/BodyPage1";
// import Bodypage2 from "./components/BodyPage2";
// import MainDashboard from "./components/MainDashboard";
// import favicon32x32 from "./Images/favicon-32x32.png";

function App() {
  return (
    <main className="">
      {/* <Footer /> */}
      <Navbar />
      {/* {<LoginPage />} */}
      {/* <Loader /> */}
      <LoginPage />
      {/* <SignUpPage />
      <ForgotPassword />
      <BodyPage1 />
      <Bodypage2 />
      <MainDashboard /> */}
      {/* <img src={favicon32x32} alt="Favicon" /> */}
    </main>
  );
}

export default App;
