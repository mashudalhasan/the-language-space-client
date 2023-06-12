import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Enrolled from "../Pages/Dashboard/Enrolled/Enrolled";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "enrolled",
        element: <Enrolled></Enrolled>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      // admin routes
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      // instructor routes
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "updateclass/:id",
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
    ],
  },
]);

export default router;
