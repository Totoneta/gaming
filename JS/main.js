/* Videojuegos */
const videojuegos = [
    {
    nombre:"Counter Strike 2", 
    descripcion:"Es un juego de estrategia y habilidad con acción emocionante y competitiva en entornos urbanos.", 
    preciopromedio:"14,29 euros", 
    social:"Buenas vibras en rangos bajos", 
    tips:"Para mejorar en Counter-Strike 2: practica la puntería en aim maps, aprende las rutas de los mapas, comunica con tu equipo, estudia estrategias, observa partidas de jugadores profesionales, y mantén la calma en situaciones intensas.", 
    imagen:"/Images/tarjetas-uno.jpeg"
},
{
    nombre:"Rocket League", 
    descripcion:"Fútbol en autos potenciados. Una mezcla emocionante de deporte y conducción, ofreciendo diversión y competencia enérgica.", 
    preciopromedio:"$19.99 USD", 
    social:"No hay casi flamers, algunos servidores con lag.", 
    tips:"Para mejorar en Rocket League: practica el control del coche y la precisión en los tiros, aprende a rotar en equipo, domina el impulso y la defensa, y estudia estrategias de juego.", 
    imagen:"/Images/tarjetas-dos.jpeg"
},
{
    nombre:"7Dayz to Die", 
    descripcion:"Es un juego de supervivencia y construcción en un mundo postapocalíptico lleno de zombis y peligros.", 
    preciopromedio:"$24.99 USD", 
    social:"Poca gente en servidores público, todos buena onda.", 
    tips:"Fortifica tu base contra zombis, busca recursos estratégicamente, aprende a fabricar objetos y armas, y evita el combate innecesario.", 
    imagen:"/Images/seven-days.jpeg"
},
{
    nombre:"Don't Starve Together", 
    descripcion:"Es un juego de supervivencia con un estilo de arte único, desafiando a los jugadores en un mundo oscuro y peligroso.", 
    preciopromedio:"$14.99 USD", 
    social:"Online para jugar con tus amigos!", 
    tips:"Familiarízate con la mecánica de supervivencia, explora el mundo para encontrar recursos, construye refugios seguros, y experimenta con la creación de objetos y la agricultura.", 
    imagen:"/Images/dontstarve.jpeg"
},
{
    nombre:"The Binding of Isaac", 
    descripcion:"Juego de roguelike donde Isaac, un niño, se aventura en mazmorras generadas aleatoriamente, enfrentando peligros y explorando su turbulento pasado.", 
    preciopromedio:"$10 a $15 USD", 
    social:"Pocas personas en el online, principalmente para jugar con amigos.", 
    tips:"Practica la mecánica del juego, aprende los patrones de los enemigos, descubre combinaciones de objetos y experimenta con diferentes personajes y estrategias.", 
    imagen:"/Images/the-binding-of-isaac.jpeg"
},
{
    nombre:"League of Legends", 
    descripcion:"Un popular MOBA donde equipos compiten en intensas batallas estratégicas, seleccionando campeones con habilidades únicas para destruir la base enemiga.", 
    preciopromedio:"Gratuito, contiene compras en el juego.", 
    social:"Un porcentaje muy alto de personas toxicas, jugar con amigos esta genial!", 
    tips:"Practica con diferentes campeones, aprende roles y estrategias, comunícate con tu equipo, mantén la calma y analiza replays para identificar áreas de mejora.", 
    imagen:"/Images/league-of-legends.jpeg"
},
{
    nombre:"Project Zomboid", 
    descripcion:"Es un juego de supervivencia postapocalíptico con desafíos de gestión, exploración y enfrentamientos contra hordas de zombis.", 
    preciopromedio:"$14.99 USD", 
    social:"Todos muy tryhard en online, te matan apenas entras.", 
    tips:"Planifica cuidadosamente tus recursos y refugio, evita el contacto directo con zombis siempre que sea posible, y aprende habilidades de supervivencia esenciales como la caza y la agricultura.", 
    imagen:"/Images/projectzomboid.jpg"
}
];

/* Navbar */
const imgmenu = document.querySelector(".img-navbar-izquierda");
const menuvertical = document.querySelector(".menu-vertical");

imgmenu.addEventListener("click", () => {
    menuvertical.classList.toggle("showhide")
});


/* Videojuegos.html */

/* Líneas horizontales de los videojuegos */

const videojuegosItems = document.querySelector(".videojuegos");

/* Crea los Videojuegos individualmente */

function mostrarVideojuegos(videojuegos) {
    videojuegos.forEach((e) => {

        const divVideojuego = document.createElement("div");
        divVideojuego.classList.add("videojuego");

        const imgVideojuego = document.createElement("img");
        const titulo = document.createElement("h3");
        const descripcion = document.createElement("p");
        const precio = document.createElement("span");


        imgVideojuego.src = e.imagen;
        titulo.innerHTML = `<h3>Título: ${e.nombre}</h3>`;
        precio.innerHTML = `<h3>Precio promedio: ${e.preciopromedio}</h3>`;
        descripcion.innerHTML = `<h3>Descripción: ${e.descripcion}</h3>`;

        divVideojuego.appendChild(imgVideojuego);
        divVideojuego.appendChild(titulo);
        divVideojuego.appendChild(precio);
        divVideojuego.appendChild(descripcion);
        videojuegosItems.appendChild(divVideojuego);

        /* Ventanas Emergentes de Videojuegos */
        const divVentana = document.createElement("div");

        /* Cerrar Ventana */
        const cerrarContainer = document.createElement("div");
        const cerrarVentana = document.createElement("img");

        const imgVentana = document.createElement("img");
        const precioVentana = document.createElement("p");
        const tituloVentana = document.createElement("h3");
        const descripcionVentana = document.createElement("p");
        const tipsVentana = document.createElement("p");
        const ambienteVentana = document.createElement("p");
        divVentana.classList.add("videojuego-ventana");
        cerrarContainer.classList.add("cerrar-ventana");

        /* Descripción ventana */
        cerrarVentana.src = '/Images/cerrar.svg';
        imgVentana.src = e.imagen;
        tituloVentana.innerHTML = `<h3>Título: ${e.nombre}</h3>`;
        precioVentana.innerHTML = `<h3>Precio promedio: ${e.preciopromedio}</h3>`;
        descripcionVentana.innerHTML = `<h3>Descripción: ${e.descripcion}</h3>`;
        tipsVentana.innerHTML = `<h3>Tips para mejorar rápido: ${e.tips}</h3>`;
        ambienteVentana.innerHTML = `<h3>Calidad Social: ${e.social}</h3>`;

        /* Añadir img de CerrarVentana a Contenedor p/ cerrar la ventana */
        cerrarContainer.appendChild(cerrarVentana);


        /* Añadir toda la ventana */
        divVentana.appendChild(cerrarContainer);
        divVentana.appendChild(imgVentana);
        divVentana.appendChild(tituloVentana);
        divVentana.appendChild(precioVentana);
        divVentana.appendChild(descripcionVentana);
        divVentana.appendChild(tipsVentana);
        divVentana.appendChild(ambienteVentana);

        /* Qué se muestre clickeando */
        divVideojuego.addEventListener("click", () => {
            document.body.appendChild(divVentana);
        });

        /* Cerrar ventana con button "x" */
        cerrarVentana.addEventListener("click", () => {
            document.body.removeChild(divVentana);
        })
    });
}
mostrarVideojuegos(videojuegos);





























