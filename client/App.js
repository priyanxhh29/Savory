import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import Footer from "./src/Components/Footer.js";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contact from "./src/components/Contact.js";
import Login from "./src/components/Login.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js"
import Profile from "./src/components/ProfileClass.js";
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