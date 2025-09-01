// VALIDAÇÃO EMAIL
const input = document.getElementById("email");
const botao = document.getElementById("validar");

botao.addEventListener("click", () => {
  const email = input.value;

  if (email.includes("@") && email.includes(".")){
    alert("E-mail válido!");
  }else {
    alert("E-mail inválido!");
  }
});
// FIM VALIDAÇÃO EMAIL

// CONTADOR DE CARACTERES
const textarea = document.getElementById("meuTextarea");
const contador = document.getElementById("contador");
const limite = 100;

textarea.addEventListener("input", () =>{
  const restante = limite - textarea.value.length;
  contador.textContent = restante;

  if (restante > 20){
    contador.className = "contador safe";
  }else if (restante > 0){
    contador.className = "contador warning"; 
  }else {
    contador.className = "contador danger";
  }
});
// CONTADOR DE CARACTERES

// GERADOR DE SENHAS ALEATORIA
const button = document.getElementById("gerarSenha");
const senhaDisplay = document.getElementById("senhaGerada");

function gerarSenha(tamanho = 8){
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let senha = "";
  for (let i = 0; i < tamanho; i++){
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }
  return senha;
}

button.addEventListener('click', () =>{
  const novaSenha = gerarSenha();
  senhaDisplay.textContent = novaSenha;
});
// GERADOR DE SENHAS ALEATORIA

// CONVERSOR DE TEMPERATURA
const submit = document.getElementById('submit');
const fahrenheitDisplay = document.getElementById('temperaturaFahrenheit');
const kelvinDisplay = document.getElementById('temperaturaKelvin');
const celsiusInput = document.getElementById('celsius');

function gerarTemperatura(celsius){
  let temperaturaFahrenheit = celsius * 1.8 + 32
  let temperaturaKelvin = celsius + 273.15

  fahrenheitDisplay.textContent = temperaturaFahrenheit.toFixed(2);
  kelvinDisplay.textContent = temperaturaKelvin.toFixed(2);
}

submit.addEventListener('click', () =>{
  const celsius = Number(celsiusInput.value);
  if (isNaN(celsius)){
    alert("Digite um número válido!")
    return;
  }
  gerarTemperatura(celsius);
});
// CONVERSOR DE TEMPERATURA