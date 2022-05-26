import React, { FC } from 'react';

import styled from 'styled-components';
import { Icons } from '../../ico/icons';
import Button from '../../UL/Button/Button';
import MiniBlock from './MiniBlock';

const MiniBlocks: FC = () => {
    return (
        <MinBlocksS>
            <Blocks>
                <MiniBlock icon={Icons.night} temperature={12} title='До 12:00' describe='Середня темп.' />
                <MiniBlock icon={Icons.sun} temperature={19} title='До 24:00' describe='Середня темп.' />
                <MiniBlock icon={Icons.minTemp} temperature={8} title='Наймеша темп.' />
                <MiniBlock icon={Icons.maxTemp} temperature={24} title='Найбільша темп.' />
            </Blocks>
            <Buttons>
                <Button />
                <Button />
            </Buttons>
        </MinBlocksS>
    );
};

export default MiniBlocks;

const MinBlocksS = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-gap: 30px;
    @media screen and (max-width: 665px) {
        grid-template-rows: 5fr 1fr;
    }
`;

const Blocks = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    > div {
        height: 100%;
    }
    @media screen and (max-width: 1100px) {
        grid-gap: 10px;
    }
`;

const Buttons = styled.div`
    display: grid;
    align-items: end;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`;
