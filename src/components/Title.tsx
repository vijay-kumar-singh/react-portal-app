import React from 'react';
import styled from 'styled-components'

interface CoverProps {
    title: string;
}

const StyledSection = styled.div`
text-align: center;
margin-bottom: 4rem;
`
const Div = styled.div`
width: 5rem;
height: 5px;
margin: 0 auto;
background: #af9a7d;
`
const StyledTitle = styled.h4`
font-size: 2rem;
letter-spacing: 3px;
text-transform: capitalize;
margin-bottom: 1rem;
`
const Title: React.FC<CoverProps> = ({ title }) => {
    return (
        <StyledSection>
            <StyledTitle>{title}</StyledTitle>
            <Div />
        </StyledSection>
    )
}

export default Title;
