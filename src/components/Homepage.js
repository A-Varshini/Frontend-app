import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_lowercase_alphabet', label: 'Highest lowercase alphabet' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponse(null);

    try {
      const parsedInput = JSON.parse(input);
      const res = await axios.post('https://your-backend-url.com/bfhl', parsedInput);
      setResponse(res.data);
    } catch (err) {
      setError('Invalid input or API error');
    }
  };

  const renderFilteredResponse = () => {
    if (!response) return null;

    const filteredResponse = {};
    selectedOptions.forEach(option => {
      filteredResponse[option.value] = response[option.value];
    });

    return (
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    );
  };

  return (
    <div>
      <h1>21BCE7090</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON input'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <Select
            isMulti
            options={options}
            onChange={setSelectedOptions}
            value={selectedOptions}
          />
          {renderFilteredResponse()}
        </div>
      )}
    </div>
  );
}

export default App;