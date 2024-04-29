<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Dibujo bidimensional de prendas de vestir

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")
    

    
        
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
