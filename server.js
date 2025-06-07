async function ask() {
      const prompt = document.getElementById('prompt').value;
      const output = document.getElementById('output');
      output.textContent = 'Waiting for response...';

      const res = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'smollm:360m',
          prompt: prompt,
          stream: false
        })
      });

      const data = await res.json();                            
      output.textContent = data.response; 
    }