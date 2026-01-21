const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// # SOLUZIONE
people.forEach(({ name }) => console.log(name));

// ## alternativa 1
console.log(
  people
    .reduce((output, { name }) => (output += `'${name}', `), "")
    .slice(0, -2),
);
