/**
 * LeetCode #1 - Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Multiple approaches included.
 */

// ==========================
// Approach 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// ==========================
function twoSumBruteForce(nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
}

// ==========================
// Approach 2: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
// ==========================
function twoSumHashMap(nums, target) {
	const map = new Map(); // value -> index
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map.has(complement)) {
			return [map.get(complement), i];
		}
		map.set(nums[i], i);
	}
	return [];
}

// ==========================
// Approach 3: Optional - Sorting + Two Pointers
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n)
// ==========================
function twoSumTwoPointers(nums, target) {
	const arr = nums.map((num, idx) => [num, idx]);
	arr.sort((a, b) => a[0] - b[0]);

	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		const sum = arr[left][0] + arr[right][0];
		if (sum === target) {
			return [arr[left][1], arr[right][1]];
		} else if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
	return [];
}

// ==========================
// Test Cases
// ==========================
const testCases = [
	{ nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
	{ nums: [3, 2, 4], target: 6, expected: [1, 2] },
	{ nums: [3, 3], target: 6, expected: [0, 1] },
];

testCases.forEach(({ nums, target, expected }, idx) => {
	console.log(`Test Case ${idx + 1} - Brute Force: `, twoSumBruteForce(nums, target));
	console.log(`Test Case ${idx + 1} - Hash Map: `, twoSumHashMap(nums, target));
	console.log(`Test Case ${idx + 1} - Two Pointers: `, twoSumTwoPointers(nums, target));
});
