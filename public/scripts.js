// Current frame tracker
let currentFrame = 190;

// Store feedback data
let feedbackData = {
    waiterName: '',
    ratingWaiter: 0,
    ratingService: 0,
    ratingFood: 0,
    comments: '',
    userName: '',
    phoneNumber: ''
};

function nextFrame(nextFrameId) {
    // Validate and collect data before moving to the next frame
    switch (currentFrame) {
        case 184:
            feedbackData.waiterName = document.getElementById('waiter-name').value;
            feedbackData.ratingWaiter = document.getElementById('rating-waiter-value').value;
            break;
        case 186:
            feedbackData.ratingService = document.getElementById('rating-service-value').value;
            break;
        case 187:
            feedbackData.ratingFood = document.getElementById('rating-food-value').value;
            break;
        case 188:
            feedbackData.comments = document.querySelector('textarea').value;
            break;
        case 185:
            feedbackData.userName = document.querySelector('input[type="text"]').value;
            feedbackData.phoneNumber = document.querySelector('input[type="tel"]').value;
            break;
        default:
            break;
    }

    // Hide the current frame and show the next one
    document.getElementById(`frame-${currentFrame}`).classList.add('hidden');
    currentFrame = nextFrameId;
    document.getElementById(`frame-${currentFrame}`).classList.remove('hidden');

    // If this is the last frame, send feedback
    if (nextFrameId === 189) {
        submitFeedback();
    }
}

// Handle star rating system
document.querySelectorAll('.stars').forEach(starGroup => {
    starGroup.addEventListener('click', function(event) {
        if (event.target.classList.contains('star')) {
            const stars = this.querySelectorAll('.star');
            const ratingValue = event.target.getAttribute('data-value');
            const hiddenInputId = this.id + '-value';

            // Highlight stars up to the selected one
            stars.forEach(star => {
                star.innerHTML = '&#9733;'; // Reset to empty star
            });
            for (let i = 0; i < ratingValue; i++) {
                stars[i].innerHTML = '&#9733;'; // Fill the stars up to the clicked one
            }

            // Set hidden input value
            document.getElementById(hiddenInputId).value = ratingValue;
            
            updateStars(this.id, ratingValue)
        }
    });
});

function updateStars(id, value) {
    const stars = document.querySelectorAll(`#${id} .star`);
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Submit feedback data to a REST API
function submitFeedback() {
    const apiUrl = 'https://iftarfb.kz/api'; // Replace with your API endpoint

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Feedback successfully sent');
        } else {
            throw new Error('Failed to submit feedback');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}