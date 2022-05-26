export enum WeatherActionTypes {
    LOADER = 'LOADER',
    RAIN = 'RAIN'
}

export interface RainState {
    interest: number;
    text: string;
    title: string;
    description: string;
    icons: string[];
}

export interface WeatherState {
    rain: RainState;
    week: {
        weather: string;
        middleTemperature: number;
    }[];
    numbersDay: {
        middleTemperatureNigh: number;
        middleTemperatureDay: number;
        minTemperature: number;
        maxTemperature: number;
    };
    nowWeather: {
        icon: string;
        temperature: number;
        title_1: string;
        description_1: string;
        title_2: string;
        description: string;
    };
    allDay: {
        temperature: number;
        icon: string;
    }[];
    loading: boolean;
}
export type weatherAction = LoaderAdd_i | Rain;

export interface LoaderAdd_i {
    type: WeatherActionTypes.LOADER;
    loader: boolean;
}

export interface Rain {
    type: WeatherActionTypes.RAIN;
    rain: RainState;
}
