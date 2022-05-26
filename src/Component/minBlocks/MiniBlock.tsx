import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from '../../ico/icons';

interface Props {
    icon: string;
    temperature: number;
    title: string;
    describe?: string;
}
const MiniBlock: FC<Props> = ({ icon, temperature, title, describe }) => {
    return (
        <MiniBlockS className='divColor'>
            <HeaderMiniBlock>
                <h3>{temperature}°</h3>
                <Icon icon={icon} />
            </HeaderMiniBlock>
            <TextMiniBlock>
                <p>{title}</p>
                <span>{describe}</span>
            </TextMiniBlock>
        </MiniBlockS>
    );
};

const MiniBlockS = styled.div`
    padding: 0 20px;
    display: grid;
    grid-template-rows: 2fr 1fr;
    @media screen and (max-width: 1100px) {
        padding: 0 10px;
    }
`;
const HeaderMiniBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    h3 {
        font-size: 2em;
    }
    img {
        max-width: 80%;
        max-height: 80%;
    }
    @media screen and (max-width: 735px) {
        h3 {
            font-size: 1.5em;
        }
    }
`;
const TextMiniBlock = styled.div`
    p {
        font-size: 0.9em;
        font-weight: 700;
    }
    span {
        font-size: 0.9em;
        color: silver;
    }
    @media screen and (max-width: 735px) {
        p,
        span {
            font-size: 0.7em;
        }
    }
`;

export default MiniBlock;
