const text = document.getElementById('text');
const video = document.getElementById('videoFeed');
const canvas = document.getElementById('canvas');
const userInput = document.getElementById('userInput');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const nb = document.getElementById('back-button');
const videoFeed = document.getElementById('videoFeed');

// Function to start the webcam feed
function startWebcam() {
  // Check if the browser supports accessing the webcam
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoFeed.style.display = "block";
        videoFeed.srcObject = stream; // Set the video element's source to the webcam feed
      })
      .catch(error => {
        console.error("Error accessing webcam:", error);
        text.textContent = "Unable to access webcam.";
      });
  } else {
    console.error("getUserMedia not supported on this browser.");
    text.textContent = "Webcam not supported on your browser.";
  }
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Your browser does not support speech synthesis.");
  }
}

function show() {
  video.style.display = "block";
  button1.style.display = "inline";
  button2.style.display = "inline";
  button3.style.display = "inline";
  nb.style.display = "none";
  text.style.display = "none";
  text.textContent = "";
}

// Start the webcam feed when the page loads or when needed
startWebcam();


// const img = document.getElementById('stopSign');
// const text = document.getElementById('text');
// const nb = document.getElementById('back-button');

function replace() {
  video.style.display = "none";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  nb.style.display = "block";
  text.style.display = "block";
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to data URL
  const dataURL = canvas.toDataURL('image/png');

  // Send a request to the server
  fetch('http://127.0.0.1:5000/submit_query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ frame: dataURL, query: "What is this?" }) // Send data to the backend
  })
  .then(response => response.json()) // Parse the JSON response
  .then(result => {
    // Update the text field with the server's response
    text.textContent = result.response;
    speakText(result.response);
  })
  .catch(error => {
    console.error("Error:", error);
    text.textContent = "An error occurred.";
  });
}


