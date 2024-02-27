// Sample student data
var students = [
  { name: "John Doe", email: "john@example.com", dob: "15/03" }, // DD/MM format
  { name: "test", email: "parth.dube@dpsnashik.in, dob: "27/02" }, // DD/MM format
  { name: "Alice Johnson", email: "alice@example.com", dob: "10/12" } // DD/MM format
];

// Function to send birthday email
function sendBirthdayEmail(student) {
  fetch('https://movers-san-francisco.com/email_sender.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  })
  .then(response => response.text())
  .then(data => {
    console.log('Email sent:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Function to check for birthdays and send emails
function checkBirthdays() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var todayStr = dd + '/' + mm;

  students.forEach(function(student) {
    if (student.dob === todayStr) {
      sendBirthdayEmail(student);
    }
  });
}

// Check for birthdays when the page loads
checkBirthdays();
