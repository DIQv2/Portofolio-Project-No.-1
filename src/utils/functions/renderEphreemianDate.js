import {ephreemMonths} from "../constants/ephreemMonths";
import {getSeasonOfMonth} from "./getSeasonOfMonth";

const landmarkDate = new Date(2024, 9, 16); // 16 Oct 2024
const intialEphreemianDate = {
    day: 24,
    monthIndex: 14,
    year: 4102
};

export const renderEphreemianDate = () => {
    const date = new Date();
    const daysToAdd = Math.floor((date - landmarkDate) / (1000 * 60 * 60 * 24)); // Difference in days

    const daysInMonth = 40;
    const monthsInYear = 20;

    let { day, monthIndex, year } = intialEphreemianDate;
    day+=daysToAdd;

    while (day > daysInMonth) {
        day -= daysInMonth;
        monthIndex++;
        if (monthIndex > monthsInYear) {
            monthIndex = 1;
            year++;
        }
    }

    return `${day} ${ephreemMonths[monthIndex]} ${year}, ${getSeasonOfMonth(monthIndex, false)}`
}