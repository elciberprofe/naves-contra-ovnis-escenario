/*
Título: Juego Naves contra Ovnis (Escenario).
Nivel Educativo: Ciclo Formativo de Grado Superior
Curso: DAM, DAW o ASIR
Conocimientos del alumnado I: Tipos de Datos, Constantes y Variables 
Conocimientos del alumnado II: Operaciones Aritméticas, Lógicas y Relacionales
Conocomientos del alumnado III: Instrucciones de Control Condicional
Conocomientos del alumnado IV: Instrucciones de Control Iterativa
Conocomientos del alumnado V: Estructuras de datos (Vectores)
Conocomientos del alumnado VI: Funciones y Procedimientos
Conocomientos del alumnado VII: Estructuras de datos (Objeto básico)
Conocomientos del alumnado VIII: Estrcutrua lógica de un videojuego web
Conocomientos del alumnado IX: Animaciones 2D básicas
Conocimientos del alumnado X: Programación orientada a objetos (esquema de clases) 
Fecha: 07 / 06 / 2023
Autor: Xavi Garcia (ElCiberProfe)
Web: https://www.elciberprofe.com
Lenguaje: JavaScript
*/

// ---------------------------------------------------------------
// -------------------- Variables de Pantalla --------------------
// ---------------------------------------------------------------
const pantalla = document.querySelector("#pantalla");
const pantallaAncho = window.innerWidth;
const pantallaAlto = window.innerHeight;
const fotogramas = 1000 / 60;

// ---------------------------------------------------------------
// ------------------ Variables de la Partida --------------------
// ---------------------------------------------------------------
const vectorEstrellas = [];
const maxEstrellas = 200;
const gravedad = 5;
const vectorEnemigos = [];
const maxEnemigos = 12;

// ---------------------------------------------------------------
// ------------------ VECTOR OBJETOS ESTRELLA --------------------
// ---------------------------------------------------------------
for (let i = 0; i < maxEstrellas; i++) {
  vectorEstrellas.push(new Estrella());
  pantalla.appendChild(vectorEstrellas[i].elementoHTML);
}

// ---------------------------------------------------------------
// ------------------------ OBJETO NAVE --------------------------
// ---------------------------------------------------------------
const nave = new Nave();
pantalla.appendChild(nave.elementoHTML);

// ---------------------------------------------------------------
// ------------------ VECTOR OBJETOS ENEMIGO ---------------------
// ---------------------------------------------------------------
for (let i = 0; i < maxEnemigos; i++) {
  vectorEnemigos.push(new Enemigo());
  pantalla.appendChild(vectorEnemigos[i].elementoHTML);
}

// ---------------------------------------------------------------
// -------------------- EVENTOS DE TECLADO -----------------------
// ---------------------------------------------------------------
//Control de la nave cuando el usuario presiona una tecla
addEventListener("keydown", (evento) => {
  switch (evento.key) {
    case "ArrowUp":
      nave.velocidad = -gravedad;
      nave.activa = true;
      break;
    default:
      break;
  }
});
//Control de la nave cuando el usuario deja de presionar una tecla
addEventListener("keyup", (evento) => {
  switch (evento.key) {
    case "ArrowUp":
      nave.velocidad = gravedad;
      nave.activa = false;
      break;
    default:
      break;
  }
});

// ---------------------------------------------------------------
// ---------------- BUCLE ANIMACIÓN VIDEOJUEGO -------------------
// ---------------------------------------------------------------
setInterval(() => {
  //1. Gestión de las estrellas
  vectorEstrellas.forEach((estrella) => {
    estrella.mover();
    estrella.dibujar();
  });
  //2. Gestión del jugador
  nave.dibujar();
  nave.mover();
  //3. Gestión de los enemigos
  vectorEnemigos.forEach((enemigo) => {
    enemigo.mover();
    enemigo.dibujar();
  });
}, fotogramas);
