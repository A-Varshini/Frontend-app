import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  const filteredResponse = response.filter((item) => {
    if (selectedOptions.includes('Alphabets') && /[a-zA-Z]/.test(item)) {
      return true;
    }
    if (selectedOptions.includes('Numbers') && /\d/.test(item)) {
      return true;
    }
    if (
      selectedOptions.includes('Highest lowercase alphabet') &&
      item === item.toLowerCase() &&
      item === item.toLowerCase().sort().pop()
    ) {
      return true;
    }
    return false;
  });

  return (
    <div  class="filtered-response">
      <h3>Response:</h3>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
