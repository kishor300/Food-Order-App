import { MENU_API } from '../utils/constants';
import { useState, useEffect } from 'react';

// Custome Hook
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resId);    // dynamic
        const json = await data.json();
        // console.log("Menu Info :", json);
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;

