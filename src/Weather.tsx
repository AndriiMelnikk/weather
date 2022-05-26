import React, { FC } from 'react';

import styled from 'styled-components';
import AllToday from './Component/AllToday';

import Calendar from './Component/Calendar';
import MinBlocks from './Component/minBlocks/MiniBlocks';
import RainContainer from './Component/Rain/RainContainer';
import Today from './Component/Today';

const Weather: FC = () => {
    return (
        <WeatherS>
            <TodayDateS>
                <RainContainer />
                <Calendar />
                <MinBlocks />
            </TodayDateS>
            <TodayInfoS>
                <Today />
                <AllToday />
            </TodayInfoS>
        </WeatherS>
    );
};

export default Weather;

const WeatherS = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    min-height: 800px;
    width: 100%;
    grid-gap: 30px;
    padding: 30px;
    > div {
        grid-gap: 30px;
    }
    @media screen and (max-width: 992px) {
        grid-template-rows: 3fr 1fr;
    }
`;
const TodayInfoS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 665px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
`;
const TodayDateS = styled(TodayInfoS)`
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        > div:nth-child(2){
            grid-column: 1 / 3;
            grid-row: 2 / 3;
        }
    }
    @media screen and (max-width: 665px){
        grid-template-columns: 1fr;
        grid-template-rows: 0.8fr 1fr 400px;
        > div:nth-child(2){
            grid-column: 1/2;
        }
        > div:nth-child(3){
            grid-row: 3 / 4;
        }
    }
`;
