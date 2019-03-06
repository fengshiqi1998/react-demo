import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Types extends Component {
    render() {
        return (
            <div>
                Hello{this.props.name}             
            </div>
        );
    }
}
Types.propTypes = {
    type: PropTypes.bool.isRequired,
    name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}
Types.defaultProps = {
    type: 'num',
    name: 'react'
}