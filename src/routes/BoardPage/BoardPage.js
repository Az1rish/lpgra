import React, { Component } from 'react';
import { StyledBoard } from './BoardPage.style';
import { Officer } from '../../Components';
import Officers from '../../Data/Officers';

export default class BoardPage extends Component {
    
    renderOfficers = () => {
        return Officers.map((officer) => (
            <li>
                <img src={officer.photo} alt={officer.name} />
                <Officer
                    officer={officer}
                />
            </li>
        ))
    }
    render() {
        return (
            <StyledBoard>
                <h2>Contact information for board members can be found in the LPG Directory</h2>
                {this.renderOfficers()}
            </StyledBoard>
        )
    }
}