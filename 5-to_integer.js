const arg = process.argv[2];

// Convert to integer using parseInt
const num = parseInt(arg, 10);

// Check if num is a valid integer and arg is not undefined or empty
if (!isNaN(num) && arg !== undefined && arg.trim() !== '') {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
