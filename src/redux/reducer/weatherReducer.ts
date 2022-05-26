import { AppStateTypes } from './index';
import { WeatherState, WeatherActionTypes, weatherAction, LoaderAdd_i, Rain } from './../../ts/weather';
import { Dispatch } from 'redux';
import { Icons } from '../../ico/icons';

const initState: WeatherState = {
    rain: {
        interest: 11,
        text: 'Невелика',
        title: 'Сьогодін без дощу',
        description: 'Але зранку і ввечері вдягайтесь тепліше',
        icons: [ 'Cloud', 'Sun', 'Sun' ]
    },
    week: [
        {
            weather: 'sun',
            middleTemperature: 25
        },
        {
            weather: 'rain',
            middleTemperature: 10
        },
        {
            weather: 'storm',
            middleTemperature: 7
        },
        {
            weather: 'cloud',
            middleTemperature: 15
        },
        {
            weather: 'cloudSun',
            middleTemperature: 20
        },
        {
            weather: 'sun',
            middleTemperature: 28
        },
        {
            weather: 'rain',
            middleTemperature: 16
        }
    ],
    numbersDay: {
        middleTemperatureNigh: 10,
        middleTemperatureDay: 20,
        minTemperature: 6,
        maxTemperature: 26
    },
    nowWeather: {
        icon: 'sun',
        temperature: 18,
        title_1: 'text',
        description_1: 'info text',
        title_2: 'text',
        description: 'text info'
    },
    allDay: [
        {
            temperature: 10,
            icon: 'cloud'
        },
        {
            temperature: 10,
            icon: 'cloudSun'
        },
        {
            temperature: 10,
            icon: 'sun'
        },
        {
            temperature: 10,
            icon: 'sun'
        },
        {
            temperature: 10,
            icon: 'cloudSun'
        },
        {
            temperature: 10,
            icon: 'sun'
        }
    ],
    loading: false
};

export const weatherReducer = (store = initState, action: weatherAction): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.LOADER:
            return store;

        case WeatherActionTypes.RAIN:
            return {
                ...store,
                rain: action.rain
            };

        default:
            return store;
    }
};

export const loaderAdd = (): LoaderAdd_i => ({ type: WeatherActionTypes.LOADER, loader: true });

export const rainAdd = (): Rain => ({
    type: WeatherActionTypes.RAIN,
    rain: {
        interest: 90,
        text: 'Краще взяти парасольку',
        title: 'Велика',
        description: 'Дощ може тривати весь день',
        icons: [ Icons.cloud, Icons.storm, Icons.sunCloud ]
    }
});

export const setRain = () => {
    return async (dispatch: Dispatch<weatherAction>, getState: () => AppStateTypes) => {
        dispatch(rainAdd());
    };
};
