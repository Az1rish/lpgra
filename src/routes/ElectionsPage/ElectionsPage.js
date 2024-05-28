import React, { Component } from 'react';
import { StyledElections } from './ElectionsPage.style';
import questionnaire from '../../images/Candidate_Questionnaire.pdf';
// import absentee2023 from '../../images/Absentee_Ballot_November_2023.pdf';
// import gerle from '../../images/L_Gerle_Questionnaire_2022.pdf';
// import marcone from '../../images/P_Marcone_Questionnaire_2022.pdf';
// import smith from '../../images/S_Smith_Questionnaire_2022.pdf';

export default class ElectionsPage extends Component {
    render() {
        return (
            <StyledElections>
                <h2>Information Regarding LPGRA Elections</h2>
                <a href={questionnaire} target="_blank" rel="noopener noreferrer">
                    Questionnaire for Potential Candidates
                </a>
                {/* <a href={absentee2023} target="_blank" rel="noopener noreferrer">
                    2023 Absentee Ballot
                </a> */}
                {/* <ul>
                    <h2>Meet the Candidates</h2>
                    <li><a href={gerle} target="_blank" rel="noopener noreferrer">
                        Linda Gerle
                    </a></li>
                    <li><a href={marcone} target="_blank" rel="noopener noreferrer">
                        Peggy Marcone
                    </a></li>
                    <li><a href={smith} target="_blank" rel="noopener noreferrer">
                        Sue Smith
                    </a></li>
                </ul> */}
            </StyledElections>
        )
    }
}