import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './AllEventsList.css';

// CUSTOM COMPONENTS

function AllEventsList() {
  const dispatch = useDispatch();
  const events = useSelector((store) => store.events);

  useEffect(()=> {
    dispatch({type: "FETCH_ALL_EVENTS"})
  },[])

  return (
<>
    <h1>AllEventsList</h1>
    <caption>Filter:</caption>
    <select>
      <option disabled>Event Type</option>
      {/* TODO we're not using the 1:1 on any calendars, are we? */}
    <option disabled> 1 : 1 hangout</option>
    <option>Training</option>
    <option>Family</option>
    <option>Youth Only</option>
     
    </select>

    <input type='text' placeholder='Search'/>

    <caption>Sort</caption>
    <select>
        <option>Newest</option>
        <option>Oldest</option>
        <option>Upcoming</option>
    </select>

    {/* display all events from database */}
    <table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Date Time</th>
          <th>Description</th>
          <th>Location</th>
          <th>Event Type</th>
          <th>Program Location</th>
        </tr>
      </thead>
      <tbody>
        
        {events.map(event =>
        <tr key={event.id}>
          <td>{event.name}</td> 
          <td>{event.dateTime}</td>
          <td> {event.description}</td>
          <td> {event.location}</td>
          <td> {event.type} </td>
          <td>{event.programLocation} </td> 
        </tr>
        )}
      
      </tbody>
    </table>
</>   
  );
}

export default AllEventsList;