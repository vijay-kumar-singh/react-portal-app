import React, { Suspense, lazy } from 'react';
import '../assets/styles/sass/index.scss';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import GlobalStyles from '../globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { colors } from '../utils/color';

const Home = lazy(() => import('../pages/Home'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Covid19Stats = lazy(() => import('../pages/Covid19Stats'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));




const AppContainer = styled.div`
    background: ${(props) => props.theme.siteBackground};
    min-height: 100vh;
    padding-bottom: 40px;
`;

const App: React.FC = () => {
    return (
        <ThemeProvider theme={colors.light}>
            <AppContainer>
                <React.Fragment>
                   <GlobalStyles />
                    <Navbar />
                    <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products/" component={Products} />
                        <Route exact path="/products/:slug" component={ProductDetails} />
                        <Route exact path="/Covid-19Stats" component={Covid19Stats} />
                        <Route component={ErrorPage} />
                    </Switch>
                    </Suspense>
                </React.Fragment>
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
