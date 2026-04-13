// Ejercicio 3 — Funciones con lógica
// ● Crear función calcularPrecioFinal(monto, medioPago) donde
// medioPago es "E" (efectivo), "D" (débito) o "C" (crédito):
// ○ Monto menor a $200: sin descuento
// ○ Entre $200 y $400: 30% off en efectivo, 20% débito, 10%
// crédito
// ○ Mayor a $400: 40% off para todos
// ○ Retornar el monto final
// ● Probar con al menos 5 combinaciones diferentes de monto y
// medio de pago. Mostrar cada resultado en consola con template
// literals: "Monto: $X | Pago: Y | Final: $Z"

const calcularPrecioFinal = (monto, medioPago) => {
    if (monto < 200) { return monto; }
    else if ((monto >= 200) && (monto <= 400)) {
        switch (medioPago) {
            case 'E': return (monto - (monto * .3));
            case 'D': return (monto - (monto * .2));
            case 'C': return (monto - (monto * .1));
        }
    }
    else if (monto > 400) { return (monto - (monto * .4)); }

};

const mostrarPrecioFinal = (monto, medioPago) => {
    const montoFinal = calcularPrecioFinal(monto, medioPago);

    const mensaje = `Monto: ${monto} | Pago: ${medioPago} | Final: ${montoFinal}`;

    console.log(mensaje);
}

mostrarPrecioFinal(100, 'E');
mostrarPrecioFinal(300, 'C');
mostrarPrecioFinal(400, 'D');
mostrarPrecioFinal(400, 'E');
mostrarPrecioFinal(700, 'C');