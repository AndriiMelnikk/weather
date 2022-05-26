import React, { FC } from 'react';

import styled from 'styled-components';

const Button: FC = () => {
    return <ButtonS>test</ButtonS>;
};

const ButtonS = styled.button`
    border: none;
    background-color: rgb(49, 146, 207);
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 1.5em;
    height: 60px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 5px 22px -2px rgb(49, 146, 207);
    box-shadow: 0px 5px 22px -2px rgb(49, 146, 207);
    @media screen and (max-width: 735px) {
        font-size: 1em;
        height: 40px;
    }
`;
export default Button;
