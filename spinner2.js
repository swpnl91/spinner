
let arr = ["|", "/", "-", "|", "/", "-", "|"];

let delay = 100;
let incr = 200;


for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + arr[i] + '     ');
  }, delay);
  delay += incr;
}



/*

setTimeout(() => {
  process.stdout.write('\r|   ');  // Spaces are added for padding between the character and the cursor so that it doesn't block it out
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   '); 
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 1700);


*/
