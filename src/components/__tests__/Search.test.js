import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({ json: () => { return Promise.resolve(MOCK_DATA) } })
})

/* Test Case-1 */
// it("Should render Body Component with Search", async () => {

//     /*  
//         When testing, code that causes React state updates should be wrapped into act(...):
//         act(() => {
//             // fire events that update state
//         });
//         // assert on the output
//     */

//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     })

//     /* Inspect the DOM if needed */
//     // screen.debug();

//     // Await for button cause Body-Component will loads after receiving API response
//     const searchBtn = await screen.findByRole('button', { name: 'Search' })

//     console.log(' Button : \n', searchBtn)  //  Button : <ref *1> HTMLButtonElement {

//     //Assertion
//     expect(searchBtn).toBeInTheDocument()
// })

/* ⭐⭐⭐IMP Test Case-2 */
// it("Should Search resto with input text if resto name matches", async () => {

//     await act(() => {
//         render(
//             <BrowserRouter>
//                 <Body />
//             </BrowserRouter>
//         )
//     })

//     // get input element
//     const searchInput = screen.getByTestId('search-input');
//     // provide value as 'burger' to that element
//     fireEvent.change(searchInput, { target: { value: 'pizza' } })
//     // click on search button
//     const searchButton = screen.getByTestId('search-button')
//     fireEvent.click(searchButton);
//     // get all searched cards which includes name 'burger'
//     const searchedCards = screen.getAllByTestId('resto_card');

//     // Check each element contains "pizza"
//     searchedCards.forEach((card) => {
//         // check burger text in it
//         expect(card).toHaveTextContent(/pizza/i)
//         // toHaveTextContent - check element has text content or not
//     })
// })

/* Output-
 Result for burger 1 restaurant matched -
    searchedResto : [{info: {id: '5934',name: 'Burger King',
 
 Result for pizza multiple restaurants matched -
 searchedResto : [{info: {id: '10576',name: 'Pizza Hut',
                    {info: {id: '718430',name: 'The Pizza Bakery - Wood Fired Sourdough',
                    {info: {id: '622030',name: 'MOJO Pizza - 2X Toppings',
*/

it("Should show top-rated-resto when clicked on that button", async () => {

    let container;
    await act(() => {
        const result = render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
        container = result.container;
    })

    const topRestoBtn = screen.getByRole('button', { name: 'Top Rated Restaurants' })

    fireEvent.click(topRestoBtn);

    // Method-1 : Using 'screen' to select all resto cards      // Mostly Recommended
    const topRestoCards = screen.getAllByTestId('resto_card');  // returns React Component

    // Method-2 : Using 'container' to select all resto cards
    // const topRestoCards = container.querySelectorAll('[data-testid="resto_card"]')

    topRestoCards.forEach((card, index) => {

        // Select h4 element inside card that contains ratings attribute
        const ratingElement = card.querySelector('h4[ratings]');    // returns DOM Object
        // Gettign value of ratings attribute and convert it to float
        const ratingValue = parseFloat(ratingElement.getAttribute('ratings'))
        // Debugging Output
        console.log(index, ' : ', ratingValue);
        // Ensure rating is 4.5 or greater (top rated)
        expect(ratingValue).toBeGreaterThanOrEqual(4.5)

    })
})

