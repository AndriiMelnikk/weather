import { connect } from 'react-redux';
import React, { FC } from 'react';
import { AppStateTypes } from '../../redux/reducer';
import Rain from './Rain';
import { RainState } from '../../ts/weather';
import { setRain } from '../../redux/reducer/weatherReducer';

type Props = {
    rain: RainState;
    setRain: () => void;
};

const RainContainer: FC<Props> = ({ rain, setRain }) => {
    return (
        <Rain
            title={rain.title}
            interest={rain.interest}
            description={rain.description}
            text={rain.text}
            icon={rain.icons}
            setRain={setRain}
        />
    );
};

let mapStateToProps = (state: AppStateTypes) => {
    return {
        rain: state.weather.rain
    };
};

export default connect(mapStateToProps, { setRain: setRain })(RainContainer);
