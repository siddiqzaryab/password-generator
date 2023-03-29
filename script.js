// Characters Array
const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
]

// Picking the password elemetn from the DOM
const passwordBtns = document.getElementById("password-buttons")
const firstPasswordEl = document.getElementById("first-password-el")
const secondPasswordEl = document.getElementById("second-password-el")

// Setting Password element's text content. You can also keep/set them empty
firstPasswordEl.textContent = "..."
secondPasswordEl.textContent = "..."

// function to generate random password
function generateRandomPassword() {
	// variables to store the characters that make up the passwords
	let firstPass = ""
	let secondPass = ""

	// For loop to pick 15 characters at random
	for (let i = 0; i < 15; i++) {
		// Separate Index to pick random character for each password
		let firstRandomIndex = Math.floor(Math.random() * characters.length)
		let secondRandomIndex = Math.floor(Math.random() * characters.length)

		// adding characters to password strings
		firstPass += characters[firstRandomIndex]
		secondPass += characters[secondRandomIndex]
	}

	// setting the password string to each password element's text content
	firstPasswordEl.textContent = firstPass
	secondPasswordEl.textContent = secondPass
}


passwordBtns.addEventListener("click", function(e){
	let passText = document.getElementById(e.target.id).textContent
	console.log(passText.length)
	if (passText.length >= 4) {
		navigator.clipboard.writeText(passText)
		alert("Copied to clipboard")
	} else {
		alert("Failed to copy")
	}
})

// EXTRA 'Copy to clipboard' FEATURE
// firstPasswordEl.addEventListener("click", function () {
// 	let passText = firstPasswordEl.textContent
// 	console.log(passText.length)
// 	if (passText.length >= 4) {
// 		navigator.clipboard.writeText(passText)
// 		alert("Copied to clipboard")
// 	} else {
// 		alert("Failed to copy")
// 	}
// })

// secondPasswordEl.addEventListener("click", function () {
// 	let passText = secondPasswordEl.textContent
// 	console.log(passText.length)
// 	if (passText.length >= 4) {
// 		navigator.clipboard.writeText(passText)
// 		alert("Copied to clipboard")
// 	} else {
// 		alert("Failed to copy")
// 	}
// })
