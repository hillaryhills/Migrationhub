import Home from "../components/Home/index";
import Signin from "../components/Auth/Signin";
import Login from "../components/Auth/Login";
import Agent from "../components/Agent/index";
import preassessment from "../components/preassessment/index";
import Dashboard from "../components/Dashboard/index";
import SignupStepTow from '../components/Auth/SignupStepTow'

const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    title: "Signin",
    path: "/signin",
    exact: true,
    component: Signin,
  },
  {
    title: "Login",
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    title: "Agent",
    path: "/agent",
    exact: true,
    component: Agent,
  },
  {
    title: "Pre-assessment",
    path: "/assessment",
    exact: true,
    component: preassessment,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    title: "SignupStepTow",
    path: "/signupsteptwo",
    exact: true,
    component: SignupStepTow,
  },
];

export default routes;
