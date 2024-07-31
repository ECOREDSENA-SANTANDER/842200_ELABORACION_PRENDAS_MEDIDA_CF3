<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis e identificación de la estructura del cuerpo
    
    .row.fondo1.align-items-center
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down") 
        
          .row.justify-content-center
            .col-lg-12.col-md-12.col-12
              figure.mb-5
                img(src='@/assets/curso/tema1-image1.png', alt='Mujeres con un maniquí')

          p.mb-4 El vestuario está diseñado para dar cobertura al cuerpo, por lo que analizar el cuerpo en torno a su estructura y movimiento es de suma importancia para comprender a qué se debe el patronaje y las diferentes metodologías utilizadas en su realización. Para el desarrollo de prendas de vestuario sobre medidas se hace aún más taxativo comprenderlo, pues el ser técnicos en el área conlleva enfrentarse a diversas siluetas que necesitan ser analizadas dentro de la metodología y el paso a paso para la elaboración de un patrón.
          p.mb-4 Teniendo en cuenta lo anterior, se hará un recorrido para lograr entender el cuerpo a partir de los siguientes conceptos en relación con la estructura corporal:
    
          .row.justify-content-center
            .col-lg-12.col-md-9.col-9
              figure.mb-5
                img.d-none.d-lg-block(src='@/assets/curso/tema1-estructuracorporal.svg', alt='Mujeres con un maniquí')
                img.imagen-mobile(src='@/assets/curso/tema1-estructuracorporal.1.svg', alt='Mujeres con un maniquí')


    .row.justify-content-center
      .col-lg-8.col-md-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          |  Arquitectura del cuerpo
    
    .row.justify-content-center
      .col-lg-8.col-md-10.col-10
        figure.mb-5
          img(src='@/assets/curso/tema1-arquitectura.jpg', alt='Arquitectura del cuerpo. La imagen expone  una serie de imágenes con su nombre en el lado izquierdo, cada uno conectado por una flecha a un término correspondiente en el lado derecho. Los emparejamientos son los siguientes: •	Anatomía con Estructura •	Biomecánica con Movimiento •	Morfología con Geometría •	Ergonomía con Postura •	Antropometría con Medidas. Este diagrama parece resumir las relaciones entre diferentes disciplinas del estudio del cuerpo humano y sus aplicaciones prácticas en términos de diseño, movimiento y medición')

    .cajon.color-primario.p-4.mb-5
      h4.mx-3.mb-4 División del cuerpo
      p.mb-0.mx-3 Conocer el cuerpo humano es muy importante para traducir su estructura en medidas y patronaje de prendas, por lo que, a continuación, se visualizará la división para tener en cuenta en su análisis.
      
    .row.justify-content-center
      .col-lg-10.col-md-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          |  Análisis de división de cuerpo 

    .row.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .bloque1
          .row.justify-content-center
            .col-lg-10.col-md-10.col-10
              figure.mb-5.px-4.mt-5
                img.d-none.d-lg-block(src='@/assets/curso/tema1-divisioncuerpos.svg', alt='La imagen expone un diagrama con dos figuras humanas, una de frente y otra de perfil. Las partes del cuerpo están etiquetadas e indicadas con líneas de colores diferentes. La cabeza está marcada en ambas figuras, el tronco y los miembros superiores en la figura de perfil, y los miembros inferiores en la figura de frente. También se señalan las divisiones para prendas superiores (en la figura de perfil) y prendas inferiores (en la figura de frente), refiriéndose probablemente a cómo se dividen las prendas de vestir en relación con el cuerpo.')
                img.imagen-mobile(src='@/assets/curso/tema1-divisioncuerpos.1.svg', alt='La imagen expone un diagrama con dos figuras humanas, una de frente y otra de perfil. Las partes del cuerpo están etiquetadas e indicadas con líneas de colores diferentes. La cabeza está marcada en ambas figuras, el tronco y los miembros superiores en la figura de perfil, y los miembros inferiores en la figura de frente. También se señalan las divisiones para prendas superiores (en la figura de perfil) y prendas inferiores (en la figura de frente), refiriéndose probablemente a cómo se dividen las prendas de vestir en relación con el cuerpo.')

                
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-2.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/video.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1 Enlace #[em web]. Video – Estructura del cuerpo
              p.mb-0 Conoce la estructura corporal, anatomía, cortes y ejes del cuerpo, antropometría y ergonomía, biomecánica, somatotipos, doshas, siluetas y evaluación de plomos y posturas.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=V81Fjuq8XWs" target="_blank")
                span Ir al sitio
                i.fas.fa-link  
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
