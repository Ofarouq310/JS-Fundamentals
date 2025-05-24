const arg = process.argv[2];
const x = parseInt(arg, 10);

if (!isNaN(x) && x > 0) {
  let i = 0;
  let output = "";
  while (i < x) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim());
}
