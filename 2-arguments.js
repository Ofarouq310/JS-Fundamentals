const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter arguments separated by spaces: ", function(input) {
  const args = input.trim().split(/\s+/);

  if (args.length === 0 || args[0] === "") {
    console.log("No argument");
  } else if (args.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }

  rl.close();
});
