import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';
import './Design.css';
const App = () => {
  const [response, setResponse] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleJsonSubmit = async (jsonData) => {
    try {
      const res = await fetch('http://localhost:5000/your-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      const data = await res.json();
      setResponse(data.response); // Assuming your API returns a JSON with key 'response'
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div class="form-container">
  <div >
    </div>
  
  <div class="multi-filter">
    </div>
  <div>
    </div>
</div>


      <h1><center>JSON Processor-21bce8109</center></h1>
      <JsonInput  onSubmit={handleJsonSubmit} />
      {response.length > 0 && (
        <Dropdown
          options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />
      )}
      {response.length > 0 && (
        <ResponseDisplay response={response} selectedOptions={selectedOptions} />
      )}
    </div>
  );
};

export default App;
