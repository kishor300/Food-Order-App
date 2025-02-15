import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

/* Test Case-1 */
// it("should render Header Component with login button", () => {

//     // 1-Render Component
//     render(
//         // The Link component requires a Router context to function, and BrowserRouter provides that during the test.
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     )

//     // 2-Find Element
//     // const loginButton = screen.getByRole("button")
//     const loginButton = screen.getByRole('button', { name: 'Login' }) // Finds exact button with name

//     // 3-Assertion
//     expect(loginButton).toBeInTheDocument();
// })

/* Test Case-2 */
// it("should render Header Component with cart item 0", () => {

//     // 1-Render Component
//     render(
//         <BrowserRouter>                  {/* For Link tag from react-router */}
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//     )

//     // 2-Find Element
//     const cartItem1 = screen.getByText('Cart (0)') // Finds exact element with name

//     const cartItem2 = screen.getByText(/Cart/) // Finds element which includes regex : /Cart/

//     // 3-Assertion
//     expect(cartItem1).toBeInTheDocument();
//     expect(cartItem2).toBeInTheDocument();
// })

/* Test Case-3 */
it("should change Login btn to Logout on Click", () => {

    // 1-Render Component
    render(
        <BrowserRouter>                     {/* For Link tag from react-router */}
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // 2-Find Element
    const loginBtn = screen.getByRole('button', { name: 'Login' })

    // Event Handling using 'fireEvent' from lib `@testing-library/react`
    fireEvent.click(loginBtn);  // Fire an Click Event on element

    const logoutBtn = screen.getByRole('button', { name: 'Logout' })

    // 3-Assertion
    expect(logoutBtn).toBeInTheDocument();
})