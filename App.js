import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer.js";
import About from "./src/components/About.js";
import Contact from "./src/components/Contact.js";
import Error from "./src/components/Error.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import useOnlineStatus from "./src/utils/useOnlineStatus.js";
// import Grocery from "./src/components/Grocery.js";
import { lazy, Suspense } from "react";
import Shimmer from "./src/components/Shimmer.js";
// Accessing global context_variable
import UserContext from "./src/utils/UserContext.js";
// Provide redux_store from `react-redux` not `redux-tool-kit`
import { Provider } from "react-redux";
// here appStore is redux_store
import appStore from "./src/utils/appStore.js";
import Cart from "./src/components/Cart.js";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
// Lazy Loading
const Grocery = lazy(() => {

    return (
        import("./src/components/Grocery")
    )
});
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const AppLayout = () => {

    // For use of Context
    const [userName, setUserName] = useState();
    useEffect(() => {
        setUserName("Kishor") // default value for context variable
    }, [])

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {

        return <div>Oops! No Internet. Try again. </div>

    } else {

        return (
            <>
                {/* Providing redux_store named as appStore to our whole App */}
                <Provider store={appStore}>                             {/* For Redux Store */}

                    <UserContext.Provider
                        value={{ loggedInUser: userName, setUserName }}
                    >                                                   {/* For Context Variable */}
                        <div className="app">
                            <Header />
                            <Outlet />
                            <Footer />
                        </div >
                    </UserContext.Provider>                             {/* For Context Variable */}

                </Provider>                                             {/* For Redux Store */}
            </>
        );
    }
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
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            // {
            //     path: "/grocery",
            //     element: (
            //         <Suspense fallback={<Shimmer />}>
            //             <Grocery />
            //         </Suspense>)
            // }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("rootApp"));
root.render(<RouterProvider router={appRouter} />);
