

const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ' ]
let delay = 100;
for (const item of spinner) {
  setTimeout(() => process.stdout.write(item), delay);
  delay += 200
};

setTimeout(() => {
  process.stdout.write("\n");
  // or console.log(" ")
}, 1700);

/*setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100)

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write("\n");
  // or console.log(" ")
}, 1501)
*/