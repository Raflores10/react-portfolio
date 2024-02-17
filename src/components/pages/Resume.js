import React from 'react';

export default function Resume() {
  return (
    <div className='skills text-center'>
      <p className='mt-3'>Resume</p>
      <h2 className='title'>Front End Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Jquery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <br/>
      <h2 className='title'>Back End Skills</h2>
      <ul>
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}