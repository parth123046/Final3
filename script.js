document.addEventListener('DOMContentLoaded', function() {
    const birthdays = [
       
        
        { name: 'Alice Johnson', birthday: '05-02' },
        { name: 'Alice Johnson', birthday: '05-02' },
        { name: 'AARVIKA KSHITI Targe', birthday: '02-03' },
        { name: 'ANAYRA ADITYA VENUGOPAL', birthday: '19-02' },
        { name: 'HARSHIT MANISH TATIYA', birthday: '21-04' },
        { name: 'TASHVIKA AKASH SACHDEV', birthday: '01-02' },
        { name: 'AARYA YASHWANT SONAWANE', birthday: '08-01' },
        { name: 'ANUP AMOL GITE', birthday: '20-04' },
        { name: 'GARGI HANSRAJ DEORE', birthday: '27-05' },
        { name: 'HRIDYA SUMIT CHORDIYA', birthday: '15-12' },
        { name: 'KAVISH PRAVIN GITE', birthday: '10-01' },
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
        { name: 'Rugveda Ravindra Chavan', birthday: '10-09' },
        { name: 'Rutul Pravin Pawar', birthday: '20-04' },
        { name: 'Saavi Yogesh Bhusare', birthday: '07-06' },
        { name: 'Samiksha Saklani', birthday: '22-11' },
        { name: 'Shaurya Abhay Malpure', birthday: '01-03' },
        { name: 'Shlok Alok Kumar', birthday: '26-08' },
        { name: 'Shloka Kumar', birthday: '03-10' },
        { name: 'Shubhra Sandeep Patil', birthday: '24-05' },
        { name: 'Swaroop Tushar Pagar', birthday: '13-08' },
        { name: 'Varad Kishor Gite', birthday: '05-03' },
        { name: 'Abhimanyu Atul Gosavi', birthday: '13-07' },
        { name: 'Abhinav Vasant Pathave', birthday: '17-10' },
        { name: 'Advika Amol Morankar', birthday: '13-02' },
        { name: 'Ananya Shrikant Kumavat', birthday: '17-02' },
        { name: 'Anwit Manoj Bhate', birthday: '10-12' },
        { name: 'Archit Atit Admulwar', birthday: '27-02' },
        { name: 'Asmi Amol Thakare', birthday: '26-10' },
        { name: 'Daksh Vishal Rane', birthday: '18-03' },
        { name: 'Dishita Lakhan Khatri', birthday: '10-11' },
        { name: 'Girija Vijay Kulkarni', birthday: '04-04' },
        { name: 'Ira Sameer Pathari', birthday: '07-11' },
        { name: 'Ira Sumant Biyani', birthday: '29-09' },
        { name: 'Isha Kumar', birthday: '03-10' },
        { name: 'Mitali Vikas Shirode', birthday: '15-10' },
        { name: 'Nairiti Vasant Khandvi', birthday: '23-10' },
        { name: 'Rahitya Akash Sachdev', birthday: '16-02' },
        { name: 'Riaan Mahesh Ahire', birthday: '15-06' },
        { name: 'Rudra Vikas Shewale', birthday: '18-04' },
        { name: 'Samarth Nandkumar Babar', birthday: '09-04' },
        { name: 'Sarvadnya Sudarshan Gite', birthday: '03-03' },
        { name: 'Shivaay Shrivastava', birthday: '27-08' },
        { name: 'Shravani Hemant Rayate', birthday: '28-07' },
        { name: 'Soham Girish Sulakshane', birthday: '28-10' },
        { name: 'Swaranshi Sagar Pagar', birthday: '11-10' },
        { name: 'Thanvi Sunil Jaiswal', birthday: '01-08' },
        { name: 'Varun Janardan Shelke', birthday: '19-07' },
        { name: 'Vihaan Vaibhav Pardeshi', birthday: '22-11' },
        { name: 'Vihan Pravin Kumbhar', birthday: '09-09' },
        { name: 'Vikrant Vijay Kulkarni', birthday: '04-04' },
        { name: 'Anaya Vishal Gaikwad', birthday: '20-09' },
        { name: 'Anirudh Kaushik', birthday: '20-03' },
        { name: 'Divyanka Sourabh Sharma', birthday: '06-10' },
        { name: 'Ishan Amit Kele', birthday: '23-07' },
        { name: 'Ivanna Kotak', birthday: '13-04' },
        { name: 'Jija Sameer Kale', birthday: '19-05' },
        { name: 'Khush Manish Tatiya', birthday: '22-12' },
        { name: 'Naitik Vardhaman Sancheti', birthday: '12-12' },
        { name: 'Riaansh Rahul Patil', birthday: '07-01' },
        { name: 'Riaansha Rahul Patil', birthday: '07-01' },
        { name: 'Shreeya Lalit Derle', birthday: '17-04' },
        { name: 'Vikram Balaji', birthday: '06-10' },
        { name: 'Yansh Abhijeet Tatiya', birthday: '09-03' },
        { name: 'Aaditya Sandip Rathod', birthday: '17-10' },
        { name: 'Aakanksh Sunit Kadam', birthday: '26-12' },
        { name: 'Aarush Nitin Patil', birthday: '28-05' },
        { name: 'Aashirya Saha', birthday: '23-05' },
        { name: 'Advik Abhiraj Pawar', birthday: '14-04' },
        { name: 'Alabhya Mishra', birthday: '17-01' },
        { name: 'Ananya Amol Pargaonkar', birthday: '11-08' },
        { name: 'Anisha Sharma', birthday: '24-05' },
        { name: 'Arnavi Narendra Khode', birthday: '05-06' },
        { name: 'Avanish Satish Vaishnav', birthday: '06-03' },
        { name: 'Devansh Sunil Thete', birthday: '18-11' },
        { name: 'Dwisha Digvijay Mandale', birthday: '17-09' },
        { name: 'Falak Sunil Jaiswal', birthday: '05-11' },
        { name: 'Hansika Pradeep Gangurde', birthday: '09-03' },
        { name: 'Jeenal Rahul Patil', birthday: '13-06' },       { name: 'Jiyansh Pritesh Mutha', birthday: '23-06' },
        { name: 'Krita Siddharth Jain', birthday: '07-11' },
        { name: 'Mayank Rahul Kayastha', birthday: '14-03' },
        { name: 'Navya Nagariya', birthday: '16-06' },
        { name: 'Navya Swapnil Mahajan', birthday: '14-03' },
        { name: 'Niharika Kailas Bhoye', birthday: '09-09' },
        { name: 'Nitya Madhusudan More', birthday: '11-06' },
        { name: 'Ojas Sandeep Jadhav', birthday: '21-11' },
        { name: 'Ojaswi Anand Bodkhe', birthday: '02-08' },
        { name: 'Piyush Deepak Thakur', birthday: '09-04' },
        { name: 'Pranit Kiran Medhe', birthday: '07-03' },
        { name: 'Punit Harshad Patel', birthday: '01-10' },
        { name: 'Savreen Kaur Kohli', birthday: '08-06' },
        { name: 'Shaurya Lalit Bangera', birthday: '13-10' },
        { name: 'Subhansh Singh', birthday: '22-06' },
        { name: 'Swethan Tanmay Patel', birthday: '22-07' },
        { name: 'Tanish Balot', birthday: '11-11' },
        { name: 'Varuni Prashant Chavan', birthday: '16-08' },
        { name: 'Vivaan Nikhil Gavate', birthday: '24-05' },
        { name: 'Aaditya Yogesh Kadam', birthday: '13-11' },
        { name: 'Aarvi Amol Chandgude', birthday: '06-10' },
        { name: 'Aashna Rahul Mohite', birthday: '11-12' },
        { name: 'Abhinandan Gaurav Sonar', birthday: '07-10' },
        { name: 'Adamya Rai', birthday: '26-01' },
        { name: 'Advik Mahesh Salunke', birthday: '07-11' },
        { name: 'Anannya Yogesh Kolhe', birthday: '22-02' },
        { name: 'Aneya Bhushan Pingle', birthday: '19-03' },
        { name: 'Anvi Girish Bendkoli', birthday: '01-09' },
        { name: 'Aryan Mahendra Ahire', birthday: '07-12' },
        { name: 'Bhagwati Yogesh Jadhav', birthday: '05-11' },
        { name: 'Chinmayi Hemant Ner', birthday: '12-09' },
        { name: 'Divisha Singh', birthday: '15-07' },
        { name: 'Garv Satti', birthday: '21-05' },
        { name: 'Jatin Yogiraj Bhoye', birthday: '11-10' },
        { name: 'Kshitij Ashish Gogawale', birthday: '26-04' },
        { name: 'Manva Bhushan Ingale', birthday: '08-02' },
        { name: 'Nahush Nikhil Kulkarni', birthday: '20-10' },
        { name: 'Niket Pravin Padvi', birthday: '02-11' },
        { name: 'Nishna Samantaray', birthday: '10-04' },
        { name: 'Nyra Siddharth Rajgarhia', birthday: '20-11' },
        { name: 'Ojal Pritesh Bora', birthday: '09-01' },
        { name: 'Om Sachin Ilag', birthday: '28-06' },
        { name: 'Palvit Ravindra Gangurde', birthday: '25-03' },
        { name: 'Priyal Paresh Pawar', birthday: '24-08' },
        { name: 'Raghav Dhananjay Sangle', birthday: '04-06' },
        { name: 'Rajveer Hemant More', birthday: '22-04' },
        { name: 'Saanvi Rajendra Kadam', birthday: '05-03' },
        { name: 'Saumya Sunil Sangle', birthday: '06-01' },
        { name: 'Savani Sagar Khambait', birthday: '01-06' },
        { name: 'Sharvin Subhash Pawar', birthday: '26-11' },
        { name: 'Shilp Manjeet Raj', birthday: '17-09' },
        { name: 'Swarit Kartarsing Thakur', birthday: '06-10' },
        { name: 'Trisha Prashant Shimpi', birthday: '12-03' },
        { name: 'Vihaan Raju Aghav', birthday: '15-03' },
        { name: 'Aarvi Vijay Sonawane', birthday: '01-11' },
        { name: 'Aayansh Santosh Sonawane', birthday: '20-03' },
        { name: 'Advita Amol Deshmukh', birthday: '07-01' },
        { name: 'Advita Hemant Deshmukh', birthday: '17-04' },
        { name: 'Ameya Amit Kothawade', birthday: '01-06' },
        { name: 'Anaya Aniket Ambekar', birthday: '09-11' },
        { name: 'Anshuman Lalit Bhadange', birthday: '15-12' },
        { name: 'Anvi Yuvraj Vadaje', birthday: '16-11' },
        { name: 'Arihan Upadhyay', birthday: '19-10' },
        { name: 'Dhara Vilas Kuwar', birthday: '20-12' },
        { name: 'Dnyanada Sachin Kotwal', birthday: '28-03' },
        { name: 'Hridaya Yogesh Patil', birthday: '11-12' },
        { name: 'Jiyansh Mukesh Sunaria', birthday: '14-09' },
        { name: 'Kaira Aditya Karwa', birthday: '13-09' },
        { name: 'Kiyaan Parimal Sawant', birthday: '08-06' },
        { name: 'Kiyara Ajay Kapoor', birthday: '12-10' },
        { name: 'Mantra Pravin Sharma', birthday: '26-10' },
        { name: 'Mihan Mahavir Achaliya', birthday: '22-06' },
        { name: 'Nilay Piyush Kadam', birthday: '18-03' },
        { name: 'Nitya Devendra Solanki', birthday: '12-05' },
        { name: 'Omkar Umesh Jagzap', birthday: '20-07' },
        { name: 'Parth Aditya Ramdasi', birthday: '20-10' },
        { name: 'Prisha Swapnil Nikam', birthday: '21-09' },
        { name: 'Ridansh Harshal Patil', birthday: '01-01' },
        { name: 'Saanvi Shrivastava', birthday: '25-02' },
        { name: 'Samar Sagar Shelar', birthday: '26-05' },
        { name: 'Shaurya Vishal Saidpatil', birthday: '21-09' },
        { name: 'Shivansh Nitin Naik', birthday: '21-12' },
        { name: 'Shreyas Pravin Gite', birthday: '19-07' },
        { name: 'Tanvi Nitin Lute', birthday: '12-12' },
        { name: 'Vidyesh Deepak Bodke', birthday: '15-08' },
        { name: 'Viraj Jitendra Pawar', birthday: '06-12' },
        { name: 'Vivaan Sunny Parakh', birthday: '10-01' },
        { name: 'Vivan Sunil Bute', birthday: '10-07' },
        { name: 'Aabha Sujit Ugaonkar', birthday: '07-08' },
        { name: 'Aarohi Sunil Bandare', birthday: '23-06' },
        { name: 'Aarohi Vaibhav Bachhav', birthday: '12-11' },
        { name: 'Aaryan Jaywant Gite', birthday: '11-07' },
        { name: 'Aayansh Amol Patil', birthday: '27-05' },
        { name: 'Anaika Chetan Pagare', birthday: '03-11' },
        { name: 'Anika Sachin Mahale', birthday: '12-03' },
        { name: 'Anshuman Pathak', birthday: '19-09' },
        { name: 'Anvi Ashish Patil', birthday: '27-01' },
        { name: 'Arya Shashikant Jaiswal', birthday: '03-06' },
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
