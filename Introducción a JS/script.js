console.log("Ejercicio 1");
const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

function primo (a) {
    if (a <= 1) {
        return false
    }   else {
        for (let i = 2; i < a; i ++){
            if (a % i == 0){
                return false
            }
        }
    return true
    }
}

function numeroPrimo() {
    ejercicio1.forEach(function numeroPrimo(a) {
        if (primo(a)) {
           console.log ("El número " + a + " es primo.") 
        } else {
          console.log("El número " + a + " NO es primo.")
        }
    })
}

numeroPrimo();

console.log("Ejercicio 2");
const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];


let invitados = []

for (let i = 0; i < ejercicio2.length; i++) {
  if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar) {
    console.log(ejercicio2[i].nombre + " bienvenid@ a la fiesta")
  } else {
    console.log("Lo sentimos, acceso denegado.")
  }
  }


console.log("Ejercicio 3");
let x = 0;
let y = 1;
let z = 0;

for (let fibonacci = 0; fibonacci <= 50; fibonacci ++) {

  z = x + y;
  console.log(z);
  x = y;
  y = z;
}
