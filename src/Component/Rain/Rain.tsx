import React, { FC } from 'react';

import styled from 'styled-components';
import IconToday from './IconToday';
import Interest from './Interest';

type Props = {
    title: string;
    interest: number;
    description: string;
    text: string;
    icon: string[];
    setRain: () => void;
};

const Rain: FC<Props> = ({ title, interest, description, icon, text, setRain }) => {
    return (
        <RainS>
            <div>
                <Interest title={title} interest={interest} description={description} text={text} setRain={setRain} />
            </div>
            <div>
                <IconToday icon={icon} />
            </div>
        </RainS>
    );
};

const RainS = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-gap: 30px;
    @media screen and (max-width: 665px) {
        grid-template-rows: 5fr 1fr;
    }
`;

export default Rain;
