import { useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [inputSelector, setInputSelector] = useState(true);
  const [inputCb, setInputCb] = useState(false);
  const [inputPrio, setInputPrio] = useState(0);
  const [dataArray, setDataArray] = useState(null);

  const handleValueInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectorInput = (event) => {
    setInputSelector(event.target.checked);
  };

  const handleCbInput = (event) => {
    setInputCb(event.target.checked);
  };

  const handlePrioInput = (event) => {
    setInputPrio(event.target.value);
  };

  useEffect(() => {
    const jsonData = localStorage.getItem('data');

    // Parse JSON string back into an object
    const parsedData = JSON.parse(jsonData);

    // Update state with parsed data
    setDataArray(parsedData);
  }, []);

  const handleAddData = () => {
    // Construct an object with the input values
    const data = {
      value: inputValue,
      selector: inputSelector,
      cb: inputCb,
      prio: inputPrio,
    };

    // Convert the object to a JSON string
    const jsonData = JSON.stringify(data);

    // Store the JSON string in localStorage
    localStorage.setItem('data', jsonData);

    // Clear the input fields after adding the value
    setInputValue(0);
    setInputSelector(true);
    setInputCb(false);
    setInputPrio(0);
  };

  return (
    <div className="container">
      <h1>test</h1>
      <div className="value">
        <label>Value: </label>
        <input type="text" value={inputValue} onChange={handleValueInput} />
      </div>

      <div className="selector">
        <label>Selector: </label>
        <input
          type="checkbox"
          checked={inputSelector}
          onChange={handleSelectorInput}
        />
      </div>

      <div className="second-cb">
        <label>CB: </label>
        <input type="checkbox" checked={inputCb} onChange={handleCbInput} />
      </div>

      <div className="prio-status">
        <label>Prioritas: </label>
        <input type="text" value={inputPrio} onChange={handlePrioInput} />
      </div>
      <button className="add-data-btn" onClick={handleAddData}>
        Add data
      </button>

      <div>
        <h2>List datanya:</h2>
        <ul>
          {dataArray ? (
            <div>
              <p>Value: {dataArray.value}</p>
              <p>Selector: {dataArray.selector ? 'True' : 'False'}</p>
              <p>CB: {dataArray.cb ? 'True' : 'False'}</p>
              <p>Prioritas: {dataArray.prio}</p>
            </div>
          ) : (
            <p>No data stored</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
