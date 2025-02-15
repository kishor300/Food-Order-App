import WithPromotedLabel from "../WithPromotedLabel";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import { BrowserRouter } from "react-router";


/* Test Case-2 */
it('Should render PromotedRestoCard with promoted label based on condition ', () => {

    const PromotedRestoCard = WithPromotedLabel(RestaurantCard);

    render(
        // The Link component requires a Router context to function, and BrowserRouter provides that during the test.
        <BrowserRouter>
            <PromotedRestoCard resData={MOCK_DATA} />
        </BrowserRouter>
    )

    if (MOCK_DATA.info.avgRating > 4.5) {

        const promoted = screen.queryByText('Promoted');
        console.log('Item is Promoted !', promoted); // Item is Promoted ! <ref *1> HTMLLabelElement {.... 

        expect(promoted).toBeInTheDocument();

    } else {

        // used 'queryBy' insted of 'getBy' Because,
        // 'getBy' => throws error if no element found.
        // 'queryBy' => never throws error, instead return null if no element found.

        const promoted = screen.queryByText('Promoted');    // returns 'null'
        console.log('Item is not Promoted !!', promoted);   // O/P: Item is not Promoted !! null

        expect(promoted).not.toBeInTheDocument();
        // null should not be in the documents --> True/Passed
    }
})
