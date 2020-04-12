import React, { ReactElement } from 'react';
import PropTypes from "prop-types";

const Banner = (props: any): ReactElement  => (
    <div className="banner">
        <h1>{props.title}</h1>
        <div></div>
        <p>{props.subtitle}</p>
        {props.children}
    </div>
);

Banner.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.element
  };

export default Banner;
