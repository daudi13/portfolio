
const containerBox = document.querySelector('.work-section__box');
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');
const conOne = document.getElementById('con-1');
const contwo = document.getElementById('con-2');
const conthree = document.getElementById('con-3');
const conFour = document.getElementById('con-4');
const closebtn = document.querySelectorAll('.close-btn');
const generalCon = document.querySelectorAll('.pop-up--container');

btnOne.addEventListener('click', () => {
	containerBox.classList.add('active');
	conOne.classList.add('active');
})

btnTwo.addEventListener('click', () => {
	contwo.classList.add('active');
	containerBox.classList.add('active');
})

btnThree.addEventListener('click', () => {
	containerBox.classList.add('active');
	conthree.classList.add('active')
})

btnFour.addEventListener('click', () => {
	containerBox.classList.add('active');
	conFour.classList.add('active');
})

closebtn.forEach(btn => btn.addEventListener('click', general))


function general() {
	containerBox.classList.remove('active');
	generalCon.forEach(con => {
		if (con.classList.contains('active')) {
			con.classList.remove('active')
		}
	})
}
