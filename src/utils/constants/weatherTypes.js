// Specific weather types with associated wind speed, humidity, and temperature ranges
export const weatherTypes = {
    spring: [
        { name: 'Clear skies', windSpeed: [5, 10], humidity: [50, 60], temperature: [15, 20] },
        { name: 'Light rain', windSpeed: [5, 15], humidity: [60, 80], temperature: [10, 15] },
        { name: 'Cloudy', windSpeed: [5, 10], humidity: [60, 70], temperature: [12, 18] },
        { name: 'Breezy', windSpeed: [10, 20], humidity: [50, 70], temperature: [13, 18] },
        { name: 'Foggy', windSpeed: [0, 5], humidity: [80, 90], temperature: [10, 14] }
    ],
    summer: [
        { name: 'Sunny', windSpeed: [0, 10], humidity: [40, 50], temperature: [25, 35] },
        { name: 'Hot', windSpeed: [5, 15], humidity: [30, 50], temperature: [30, 40] },
        { name: 'Thunderstorms', windSpeed: [10, 25], humidity: [70, 90], temperature: [22, 30] },
        { name: 'Humid', windSpeed: [0, 5], humidity: [60, 80], temperature: [25, 35] },
        { name: 'Clear skies', windSpeed: [0, 5], humidity: [40, 60], temperature: [25, 35] }
    ],
    autumn: [
        { name: 'Windy', windSpeed: [20, 35], humidity: [50, 70], temperature: [10, 15] },
        { name: 'Rainy', windSpeed: [10, 20], humidity: [60, 90], temperature: [8, 12] },
        { name: 'Cloudy', windSpeed: [10, 15], humidity: [60, 80], temperature: [10, 14] },
        { name: 'Misty', windSpeed: [5, 10], humidity: [80, 90], temperature: [5, 10] },
        { name: 'Chilly', windSpeed: [15, 25], humidity: [50, 70], temperature: [5, 10] }
    ],
    winter: [
        { name: 'Snow', windSpeed: [10, 20], humidity: [70, 90], temperature: [-5, 0] },
        { name: 'Blizzard', windSpeed: [20, 40], humidity: [80, 100], temperature: [-10, -5] },
        { name: 'Freezing', windSpeed: [15, 30], humidity: [60, 80], temperature: [-15, -5] },
        { name: 'Foggy', windSpeed: [0, 5], humidity: [90, 100], temperature: [-5, 0] },
        { name: 'Overcast', windSpeed: [5, 15], humidity: [60, 80], temperature: [-2, 2] }
    ]
};