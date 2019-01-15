import React from 'react';
import timeToGo from 'tools/timeToGo'
export default (props) =>{
  const {raceStartTime,raceName,raceNumber,meeting}=props.raceItem;
  const {meetingDate,meetingName,location} = meeting;

  return (
    <li>
      <button>
        <div className="raceNumber"><strong>R{raceNumber}</strong></div>
        <div><h2 className="raceName">{raceName}</h2></div>
        <div>{timeToGo(props.currentTime,raceStartTime)}</div>
        <div className="meetingName">{meetingName}({location})</div>
        <div className="meetingDate">{meetingDate}</div>
      </button>
    </li>
  )
}