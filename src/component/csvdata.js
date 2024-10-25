import Papa from 'papaparse';
import { useState, useEffect } from 'react';

const useCsvData = (csvFilePath) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(csvFilePath)
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          complete: (result) => setData(result.data)
        });
      });
  }, [csvFilePath]);

  return data;
};

export default useCsvData;
