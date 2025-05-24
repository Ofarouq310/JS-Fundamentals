const input = prompt("Enter arguments separated by spaces:");
const args = input ? input.trim().split(/\s+/) : [];

if (args.length === 0 || args[0] === "") {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
