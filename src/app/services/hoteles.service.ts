import { Injectable } from '@angular/core';
import {HotelesModel} from "../models/hoteles-model";

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor() { }

  productos: any[]= [
    {
      "id" : 1,
      "nombre": "Hotel El Prado",
      "ubicacion": "Barranquilla",
      "descripcion" : "Somos un hotel histórico ubicado en el mejor sector de la ciudad, " +
        "formando parte del patrimonio nacional de Colombia. Ofrecemos 206 habitaciones amplias, " +
        "modernas y elegantes, distribuidas en área clásica, ejecutiva y cabaña.",
      "precio" : "$175.000",
      "imagen" : "/assets/img/prado.png"

    },
    {
      "id" : 2,
      "nombre": "Hotel Isla del Encanto",
      "ubicacion": "Cartagena",
      "descripcion" : "En Isla del Encanto contamos con una gran variedad de servicios que complementarán " +
        "tu estadía, para que pases momentos inolvidables en el hotel más encantador de Barú. El encanto " +
        "empieza en nuestra ubicación, estamos en el Parque Corales del Rosario, a solo una hora de la ciudad " +
        "de Cartagena.",
      "precio" : "$650.000",
      "imagen" : "/assets/img/isladelencanto.png"

    },
    {
      "id" : 3,
      "nombre": "Hotel Las Carretas",
      "ubicacion": "Cartagena",
      "descripcion" : "Disfruta de una estadía muy especial en el Hotel Boutique Las Carretas. Ubicado en pleno " +
        "corazón del centro histórico de Cartagena, este alojamiento es su mejor opción si desea descubrir la " +
        "excepcional historia y magia de Cartagena. Su elegante diseño es fruto de la unión de la arquitectura " +
        "colonial con toques modernos.",
      "precio" : "$250.000",
      "imagen" : "/assets/img/lascarretas.png"

    },
    {
      "id" : 4,
      "nombre": "Hotel San Fernando Plaza",
      "ubicacion": "Medellín",
      "descripcion" : "El Hotel San Fernando Plaza es la primera elección de los extranjeros y ejecutivos al visitar " +
        "esta hermosa Ciudad. Se encuentra ubicado en el corredor vial conocido como la ‘Milla de oro’ " +
        "(Avenida el Poblado), en el Centro Financiero y Cultural San Fernando Plaza; sector más exclusivo de la Capital " +
        "antioqueña.",
      "precio" : "$190.000",
      "imagen" : "/assets/img/sanfernando.png"

    },
    {
      "id" : 5,
      "nombre": "Hotel Cosmos 100",
      "ubicacion": "Bogotá",
      "descripcion" : "El Cosmos 100 Hotel y Centro de Convenciones brinda todo un portafolio de comodidades y espacios " +
        "a la medida, un alojamiento de lujo con 18 salones con capacidad hasta para 1.300 personas, 4 restaurantes, 2 bares " +
        "y 1 café gourmet, 199 completas habitaciones, zonas húmedas, piscina, servicio personalizado y una ubicación estratégica" +
        " en el norte de Bogotá.",
      "precio" : "$170.000",
      "imagen" : "/assets/img/cosmos.png"

    },
    {
      "id" : 6,
      "nombre": "Hotel Selina",
      "ubicacion": "Bogotá",
      "descripcion" : "Selina La Candelaria Bogotá se encuentra en Bogotá y tiene un restaurante, bar, salón compartido y jardín." +
        " También ofrece recepción 24 horas, cocina compartida, WiFi gratuita, espectáculos nocturnos y un mostrador de información" +
        " turística.",
      "precio" : "$210.000",
      "imagen" : "/assets/img/selina.png"

    },
    {
      "id" : 7,
      "nombre": "Hotel Casa Blanca",
      "ubicacion": "Cúcuta",
      "descripcion" : "Hotel Casa bolanca cuenta con una piscina al aire libre y muchas otras instalaciones recreativas a tu " +
        "disposición, no te quedará ni un minuto libre. Tienes también una terraza en la azotea y jardín donde sentarte a " +
        "contemplar el paisaje. Encontrarás también conexión a Internet wifi gratis, servicios de conserjería y un salón de eventos.",
      "precio" : "$160.000",
      "imagen" : "/assets/img/casablanca.png"

    },
    {
      "id" : 8,
      "nombre": "Hotel Express 53",
      "ubicacion": "Bogotá",
      "descripcion" : "Somos la mejor opción de hotel económico en Chapinero Bogotá; por eso mientras permanezca en la capital " +
        "podrá contar con nuestras instalaciones. Poseemos 56 habitaciones totalmente equipadas, en un ambiente perfecto para su " +
        "confort y disfrute.",
      "precio" : "$90.000",
      "imagen" : "/assets/img/express.png"

    },
    {
      "id" : 9,
      "nombre": "Hotel Dann Carlton",
      "ubicacion": "Medellín",
      "descripcion" : "El Hotel Dann Carlton Medellín le ofrece además salones para eventos sociales y corporativos, exquisita " +
        "gastronomía, piscina climatizada, gimnasio, zonas húmedas y una inmensa variedad de servicios que hacen más amables y " +
        "plenas las estadías en la sorprendente capital Antioqueña.",
      "precio" : "$190.000",
      "imagen" : "/assets/img/dann.png"

    },
    {
      "id" : 10,
      "nombre": "Hotel Isla Múcura",
      "ubicacion": "Cartagena",
      "descripcion" : "Isla Múcura es uno de los paraísos caribeños más formidables que puedes encontrar en Colombia y es por " +
        "eso que cada año recibe miles de turistas con la intención de disfrutar de unas vacaciones reconfortantes y revitalizantes. " +
        "Múcura es un lugar paradisiaco con playas de hermosa arena blanca y aguas caribeñas color turquesa.",
      "precio" : "$370.000",
      "imagen" : "/assets/img/islamucura.png"

    },
    {
      "id" : 11,
      "nombre": "Hotel Atlantis Plaza",
      "ubicacion": "Cúcuta",
      "descripcion" : "El Atlantis Plaza se encuentra en Cúcuta y ofrece piscina al aire libre, spa y habitaciones con conexión Wi-Fi gratuita. " +
        "Todos los días se sirve un desayuno colombiano con huevos, cruasanes y arepas. Las habitaciones del Atlantis Plaza Hotel están equipadas" +
        " con aire acondicionado, TV de pantalla plana, minibar y baño privado con ducha.",
      "precio" : "$160.000",
      "imagen" : "/assets/img/atlantis.png"

    },
    {
      "id" : 12,
      "nombre": "Hotel Buena Vista Express",
      "ubicacion": "Bucaramanga",
      "descripcion" : "El Hotel Buena Vista Express ofrece conexión Wi-Fi gratuita y un " +
        "desayuno bufé en Bucaramanga. También cuenta con piscina al aire libre y alberga un " +
        "restaurante. El centro comercial Cacique está a 7 minutos en coche y el aeropuerto Palonegro, a 20 minutos en coche.",
      "precio" : "135.000",
      "imagen" : "/assets/img/buenavista.png"

    },
    {
      "id" : 13,
      "nombre": "Hotel Isla Palma",
      "ubicacion": "Cartagena",
      "descripcion" : "Situada a dos horas en lancha de Cartagena, y rodeada de playas coralinas, ciénagas y manglares, Isla Palma se ha" +
        " convertido en el destino obligado para aquellos que buscan dejar a un lado su trabajo y obligaciones y simplemente, relajarse.",
      "precio" : "$460.000",
      "imagen" : "/assets/img/islapalma.png"

    },
    {
      "id" : 14,
      "nombre": "Hotel Palonegro",
      "ubicacion": "Bucaramanga",
      "descripcion" : "Somos un hotel familiar y ejecutivo, afiliado a Cotelco. Dispuestos a atenderlos como si estuvieran en su propia casa," +
        " en un ambiente tranquilo y acogedor donde se respira paz y tranquilidad; además de sentirse muy bien, ya que nuestra atención es muy " +
        "personalizada",
      "precio" : "$80.000",
      "imagen" : "/assets/img/palonegro.png"

    },
    {
      "id" : 15,
      "nombre": "Hotel Sterling",
      "ubicacion": "Cúcuta",
      "descripcion" : "El Hotel Sterling se encuentra en Cúcuta, a 1,4 km de la biblioteca pública de Cúcuta, y ofrece alojamiento con restaurante," +
        " aparcamiento privado gratuito y salón compartido. El alojamiento cuenta con recepción 24 horas, servicio de enlace con el aeropuerto, " +
        "servicio de habitaciones y WiFi gratuita en todas las instalaciones.",
      "precio" : "80.000",
      "imagen" : "/assets/img/sterling.png"

    },
    {
      "id" : 16,
      "nombre": "Hotel Ayenda 1508 El Rubí",
      "ubicacion": "Bucaramanga",
      "descripcion" : "El Hotel Ayenda 1508 El Rubí está ubicado en la ciudad de Bucaramanga, todas las habitaciones cuentan con baño privado, kit de " +
        "aseo personal, televisión y botella de agua de cortesía. Nuestro hotel está muy cerca de Gobernación De Santander, a solo 0 minutos en carro, " +
        "también muy cerca se encuentra Exito principal la rosita, a solo 4 minutos caminando",
      "precio" : "40.000",
      "imagen" : "/assets/img/elrubi.png"

    },
    {
      "id" : 17,
      "nombre": "Hotel American Golf",
      "ubicacion": "Baranquilla",
      "descripcion" : "American Golf Hotel cuenta con 56 habitaciones de lujo en el barrio Alto Prado. La propiedad fue construida en 2004 y dispone de " +
        "estilo industrial. La propiedad también ofrece servicio médico, servicio de habitaciones y servicio de portero. Una ubicación estupenda permite a " +
        "los huéspedes explorar la zona y Parque Rosado que se ubica a poca distancia. ",
      "precio" : "170.000",
      "imagen" : "/assets/img/american.png"

    }
  ]

  public listarHoteles(){
    return this.productos
  }

}
