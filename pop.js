document.addEventListener('DOMContentLoaded', function () {
    // Ensure that the DOM is fully loaded before running the script
  
    // Select the button and add a click event listener
    var button = document.getElementById('get-title');
    
    // Ensure the button is found in the DOM
    if (button) {
      button.addEventListener('click', function() {
        // Query the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          // Grab the first tab object
          var activeTab = tabs[0];
          // Set the tab title in the paragraph with ID 'title'
          document.getElementById('title').textContent = activeTab.title;
          console.log(activeTab.title)
        });
      });
    } else {
      console.error("Button with id 'get-title' not found.");
    }
  });