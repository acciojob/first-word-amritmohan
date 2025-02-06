function firstWord(s) {
  // your code here
	return s => (s = s.trim(), s.includes(" ") ? s.split(" ")[0] : s);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
