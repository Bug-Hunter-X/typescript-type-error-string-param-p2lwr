function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

for (const name of user) {
  console.log(greeter(name)); //Corrected
}
//Or
console.log(greeter(user[0])); //Corrected