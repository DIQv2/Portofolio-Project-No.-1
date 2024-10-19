import {months} from "../constants/months";
import {getSeasonOfMonth} from "./getSeasonOfMonth";

export const renderCurrentDate = () => {
    const date = new Date();
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${getSeasonOfMonth(date.getMonth(), true)}`;
}