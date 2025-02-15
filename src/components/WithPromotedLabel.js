// Higher Order Component
// It takes Component as input & returns that Component modified.

const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {

        return (
            <div>
                {/* <label style={{ 'backgroundColor': 'black', 'color': 'white', 'padding': '2px', 'position': 'absolute' }}>Promoted</label> */}
                <label className="absolute bg-black text-white p-1 ml-1 mt-1 text-[12px]">Promoted</label>
                <RestaurantCard {...props} />
            </div >
        )
    }
}

export default WithPromotedLabel;