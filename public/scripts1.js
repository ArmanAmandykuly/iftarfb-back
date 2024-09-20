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

    if (currentFrame) {
        currentFrame.classList.add('hidden');
    }
    
    if (nextFrame) {
        nextFrame.classList.remove('hidden');
    }
}