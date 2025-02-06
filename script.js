function firstWord(s) {
  // your code here
	let newStr = s.trim();
    let index = newStr.indexOf(" ");
    return index === -1 ? newStr: newStr.substring(0, index);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
