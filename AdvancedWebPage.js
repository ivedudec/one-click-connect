/* 

Filename: AdvancedWebPage.js

This code demonstrates an advanced web page using JavaScript. It includes various features like DOM manipulation, event handling, AJAX request, object-oriented programming, and responsive design.

*/

// Define a class for handling AJAX requests
class AJAXRequest {
  constructor(url, method, successCallback, errorCallback) {
    this.url = url;
    this.method = method;
    this.successCallback = successCallback;
    this.errorCallback = errorCallback;
  }

  send() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          this.successCallback(this.responseText);
        } else {
          this.errorCallback(this.status);
        }
      }
    };
    xhttp.open(this.method, this.url, true);
    xhttp.send();
  }
}

// Add an event listener to the "click me" button
document.getElementById("btn-click-me").addEventListener("click", function() {
  alert("You clicked the button!");
});

// Create a responsive navigation bar
function toggleNav() {
  const nav = document.getElementById("myNav");
  if (nav.style.height === "100%") {
    nav.style.height = "0%";
  } else {
    nav.style.height = "100%";
  }
}

// Handle form submission asynchronously
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const data = {};
  for (let entry of formData.entries()) {
    data[entry[0]] = entry[1];
  }
  
  const request = new AJAXRequest(
    "https://api.example.com/submit",
    "POST",
    function(response) {
      alert("Form submitted successfully!");
    },
    function(error) {
      alert("An error occurred: " + error);
    }
  );
  
  request.send(JSON.stringify(data));
});

// Utility function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Generate a table of prime numbers
function generatePrimeTable(rows, cols) {
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      let num = i * cols + j + 1;
      if (isPrime(num)) {
        cell.textContent = num;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("primeTableContainer").appendChild(table);
}

generatePrimeTable(10, 10); // Generate a 10x10 prime number table

// More code...
// ...
// ...

// Last line of the code
console.log("Code execution completed.");