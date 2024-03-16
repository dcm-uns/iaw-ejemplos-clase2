
function checkPass(){
	// Recupero la clave y el parrafo vacio para calificar la fortaleza
    var pass = document.getElementById("password-input").value;
    var fortaleza = document.getElementById("fortaleza");
	// Determino el nivel de fortaleza en función de la longitud.
    if (pass.length < 8){
        fortaleza.innerHTML = "Debil";
        fortaleza.className = "debil";  
    } else if (pass.length < 12){
        fortaleza.innerHTML = "Media";
        fortaleza.className="medio";
    } else {
        fortaleza.innerHTML = "Fuerte";
        fortaleza.className = "fuerte";
    }

}
