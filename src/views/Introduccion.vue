<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-right") La moda genera elementos diferenciadores que deben brindar confort respecto al uso de vestuario, convirtiéndose en uno de los fines de todo aquel que se encamina en este oficio. Es por lo anterior que analizar la estructura corporal no solo como un cuerpo sino en todo su contexto, genera que, inevitablemente, conceptos como la biomecánica, morfología, ergonomía y antropometría sean contemplados en dicho análisis.
    p.mb-4(data-aos="fade-right") A partir de lo anterior y con base en la estructura corporal se llega a realizar un acercamiento frente a conceptos que son aplicables en el prepatronaje, es decir, que antes de pasar a estudiar planos en las diferentes líneas de vestuario se debe llegar a entender por qué se emplean planos en 2D y 3D y cómo estos pueden llegar a ser optimizados a partir de análisis de cuadros de tallas, deducción de medidas y otros procesos que permiten estandarizarlos.
    p.mb-5(data-aos="fade-right") Para el SENA, este proceso de análisis y conformación de metodologías es tan importante que se han hecho estudios y procesos que permiten guiar una mejor comprensión en la elaboración de patronaje femenino y masculino, el cual se podrá abordar para la estructura de los primeros moldes básicos en estas líneas.

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rtUJ57k2kkY?si=czCruVJZYVStBBOP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Leyenda del video


    .row.justify-content-center(data-aos="fade-right")
      .col-lg-8.col-md-12.col-12
        .caja.p-4.my-3
          p.my-5.mb-5.mx-5.p-md-2 En el sector de la moda diversas son las metodologías que se emplean para comprender la figura humana, dado que para lograr la creación de prendas, estas deben contar con los requerimientos del cliente y, a su vez, generar elementos diferenciadores que brinden #[em confort] respecto al uso de vestuario, convirtiéndose en uno de los fines de todo aquel que se encamina en este oficio.
      .col-lg-3.col-md-10.col-12
        figure
          img(src='@/assets/curso/intro-imagen1.svg', alt='introduccion')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
