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
        { name: 'Isha Amol Kumawat', birthday: '14-10' },
        { name: 'Ishan Dhanraj Thepane', birthday: '27-07' },
        { name: 'Kayra Abhiraj Pawar', birthday: '28-11' },
        { name: 'Lavanya Patil', birthday: '27-09' },
        { name: 'Mishka Nirajkumar Gupta', birthday: '30-01' },
        { name: 'Naman Vijay Sharma', birthday: '11-07' },
        { name: 'Neelansh Nirajkumar Gupta', birthday: '30-01' },
        { name: 'Nyaree Nitesh Thakkar', birthday: '04-10' },
        { name: 'Omkar Atmaram Sable', birthday: '12-08' },
        { name: 'Parth Avinash Bhangre', birthday: '14-05' },
        { name: 'Pragyan Piyush Lahoti', birthday: '29-12' },
        { name: 'Rajeshwari Balaji Pingle', birthday: '30-05' },
        { name: 'Rajveer Bharat Gite', birthday: '03-07' },
        { name: 'Ramani Lasya Muthyala', birthday: '08-06' },
        { name: 'Raumaan Mansuri', birthday: '07-10' },
        { name: 'Reeva Amit Sethiya', birthday: '01-01' },
        { name: 'Reeyansh Bhaulal Nagare', birthday: '19-04' },
        { name: 'Rugved Nitin Sonawane', birthday: '11-09' },
        { name: 'Rushi Sandeep Kapse', birthday: '24-12' },
        { name: 'Sanvi Sachin Gambhire', birthday: '11-07' },
        { name: 'Shivaanya Sangamesh Kupast', birthday: '14-02' },
        { name: 'Shivaksh Yogesh Aher', birthday: '24-12' },
        { name: 'Shivansh Amit Sonawane', birthday: '08-11' },
        { name: 'Shivnya Sagar Khode', birthday: '16-07' },
        { name: 'Shivtej Darshan Talikot', birthday: '19-02' },
        { name: 'Shreejay Vijay Tile', birthday: '23-05' },
        { name: 'Swara Vijay Nagare', birthday: '17-12' },
        { name: 'Swayam Siddharth Bhogle', birthday: '12-12' },
        { name: 'Aadya Jha', birthday: '31-03' },
        { name: 'Aayra Virendra Lawande', birthday: '10-12' },
        { name: 'Advira Vinayak Bachhav', birthday: '29-10' },
        { name: 'Arjun Ashish Chaudhari', birthday: '31-01' },
        { name: 'Arjun Yogesh Kapadnis', birthday: '21-06' },
        { name: 'Maithili Dinesh Bramhankar', birthday: '14-05' },
        { name: 'Reyansh Tanmay Hiran', birthday: '14-06' },
        { name: 'Sanay Mukesh Harwani', birthday: '06-02' },
        { name: 'Aalap Atul Ahirrao', birthday: '31-12' },
        { name: 'Aayush Somnath Jejurkar', birthday: '02-03' },
        { name: 'Abhipray Agnihotri', birthday: '25-05' },
        { name: 'Advik Rohit Pagar', birthday: '20-02' },
        { name: 'Aikanshaa Sunit Mhasade', birthday: '30-12' },
        { name: 'Anjaneya Nayak', birthday: '04-09' },
        { name: 'Anura Gupta', birthday: '14-02' },
        { name: 'Arnav Shirish Malve', birthday: '28-04' },
        { name: 'Arya Prashant Patil', birthday: '08-08' },
        { name: 'Avanish Manoj Kale', birthday: '25-08' },
        { name: 'Avisha Harish Godse', birthday: '25-10' },
        { name: 'Lavanya Dhatrak', birthday: '25-01' },
        { name: 'Manas Rajendra Bagul', birthday: '15-10' },
        { name: 'Moulik Verma', birthday: '13-08' },
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
