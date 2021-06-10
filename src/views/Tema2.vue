<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")

    #t_2_1.titulo-segundo
      h2 2.1  Sistemas de medidas: clasificación, características, usos e implementación.

    p La <strong>longitud</strong> es la distancia que hay entre un punto y otro, y para realizar esta medida, existen dos sistemas:
    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Para traducir el cuerpo humano a medidas se debe guiar el proceso de patronaje para la elaboración de moldes, correspondientes a diseños o propuestas de la persona en el oficio de la creación de prendas de vestir; para esto, es importante establecer el sistema de medidas que clasificadas denotan características para su uso e implementación.',
        imagen: require('@/assets/curso/tema2-imagen1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
