var array = [ "Amazonas", "Antioquia", "Boyaca", "Choco", "Cundinamarca", "Meta", "Santander", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Cordoba", "Huila", "Magdalena", "Quindio", "Risaralda", "Sucre", "Tolima", "Arauca", "Putumayo", "Guainia", "Vaupes", "Vichada", "Atlantico", "Bolivar"];
var listaCiudades = {
  meta: ["Acac\u00edas", "Barranca de Up\u00eda", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "La Macarena", "La Uribe", "Lejan\u00edas", "Mapirip\u00e1n", "Mesetas", "Puerto Concordia", "Puerto Gait\u00e1n", "Puerto Lleras", "Puerto L\u00f3pez", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito", "San Mart\u00edn", "Villavicencio", "Vista Hermosa"],
  boyaca: ["Almeida", "Aquitania", "Arcabuco", "Bel\u00e9n", "Berbeo", "Bet\u00e9itiva", "Boavita", "Boyac\u00e1", "Brice\u00f1o", "Buenavista", "Busbanz\u00e1", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquir\u00e1", "Ch\u00edquiza", "Chiscas", "Chita", "Chitaraque", "Chivat\u00e1", "Chivor", "Ci\u00e9nega", "C\u00f3mbita", "Coper", "Corrales", "Covarach\u00eda", "Cubar\u00e1", "Cucaita", "Cu\u00edtiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantiv\u00e1", "G\u00e1meza", "Garagoa", "Guacamayas", "Guateque", "Guayat\u00e1", "G\u00fcic\u00e1n", "Iza", "Jenesano", "Jeric\u00f3", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande", "Macanal", "Marip\u00ed", "Miraflores", "Mongua", "Mongu\u00ed", "Moniquir\u00e1", "Motavita", "Muzo", "Nobsa", "Nuevo Col\u00f3n", "Oicat\u00e1", "Otanche", "Pachavita", "P\u00e1ez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz del R\u00edo", "Pesca", "Pisba", "Puerto Boyac\u00e1", "Qu\u00edpama", "Ramiriqu\u00ed", "R\u00e1quira", "Rond\u00f3n", "Saboy\u00e1", "S\u00e1chica", "Samac\u00e1", "San Eduardo", "San Jos\u00e9 de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "San Pablo de Borbur", "Santa Mar\u00eda", "Santa Rosa de Viterbo", "Santa Sof\u00eda", "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soat\u00e1", "Socha", "Socot\u00e1", "Sogamoso", "Somondoco", "Sora", "Sorac\u00e1", "Sotaquir\u00e1", "Susac\u00f3n", "Sutamarch\u00e1n", "Sutatenza", "Tasco", "Tenza", "Tiban\u00e1", "Tibasosa", "Tinjac\u00e1", "Tipacoque", "Toca", "Tog\u00fc\u00ed", "T\u00f3paga", "Tota", "Tunja", "Tunungu\u00e1", "Turmequ\u00e9", "Tuta", "Tutaz\u00e1", "\u00dambita", "Ventaquemada", "Villa de Leyva", "Viracach\u00e1", "Zetaquira"],
  cundinamarca: ["Agua de Dios", "Alb\u00e1n", "Anapoima", "Anolaima", "Apulo", "Arbel\u00e1ez", "Beltr\u00e1n", "Bituima", "Bogot\u00e1", "Bojac\u00e1", "Cabrera", "Cachipay", "Cajic\u00e1", "Caparrap\u00ed", "C\u00e1queza", "Carmen de Carupa", "Chaguan\u00ed", "Ch\u00eda", "Chipaque", "Choach\u00ed", "Chocont\u00e1", "Cogua", "Cota", "Cucunub\u00e1", "El Colegio", "El Pe\u00f1\u00f3n", "El Rosal", "Facatativ\u00e1", "F\u00f3meque", "Fosca", "Funza", "F\u00faquene", "Fusagasug\u00e1", "Gachal\u00e1", "Gachancip\u00e1", "Gachet\u00e1", "Gama", "Girardot", "Granada", "Guachet\u00e1", "Guaduas", "Guasca", "Guataqu\u00ed", "Guatavita", "Guayabal de S\u00edquima", "Guayabetal", "Guti\u00e9rrez", "Jerusal\u00e9n", "Jun\u00edn", "La Calera", "La Mesa", "La Palma", "La Pe\u00f1a", "La Vega", "Lenguazaque", "Machet\u00e1", "Madrid", "Manta", "Medina", "Mosquera", "Nari\u00f1o", "Nemoc\u00f3n", "Nilo", "Nimaima", "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pul\u00ed", "Quebradanegra", "Quetame", "Quipile", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquil\u00e9", "Sibat\u00e9", "Silvania", "Simijaca", "Soacha", "Sop\u00f3", "Subachoque", "Suesca", "Supat\u00e1", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancip\u00e1", "Topaip\u00ed", "Ubal\u00e1", "Ubaque", "Ubat\u00e9", "Une", "\u00datica", "Venecia", "Vergara", "Vian\u00ed", "Villag\u00f3mez", "Villapinz\u00f3n", "Villeta", "Viot\u00e1", "Yacop\u00ed", "Zipac\u00f3n", "Zipaquir\u00e1"],
  amazonas: ["Leticia", "Puerto Nari\u00f1o"],
  antioquia: ["Abejorral", "Abriaqu\u00ed", "Alejandr\u00eda", "Amag\u00e1", "Amalfi", "Andes", "Angel\u00f3polis", "Angostura", "Anor\u00ed", "Anz\u00e1", "Apartad\u00f3", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Brice\u00f1o", "Buritic\u00e1", "C\u00e1ceres", "Caicedo", "Caldas", "Campamento", "Ca\u00f1asgordas", "Caracol\u00ed", "Caramanta", "Carepa", "Carolina del Pr\u00edncipe", "Caucasia", "Chigorod\u00f3", "Cisneros", "Ciudad Bol\u00edvar", "Cocorn\u00e1", "Concepci\u00f3n", "Concordia", "Copacabana", "Dabeiba", "Donmat\u00edas", "Eb\u00e9jico", "El Bagre", "El Carmen de Viboral", "El Pe\u00f1ol", "El Retiro", "El Santuario", "Entrerr\u00edos", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "G\u00f3mez Plata", "Granada", "Guadalupe", "Guarne", "Guatap\u00e9", "Heliconia", "Hispania", "Itag\u00fc\u00ed", "Ituango", "Jard\u00edn", "Jeric\u00f3", "La Ceja", "La Estrella", "La Pintada", "La Uni\u00f3n", "Liborina", "Maceo", "Marinilla", "Medell\u00edn", "Montebello", "Murind\u00f3", "Mutat\u00e1", "Nari\u00f1o", "Nech\u00ed", "Necocl\u00ed", "Olaya", "Peque", "Pueblorrico", "Puerto Berr\u00edo", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andr\u00e9s de Cuerquia", "San Carlos", "San Francisco", "San Jer\u00f3nimo", "San Jos\u00e9 de la Monta\u00f1a", "San Juan de Urab\u00e1", "San Luis", "San Pedro de Urab\u00e1", "San Pedro de los Milagros", "San Rafael", "San Roque", "San Vicente", "Santa B\u00e1rbara", "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sons\u00f3n", "Sopetr\u00e1n", "T\u00e1mesis", "Taraz\u00e1", "Tarso", "Titirib\u00ed", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valpara\u00edso", "Vegach\u00ed", "Venecia", "Vig\u00eda del Fuerte", "Yal\u00ed", "Yarumal", "Yolomb\u00f3", "Yond\u00f3", "Zaragoza"],
  santander: ["Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bol\u00edvar", "Bucaramanga", "Cabrera", "California", "Capitanejo", "Carcas\u00ed", "Cepit\u00e1", "Cerrito", "Charal\u00e1", "Charta", "Chima", "Chipat\u00e1", "Cimitarra", "Concepci\u00f3n", "Confines", "Contrataci\u00f3n", "Coromoro", "Curit\u00ed", "El Carmen de Chucur\u00ed", "El Guacamayo", "El Pe\u00f1\u00f3n", "El Play\u00f3n", "El Socorro", "Encino", "Enciso", "Flori\u00e1n", "Floridablanca", "Gal\u00e1n", "G\u00e1mbita", "Gir\u00f3n", "Guaca", "Guadalupe", "Guapot\u00e1", "Guavat\u00e1", "G\u00fcepsa", "Hato", "Jes\u00fas Mar\u00eda", "Jord\u00e1n", "La Belleza", "La Paz", "Land\u00e1zuri", "Lebrija", "Los Santos", "Macaravita", "M\u00e1laga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "P\u00e1ramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andr\u00e9s", "San Benito", "San Gil", "San Joaqu\u00edn", "San Jos\u00e9 de Miranda", "San Miguel", "San Vicente de Chucur\u00ed", "Santa B\u00e1rbara", "Santa Helena del Op\u00f3n", "Simacota", "Suaita", "Sucre", "Surat\u00e1", "Tona", "Valle de San Jos\u00e9", "V\u00e9lez", "Vetas", "Villanueva", "Zapatoca"],
  choco: ["Acand\u00ed", "Alto Baud\u00f3", "Bagad\u00f3", "Bah\u00eda Solano", "Bajo Baud\u00f3", "Bojay\u00e1", "Cant\u00f3n de San Pablo", "C\u00e9rtegui", "Condoto", "El Atrato", "El Carmen de Atrato", "El Carmen del Dari\u00e9n", "Istmina", "Jurad\u00f3", "Litoral de San Juan", "Llor\u00f3", "Medio Atrato", "Medio Baud\u00f3", "Medio San Juan", "N\u00f3vita", "Nuqu\u00ed", "Quibd\u00f3", "R\u00edo Ir\u00f3", "R\u00edo Quito", "Riosucio", "San Jos\u00e9 del Palmar", "Sip\u00ed", "Tad\u00f3", "Uni\u00f3n Panamericana", "Ungu\u00eda"],
  caldas:["Manizales", "Aguadas", "Anserma", "Aranzazu", "La dorada", "Marulanda"],
  caqueta: ["Florencia", "Albania", "Curillo", "Morelia", "Valparaiso"],
  casanare: ["Yopal", "Aguazul", "Hato Corozal", "Pore", "Villanueva"],
  cauca: ["Guachen\u00e9", "La sierra", "Inza"],
  cesar: ["Chiriguana", "Curuman\u00ed", "San Mar\u00ed"],
  cordoba: ["Ceret\u00e9", "Cotorra", "Lorica", "Momil"],
  huila: ["Neiva", "Aipe", "Baraya", "Colombia"],
  magdalena: ["Santa Marta", "Algarrobo", "Aracataca", "Concordia", "Plato"],
  quindio: ["Armenia", "Buenavista", "C\u00f3rdoba", "Pijao", "Salento"],
  risaralda: ["Pereira", "Ap\u00eda", "Balboa", "Dosquebradas", "Gu\u00e1tica", "Marsella"],
  sucre: ["Sincelejo", "Buenavista", "Caimito", "Coloso", "El roble", "La uni\u00f3n"],
  tolima: ["Alpujarra", "Cajamarca", "Dolores", "Herveo", "Mariquita", "Melgar", "Natagaima", "Ortega", "Purificaci\u00f3n"],
  arauca: ["Arauquita", "Cravo Norte", "Puerto Rond\u00f3n", "Arauca"],
  putumayo: ["Mocoa", "Col\u00f3n", "Orito", "Puerto Caicedo", "Puerto Guzm\u00e1n"],
  guainia: ["In\u00edrida", "Barranco Minas", "San Felipe", "Puerto Colombia", "Pana Pana", "Morichal"],
  vaupes: ["Caruru", "Pacoa", "Taraira", "Papunaua"],
  vichada: ["Puerto Carre\u00f1o", "La primavera", "Santa Rosal\u00eda", "Cumaribo"],
  atlantico: ["Juan de Acosta"],
  bolivar: ["Barranco de Loba", "Santa Rosa del sur", "Hatillo de Loba"]

}

function cargarDepartamentos() {
  addOptions("departamento", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
  var selector = document.getElementsByName(domElement)[0];
  for (departamento in array) {
      var opcion = document.createElement("option");
      opcion.text = array[departamento];
      // Añadimos un value a los option para hacer mas facil escoger las ciudades
      opcion.value = array[departamento].toLowerCase();
      selector.add(opcion);
  }
}

function cargarCiudades() {
    // Objeto de departamentos con ciudades
    var departamentos = document.getElementById('departamento');
    var ciudades = document.getElementById('ciudad');
    var departamentoSeleccionado = departamentos.value;
    
    // Se limpian las ciudades
    ciudades.innerHTML = '<option value="">Seleccione una ciudad</option>';
    
    if(departamentoSeleccionado !== '')
    {
      // Se seleccionan y ordenan las ciudades
      departamentoSeleccionado = listaCiudades[departamentoSeleccionado];
      //departamentoSeleccionado.sort(); EVITAR
    
      // Se insertan las ciudades
      departamentoSeleccionado.forEach(function(ciudad){
        let opcion = document.createElement('option');
        opcion.value = ciudad;
        opcion.text = ciudad;
        ciudades.add(opcion);
      });
    }
    
  }
 
window.onload = cargarDepartamentos;
 // Se cargan los departamentos para comprobar que funciona
//cargarDepartamentos();