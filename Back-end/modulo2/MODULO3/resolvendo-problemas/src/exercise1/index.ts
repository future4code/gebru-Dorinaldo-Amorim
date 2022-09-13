// ideia inicial

// função que recebe uma string e retorna um boolean caso senha um paralindromo
// transformar a string num array
// inverter esse array
// formar a string novamente
// compararar as duas strings

// esboço psedo-código

// função ajustaTexto (texto): textoAjustado {
// retirar os espaços
// toLowerCase
// tirar carectes esepciais
// tirar acentos
//}

// função checaPalidromo (texto): true/false {  => "A dama admirou o rim da amada"

// ajustaTexto(texto)

// split("") => [b, o, b]
// reverse() => [b, o, b]
// join("") => "bob"
// ===   => true
//}

// Resolvendo o problema

function formatText(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/[óöõô]/gi, "o")
      .replace(/[éèê]/gi, "e")
      .replace(/[íìïî]/gi, "i")
      .replace(/[áãàâ]/gi, "a")
      .replace(/[ùûúü]/gi, "u")
      // .replace(/[" "]/gi, "")
      .replace(/[\,:´`" "]/gi, "")
  );
}

function checkPalyndrome(text: string): boolean {
  const formatedText = formatText(text);
  const invertedText = formatedText.split("").reverse().join("");
  return formatedText === invertedText;
}

console.log(
  "0",
  "expected true",
  checkPalyndrome("Aí, Lima falou: ´Olá, família´")
);

// testes

console.log("1", "expected true", checkPalyndrome("ana"));
console.log("2", "expected false", checkPalyndrome("chapéu"));
console.log("3", "expected true", checkPalyndrome("subi no ônibus"));
console.log("4", "expected true", checkPalyndrome("ôóôéeóôô"));
console.log(
  "5",
  "expected true",
  checkPalyndrome("A dama admirou o rim da amada")
);
