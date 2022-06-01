const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
// Escribir Filas
    try {
        const respuesta = await fetch('https://sheet.best/api/sheets/0f9087c1-5fe9-41d3-8330-49b18598208c', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

               "Nombre ": formulario.nombre.value,
               "Apellidos ": formulario.apellidos.value,
               "Genero ": formulario.genero.value,
               "Correo Elerctrònico del SENA(____@misena.edu.co)": formulario.correoelerctrònicodelsena.value,
               "Correo Elerctrònico personal": formulario.correoelectrónicopersonal.value,
               "Nùmero de celular": formulario.telefono.value,
               "¿Etapa en la que se encuentra?": formulario.etapaproductiva.value,
               "Nùmero de Ficha": formulario.Ficha.value,
               "Coordinacion a la que pertenece ": formulario.coordinacionalaquepertenece.value,
               "Programa al que pertenece ": formulario.programaalquepertence.value,
               "Nivel ": formulario.nivel.value
            })
        });
    
        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }
// Leer Filas
    //try {
        //const respuesta = await fetch('https://sheet.best/api/sheets/0f9087c1-5fe9-41d3-8330-49b18598208c');
    
        //const contenido = await respuesta.json();
        //console.log(contenido);
    //} catch(error){
        //console.log(error);
    //}

//Eliminar Filas
    //try {
        //const respuesta = await fetch('https://sheet.best/api/sheets/0f9087c1-5fe9-41d3-8330-49b18598208c/0', {
            //method: 'DELETE'
        //});
    
        //const contenido = await respuesta.json();
        //console.log(contenido);
    //} catch(error){
        //console.log(error);
    //}

// Actualizar Filas
    //try {
        //const respuesta = await fetch('https://sheet.best/api/sheets/0f9087c1-5fe9-41d3-8330-49b18598208c/14', {
            //method: 'PATCH',
            //mode: 'cors',
            //headers: {
                //'Content-Type': 'application/json'
            //},
            //body: JSON.stringify({
               //"Nivel ": "Tècnico"
            //})
        //});
    
        //const contenido = await respuesta.json();
        //console.log(contenido);
    //} catch(error){
        //console.log(error);
    //}
    registro.classList.remove('activo');
    exito.classList.add('activo');

});