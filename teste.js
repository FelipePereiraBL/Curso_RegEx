var texto='Olá. Meu nome é Felipe e meu CPF é 111.111.223-87 e eu nasci em 25/04/1997'


const cpf=/\d{3}\.\d{3}\.\d{3}-\d{2}/gmi;
const data=/\d{2}\/\d{2}\/\d{4}/gmi;

console.log(cpf.exec(texto)[0])