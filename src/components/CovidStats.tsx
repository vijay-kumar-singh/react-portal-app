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
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 3px solid ${(props) => props.color};
`;

interface CovidProps {
    url: string;
}

const Stats: React.FC<CovidProps> = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorPage/>;
 
  return (
    <>
    <StatGrid>
      <StatBlock color="blue">
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock color="red">
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock color="green">
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
    </StatGrid>
    </>
  );
}

export default Stats;