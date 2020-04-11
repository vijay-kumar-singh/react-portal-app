import * as React from 'react';

export interface BannerProps {
    subtitle?: string;
    title: string;
    children: JSX.Element;
}

const Banner = (props: BannerProps): JSX.Element => (
    <div className="banner">
        <h1>{props.title}</h1>
        <div></div>
        <p>{props.subtitle}</p>
        {props.children}
    </div>
);
export default Banner;
