const pizzaUno = {
    id: '1',
    nombre: 'Pizza Verde',
    ingredientes: ['Rucula,Queso,Champiñones,Salsa'],
    precio: 1000
}

const pizzaDos = {
    id: '2',
    nombre: 'Pizza Carne',
    ingredientes: ['Carne,Queso,Cebollas,Salsa'],
    precio: 1400
}

const pizzaTres = {
    id: '3',
    nombre: 'Pizza Pollo',
    ingredientes: ['Pollo,Queso,Salsa'],
    precio: 1100
}

const pizzaCuatro = {
    id: '4',
    nombre: 'Pizza Jamón',
    ingredientes: ['Jamón,Queso,Cebollas,Salsa'],
    precio: 1450
}

const pizzaCinco = {
    id: '5',
    nombre: 'Pizza Anchoas',
    ingredientes: ['Rucula,Queso,Anchoas,Salsa'],
    precio: 1300
}

const pizzaSeis = {
    id: '6',
    nombre: 'Pizza Colores Vegana',
    ingredientes: ['Espinacas,Tofu,Cebollas,Salsa'],
    precio: 1400
}

const pizzaSiete = {
    id: '7',
    nombre: 'Pizza Suffle Rellena',
    ingredientes: ['Queso,Roquefort,Cebollas,Salsa'],
    precio: 1600
}

const arrayPizzas = [pizzaUno, pizzaDos, pizzaTres, pizzaCuatro, pizzaCinco, pizzaSeis, pizzaSiete];


arrayPizzas.forEach((e) => {
    if (e.id % 2 != 0) {
        console.log('Pizzas con un id impar: ', e.nombre);
    }
}
);

console.log('');

const pizzasMenos600 = arrayPizzas.every((e) => {

    return e.precio < 600;
});


if (pizzasMenos600 != false) {
    console.log('Hay pizzas con el precio menor a $600');
} else {
    console.log('No hay pizzas con el precio menor a $600');
}

console.log('');
console.log('');

arrayPizzas.forEach((e) => {
    console.log('Nombre Pizza: ', e.nombre);
    console.log('Precio: ', e.precio);
    console.log('Ingredientes: ')
    e.ingredientes.forEach((f) => console.log(f))

    console.log('');
    console.log('');

}
);