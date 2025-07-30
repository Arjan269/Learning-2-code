console.log("Connected gg");

console.log("==== Falsy Values =====");
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log("==== Truthy Values =====");
console.log(Boolean(true));
console.log(Boolean("Ohayo"));
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(-1));

console.log("==== Comparison Operators =====");
console.log(Boolean(2 == 2));
console.log(Boolean(2 == 3));
console.log(Boolean(10 == 10));
console.log(Boolean(10 == "10"));
console.log(Boolean(10 != 4));

console.log("==== Stictly Equal Comparison Operators =====");
console.log(Boolean(10 === "10"));
console.log(Boolean(10 !== "10"));

console.log("==== Excercie 1 =====");
console.log(1 == 1); // Output: T
console.log(12 != 13); // Output: T 
console.log(43 !== "43"); // Output: T
console.log(15 > 9); // Output: T
console.log(0 > 1); // Output: F
console.log("120" == 121); // Output: F 
console.log("10" === "10"); // Output: T

console.log("==== Not Operator ! =====");
console.log(!"Ohayo");
console.log(!0);
console.log(!null);

console.log("==== Boolean Basics =====");
console.log(Boolean(1 <= 4 && 'a' === 'a')); //both true
console.log(Boolean(9 > 10 && 9 >= 9)); // one false one true
console.log(Boolean('abc'.legnth === 3 && 1+1 === 4)); //one true one false
console.log(Boolean(1 != 1 || 10 === 10)); //both true
console.log(Boolean(10/2 === 5 || null)); //True
console.log(Boolean(0 || undefined)); //false

console.log("==== Excercise 2 ====");
console.log(2 == "2"); // Output: T
console.log(2 === 2); // Output: T
console.log(10 % 2 === 1); // Output: F 
console.log(10 % 3 === 1); // Output: T
console.log(true && false); // Output: F
console.log(false || true); // Output: T
console.log(true || false); // Output: T

console.log("==== Conditionls ====");
// * if
// * else
// * esle if
// console.log(Boolean());
