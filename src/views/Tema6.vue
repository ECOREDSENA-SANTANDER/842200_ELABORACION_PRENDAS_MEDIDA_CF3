<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Dibujo bidimensional de prendas de vestir

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")
    
    .row.justify-content-center
      .col-12.col-md-5
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=xptK7CFsF7o" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              strong Video dibujo bidimensional de prendas de vestir
              br
              | Conoce las técnicas del dibujo bidimensional
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=ppEdTvy94eU&t=1102s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              strong Trazo de bitácora de formas
              br
              | Conoce sobre los trazos de bitácora como complemento para las prendas
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=Di4R3jHoNkQ" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              strong Técnicas de achurados y acabados de la prenda
              br
              | Conoce las técnicas de achurados y diferentes acabados para la confección de las prendas
        a.anexo.mb-4(href="https://www.youtube.com/watch?v=FHhqkd0h4Kw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              strong Reconocimientos de las prendas
              br
              | Reconoce las diferentes partes que forman una prenda de vestir
              
        
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
          'Permite plasmar todas aquellas ideas respecto a las propuestas encaminadas a satisfacer las necesidades particulares del público objetivo al cual se le apunta en la comercialización de las prendas de vestir. Es por ello que en este apartado se pretende dar un acercamiento frente a la ilustración de prendas, detalles y demás insumos que permitan la bocetación de los mismos.',
        imagen: require('@/assets/curso/tema6-imagen1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
