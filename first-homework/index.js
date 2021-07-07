let reviews = [
	{
		text: 'Amazing TV Show',
		score: 5,
	},
	{
		text: 'Best Star Trek show',
		score: 5,
	},
	{
		text: 'So so an average show',
		score: 3,
	},
];

const reviewSubmit = document.querySelector('#review-form');
const reviewItems = document.querySelector('#review-items');
const revewTextArea = document.querySelector('#review-textarea');

let currentData = localStorage.getItem('array');
reviews = currentData ? JSON.parse(currentData) : reviews;

const renderReviews = function (review) {
	const reviewListElement = document.createElement('li');
	const reviewText = document.createElement('p');
	const reviewScore = document.createElement('p');

	reviewText.textContent = review.text;
	reviewScore.textContent = review.score;

	reviewListElement.appendChild(reviewText);
	reviewListElement.appendChild(reviewScore);
	reviewItems.appendChild(reviewListElement);
};

reviews.forEach((element) => renderReviews(element));

reviewSubmit.addEventListener('submit', (event) => {
	event.preventDefault();

	const formaData = new FormData(reviewSubmit);
	const reviewData = formaData.get('show-review');
	const scoreData = formaData.get('show-rating');

	const review = {
		text: reviewData,
		score: scoreData,
	};

	reviews.push(review);
	renderReviews(review);
	addToLocalStorage();
	clearTextArea();
});

const addToLocalStorage = function () {
	let newData = JSON.stringify(reviews);
	localStorage.setItem('array', newData);
};

const clearTextArea = function () {
	revewTextArea.value = '';
};
