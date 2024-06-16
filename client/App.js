import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/Components/Footer";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import Login from "./src/Components/Login";
import RestaurantMenu from "./src/components/RestaurantMenu"
import Profile from "./src/Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <React.Fragment>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />, 
    errorElement: <Error />, 
    children: [
      
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 