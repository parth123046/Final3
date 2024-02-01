const birthdays = [
    {
        name: "Jon Doe",
        birthday: "2000-02-01",
        class: "10",
        section: "A"
    },
    {
        name: "Jane Doe",
        birthday: "2000-01-02",
        class: "11",
        section: "B"
    }
];

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const todayDate = `${dd}-${mm}`;

const birthdayCard = document.querySelector('.birthday-card');
const nameElement = document.getElementById('name');
const birthdayElement = document.getElementById('birthday');

birthdays.forEach(birthday => {
    const birthdayDate = new Date(birthday.birthday);
    const birthdayDateFormatted = `${String(birthdayDate.getDate()).padStart(2, '0')}-${String(birthdayDate.getMonth() + 1).padStart(2, '0')}`;

    if (birthdayDateFormatted === todayDate) {
        birthdayCard.style.display = 'block';
        nameElement.textContent = `Name: ${birthday.name}`;
        birthdayElement.textContent = `Birthday: ${birthdayDateFormatted}`;
        document.body.appendChild(birthdayCard);
    }
});
