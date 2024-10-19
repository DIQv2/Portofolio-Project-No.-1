import {seasons} from "../constants/seasons";

export const getSeasonOfMonth = (month, normal) => {
    if(normal) {
        return getNormalSeasons(month);
    } else {
        return getEphreemSeasons(month);
    }
}

const getNormalSeasons = (month) => {
    if(month === 0 || month === 1 || month === 11) return seasons[3];
    if(month === 2 || month === 3 || month === 4) return seasons[0];
    if(month === 5 || month === 6 || month === 7) return seasons[1];
    if(month === 8 || month === 9 || month === 10) return seasons[2];
}

const getEphreemSeasons = (month) => {
    if(month >= 0 && month < 4) return seasons[0];
    if(month >= 4 && month < 9) return seasons[1];
    if(month >= 9 && month < 14) return seasons[2];
    if(month >= 14 && month < 19) return seasons[3];
}