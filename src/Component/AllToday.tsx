import React, { FC } from 'react';

import styled from 'styled-components';
import Icon, { Icons } from '../ico/icons';

const AllToday: FC = () => {
    return (
        <AllTodayS className='divColor'>
            <Day temperature={10} icon={Icons.cloud} time='00:00' />
            <Day temperature={13} icon={Icons.cloud} time='04:00' />
            <Day temperature={16} icon={Icons.sunCloud} time='08:00' />
            <Day temperature={19} icon={Icons.sun} time='12:00' />
            <Day temperature={24} icon={Icons.sun} time='16:00' />
            <Day temperature={18} icon={Icons.sunCloud} time='20:00' />
        </AllTodayS>
    );
};

const AllTodayS = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    overflow: hidden;
    background-color: rgb(49, 146, 207) !important;
`;

export default AllToday;

interface PropsDay {
    temperature: number;
    icon: string;
    time: string;
}

const Day: FC<PropsDay> = ({ temperature, icon, time }) => {
    return (
        <DayS>
            <p>{time}</p>
            <h3>{temperature}°</h3>

            <Icon icon={icon} />
        </DayS>
    );
};
const DayS = styled.div`
    margin: 5px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    color: white;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    transition: 0.5s;
    img {
        max-width: 60%;
        filter: grayscale(80%);
    }
    h3 {
        font-weight: 800;
        font-size: 1.5em;
    }
    &:hover {
        background-color: white;
        color: black;
        img {
            filter: grayscale(0%);
        }
    }
    @media screen and (max-width: 992px) {
        h3 {
            font-size: 1em;
        }
        p {
            font-size: 0.8em;
        }
    }
`;
