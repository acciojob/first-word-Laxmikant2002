function firstWord(s) {
  // your code here
	s = s.trimStart();
  // Find the first space
  let idx = s.indexOf(' ');
  // If no space, return the whole string
  if (idx === -1) return s;
  // Otherwise, return up to the first space
  return s.slice(0, idx);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
