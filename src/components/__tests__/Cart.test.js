import { act, fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router";

// .fn() --> Creates a mock function. Optionally takes a mock implementation.
global.fetch = jest.fn(() => {
    return (
        Promise.resolve(                                // fetch API returns a Promise which
            {                                           // resolved with JSON data.
                json: () => {                           // Converting JSON to JS Object using .json()
                    return Promise.resolve(MOCK_DATA)   // .json() returns Promise which resolved with JS Object.
                }
            }
        )
    )
})

/* Before Each Test Case load Header, Cart, RestaurantMenu Components
'beforeAll' --> code will not work after 1st test case performed
'beforeEach' --> code works for each test case (1st, 2nd, 3rd...) */

// global variable to use in all test cases
let cart;
let cartCount = 0;

beforeEach(async () => {
    await act(() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    })

    cart = screen.getByTestId('my_cart');
    // console.log('\nItem :\n', cart);
})

/* Test-1 */
it('Should display Cart items to 0', () => {

    expect(parseInt(cart.getAttribute('cart-count'))).toBe(cartCount)
})

/* Test-2 */
it(`Should display all categories & it's items properly`, () => {

    // Part-1
    /* Get all header list from restaurant menu */
    const headerList = screen.getAllByTestId('accordion_header')
    const header = headerList.find((header) => {        // Returns value of single element from array where condition is ture
        return (
            header.textContent.includes('Special Dishes-(11)')
        )
    })

    fireEvent.click(header);
    expect(screen.getAllByTestId('resto_item').length).toBe(11);

    // Part-2
    /* Should add item to Cart & update Cart Count accordingly in Header */
    const addButtons = screen.getAllByTestId('add_button');
    fireEvent.click(addButtons[0]);     // Click on 1st button to add 1st item
    // Increment count by one
    cartCount++;
    expect(parseInt(cart.getAttribute('cart-count'))).toBe(cartCount)
})

/* Test-3 */
it(`Items should be present in Cart page`, () => {

    const resto_cards = screen.getAllByTestId('resto_item'); // from ItemList Component
    expect(resto_cards).toHaveLength(cartCount)              // New method
})

