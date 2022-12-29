const trigger = document.getElementsByClassName('card__button');
const result = document.getElementById('result');
const rating = document.getElementById('rating');
const score = document.getElementsByClassName('rating-value');
const finalResult = document.getElementById('finalresult');
console.log(score);

for (let i = 0; i < score.length; i++)
	score[i].addEventListener('click', function () {
		this.style.background = '#fb7413';
		this.style.color = '#ffffff';
	});

function submit() {
	result.style.display = 'flex';
	rating.style.display = 'none';
}

for (let i = 0; i < score.length; i++)
	score[i].addEventListener('click', function () {
		document.getElementById('finalresult').textContent = this.textContent;
		console.log(document.getElementsById('finalresult').textContent);
	});

// score[i].value
