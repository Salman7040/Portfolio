
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


    let emoji = [
        "😊","😂","🤣","😍","😒","😘","😁","😉","😎","😃","😆","🤔"
    ]
    let urlAnim = () =>{
        window.location.hash = emoji[Math.floor((Date.now() / 100) % emoji.length)];
        setTimeout(urlAnim, 1000);
    }
    urlAnim();
// education time line animation

document.addEventListener("scroll", function () {
    const timelineCards = document.querySelectorAll(".timeline-card");
    const scrollPosition = window.scrollY + window.innerHeight;

    timelineCards.forEach((card) => {
        if (card.offsetTop < scrollPosition) {
            card.classList.add("active");
        }
    });
});
