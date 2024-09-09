<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Dibujo bidimensional de prendas de vestir


    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")(data-aos="fade-right")
    
    .row.fondo3.align-items-center(data-aos="zoom-in-up")
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
    
        
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Facilita la concreción de ideas relacionadas con las propuestas diseñadas para cumplir con los requerimientos específicos de nuestro público objetivo en el mercado de la moda. Por consiguiente, este segmento busca ofrecer una aproximación al arte de la ilustración de vestimenta, detalles y demás elementos esenciales que posibilitan el esbozo de estas creaciones.',
        imagen: require('@/assets/curso/tema6-imagen1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
