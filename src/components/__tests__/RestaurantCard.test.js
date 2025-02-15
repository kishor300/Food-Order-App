import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import { BrowserRouter } from "react-router";
import WithPromotedLabel from "../WithPromotedLabel";

/* Test Case-1 */
// it('Should render RestaurantCard with prop Data', () => {

//     // 1-Render
//     render(
//         // The Link component requires a Router context to function, and BrowserRouter provides that during the test.
//         <BrowserRouter>
//             <RestaurantCard resData={MOCK_DATA} />
//         </BrowserRouter>
//     )

//     // 1-Find element
//     const name = screen.getByText('Pizza Hut')

//     // 1-Assertion
//     expect(name).toBeInTheDocument();

// })

/* Test Case-2 for Promoted Resto same logic here as from Body.js */
const PromotedRestoCard = WithPromotedLabel(RestaurantCard);

function renderBasedOnCondition(data) {
    return (
        (data.info.avgRating > 4.5)
            ? <PromotedRestoCard resData={data} />
            : <RestaurantCard resData={data} />
    )
}

it('Should render PromotedRestoCard with promoted label based on condition ', () => {

    render(
        <BrowserRouter>                             {/* For Link tag from react-router */}
            {
                renderBasedOnCondition(MOCK_DATA)   // Call Function by passing MOCK_DATA
            }
        </BrowserRouter>
    )

    // We can try this code by change 'avgRating' from resCardMock.json
    if (MOCK_DATA.info.avgRating > 4.5) {
        const promoted = screen.queryByText('Promoted')
        console.log('Item is Promoted !', promoted); //  O/P : Item is Promoted ! <ref *1> HTMLLabelElement {....
        expect(promoted).toBeInTheDocument();
    }
    else {
        const promoted = screen.queryByText('Promoted')
        console.log('Item is Not Promoted !!', promoted);   // O/P: Item is not Promoted !! null
        expect(promoted).not.toBeInTheDocument();
    }
})
