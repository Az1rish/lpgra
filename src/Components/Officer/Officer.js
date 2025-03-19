import React, { Component } from 'react';
import { StyledOfficer } from './Officer.style';

export default class Officer extends Component {
    render() {
        const { officer } = this.props;

        const {
            name,
            position,
            term,
            unit,
        } = officer;
        
        return (
            <StyledOfficer>
                <h2>{position}</h2>
                <h3>{name}</h3>
                <p>Unit #{unit}</p>
                <p>Current term ends November {term}</p>
            </StyledOfficer>
        )
    }  
}

