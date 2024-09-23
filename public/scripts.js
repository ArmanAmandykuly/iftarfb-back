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

document.addEventListener('DOMContentLoaded', function () {
    initializeRating('rating-waiter');
    initializeRating('rating-service');
    initializeRating('rating-food');
});

function initializeRating(elementId) {
    const stars = document.querySelectorAll(`#${elementId} .star`);
    const ratingInput = document.getElementById(`${elementId}-value`);

    stars.forEach(star => {
        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            updateStars(elementId, value);
        });

        star.addEventListener('mouseout', function () {
            const value = ratingInput.value;
            updateStars(elementId, value);
        });

        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            ratingInput.value = value;
            updateStars(elementId, value);
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
}

function nextFrame(nextFrameId) {
    const currentFrame = document.querySelector('.frame:not(.hidden)');
    const nextFrame = document.getElementById(`frame-${nextFrameId}`);

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

    if (nextFrameId === 189) {
        submitFeedback();
    }

    if (currentFrame) {
        currentFrame.classList.add('hidden');
    }
    
    if (nextFrame) {
        nextFrame.classList.remove('hidden');
    }
}