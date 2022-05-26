import React, { FC } from 'react';

import styled from 'styled-components';
import Icon from '../../ico/icons';

interface Props {
    icon: string[];
}

const IconToday: FC<Props> = ({ icon }) => {
    console.log(icon);

    return (
        <IconTodayS>
            <div className='divColor'>
                <Icon icon={icon[0]} />
            </div>
            <div className='divColor'>
                <Icon icon={icon[1]} />
            </div>
            <div className='divColor'>
                <Icon icon={icon[2]} />
            </div>
        </IconTodayS>
    );
};

const IconTodayS = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    align-items: end;
    > div {
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        max-width: 60%;
    }
    @media screen and (max-width: 665px) {
        > div {
            height: 100%;
        }
        img {
            max-width: 50%;
        }
    }
`;

export default IconToday;
