<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Análisis de medidas y cuadros de tallas

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")

    .titulo-quinto.color-acento-contenido
      h4 Figura 17 Medidas figura humana

    .row.justify-content-center.mb-5
      .col-9
        figure.mb-5.px-4
          img(src='@/assets/curso/tema3-medidas.svg', alt='Medidas figura humana')

    #t_3_1.titulo-segundo.mb-4
      h2 3.1  Proporción vs. canon

    p.mb-5 Esta comparación hace relación sobre cuántas cabezas caben en la altura del cuerpo.

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases =>
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-primario.p-4(titulo="Canon")
        h1 Canon:
        p.mb-5 Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
        .titulo-quinto.color-acento-contenido
          h4 Figura 18 Canon (número de cabezas)
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure18.png', alt='Canon (número de cabezas)')
              figcaption Canon (número de cabezas)

      .tarjeta.color-primario.p-4(titulo="Proporción")
        h1 Proporción:
        p.mb-5 es la relación de correspondencia, equilibrio o simetría que existe entre los componentes de un todo. Podría definirse como una secuencia de Fibonacci que presenta una serie numérica: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc. En este sentido, es una serie infinita en la que la suma de dos números consecutivos siempre da como resultado el siguiente número tratado en las proporciones Da Vinci o del hombre de Vitruvio, esto es lo que permite analizar en un mapa de simetría del cuerpo y determinar el estándar de 8 cabezas como canon de belleza.
        .titulo-quinto.color-acento-contenido
          h4 Figura 19 Proporción figura humana
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure19.svg', alt='Proporción figura humana')
              figcaption Nota. Tomada de Valero (2013)

      .tarjeta.color-primario.p-4(titulo="Proporciones corporales")
        h1 Proporciones corporales:
        p.mb-4 Es un modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
        .titulo-quinto.color-acento-contenido
          h4 Figura 20 Proporción de acuerdo con etapas de crecimiento
        .row.justify-content-center.mb-5
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure20.svg', alt='Proporción de acuerdo con etapas de crecimiento')
              figcaption Tomada de Cómo cubrir un cuerpo (2013)
        .titulo-quinto.color-acento-contenido
          h4 Figura 21 Proporción con medidas de la figura
        .row.justify-content-center.mb-5
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure21.svg', alt='Proporción con medidas de la figura')
        .titulo-quinto.color-acento-contenido
          h4 Figura 22 Modulares, figurín masculino y femenino
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure22.svg', alt='Modulares, figurín masculino y femenino')


    #t_3_2.titulo-segundo.mb-4
      h2 3.2  Medidas deducidas

    .row.justify-content-center
      .col-9
        //- .bloque-texto-a debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema3-deducida.svg', style='max-height: 180px')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para calcular un cuadro de tallas completo se utilizan, generalmente, dos medidas anatómicas: la altura o estatura total y el contorno superior más prominente. A continuación, se relaciona la fórmula que posibilita una expresión breve y precisa del modo de hacer, resolver o conseguir algo, es decir, del cálculo estandarizado para obtener un resultado.

    .titulo-quinto.color-acento-contenido
      h4 Tabla 1 Fórmulas medidas deducidas

    //- .tabla-a debe ir acompañado de una de una de estas clases =>
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.justify-content-center
      .col-7
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Tórax máximo
                th Talla
            tbody
              tr
                td Pecho
                td Tórax máximo – 2 cm
              tr
                td Cadera
                td Tórax máximo + 4 cm
              tr
                td Cintura
                td Cadera – 14 cm
              tr
                td Estatura 7ª
                td Estatura total – 20 cm
              tr
                td Talle
                td 3/10 de la estatura 7ª cervical
              tr
                td Cintura/suelo
                td 7/10 de la estatura 7ª cervical
              tr
                td Largo de brazo
                td 4/10 de la estatura 7ª cervical
              tr
                td Estatura total
                td Estatura 7ª cervical + 20 cm
              tr
                td Base
                td Pecho + desahogo (4 cm) + costura (2 cm)


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
  name: 'Tema3',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Los cuadros de tallas y medidas son usados, dentro del sector, para contar fácilmente con la información estandarizada de las tallas de un país o región, las cuales estarán determinadas de acuerdo con estudios antropométricos, dado que las condiciones geográficas, clima, entre otras, hacen que la anatomía y estructura corporal puedan diferir.',
        imagen: require('@/assets/curso/tema3-imagen1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
