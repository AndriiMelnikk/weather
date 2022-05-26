import React, { FC, useRef, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import Icon, { Icons } from '../../ico/icons';
import RunNumber from '../../UL/Animate/NumberRun';

interface Props {
    interest: number;
    title: string;
    text: string;
    description: string;
    setRain: () => void;
}

const Interest: FC<Props> = ({ interest, title, text, description, setRain }) => {
    const Test = () => {
        console.log(0);
        setRain();
    };

    return (
        <InterestS className='divColor'>
            <InfoText>
                <div>
                    <p>
                        <Icon icon={Icons.ringLightning} />
                        <span onClick={Test}>Ймовірність дощу</span>
                    </p>
                </div>
                <div>
                    <h2> {interest}%</h2>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{text}</p>
                    <span>{description}</span>
                </div>
            </InfoText>
            <InfoImg interest={interest}>
                <div>
                    <div>
                        <span />
                    </div>
                </div>
                <p>Шкала % дощу</p>
            </InfoImg>
        </InterestS>
    );
};

const InterestS = styled.div`
    padding: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 2fr 1fr;
    height: 100%;
`;

const InfoText = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    height: 100%;
    span {
        color: silver;
    }
    h2 {
        font-size: 6em;
        text-align: center;
    }
    div:nth-child(1) > p {
        display: flex;
        align-items: center;
        img {
            height: 25px;
        }
        span {
            padding-left: 5px;
        }
    }
    > div:nth-child(2) {
        p {
            font-weight: 800;
            font-size: 1.3em;
            margin-top: 10px;
        }
    }
    > div:nth-child(3) {
        p {
            margin-bottom: 10px;
        }
        span {
            font-size: 0.9em;
        }
    }
    @media screen and (max-width: 665px) {
        h2 {
            font-size: 4em;
        }
    }
`;
const InterestRaid = (props: { interest: number }) => keyframes`
    from {bottom: 0}
    to {bottom: ${props.interest}%}
`;
const InfoImg =
    styled.div <
    { interest: number } >
    `
    > div {
        height: 70%;
        border: 2px solid rgb(49, 146, 207);
        width: 40px;
        margin: 0 auto;
        border-radius: 20px;
        div {
            position: relative;
            bottom -32px;
            height: calc(100% - 34px);
        }
    }
    span {
        transition:0.3s;
        position: absolute;
        display: inline-block;
        width: 30px;
        height: 30px;
        left: 3px;
        animation: ${InterestRaid} 0.5s 1 ease-in-out forwards normal;
        background-color: rgb(49, 146, 207);
        border-radius: 50%;
    }
    p{
        margin-top: 20px;
        text-align: center;
        font-size: 0.8em;
        color: silver;
    }
`;

export default Interest;
