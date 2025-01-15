const videojuegos = [
    {
        nombre: "Counter Strike 2",
        descripcion: "Es un juego de estrategia y habilidad con acción emocionante y competitiva en entornos urbanos.",
        preciopromedio: "14,29 euros",
        social: "Buenas vibras en <strong>rangos bajos</strong>",
        tips: "Para mejorar en Counter-Strike 2: practica la <strong>puntería en aim maps</strong>, aprende las <strong>rutas de los mapas</strong>, comunica con tu <strong>equipo</strong>, estudia <strong>estrategias</strong>, observa partidas de jugadores <strong>profesionales</strong>, y mantén la <strong>calma</strong> en situaciones intensas.",
        imagen: "/Images/tarjetas-uno.jpeg"
    },
    {
        nombre: "Rocket League",
        descripcion: "Fútbol en autos potenciados. Una mezcla emocionante de deporte y conducción, ofreciendo diversión y competencia enérgica.",
        preciopromedio: "$19.99 USD",
        social: "No hay casi <strong>flamers</strong>, algunos servidores con <strong>lag</strong>.",
        tips: "Para mejorar en Rocket League: practica el <strong>control del coche</strong> y la <strong>precisión en los tiros</strong>, aprende a <strong>rotar en equipo</strong>, domina el <strong>impulso</strong> y la <strong>defensa</strong>, y estudia <strong>estrategias de juego</strong>.",
        imagen: "/Images/tarjetas-dos.jpeg"
    },
    {
        nombre: "7Dayz to Die",
        descripcion: "Es un juego de supervivencia y construcción en un mundo postapocalíptico lleno de zombis y peligros.",
        preciopromedio: "$24.99 USD",
        social: "Poca gente en servidores público, todos <strong>buena onda</strong>.",
        tips: "Fortifica tu <strong>base</strong> contra zombis, busca <strong>recursos estratégicamente</strong>, aprende a <strong>fabricar objetos</strong> y <strong>armas</strong>, y evita el <strong>combate innecesario</strong>.",
        imagen: "/Images/seven-days.jpeg"
    },
    {
        nombre: "Don't Starve Together",
        descripcion: "Es un juego de supervivencia con un estilo de arte único, desafiando a los jugadores en un mundo oscuro y peligroso.",
        preciopromedio: "$14.99 USD",
        social: "Online para jugar con tus <strong>amigos</strong>!",
        tips: "Familiarízate con la mecánica de <strong>supervivencia</strong>, explora el mundo para encontrar <strong>recursos</strong>, construye <strong>refugios seguros</strong>, y experimenta con la creación de <strong>objetos</strong> y la <strong>agricultura</strong>.",
        imagen: "/Images/dontstarve.jpeg"
    },
    {
        nombre: "The Binding of Isaac",
        descripcion: "Juego de roguelike donde Isaac, un niño, se aventura en mazmorras generadas aleatoriamente, enfrentando peligros y explorando su turbulento pasado.",
        preciopromedio: "$10 a $15 USD",
        social: "Pocas personas en el online, principalmente para jugar con <strong>amigos</strong>.",
        tips: "Practica la <strong>mecánica del juego</strong>, aprende los <strong>patrones de los enemigos</strong>, descubre <strong>combinaciones de objetos</strong> y experimenta con diferentes <strong>personajes</strong> y <strong>estrategias</strong>.",
        imagen: "/Images/the-binding-of-isaac.jpeg"
    },
    {
        nombre: "League of Legends",
        descripcion: "Un popular MOBA donde equipos compiten en intensas batallas estratégicas, seleccionando campeones con habilidades únicas para destruir la base enemiga.",
        preciopromedio: "Gratuito, contiene compras en el juego.",
        social: "Un porcentaje muy alto de personas <strong>toxicas</strong>, jugar con <strong>amigos</strong> está genial!",
        tips: "Practica con diferentes <strong>campeones</strong>, aprende <strong>roles</strong> y <strong>estrategias</strong>, comunícate con tu <strong>equipo</strong>, mantén la <strong>calma</strong> y analiza <strong>replays</strong> para identificar áreas de mejora.",
        imagen: "/Images/league-of-legends.jpeg"
    },
    {
        nombre: "Project Zomboid",
        descripcion: "Es un juego de supervivencia postapocalíptico con desafíos de gestión, exploración y enfrentamientos contra hordas de zombis.",
        preciopromedio: "$14.99 USD",
        social: "Todos muy <strong>tryhard</strong> en online, te matan apenas entras.",
        tips: "Planifica cuidadosamente tus <strong>recursos</strong> y <strong>refugio</strong>, evita el contacto directo con <strong>zombis</strong> siempre que sea posible, y aprende habilidades de <strong>supervivencia</strong> esenciales como la <strong>caza</strong> y la <strong>agricultura</strong>.",
        imagen: "/Images/projectzomboid.jpg"
    },
    {
        nombre: "Minecraft",
        descripcion: "Un juego sandbox donde los jugadores exploran mundos generados aleatoriamente, construyen estructuras y sobreviven en un entorno de bloques.",
        preciopromedio: "$26.95 USD",
        social: "Comunidad muy activa, varios <strong>servidores</strong> y <strong>mods</strong>.",
        tips: "Aprende a usar las <strong>herramientas</strong> y <strong>recursos</strong> a tu favor, crea <strong>refugios</strong> desde el inicio y explora el mundo para encontrar materiales valiosos.",
        imagen: "/Images/minecraft.jpeg"
    },
    {
        nombre: "Overwatch 2",
        descripcion: "Shooter en equipo que se enfoca en la acción rápida y en trabajar en conjunto para lograr los objetivos del mapa.",
        preciopromedio: "Gratuito, contiene compras dentro del juego.",
        social: "Comunidad <strong>competitiva</strong>, pero también <strong>amistosa</strong> si juegas con amigos.",
        tips: "Elige un <strong>héroe</strong> que se adapte a tu estilo de juego, coordina <strong>estrategias</strong> con tu equipo, y adapta tu rol a las <strong>necesidades del equipo</strong>.",
        imagen: "/Images/overwatch2.webp"
    },
    {
        nombre: "The Elder Scrolls V: Skyrim",
        descripcion: "Un RPG de mundo abierto donde los jugadores exploran un vasto continente, completan misiones y enfrentan enemigos épicos.",
        preciopromedio: "$39.99 USD",
        social: "Comunidad activa de <strong>modding</strong> y <strong>exploración</strong>.",
        tips: "Explora cada rincón del mapa para encontrar <strong>secretos</strong>, personaliza tu <strong>personaje</strong> y experimenta con diferentes estilos de <strong>combate</strong>.",
        imagen: "/Images/skyrim.jpeg"
    },
    {
        nombre: "Fortnite",
        descripcion: "Juego de batalla real que combina disparos, construcción y supervivencia en un entorno competitivo.",
        preciopromedio: "Gratuito, con compras dentro del juego.",
        social: "Comunidad <strong>diversa</strong> y activa, con <strong>eventos especiales</strong>.",
        tips: "Construye <strong>estructuras</strong> rápidamente para protegerte, aprende a jugar <strong>agresivamente</strong> o <strong>defensivamente</strong> según tu estilo, y mantente siempre en <strong>movimiento</strong>.",
        imagen: "/Images/fortnite.jpeg"
    },
    {
        nombre: "Apex Legends",
        descripcion: "Juego de batalla real con un enfoque en personajes con habilidades únicas y combates tácticos.",
        preciopromedio: "Gratuito, con compras dentro del juego.",
        social: "Comunidad <strong>activa</strong>, pero puede ser <strong>competitivo</strong>.",
        tips: "Domina a tus <strong>leyendas favoritas</strong>, mantén la <strong>comunicación</strong> con tu equipo, y juega de forma <strong>táctica</strong> para tomar el control de las zonas clave.",
        imagen: "/Images/apex-legends.jpeg"
    },
    {
        nombre: "Dark Souls III",
        descripcion: "Un desafiante RPG de acción donde los jugadores enfrentan enemigos formidables y exploran un mundo oscuro y peligroso.",
        preciopromedio: "$59.99 USD",
        social: "Comunidad <strong>apasionada</strong>, aunque la <strong>dificultad</strong> es una barrera para algunos.",
        tips: "Aprende los <strong>patrones de ataque</strong> de los enemigos, haz uso de la <strong>paciencia</strong> y <strong>persevera</strong> en cada combate.",
        imagen: "/Images/dark-souls3.jpeg"
    },
    {
        nombre: "Fall Guys",
        descripcion: "Un juego de batallas de obstáculos en línea donde los jugadores compiten en rondas para ser el último en pie.",
        preciopromedio: "Gratuito, con compras dentro del juego.",
        social: "Diversión y <strong>risas</strong>, gran comunidad para jugar en <strong>equipo</strong>.",
        tips: "Mantén la <strong>calma</strong> en los desafíos y aprende las <strong>rutas de los mapas</strong> para adelantarte a los demás.",
        imagen: "/Images/fall-guys.avif"
    },
    {
        nombre: "Valorant",
        descripcion: "Shooter táctico en primera persona donde los jugadores luchan en equipos para desactivar bombas o eliminar al equipo contrario.",
        preciopromedio: "Gratuito, con compras dentro del juego.",
        social: "Comunidad <strong>competitiva</strong> y <strong>dinámica</strong>.",
        tips: "Practica tus <strong>tiros</strong>, estudia los <strong>mapas</strong> y aprende a utilizar las <strong>habilidades</strong> de los agentes de manera <strong>estratégica</strong>.",
        imagen: "/Images/valorant.avif"
    },
    {
        nombre: "The Witcher 3: Wild Hunt",
        descripcion: "Un RPG de acción en un <strong>mundo abierto</strong>, donde el jugador controla al <strong>cazador de monstruos</strong> Geralt de Rivia en busca de su <strong>hija adoptiva</strong>.",
        preciopromedio: "$49.99 USD",
        social: "Comunidad activa, especialmente en <strong>mods</strong> y <strong>contenido adicional</strong>.",
        tips: "Aprovecha las <strong>habilidades</strong> de Geralt en combate, mejora tu <strong>equipo</strong> y haz <strong>misiones secundarias</strong> para obtener más experiencia.",
        imagen: "/Images/witcher3.jpeg"
    },
    {
        nombre: "Stardew Valley",
        descripcion: "Simulador de <strong>granja</strong> donde los jugadores cultivan, crían <strong>animales</strong> y participan en la <strong>vida comunitaria</strong>.",
        preciopromedio: "$14.99 USD",
        social: "Comunidad relajada, ideal para jugar en <strong>solitario</strong> o con <strong>amigos</strong>.",
        tips: "Planea bien la distribución de tus <strong>cultivos</strong>, mejora tu <strong>granja</strong> y participa en <strong>eventos locales</strong>.",
        imagen: "/Images/stardew-valley.jpeg"
    },
    {
        nombre: "Hades",
        descripcion: "Un juego de acción <strong>roguelike</strong> donde el jugador controla a Zagreus, el hijo de Hades, en su intento por escapar del <strong>inframundo</strong>.",
        preciopromedio: "$24.99 USD",
        social: "Comunidad muy activa, especialmente por la jugabilidad <strong>roguelike</strong>.",
        tips: "Aprende los <strong>patrones</strong> de los enemigos y las mejores <strong>combinaciones de habilidades</strong> para mejorar tus escapatorias.",
        imagen: "/Images/hades.jpeg"
    },
    {
        nombre: "Cyberpunk 2077",
        descripcion: "RPG de acción en un <strong>mundo futurista</strong>, donde el jugador vive la vida del <strong>mercenario</strong> V, con un enfoque en la <strong>toma de decisiones</strong> y la <strong>narrativa</strong>.",
        preciopromedio: "$59.99 USD",
        social: "Comunidad muy apasionada por la <strong>historia</strong> y los <strong>gráficos</strong>.",
        tips: "Personaliza a tu <strong>personaje</strong>, explora la <strong>ciudad</strong> y haz <strong>misiones secundarias</strong> para mejorar tus habilidades.",
        imagen: "/Images/cyberpunk.jpeg"
    },
    {
        nombre: "Subnautica",
        descripcion: "Juego de <strong>supervivencia submarina</strong> en un planeta alienígena, donde los jugadores deben explorar y recolectar <strong>recursos</strong> para sobrevivir.",
        preciopromedio: "$29.99 USD",
        social: "Comunidad pequeña pero entusiasta, especialmente sobre la <strong>exploración submarina</strong>.",
        tips: "Explora y encuentra <strong>recursos</strong> rápidamente, pero también mantén un ojo en tu <strong>oxígeno</strong> y <strong>salud</strong>.",
        imagen: "/Images/subnautica.avif"
    },
    {
        nombre: "Dead by Daylight",
        descripcion: "Juego <strong>multijugador asimétrico</strong> donde un jugador toma el rol de un <strong>asesino</strong> y los demás deben sobrevivir.",
        preciopromedio: "$19.99 USD",
        social: "Comunidad activa, aunque puede ser algo <strong>competitiva</strong>.",
        tips: "Como <strong>sobreviviente</strong>, mantente en silencio y trabaja en equipo. Como <strong>asesino</strong>, aprende los <strong>mapas</strong> y las <strong>habilidades</strong> del asesino.",
        imagen: "/Images/dead-by-daylight.jpeg"
    },
    {
        nombre: "Red Dead Redemption 2",
        descripcion: "Un juego de acción y aventura en el <strong>viejo oeste</strong> donde el jugador controla a Arthur Morgan, un miembro de la banda Van der Linde.",
        preciopromedio: "$59.99 USD",
        social: "Comunidad activa, con muchos aficionados a la <strong>historia</strong> y la <strong>exploración</strong>.",
        tips: "Disfruta de la <strong>historia principal</strong>, pero también dedica tiempo a las <strong>misiones secundarias</strong> para sumergirte en el mundo.",
        imagen: "/Images/red-dead.jpeg"
    },
    {
        nombre: "Terraria",
        descripcion: "Un juego <strong>sandbox</strong> en 2D donde los jugadores pueden explorar, construir y luchar en un mundo lleno de <strong>criaturas</strong> y desafíos.",
        preciopromedio: "$9.99 USD",
        social: "Comunidad muy activa y creativa, con muchos <strong>mods</strong> y <strong>servidores</strong>.",
        tips: "Explora el mundo <strong>subterráneo</strong> y construye tu <strong>base</strong>, mientras luchas contra los <strong>jefes</strong> y recoges <strong>materiales raros</strong>.",
        imagen: "/Images/terraria.jpeg"
    },
    {
        nombre: "Sea of Thieves",
        descripcion: "Un juego de <strong>aventuras en línea</strong> donde los jugadores navegan por los mares, buscan <strong>tesoros</strong> y se enfrentan a otros <strong>piratas</strong>.",
        preciopromedio: "$39.99 USD",
        social: "Comunidad activa, ideal para jugar con <strong>amigos</strong>.",
        tips: "Trabaja en equipo para <strong>navegar</strong>, busca <strong>tesoros</strong> y defiende tu <strong>barco</strong> de los enemigos.",
        imagen: "/Images/sea-of-thieves.jpeg"
    },
];



/* Navbar */
const imgmenu = document.querySelector(".img-navbar-izquierda");
const menuvertical = document.querySelector(".menu-vertical");

imgmenu.addEventListener("click", () => {
    menuvertical.classList.toggle("showhide")
});


/* Videojuegos.html */

const videojuegosItems = document.querySelector(".videojuegos");

/* Crea los Videojuegos individualmente */

function mostrarVideojuegos(videojuegos) {
    videojuegos.forEach((e) => {

        const divVideojuego = document.createElement("div");
        divVideojuego.classList.add("videojuego");

        const imgVideojuego = document.createElement("img");


        imgVideojuego.src = e.imagen;

        divVideojuego.appendChild(imgVideojuego);
        videojuegosItems.appendChild(divVideojuego);

        /* Ventanas Emergentes de Videojuegos */
        const divVentana = document.createElement("div");

        /* Cerrar Ventana */
        const cerrarContainer = document.createElement("div");
        const cerrarVentana = document.createElement("img");

        const imgVentana = document.createElement("img");
        const tituloVentana = document.createElement("h3");

        const listadetalles = document.createElement("ul");

        const precioVentana = document.createElement("li");
        const descripcionVentana = document.createElement("li");
        const tipsVentana = document.createElement("li");
        const ambienteVentana = document.createElement("li");

        listadetalles.appendChild(precioVentana)
        listadetalles.appendChild(descripcionVentana)
        listadetalles.appendChild(tipsVentana)
        listadetalles.appendChild(ambienteVentana)

        divVentana.classList.add("videojuego-ventana");
        cerrarContainer.classList.add("cerrar-ventana");

        /* Descripción ventana */
        cerrarVentana.src = '/Images/close.svg';
        imgVentana.src = e.imagen;
        tituloVentana.innerHTML = `Título: ${e.nombre}`;
        precioVentana.innerHTML = `Precio promedio: ${e.preciopromedio}`;
        descripcionVentana.innerHTML = `Descripción: ${e.descripcion}`;
        tipsVentana.innerHTML = `Tips para mejorar rápido: ${e.tips}`;
        ambienteVentana.innerHTML = `Calidad Social: ${e.social}`;

        /* Añadir img de CerrarVentana a Contenedor p/ cerrar la ventana */
        cerrarContainer.appendChild(cerrarVentana);


        /* Añadir toda la ventana */
        divVentana.appendChild(cerrarContainer);
        divVentana.appendChild(imgVentana);
        divVentana.appendChild(tituloVentana);
        divVentana.appendChild(listadetalles);

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





























