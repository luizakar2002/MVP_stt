import React, { useState, useEffect } from 'react';
import { Paper, TextField, IconButton, Button } from '@mui/material';
import edit from '../imgsforfront/edit.png';

const HTTP = "https://lukarape.pythonanywhere.com";
const GET_TEXT_ENDPOINT = `${HTTP}/get_text`;

function LeftColumn({ handleUserInputChange }) {
  const [fetchedText, setFetchedText] = useState('');

  const fetchTextFromEndpoint = async () => {
    try {
      const response = await fetch(GET_TEXT_ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        setFetchedText(data.text);
      } else {
        console.error('Error fetching text:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };

  const handleSetUserInput = () => {
    handleUserInputChange({ target: { value: fetchedText } });
  };

  return (
    <Paper sx={{ flex: 1, padding: '20px', height: '700px', marginBottom: '35px', marginTop: '35px',marginRight: '40px', marginLeft: '40px',borderRadius: 5 }}>
      <TextField
        label="Report"
        multiline
        rows={25}
        fullWidth
        variant="outlined"
        value={fetchedText}
        disabled
        color="primary"
      />
      {/* <img
        src={edit}
        alt="Icon"
        style={{ width: '40px', height: '40px', marginLeft: '35px', marginTop: '45px', marginRight: "10px" }}
      /> */}
      <Button type="submit" color="primary" style={{ width: "100px", marginTop: "45px", border: '2px solid #576db6', marginRight: '15px', color: "#4357a3" }}>
        Cancel
      </Button>
      <Button variant="contained" type="submit" color="primary" style={{ width: "100px", backgroundColor: '#4357a3', marginTop: "45px", marginLeft: "20px", border: '2px solid #4357a3' }}>
        Save
      </Button>
      <Button variant="contained" type="button" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "45px", marginLeft: "20px", border: '2px solid #4357a3' }} onClick={fetchTextFromEndpoint}>
        Get audio text
      </Button>
      <Button variant="contained" type="button" color="primary" style={{ backgroundColor: '#4357a3', marginTop: "45px", marginLeft: "20px", border: '2px solid #4357a3' }} onClick={handleSetUserInput}>
        Set audio text
      </Button>
    </Paper>
  );
}

export default LeftColumn;
