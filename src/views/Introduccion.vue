<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rtUJ57k2kkY?si=czCruVJZYVStBBOP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Leyenda del video
    .row.justify-content-center 
      .col-lg-10.col-md-12.col-12
        figure.mb-5
          img(src='@/assets/curso/intro-alexa1.svg', alt='introduccion')
    
    .row.justify-content-center 
      .col-lg-10.col-md-12.col-12
        figure.mb-5
          img(src='@/assets/curso/intro-alexa2.svg', alt='introduccion')

    .row.justify-content-center
      .col-lg-6.col-md-12.col-12
        .caja.p-5.my-3
          p.my-5.mb-5.mx-5.p-md-2 En el sector de la moda diversas son las metodologías que se emplean para comprender la figura humana, dado que para lograr la creación de prendas, estas deben contar con los requerimientos del cliente y, a su vez, generar elementos diferenciadores que brinden #[em confort] respecto al uso de vestuario, convirtiéndose en uno de los fines de todo aquel que se encamina en este oficio.
      .col-lg-4.col-md-10.col-12
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
