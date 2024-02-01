document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
        { name: 'John Doe', birthday: '29-01', class: 'X', section: 'A' },
        { name: 'Jane Smith', birthday: '15-05', class: 'XI', section: 'B' },
        { name: 'Michael Johnson', birthday: '10-12', class: 'XII', section: 'C' },
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

    data.forEach(person => {
        if (person.birthday === todayFormatted) {
            birthdayListHTML += `
                <div class="birthday">
                    <p><span class="name">${person.name}</span> from class ${person.class} section ${person.section} is celebrating their birthday today! 🎉🎂</p>
                </div>
            `;
        }
    });

    if (birthdayListHTML === '') {
        birthdayListHTML = '<p>No birthdays today!</p>';
    }

    document.getElementById('birthdayList').innerHTML = birthdayListHTML;
}
