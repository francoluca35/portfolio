
var currentLanguage = 'es'; 

function toggleLanguage() {

}

function changeLanguage(language) {

  currentLanguage = language;
  document.querySelector('.language-selected').classList.remove('change-en', 'change-es');
  document.querySelector('.language-selected').classList.add('change-' + language);


   //window.location.reload();
}


//ingles
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-item").children().eq(0).text("Home");
        $(".nav-item").children().eq(1).text("About Me");
        $(".nav-item").children().eq(2).text("Services");
        $(".nav-item").children().eq(3).text("Skills");
        $(".nav-item").children().eq(4).text("Attainment");
        $(".nav-item").children().eq(5).text("Portfolio");
        $(".nav-item").children().eq(6).text("Contact");
        $(".language-selected").text("");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-en");
        //Home
        $("#title2").text("Hello, My name is");
        $("#tit").text("I am a");
 
        //About
        $("#titleS").text("ABOUT ME");
        $("#soy").text("I am");
        $("#parrafo").text("Hello! I'm a Web Developer, passionate about JavaScript. Currently I'm honing my programming skills, as it's not just my job, but also my passion. That's why I enjoy it every second and I'm willing to spend my whole life coding. 🚀🌐");
       
        $("#btn-d").text("Download CV");

        //servicios
        $("#service").text("MY SERVICES");
        $("#desarro").text("Responsible for creating and maintaining web applications, websites, and other web-related products. Their responsibilities may vary depending on the specific focus of web development.")
        $("#desarrollo").text("Web development");
        $("#reparar").text("A professional specialized in identifying, diagnosing, and solving hardware and software-related issues in personal computers.");
        $("#reparacion").text("PC repair");
        $("#programa").text("A professional specialized in the creation and development of software. Their main task involves writing programming code, designing algorithms, and developing computer solutions to address specific problems.");
        $("#programador").text("Programmer");

        //tecnologia
        $("#tec").text("TECHNOLOGIES");
        //logros
        $("#car").text("CAREERS AND JOBS");

        $("#front").text("Front-End Developers");
        $("#frontend").text("Intermediate Front-End Development Course for Web Pages Done June 2, 2022, ended October 25, 2022");

        $("#full").text("Full-Stack Developers");
        $("#full2").text("Full-stack programming course Taken on March 16,2022, Finished on February 6, 2023. ");

        $("#reparacion2").text("PC Repair Technician");
        $("#reparacion3").text("Computer repair course Carried out in 2019 and completed in 2020")

        $("#vivintel").text("Web Developer Vivintel S.A");
        $("#vivintel2").text("Analysis, design and development of remote monitoring and control application for WEB and Android devices. From 09/2021 to 02/2023");

        $("#javas").text("JavaScript Developers");
        $("#javas2").text("JavaScript course completed with success. held on July 4 and ended on August 31, 2022");

        $("#fs").text("Full-Stack Web Developer");
        $("#fs2").text("DigitalBluee Course In progress. Started August 14.");

        $("#mono").text("Web Developer at Mono Naranja");
        $("#mono2").text("Web Developer for Mono Naranja, since 11/26/2023 - News");

        //portfolio
        $("#portf").text("MY PORTFOLIO");
        $("#Se").text("was used:");
        $("#Se1").text("was used:");
        $("#Se2").text("was used:");
        $("#Se3").text("was used:");
        $("#Se4").text("was used:");
        $("#Se5").text("was used:");

        //1
        $("#sedsp").text("To create this website, we tried to have a fairly structured order and semantics, so that we could edit the code without any problems.");
        //2
        $("#jla").text("To create this web technical service site, we tried to have a fairly structured order and semantics, so as to be able to edit the code without any type of inconvenience.");
        //3
        $("#OA").text("To create this web technical service site, we tried to have a fairly structured order and semantics, so as to be able to edit the code without any type of inconvenience.")
        //4
        $("#studioar").text("To create this web technical service site, we tried to have a fairly structured order and semantics, so as to be able to edit the code without any type of inconvenience.");
        $("#stud").text("Web Studio Architecture");
        //5
        $("#studioar").text("To create this web technical service site, we tried to have a fairly structured order and semantics, so as to be able to edit the code without any type of inconvenience.");
        //6
        $("#monoofi").text("To create this web technical service site, we tried to have a fairly structured order and semantics, so as to be able to edit the code without any type of inconvenience.")

        //contact
        $("#contac").text("CONTACT ME");
        $("#contactinfo").text("Service dedicated to the development of web pages for all types of small and large companies. Wide variety of formats, to consult for designs and budgets, take into account the following data and form.");
        $("#poconta").text("Get in touch");

        $("#name32").text("Full Name");
        $("#ubi").text("Location");
        $("#consulta").text("Consultation");
        $("#men").text("Message");
        $("#send22").text("Send Message");
    //exito
    $("#success-message").text("Message sent succesfully!");



    });
});

//español
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-item").children().eq(0).text("Inicio");
        $(".nav-item").children().eq(1).text("Sobre Mi");
        $(".nav-item").children().eq(2).text("Servicios");
        $(".nav-item").children().eq(3).text("Habilidades");
        $(".nav-item").children().eq(4).text("Logros");
        $(".nav-item").children().eq(5).text("Portfolio");
        $(".nav-item").children().eq(6).text("Contacto");
        $(".language-selected").text("");

        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title2").text("Hola, mi nombre es");
        $("#tit").text("Soy");
        //sobre
        $("#titleS").text("SOBRE MI");
        $("#soy").text("Soy");
        $("#parrafo").text("¡Hola! soy Desarrollador Full-Stack junior, apasionado de javascript. Actualmente estoy perfeccionando mis conocimientos en la programación, ya que no solo es mi trabajo, sino que es mi pasión es por ello que la disfruto cada segundo, y estoy dispuesto a pasarme toda la vida programando. 🚀🌐")
        $("#btn-d").text("Descargar CV");

        //servicios

        $("#service").text("MIS SERVICIOS");

        $("#desarrollo").text("Desarrollo Web")
        $("#desarro").text("encargado de crear y mantener aplicaciones web, sitios web y otros productos relacionados con la web. Sus responsabilidades pueden variar según el enfoque específico del desarrollo web.")
        
        $("#reparar").text(" profesional especializado en identificar, diagnosticar y solucionar problemas relacionados con hardware y software en computadoras personales.");
        $("#reparacion").text("Reparación de PC");
        
        $("#programa").text(" profesional especializado en la creación y desarrollo de software. Su tarea principal consiste en escribir código de programación, diseñar algoritmos y desarrollar soluciones informáticas para abordar problemas específicos. ");
        $("#programador").text("Programador");

        //tecnologia
        $("#tec").text("TECNOLOGÍAS");
        //logros
        $("#car").text("CARRERAS Y TRABAJOS");
        //1
        $("#front").text("Desarrollador Front-End ");
        $("#frontend").text(" Curso intermedio de desarrollo Front-End para Paginas Web Realizado el 2 de junio de 2022, finalizado 25 de octubre de 2022");
        //2
        $("#full").text("Desarrollador Full-Stack");
        $("#full2").text("Curso de programacion Full-stack Realizado el 16 de marzo de 2022, Terminado el 06 de febrero de 2023.");
        //3
        $("#reparacion2").text("Tecnico en Armado y Reparación de PC");
        $("#reparacion3").text("Curso De reparación de computos, Realizado en el 2019 y terminado en 2020")
        //4
        $("#vivintel").text("Desarrollador Web Vivintel S.A");
        $("#vivintel2").text(" Analisis diseño y desarrollo de aplicación de monitoreo y control remoto de dispositivos WEB y Android. Desde 09/2021 a 02/2023");
        //5
        $("#fs").text("Desarrollador Full-Stack");
        $("#fs2").text("Curso en DigitalBluee En curso. Iniciado el 14 de agosto.");
        //6
        $("#mono").text(" Desarrollador Web en Mono Naranja");
        $("#mono2").text(" Desarrollador Web para Mono Naranja, desde el dia 26/11/2023 - Actualidad");
        //7
        $("#javas").text("Desarrollador JavaScript");
        $("#javas2").text(" Curso de JavaScript realizado con Exito. realizado el 4 de julio y terminado el 31 de agosto de 2022");

        //portfolio

        $("#portf").text("MI PORTFOLIO");
        $("#Se").text("Se utilizo:");
        $("#Se1").text("Se utilizo:");
        $("#Se2").text("Se utilizo:");
        $("#Se3").text("Se utilizo:");
        $("#Se4").text("Se utilizo:");
        $("#Se5").text("Se utilizo:");
    
         //1
         $("#sedsp").text("Para realizar esta pagina web se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.");
         //2
         $("#jla").text("Para realizar este sitio de servicio tecnico web se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.");
         //3
         $("#OA").text("Para realizar este portafolios se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.")
         //4
         $("#studioar").text("Para realizar esta pagina web se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.");
         $("#stud").text("Web Estudio Arquitectura");
         //5
         $("#studioar").text("Para realizar esta pagina web se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.");
         //6
         $("#monoofi").text("Para realizar esta pagina web se trato de tener un orden y semantica bastante estructurada, para si poder editar el codigo sin ningun tipo de inconvenientes.")

         //contacto
         $("#contac").text("CONTACTAME");
         $("#poconta").text("Ponerse en contacto");
         $("#contactinfo").text("Servicio dedicado al desarrollo de páginas web para todo tipo de pequeñas y grandes empresas. Amplia variedad de formatos, consultar por diseños y presupuestos, tener en cuenta los siguientes datos y forma.");
         $("#name32").text("Nombre Completo");
         $("#ubi").text("Ubicación");
         $("#consulta").text("Consulta");
         $("#men").text("Mensaje");
         $("#send22").text("Enviar Mensaje");
        //exito
        $("#success-message").text("Mensaje enviado con éxito!");

    });


});

