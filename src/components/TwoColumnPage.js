import React, { useState, useEffect } from 'react';
import HeaderBox from './HeaderBox';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

// const HTTP = "http://127.0.0.1:8000/chat";
// const GET_TEXT_ENDPOINT = "http://127.0.0.1:8000/get_text";
const HTTP = "https://lukarape.pythonanywhere.com/chat";
const GET_TEXT_ENDPOINT = "https://lukarape.pythonanywhere.com/get_text";

function TwoColumnPage() {
  const [setUserInput] = useState('');

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Fetch text from /get_text endpoint and set it as user input on component mount
  useEffect(() => {
    const fetchTextFromEndpoint = async () => {
      try {
        const response = await fetch(GET_TEXT_ENDPOINT);
        const data = await response.json();
        setUserInput(data.text);
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };

    fetchTextFromEndpoint();
  }, []);

  return (
    <div>
      <HeaderBox />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <LeftColumn  handleUserInputChange={handleUserInputChange} />
        {/* <RightColumn generatedText={generatedText} /> */}
      </div>
    </div>
  );
}

export default TwoColumnPage;
