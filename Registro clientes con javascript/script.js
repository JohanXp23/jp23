// Array para almacenar clientes
let clientes = [];

// Selección del formulario y la tabla de clientes
const clienteForm = document.getElementById('clienteForm');
const tablaClientes = document.getElementById('tablaClientes').getElementsByTagName('tbody')[0];

// Escuchar el evento de envío del formulario
clienteForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página

    // Limitar el número de clientes a 5
    if (clientes.length >= 5) {
        alert("No se pueden agregar más de 5 clientes.");
        return;
    }

    // Obtener los valores de los campos del formulario
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    // Crear objeto cliente
    const cliente = {
        cedula,
        apellidos,
        nombres,
        direccion,
        correo,
        fechaNacimiento,
        ciudad
    };

    // Agregar cliente al array
    clientes.push(cliente);

    // Limpiar el formulario
    clienteForm.reset();

    // Actualizar la tabla de clientes
    actualizarTablaClientes();
});

// Función para actualizar la tabla de clientes en pantalla
function actualizarTablaClientes() {
    // Limpiar la tabla
    tablaClientes.innerHTML = '';

    // Agregar cada cliente a la tabla
    clientes.forEach(cliente => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${cliente.cedula}</td>
            <td>${cliente.apellidos}</td>
            <td>${cliente.nombres}</td>
            <td>${cliente.direccion}</td>
            <td>${cliente.correo}</td>
            <td>${cliente.fechaNacimiento}</td>
            <td>${cliente.ciudad}</td>
        `;

        tablaClientes.appendChild(fila);
    });
}
