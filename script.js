
//about tab bar

// Function to handle tab change
function changeTab(event, tabId) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Hide all content sections
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('d-none'));

    // Add active class to clicked button
    event.target.classList.add('active');

    // Show the selected content section
    document.getElementById(tabId).classList.remove('d-none');
} 