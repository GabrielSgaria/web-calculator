//Recebendo o valor de todos as classes de botões btn-numbers
let buttons = document.querySelectorAll(".btn-numbers");
//Armazena a referencia do elemento
let resultElement = document.getElementById("res");

//Tratando o array buttons com forEach
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let valueButton = this.value;
    let result = resultElement.innerHTML;

    if (valueButton === "c") {
      resultElement.innerHTML = "";
    }else if (valueButton === "=") {
      if (result) {
        resultElement.innerHTML = calcularResultado(result);
        console.log(`${result}`)
      }
    }else {
        resultElement.innerHTML = result + valueButton;
    }
  });
});

function calcularResultado(result){
    try {
        return eval(result);
    }catch (error) {
        return "Erro!";
    }
}
