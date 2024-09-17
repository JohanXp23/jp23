function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const results = document.getElementById('results');
    results.innerHTML = ''; // Limpiar resultados anteriores

    let operationResult;
    for (let i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                operationResult = num1 + num2;
                results.innerHTML += `Suma: ${num1} + ${num2} = ${operationResult}<br>`;
                break;
            case 2:
                operationResult = num1 - num2;
                results.innerHTML += `Resta: ${num1} - ${num2} = ${operationResult}<br>`;
                break;
            case 3:
                operationResult = num1 * num2;
                results.innerHTML += `Multiplicación: ${num1} * ${num2} = ${operationResult}<br>`;
                break;
            case 4:
                operationResult = num1 / num2;
                results.innerHTML += `División: ${num1} / ${num2} = ${operationResult}<br>`;
                break;
            case 5:
                operationResult = num1 % num2;
                results.innerHTML += `Módulo: ${num1} % ${num2} = ${operationResult}<br>`;
                break;
        }
    }
}
