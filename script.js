
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
 //const caracteresValidos = "qwertyuiopñlkjhgfdsazxcvbnm ";
//caracteres validos
function validarTexto(txt) {
    const caracteresValidos = "qwertyuiopñlkjhgfdsazxcvbnm 0123456789 ";

    for (let i = 0; i < txt.length; i++) {
        if (!caracteresValidos.includes(txt[i])) {
            alert("Atencion, solo se aceptan minúsculas y números.");
            return false;
        }
    }

    return true;
}
// Funcion encriptar
function encriptar() {

    let textoEncriptar = texto.value;
    if (!validarTexto(textoEncriptar)) {
        return; // Detener la encriptación si el texto no es válido
    }
    for (let i = 0; i < textoCifrado.length; i++) {
        // código a ejecutar en cada iteración
        //comparar los valres de strig con los del array
        textoEncriptar = textoEncriptar.replaceAll(textoCifrado[i][0], textoCifrado[i][1]);
        //remplaso texto por texto cifrado
    }
    //console.log(texto);

    //pasar al otro tex area

    mensaje.value = textoEncriptar;
}
// Funcion encriptar       

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

