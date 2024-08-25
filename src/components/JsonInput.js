import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


      
 
const JsonInput = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      if (parsedJson && typeof parsedJson === 'object') {
        setError('');
        onSubmit(parsedJson);
      }
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    
    <div>
        <div class="hero"> 
  {/* <div class="hero__title">JSON Processor-21bce8109</div> */}
 
        {/* <div class="form-container">
  <label for="api-input">API Input:</label>
  <input type="text" id="api-input" value='{"data":["M","1","334","4","B"]}'>
  <button id="submit-button">Submit</button>

  <div class="multi-filter">
    <label for="filter-numbers">Numbers:</label>
    <input type="checkbox" id="filter-numbers" checked>
  </div>

  <div class="filtered-response">
    <p id="filtered-result"></p>
  </div>
</div> */}
        
        <div class="form-container">
  
 
 

      <textarea class="api-input"
        value={jsonInput}
        onChange={handleInputChange}
        placeholder='Enter JSON here'
      ></textarea>
      <div>
    
  
        </div>
      <div class="multi-filter">
    
      <button class="submit-button" onClick={handleSubmit}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div> 
      <div class="filtered-response">
      </div></div></div>
      <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
  );
};

export default JsonInput;
