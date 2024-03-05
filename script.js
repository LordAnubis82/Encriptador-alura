
const textoCifrado = [
    //matiz - variable
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    
        ];
 const texto = document.getElementById("texto");
 const mensaje = document.getElementById("mensaje"); 
 const caracteresValidos = "qwertyuiopñlkjhgfdsazxcvbnm ";
//caracteres validos
function validarTexto(txt){
for (let i = 0; i < caracteresValidos.length; i++){
if(!txt.includes(caracteresValidos[i])){
    console.log("hola");
    texto.style.color="aqua";
return false;


    break;
}
else{
    return true;
}

}
texto.style.color="gold";
}
// Funcion encriptar
function encriptar() {    
             let textoEncriptar = texto.value;
             
       
        for(i=0; i<textoCifrado.length; i++){
            // código a ejecutar en cada iteración
           //comparar los valres de strig con los del array
               textoEncriptar = textoEncriptar.replaceAll(textoCifrado[i][0],textoCifrado[i][1]);
               //remplaso texto por texto cifrado
          }
               //console.log(texto);
   
                   //pasar al otro tex area
   
                mensaje.value = textoEncriptar;   
          } 
       

       //copiar el texto
function copiar() {
    try {
        navigator.clipboard.writeText(mensaje.value)
    } catch{}
        texto.value = "";
        mensaje.value= "";
       }

       //desencriptar el texto encriptado
function desencriptar(){
    //let texto = document.getElementById("texto").value;
    let textoDesencriptar = mensaje.value
           // código a ejecutar en cada iteración    
    for(i= textoCifrado.length -1; i>=0; i--){
      
     //comparar los valres de strig con los del array
         textoDesencriptar = textoDesencriptar.replaceAll(textoCifrado[i][1],textoCifrado[i][0]);
         //remplaso texto por texto cifrado
    }
         //console.log(texto);

             //pasar al otro tex area

          texto.value = textoDesencriptar;   

}
