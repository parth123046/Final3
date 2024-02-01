const birthdays = [
    {
        name: "John Doe",
        birthday: "01-01",
        class: "10",
        section: "A"
    },
    {
        name: "Jane Doe",
        birthday: "15-02",
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
    if (birthday.birthday === todayDate) {
        birthdayCard.style.display = 'block';
        nameElement.textContent = `Name: ${birthday.name}`;
        birthdayElement.textContent = `Birthday: ${birthday.birthday}`;
        document.body.appendChild(birthdayCard);
    }
});
