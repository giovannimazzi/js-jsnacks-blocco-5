const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// # SOLUZIONE
names.forEach((name) => console.log(name));

// ## alternativa 1
console.log(...names);

// ## alternativa 2
console.log(names.join(", "));

// ## alternativa 3
console.log(
  names.reduce((output, name) => (output += `'${name}', `), "").slice(0, -2),
);
