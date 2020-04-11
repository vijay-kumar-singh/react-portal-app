import React from 'react';
import Stats from '../components/CovidStats';

const Covid19Stats: React.FC = () => {
    return (
        <React.Fragment>
            <Stats url="https://covid19.mathdro.id/api"></Stats>
        </React.Fragment>
    );
};

export default Covid19Stats;
