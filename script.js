// Sample student data
var students = [
  { name: "John Doe", email: "john@example.com", dob: "15/03" }, // DD/MM format
  { name: "Jane Smith", email: "jane@example.com", dob: "20/05" }, // DD/MM format
  { name: "test", email: "parth.dube@dpsnashik.in", dob: "27/02" } // DD/MM format
];

// Function to send birthday email
function sendBirthdayEmail(student) {
  return new Promise((resolve, reject) => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
    .then(response => response.text())
    .then(data => {
      console.log('Email sent:', data);
      resolve(student.name);
    })
    .catch((error) => {
      console.error('Error:', error);
      reject(error);
    });
  });
}

// Function to check for birthdays and send emails
async function checkBirthdays() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var todayStr = dd + '/' + mm;

  var sentStudentsList = document.getElementById('sentStudents');

  for (const student of students) {
    if (student.dob === todayStr) {
      try {
        const sentStudentName = await sendBirthdayEmail(student);
        // Update the list of sent students
        var listItem = document.createElement('li');
        listItem.textContent = sentStudentName;
        sentStudentsList.appendChild(listItem);
      } catch (error) {
        console.error('Error sending email for:', student.name);
      }
    }
  }
}

// Check for birthdays when the page loads
checkBirthdays();
