import React from 'react';
import styled from 'styled-components';
import useStats from '../services/useCovidStats';
import ErrorPage from '../pages/ErrorPage';

const StatGrid = styled.div`
    padding-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media screen and (max-width: 576px) {
        display: block;
        margin-top: 100px;
    }
`;
const StatBlock = styled(Card)`
    background: ${(props) => props.color};
    font-size: 2rem;
    padding: 2rem;
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    border: 3px solid ${(props) => props.color};
`;
const Wrapper = styled(Card)`
    padding: 4em;
    margin: auto;
    width: 100%;
    background: #af9a7d;
`;
const Title = styled.h1`
    text-align: center;
    font-size: 1.5em;
    color: white;
`;
interface CovidProps {
    url: string;
}

const Stats: React.FC<CovidProps> = ({ url }) => {
    const { stats, loading, error } = useStats(url);
    if (loading) return <p>Loading...</p>;
    if (error) return <ErrorPage />;

    return (
        <>
            <Wrapper>
                <Title>World wide COVID-19 corona virus pandemic status</Title>
                <StatGrid>
                    <StatBlock color="blue">
                        <Title>Confirmed:</Title>
                        <Title>{stats.confirmed.value}</Title>
                    </StatBlock>
                    <StatBlock color="red">
                        <Title>Deaths:</Title>
                        <Title>{stats.deaths.value}</Title>
                    </StatBlock>
                    <StatBlock color="green">
                        <Title>Recovered:</Title>
                        <Title>{stats.recovered.value}</Title>
                    </StatBlock>
                </StatGrid>
            </Wrapper>
        </>
    );
};

export default Stats;
