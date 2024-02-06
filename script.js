document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
       
        { name: 'Alice Johnson', birthday: '06-02' },
        { name: 'Alice Johnson', birthday: '06-02' },
        { name: 'AARVIKA KSHITI Targe', birthday: '02-03' },
        { name: 'ANAYRA ADITYA VENUGOPAL', birthday: '19-02' },
        { name: 'HARSHIT MANISH TATIYA', birthday: '21-04' },
        { name: 'TASHVIKA AKASH SACHDEV', birthday: '01-02' },
        { name: 'AARYA YASHWANT SONAWANE', birthday: '08-01' },
        { name: 'ANUP AMOL GITE', birthday: '20-04' },
        { name: 'GARGI HANSRAJ DEORE', birthday: '27-05' },
        { name: 'HRIDYA SUMIT CHORDIYA', birthday: '15-12' },
        { name: 'KAVISH PRAVIN GITE', birthday: '10-01' },
        { name: 'Keyansh Abhishek Vedia', birthday: '07-02' },
        { name: 'Manan Amit Chordiya', birthday: '11-02' },
        { name: 'Pratishtha Raj Chundawat', birthday: '22-08' },
        { name: 'Sarvesh Tushar Lahoti', birthday: '13-02' },
        { name: 'Shivansh Jayesh Sonaje', birthday: '01-01' },
        { name: 'Sia Yogesh Savadekar', birthday: '06-03' },
        { name: 'Vidur Siddharth Rajgarhia', birthday: '25-09' },
        { name: 'Keyansh Abhishek Vedia', birthday: '07-02' },
        { name: 'Aarohi Shivaram Suryawanshi', birthday: '03-12' },
        { name: 'Advita Sushil Shewale', birthday: '18-11' },
        { name: 'Anay Sandeep Ishi', birthday: '02-09' },
        { name: 'Apurva Suresh Patil', birthday: '11-10' },
        { name: 'Arpita Rahul Desale', birthday: '03-09' },
        { name: 'Atharv Shrikant Gond', birthday: '27-07' },
        { name: 'Bhargav Ravindra Kamodkar', birthday: '02-06' },
        { name: 'Dishant Sujit Jena', birthday: '17-12' },
        { name: 'Divisha Yadav', birthday: '08-05' },
        { name: 'Girisha Kiran Nagpure', birthday: '31-03' },
        { name: 'Hridhaan Sagar Pardeshi', birthday: '21-05' },
        { name: 'Hruta Tushar Joshi', birthday: '10-05' },
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
                <p><span class="name">${person.name}</span> is celebrating birthday today! 🎉🎂</p>
            </div>
        `;
    } else if (matchingBirthdays.length > 1) {
        birthdayListHTML = '<div class="birthday"><p>They are celebrating their birthdays today!</p>';
        matchingBirthdays.forEach(person => {
            birthdayListHTML += `<p><span class="name">${person.name} 🎉🎂</span>  </p>`;
        });
        birthdayListHTML += '</div>';
    } else {
        birthdayListHTML = '<p>No birthdays today!</p>';
    }

    document.getElementById('birthdayList').innerHTML = birthdayListHTML;
}
