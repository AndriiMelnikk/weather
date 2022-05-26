import React, { FC } from 'react';

import styled from 'styled-components';
import Icon, { Icons } from '../ico/icons';
interface Props {}

const Calendar: FC<Props> = () => {
    return (
        <CalendarS className='divColor'>
            <ul>
                <Day day='Пон.' img={Icons.sun} temperature={20} />
                <Day day='Вів.' img={Icons.ringLightning} temperature={13} />
                <Day day='Сер.' img={Icons.sunCloud} temperature={16} />
                <Day day='Четв.' img={Icons.cloud} temperature={14} />
                <Day day='П&#39;ятн.' img={Icons.sun} temperature={18} />
                <Day day='Суб.' img={Icons.sunCloud} temperature={22} />
                <Day day='Нед.' img={Icons.storm} temperature={26} />
            </ul>
        </CalendarS>
    );
};

const CalendarS = styled.div`
    ul {
        padding: 20px 0 30px 0;
        height: 100%;
    }
`;

export default Calendar;

interface PropsDay {
    day: string;
    img: string;
    temperature: number;
}

const Day: FC<PropsDay> = ({ day, img, temperature }) => {
    return (
        <DayS>
            <div>
                <span>{day}</span>
            </div>
            <div>
                <Icon icon={img} />
            </div>
            <div>
                <span>{temperature}°</span>
            </div>
        </DayS>
    );
};

const DayS = styled.li`
    display: grid;
    height: calc(100% / 7);
    grid-template-columns: repeat(3, 1fr);
    > div {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    img {
        height: 50px;
    }
    > div:nth-child(1) span {
        color: silver;
    }
    > div:nth-child(3) span {
        font-weight: 700;
        font-size: 1.5em;
    }
`;
