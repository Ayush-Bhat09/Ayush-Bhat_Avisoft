const jsonFiles = [
  'data1.json',
  'data2.json'
];


function displayResult(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = JSON.stringify(data, null, 2); 
}

document.getElementById('btnFetch').addEventListener('click', () => {
  fetch('data1.json')
    .then(response => response.json())
    .then(data => {
      displayResult(data);
    })
    .catch(error => {
      displayResult({ error: 'Failed to load file' });
    });
});

document.getElementById('btnAsyncAwait').addEventListener('click', async () => {
  try {
    const response = await fetch('data2.json');
    const data = await response.json();
    displayResult(data);
  } catch (error) {
    displayResult({ error: 'Failed to load file' });
  }
});

document.getElementById('btnPromiseAll').addEventListener('click', async () => {
  try {
    const data = await Promise.all(jsonFiles.map(async (file) => {
      const response = await fetch(file);
      return response.json();
    }));
    
    displayResult(data);
  } catch (error) {
    displayResult({ error: 'Failed to load files' });
  }
});
