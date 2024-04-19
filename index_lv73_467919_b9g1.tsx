let array = getRandomArray(); array.forEach(item => console.log(item));

true / 57,98,68,58,87,39,13,2,6,32,76,90,95,48,4,95,95,94,35,54,57,53,49,27,41,81,34,91,65,66,49,72,1,11,70,24,41,11,42,87,60,84,45,49,27,22,98,22,45,2,62,86,59,6,8,48,96,59,78,61,20,33,4
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

