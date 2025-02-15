import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"

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

it("Should load Restaurant Menu Component, check categories & it's items are visible properly", async () => {

    await act(() => {
        render(
            <Provider store={appStore}>
                <RestaurantMenu />
            </Provider>
        )
    })

    // Get all header list from restaurant menu
    const headerList = screen.getAllByTestId('accordion_header')
    const header = headerList.find((header) => {        // Returns value of single element from array where condition is true
        return (
            header.textContent.includes('Special Dishes-(11)')
        )
    })

    fireEvent.click(header);
    expect(screen.getAllByTestId('resto_item').length).toBe(11);
})
