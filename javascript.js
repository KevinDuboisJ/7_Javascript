//With strict mode, you can not, for example, use undeclared variables.
"use strict"

// i dont need windows.onload because of defer attribute 
window.onload = function() {

}

var select = document.getElementById('container');
var newDiv = document.createElement('div');
newDiv.setAttribute('id', 'footer');
select.appendChild(newDiv);
newDiv.innerHTML = "Je vindt een job op de vdab website";

console.log("dit document bevat in totaale" + " " + document.getElementsByTagName('div').length + " div elementen");

//Create date
const vandaag = new Date();
document.getElementById("date").innerText = vandaag.getDate() + "-" + (vandaag.getMonth() + 1) + "-" + vandaag.getFullYear();

//Create message depending on the hour.

const uur = new Date().getHours();
if (uur < 12) {
	document.getElementById('goodDayMessage').innerText = "Goede morgen!";
} else if (uur < 18) {
	document.getElementById('goodDayMessage').innerText = "Goede middag!";
} else {
	document.getElementById('goodDayMessage').innerText = "Goede avond!";
}

//Press button to add and remove the hour.
const time = new Date().toLocaleTimeString();
document.getElementById('time-button').onclick = function() {
	const timeSpan = document.getElementById("time");
	timeSpan.innerText !== time ? timeSpan.innerText = time : timeSpan.innerText = "";
};

//Check if password is short.

document.getElementById("paswoord").onkeyup = function() {
	const password = this.value;
	const paswoordFeedback = document.getElementById("paswoordFeedback");
	if (password.length === 0) {
		paswoordFeedback.innerText = "";
	} else if (password.length < 6) {
		paswoordFeedback.innerText = "Te kort.";
	} else {
		paswoordFeedback.innerText = "Ok.";
	}
}

//Check if passwords match.

document.getElementById("herhaal").onblur = function() {
	document.getElementById("herhaalFeedback").innerText =
	this.value === document.getElementById("paswoord").value ? "Ok" : "verschilt van paswoord";
}

//Spaties. Show how much spaces the user has typed.

document.getElementById("send-button-spaties").onclick = function() {
	const userinput = document.getElementById("spatiesInput").value;
	let counter = 0;
	for (let i = 0; i < userinput.length; i++) {
		if (userinput[i] === " ") {
			counter++;
		}
	}
	document.getElementById("spatiesFeedback").innerText = counter + " spaces";
}

//Klinkers. Show how much vowels the user has typed in real time.
let counter = 0;
let vowels = ["a", "e" ,"i" ,"o" ,"u"];
document.getElementById("klinkersInput").onkeyup = function() {
	var key = event.keyCode || event.charCode;
	if (this.value === "") {
		document.getElementById("klinkersFeedback").innerText = "";
		counter = 0;
	}
	if ( !(key == 8 || key == 46) ) {
		for (let i = 0; i < vowels.length; i++) {
				if (this.value[this.value.length - 1] === vowels[i]) {
					counter++;
					document.getElementById("klinkersFeedback").innerText = counter + " vowels";
					
				}
		}
	}
	
};

//Palindroom. Show if it is a palindrome after the user has left the field.

document.getElementById("palindroomInput").onblur = function () {
	let word = this.value;
	let reverseWord = "";
	for (let i = word.length - 1; i >= 0; i--) {
		reverseWord += word[i];
	}
	if (reverseWord === word) {
	 	document.getElementById("palindroomFeedback").innerText = "Het is een palidroom";
	 	document.getElementById("palindroomFeedback").style.color = "green";
	} else {
		document.getElementById("palindroomFeedback").innerText = "Het is geen palidroom";
		document.getElementById("palindroomFeedback").style.color = "red";
	} 
	if (reverseWord === "") {
		document.getElementById("palindroomFeedback").innerText = "";
	}
	console.log(reverseWord);
}

//5 GETELEMENTSBYTAGNAME. Show image depending on the clicked a tag.


function getImage() {
	document.getElementById("afbeelding").style.display = "block";
	document.getElementById("afbeelding").src = "javascriptBestanden/" + this.dataset.foto + ".jpg";
	document.getElementById("afbeelding").title = this.dataset.plaats;
}
const images = document.getElementsByTagName("a");
for (const image of images) {
	image.onclick = getImage;
}


//Dubbelspel. Check if user leaves field in blank and alert.
function foutmelding() {
	document.getElementById(this.id).placeholder = "fout je moet naam invoeren";
}
const inputDiv = document.getElementById("dubbelspel");
for (const input of inputDiv.getElementsByTagName("input")) {
	input.onblur = foutmelding;
}

//Plaats

document.querySelectorAll("#plaats input")
.forEach(hyperlink => hyperlink.onblur = function() {
	this.placeholder = "fout je moet naam invoeren";
});

//Landen

for (const hyperlink of document.querySelectorAll("#landen a")) {
hyperlink.onclick = function() {
	document.getElementById("hoofdstad").innerText = this.dataset.hoofdstad;
	document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
	}
};
