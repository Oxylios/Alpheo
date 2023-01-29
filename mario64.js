
      function generateText() {
        var input = document.getElementById("input").value;
        let apy = document.getElementById("ako").value;
        function showLoader() {
            document.getElementById("loader").style.display = "block";
          }
          function hideLoader() {
            document.getElementById("loader").style.display = "none";
          }
        
        showLoader();  
        fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apy}`
          },
          body: JSON.stringify({
            prompt: "User : "+input +"\n Bot: ",
            temperature: 0.5,
            max_tokens: 2000
            })
          })
          .then(response => response.json())
          .then(data => {
            hideLoader()
            document.getElementById("output").value = data.choices[0].text;
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }

      
   