import React from 'react';
import Weather from './Weather';
import GlobalStyle from './globalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/redux';
function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Weather />
        </Provider>
    );
}

export default App;
