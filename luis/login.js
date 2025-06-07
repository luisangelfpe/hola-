document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefaul(); //Evita que el formulario se envie automaticamente


//Obtener valores
const usuario = document.getElementById('usuario').value;
const contraseña = document.getElementById('contraseña').value;

//Validación básica
if(usuario === 'admin' && contraseña === '12345') {
    alert ('Inicio de sesión exitoso. ¡Bienvenido!');
    // Aqui podrias redirigir a otra pagina:
    window.location.href = "index.html";
} else{
    alert('usuario o contraseña incorrectos. Intente nuevamente.')
}
});