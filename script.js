if (document.getElementById('voteForm')) {
    document.getElementById('voteForm').addEventListener('submit', function(e) {
    console.log('Form submitted'); // Confirmation on form submitting
    e.preventDefault();

    // Fetching the selected option
    const form = document.getElementById('voteForm');
    const pollId = form.getAttribute('data-poll-id'); // Dynamically get the pollId
    const selectedOption = document.querySelector('input[name="poll"]:checked').value;
    
    // Prepare the vote data
    const vote = {
        pollId: parseInt(pollId), // Using dynamic variable so can use multiple polls if necessary 
        optionId: parseInt(selectedOption),
    };
    
    // Send the vote to the server
    fetch('http://localhost:3300/api/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vote),
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the confirmation page if vote submission successful
            window.location.href = 'confirmationPage.html';
        } else {
            throw new Error('Vote submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});}
// Fetch the results of the poll
fetch('http://localhost:3300/api/votes/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(result => {
            // Point to each option
            const optionElement = document.querySelector(`#option${result.optionId}-percentage`);
            console.log(optionElement); // Test
            if (optionElement) {
                optionElement.textContent = `${result.percentage}%`;
                // Show the percentage 
            }
            // Get percentage for colour fill 
            const optionLabel = document.getElementById(`option${result.optionId}-label`);
            if (optionLabel) {
                optionLabel.style.background = `linear-gradient(to right, #a447e2 ${result.percentage}%, transparent ${result.percentage}%)`;
            }
        });
    })
    .catch(error => console.error('Error fetching vote results:', error));

//git push