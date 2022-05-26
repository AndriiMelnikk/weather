import React, { FC } from 'react';

import styled, { keyframes } from 'styled-components';

import Sun from './sun.png';
import SunCloud from './sunCloud.png';
import Cloud from './cloud.png';
import Lightning from './lightning.png';
import Night from './night.png';
import NightCloud from './nightCloud.png';
import NightCloudRing from './nightCloudRing.png';
import RingLightning from './ringLightning.png';
import Storm from './storm.png';
import maxTemp from './maxTemp.png';
import minTemp from './minTemp.png';

export enum Icons {
    sun = 'Sun',
    sunCloud = 'SunCloud',
    cloud = 'Cloud',
    lightning = 'Lightning',
    night = 'Night',
    nightCloud = 'NightCloud',
    nightCloudRing = 'NightCloudRing',
    ringLightning = 'RingLightning',
    storm = 'Storm',
    maxTemp = 'maxTemp',
    minTemp = 'minTemp'
}
interface Props {
    icon: string;
}

const Icon: FC<Props> = ({ icon }) => {
    let iconWeather;
    switch (icon) {
        case 'Sun':
            iconWeather = Sun;
            break;
        case 'SunCloud':
            iconWeather = SunCloud;
            break;
        case 'Cloud':
            iconWeather = Cloud;
            break;
        case 'Lightning':
            iconWeather = Lightning;
            break;
        case 'Night':
            iconWeather = Night;
            break;
        case 'NightCloud':
            iconWeather = NightCloud;
            break;
        case 'NightCloudRing':
            iconWeather = NightCloudRing;
            break;
        case 'RingLightning':
            iconWeather = RingLightning;
            break;
        case 'Storm':
            iconWeather = Storm;
            break;
        case 'maxTemp':
            iconWeather = maxTemp;
            break;
        case 'minTemp':
            iconWeather = minTemp;
            break;
    }

    return (
        <IconS>
            <img src={iconWeather} alt='' />
        </IconS>
    );
};
export default Icon;

const IconGrow = () => keyframes`
    from { transform: scale(0.1)}
    to {transform: scale(1) }
`;
const IconS = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${IconGrow} 0.7s 1 forwards normal;
`;
