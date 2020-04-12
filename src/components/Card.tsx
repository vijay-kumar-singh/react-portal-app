import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface CardProps {
    color: string;
    children: ReactElement;
}

const Container = styled.div`
    display: flex;
    width: 200px;
    height: 150px;
    border: 3px solid ${(props) => props.color};
    border-radius: 15px;
    justify-content: space-around;
    font-size: 5em;
    color: ${(props) => props.color};
`;

const Content = styled.div`
    align-self: center;
`;

const Card = ({ color = '#ff867c', children }: CardProps): ReactElement<any> => <Container color={color}>
            <Content>{children}</Content>
        </Container>

export default Card;
