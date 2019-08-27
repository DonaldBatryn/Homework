import React from 'react';
import { Provider } from 'react-redux';

import GiphysSearchContainer from './giphys_search_container';
import GiphysIndex from './giphys_index';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <GiphysSearchContainer />
        
        </Provider>
    )
}

export default Root;