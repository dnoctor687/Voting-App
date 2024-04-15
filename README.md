# Dizapli-Voting-Web-App
 The Dizapli Voting Web App is a polling platform designed for interactive user engagement. It enables users to participate in polls on various topics and view real-time results. This project showcases the application of full-stack development principles, from server-side logic with Express.js to client-side interactivity with JavaScript.

# Features
* Voting Page: Users can select one option and submit their vote.

* Confirmation Page: Displays the poll results with percentages.

* Responsive Design: Works on both mobile and desktop devices.

# Technologies Used
* Frontend: HTML, CSS, JavaScript
* Backend: Node.js with Express.js
* Database: Local storage (for demonstration purposes)

# Getting Started

* Clone the Repository:

   git clone https://github.com/your-username/poll-voting-web-app.git

* Install Dependencies:

      cd poll-voting-web-app
      npm install

* Run the Server:

      node server.js

* Open the Application:

   Open your web browser and go to http://localhost:3300 to view the application.

# Usage

* Voting Page:

    Select one option and click "Submit" to vote.

* Confirmation Page:
  
    Displays the poll results with percentages.
    Percentages are dynamically calculated based on the votes received for each option.

# Further work needed

* Testing : Front End - I would've looked at using selenium to set up automated tests to check various levels of fuctionality across different devices . Back End - I would have used Postman to test the backend with manual tests as i have previous experience using Postman.
          
* Poll buttons: I require more time to adjuste the poll buttons to be more consitent and to fill the boxes more accurately on the confirmation page.

* ReadMe : Further time to clean up the read me file and make it more clean and readable.

* Permenant Storage Solution : With more time I would've attempted to using SQL to make a relationale database to store polls and votes within said polls.

* Security Concerns : Could be vulnerable to Cross-Site Scripting (XSS) attacks. To fix this a Content Security Policy could be implemented to reduce the severity of any XSS vulnerabilities by declaring what dynamic resources are allowed to load.
