/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import MinutesData from '../../Data/MinutesData';
import schedule from '../../images/2021_Meetings.pdf';
import { Minutes } from '../../Components';
import { StyledMinutesList } from './MinutesListPage.style';
import MinutesPDFData from '../../Data/MinutesPDFData';

export default class MinutesListPage extends Component {
    renderMinutes() {
        return !MinutesData.length
            ? <p>Currently no meeting minutes available. Please try back later.</p>
            : MinutesData.reverse().map((datum) => <Minutes
                    key={datum.id}
                    meeting={datum}
                />
            )
    }

    renderPDFMinutes() {
        return !MinutesPDFData.length
            ? <p>Currently no meeting minutes available, Please try back later.</p>
            : MinutesPDFData.reverse().map((minutes) => <a 
                href={minutes.path} 
                target='_blank' 
                rel='noopener noreferrer'>
                    {minutes.date}
                </a>
            )
    }

    render() {
        return (
            <StyledMinutesList>
                <a href={schedule}>Click here for 2021 Meeting Schedule</a>
                <h2>Meetings Minutes List</h2>
                {this.renderPDFMinutes()}
                {this.renderMinutes()}
            </StyledMinutesList>
        )
    }
}