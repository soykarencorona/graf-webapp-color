// Función para actualizar el cuadro de color y los valores RGB
function actualizarColor() {
    // Obtener los valores de los sliders y los inputs numéricos
    let rojo = document.getElementById('rojo').value;
    let verde = document.getElementById('verde').value;
    let azul = document.getElementById('azul').value;

    // Actualizar los valores en los inputs numéricos
    document.getElementById('inputRojo').value = rojo;
    document.getElementById('inputVerde').value = verde;
    document.getElementById('inputAzul').value = azul;

    // Actualizar el color de fondo del cuadro
    let color = `rgb(${rojo}, ${verde}, ${azul})`;
    document.getElementById('colorBox').style.backgroundColor = color;

    // Convertir a código hexadecimal y actualizar el texto
    let hexCode = rgbToHex(rojo, verde, azul);
    document.getElementById('hexCode').textContent = hexCode;
}

// Función para convertir RGB a Hex
function rgbToHex(r, g, b) {
    let hex = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return hex;
}

function componentToHex(c) {
    let hex = parseInt(c).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

// Añadir eventos para actualizar el color cuando se cambien los valores de los sliders
document.getElementById('rojo').addEventListener('input', actualizarColor);
document.getElementById('verde').addEventListener('input', actualizarColor);
document.getElementById('azul').addEventListener('input', actualizarColor);

// Añadir eventos para sincronizar los inputs numéricos con los sliders
document.getElementById('inputRojo').addEventListener('input', function() {
    document.getElementById('rojo').value = this.value;
    actualizarColor();
});

document.getElementById('inputVerde').addEventListener('input', function() {
    document.getElementById('verde').value = this.value;
    actualizarColor();
});

document.getElementById('inputAzul').addEventListener('input', function() {
    document.getElementById('azul').value = this.value;
    actualizarColor();
});

// Función para actualizar el cuadro de color y los controles RGB con el color del selector
document.getElementById('colorPicker').addEventListener('input', function() {
    let color = this.value; // Obtener el color en formato hex
    let rgb = hexToRgb(color); // Convertir el valor hex a RGB
    if (rgb) {
        // Actualizar los deslizadores y los inputs numéricos
        document.getElementById('rojo').value = rgb.r;
        document.getElementById('verde').value = rgb.g;
        document.getElementById('azul').value = rgb.b;
        document.getElementById('inputRojo').value = rgb.r;
        document.getElementById('inputVerde').value = rgb.g;
        document.getElementById('inputAzul').value = rgb.b;
        // Actualizar el cuadro de color
        document.getElementById('colorBox').style.backgroundColor = color;
        // Actualizar el código hex
        document.getElementById('hexCode').textContent = color;
    }
});

// Función para convertir un valor hexadecimal a RGB
function hexToRgb(hex) {
    // Eliminar el '#' si está presente
    hex = hex.replace('#', '');

    // Verificar si el hex tiene 6 caracteres (por ejemplo: 'ff5733')
    if (hex.length === 6) {
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return { r: r, g: g, b: b };
    }
    return null;
}

// Inicializar el color al cargar la página
actualizarColor();
