// script.js

// Function to calculate the volume of a sphere
function volume_sphere() {
  // Get the radius value from the input field
  var radius = parseFloat(document.getElementById("radius").value);

  // Check if the input is a valid number
  if (isNaN(radius)) {
    alert("Please enter a valid number for the radius.");
    return;
  }

  // Calculate the volume of the sphere
  var volume = (4/3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2); // You can adjust the number of decimal places as needed
}

