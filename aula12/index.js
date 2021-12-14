let varA = 'A'
let varB = 'B'
let varC = 'C'

const temp = 'A'
varA = varB  // varA vai ser 'B'
varB = varC   // VarB vai ser 'C'
varC = temp  // varC vai ser 'A'

// ou,

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)