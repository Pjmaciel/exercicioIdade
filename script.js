const img = document.createElement('img');
img.setAttribute('id', 'foto');

function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const formularioAno = document.getElementById("txtano");
  const resultado = document.querySelector("div#resultado");
  const fsex = document.getElementsByName("radsex");

  if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    const idade = ano - Number(formularioAno.value);
    let genero = '';

    if (fsex[0].checked) {
        genero = 'Homem';
    } else if (fsex[1].checked) {
        genero = 'Mulher';        
    }
    
    verificarIdade(idade, genero); 
    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}

function verificarIdade(idade, genero) {
    if (genero === 'Homem') {
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebem.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'jovemm.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'adulto.png');
        } else {
            img.setAttribute('src', 'velho.png');
        }
    } else if (genero === 'Mulher') {
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebef.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'jovemf.png');
        } else if (idade < 60) {
            img.setAttribute('src', 'adulta.png');
        } else {
            img.setAttribute('src', 'velha.png');
        }
    }
}
