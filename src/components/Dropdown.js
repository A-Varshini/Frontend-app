import React from 'react';

const Dropdown = ({ options, selectedOptions, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter((opt) => opt !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option} class="api-input">
          <input
            type='checkbox'
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </div>
      ))}
      <div class="form-container">
  <div class="api-input">
    </div>
  <button class="submit-button">Submit</button>
  <div class="multi-filter">
    </div>
  <div class="filtered-response">
    </div>
</div>
    </div>
  );
};

export default Dropdown;
