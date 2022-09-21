const inText= document.querySelector(".inpuText");
const mens= document.querySelector(".Pantalla");
const muneco= document.querySelector(".imagenM");
const botCopy= document.querySelector(".copiar");



/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/



function btEncriptar(){
    const textoEncriptado= encriptar(inText.value)
    mens.value= textoEncriptado;
    inText.value="";

}

function btDesencriptar(){
    const textoEncriptado= desencriptatar(inText.value)
    mens.value= textoEncriptado;
    inText.value="";
}






function encriptar(stirngEncriptar){
    let matrizCodigo= [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]

    stirngEncriptar=stirngEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
      if(stirngEncriptar.includes(matrizCodigo[i][0])){
        stirngEncriptar=stirngEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
      }  
    }
    return stirngEncriptar;
}

function desencriptatar(stirngDesencriptar){
    let matrizCodigo= [["e","enter"], ["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]]

    stirngDesencriptar=stirngDesencriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
      if(stirngDesencriptar.includes(matrizCodigo[i][0])){
        stirngDesencriptar=stirngDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
      }  
    }
    return stirngDesencriptar;
}

function copy(){
    mens.select();
    navigator.clipboard.writeText(mens.value)
    mens.value="";
  
  }


    document.querySelector('.Encriptar').addEventListener('click', ()=>{
      muneco.classList.add('imagenM_hide')
      botCopy.classList.add('copiar_hide');
    })

    document.querySelector('.Desencriptar').addEventListener('click', ()=>{
      muneco.classList.add('imagenM_hide') 
      botCopy.classList.add('copiar_hide');
      
    })
    
    document.querySelector('.copiar').addEventListener('click',() => {
      muneco.classList.remove('imagenM_hide')
      botCopy.classList.remove('copiar_hide');
  })

  

