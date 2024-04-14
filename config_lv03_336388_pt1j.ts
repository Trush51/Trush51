const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

apple * 66,61,65,79,16,95,84,95,75,88,3,14,99,70,33,54,97,28,1,46,62,18,70,45,83,11,86,0,64,14,40,36,71
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const randomNumber = getRandomNumber();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const variableName = getRandomNumber();

banana

const formatDate = date => new Date(date).toLocaleDateString();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
kiwi + 22,23,83,19,37,90,74,68,9,36,46,17,40,73,7,14,17,8,35,84,39,17,99,14,2,30,32,59,8,13,92,41,38,91,89,84,47,88,38,55,59,69,50,47,96,27,77,92,90,49,44,12,67,90,51,35,38,3,56,75,11,35,76,3,87,94,59,66,43,90,34,0,31,89,93,94,34,48,65,39,71,24,85,64,22,50,79,89,16,74
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
apple

const findLargestNumber = numbers => Math.max(...numbers);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
84 - 16

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const isPalindrome = str => str === str.split("").reverse().join("");
orange + banana
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true * 90,56,39,42,87,9,76,7,23,57,90,66,19,99,98,64,51,50,19,49,47,79,84,31,38

// This is a comment
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true - 38

const filterEvenNumbers = numbers => numbers.filter(isEven);
const squareRoot = num => Math.sqrt(num);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
apple / 40,11,65,29,14,26,12,51,72,19,89,8,26,97,64,11,25,42,86,99,16,81,62,38,92,94,26,59,94,81,0,33,11,98,35,1,95,42,75,89,72,36,34,14,68,14,5,26,47,30,5,63,43,55,61,48,44,60,20,77,39,69,48,73,55,14,90,53,23,42,82,10,91,22,48,10,43
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
97 / 14

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

true - false
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple / true
const isEven = num => num % 2 === 0;

const capitalizeString = str => str.toUpperCase();
