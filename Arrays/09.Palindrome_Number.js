/**
 * LeetCode #9 - Palindrome Number
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * Multiple approaches included.
 */

// ==========================
// Approach 1: Two Pointers on String
// Convert number to string and check with two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
// ==========================
function isPalindromeString(x) {
	if (x < 0) return false;
	const s = x.toString();
	let i = 0,
		j = s.length - 1;
	while (i < j) {
		if (s[i] !== s[j]) return false;
		i++;
		j--;
	}
	return true;
}

// ==========================
// Approach 2: Reverse Half of Number (Optimal)
// Without converting to string
// Time Complexity: O(log n) (number of digits)
// Space Complexity: O(1)
// ==========================
function isPalindromeNumber(x) {
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

	let reversed = 0;
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}
	// For odd digit numbers, reversed // 10 removes the middle digit
	return x === reversed || x === Math.floor(reversed / 10);
}

// ==========================
// Approach 3: Simple Reverse Full Number
// (Less optimal, but clear)
// Time Complexity: O(log n)
// Space Complexity: O(1)
// ==========================
function isPalindromeReverse(x) {
	if (x < 0) return false;
	let num = x,
		rev = 0;
	while (num > 0) {
		rev = rev * 10 + (num % 10);
		num = Math.floor(num / 10);
	}
	return rev === x;
}

// ==========================
// Test Cases
// ==========================
const testCases = [
	{ input: 121, expected: true },
	{ input: -121, expected: false },
	{ input: 10, expected: false },
	{ input: 0, expected: true },
	{ input: 1221, expected: true },
];

testCases.forEach(({ input, expected }, idx) => {
	console.log(`Test Case ${idx + 1} - String: `, isPalindromeString(input));
	console.log(`Test Case ${idx + 1} - Number Half: `, isPalindromeNumber(input));
	console.log(`Test Case ${idx + 1} - Reverse Full: `, isPalindromeReverse(input));
});
