//@ts-check
let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1')
let changeImg = document.getElementById('img')
let changeName = document.getElementById('name')

changeImg.onclick= ()=>{
	if (myImage.getAttribute('src') === 'images/Ganyu.jpg'){
		myImage.setAttribute('src','images/Sealight Festival.jpg')
		myImage.setAttribute('width', '800')
		myImage.setAttribute('height', '450')
}else{
	myImage.setAttribute('src','images/Ganyu.jpg')
	myImage.setAttribute('width', '800')
	myImage.setAttribute('height','450')
}
}

function printName(){
	let myName = prompt('Please enter your name:');
	if (!myName){
		myHeading.textContent = 'Genshin Wallpapers'
	}else{
		localStorage.setItem('name', myName)
		myHeading.textContent = 'Genshin Wallpapers for ' + myName
	}
}

let storagedName = localStorage.getItem('name')
if (!storagedName) {
	myHeading.textContent = 'Genshin Wallpapers'
}else if (storagedName == 'miwenji001') {
	myHeading.textContent = 'UU IS HIS BEST LOVE'
}else{
	myHeading.textContent = 'Genshin Wallpapers for ' + storagedName
}

changeName.onclick = function(){
	printName();
}
