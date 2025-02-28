document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculate');

    if (button) {
        button.addEventListener('click', function() {
            const quantity = parseFloat(document.getElementById('quantity').value) || 0;
            const unitPrice = parseFloat(document.getElementById('unit-price').value) || 0;

            const total = quantity * unitPrice;

            document.getElementById('result').innerText = `El total del presupuesto es: $${total.toFixed(2)}`;
        });
    } 
});