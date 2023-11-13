document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mc-form").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const apiKey = "21a43f896f076cc6ff4405174bbdbbff-us2";
      const dc = "us2";
  
      const url = `https://us2.api.mailchimp.com/3.0/lists/da5efafe44/`;
      console.log('here');
  
      console.log(document.getElementById("mailchimp-email").value);    
      fetch(url, {
        method: "POST",
        headers: {
          "Authorization": `Basic ${btoa(`anystring:${apiKey}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaign_defaults: {
            from_name: document.getElementById("mailchimp-fname").value,
            from_email: document.getElementById("mailchimp-email").value,
            subject: "",
            language: "",
          },
        }),
      })
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Request failed.");
          }
        })
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
  
      // You can perform any other actions after the request is sent
    });
  });
  