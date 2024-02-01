document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
        { name: 'John Doe', birthday: '29-01', class: 'X', section: 'A' },
        { name: 'Jane Smith', birthday: '15-05', class: 'XI', section: 'B' },
        { name: 'Michael Johnson', birthday: '01-02', class: 'XII', section: 'C' },
        { name: 'Alice Johnson', birthday: '01-02', class: 'IX', section: 'D' } // Added birthday for 1st February
    ];

    checkBirthdays(birthdays);
});

function checkBirthdays(data) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const todayFormatted = dd + '-' + mm;

    let birthdayListHTML = '';

    const matchingBirthdays = data.filter(person => person.birthday === todayFormatted);

    if (matchingBirthdays.length === 1) {
        const person = matchingBirthdays[0];
        birthdayListHTML = `
            <div class="birthday">
                <p><span class="name">${person.name}</span> from class ${person.class} section ${person.section} is celebrating their birthday today! 🎉🎂</p>
            </div>
        `;
    } else if (matchingBirthdays.length > 1) {
        birthdayListHTML = '<div class="birthday"><p>Celebrating birthdays today:</p>';
        matchingBirthdays.forEach(person => {
            birthdayListHTML += `<p><span class="name">${person.name}</span> from class ${person.class} section ${person.section}</p>`;
        });
        birthdayListHTML += '</div>';
    } else {
        birthdayListHTML = '<p>No birthdays today!</p>';
    }

    document.getElementById('birthdayList').innerHTML = birthdayListHTML;
}
