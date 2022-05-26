import React, { FC } from 'react';

import styled from 'styled-components';
import Icon, { Icons } from '../ico/icons';

const Today: FC = () => {
    return (
        <TodayS className='divColor'>
            <div>
                <Icon icon={Icons.sunCloud} />
            </div>
            <div>
                <h3>18°</h3>
            </div>
            <div>
                <div>
                    <p>test</p>
                    <span> info test</span>
                </div>
                <div>
                    <p>test</p>
                    <span> info test</span>
                </div>
            </div>
        </TodayS>
    );
};

const TodayS = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1.3fr;
    > div {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    img {
        max-width: 80%;
        max-height: 100%;
    }
    h3 {
        font-size: 7em;
        font-weight: 800;
    }
    > div:nth-child(3) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        p {
            font-size: 0.9em;
            font-weight: 700;
            margin-bottom: 10px;
        }
        span {
            font-size: 0.9em;
            color: silver;
        }
    }
    @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
        > div:nth-child(3) {
            grid-column: 1/3;
            grid-template-columns: repeat(2, 1fr);
            padding: 10px 20px;
            > div {
                padding: 0px 5px;
            }
        }
    }
    @media screen and (max-width: 735px) {
        h3 {
            font-size: 5em;
        }
    }
`;

export default Today;
