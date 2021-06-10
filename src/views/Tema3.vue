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
    .row.justify-content-center.mb-5
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

    .row.mb-5
      .col-7
        p.mb-5 De acuerdo con lo anterior, es importante saber cómo obtener medidas deducidas. Aquí un ejemplo: para deducir la medida de 7ª cervical, se toma la medida total de una persona y se le resta 20 cm. ¿Por qué 20 cm? Porque en la estandarización de medidas, se establece que 20 cm corresponde a la medida aprox. de la cabeza. A continuación se presenta la fórmula:
        div.text-center
          .cajon.color-acento-contenido.p-4.mb-4.w-auto
            p
              strong 7ª cervical o largo útil = largo total – 20 cm.
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 23 Cervical o largo útil
        img(src='@/assets/curso/tema3-figure23.svg', style='max-height: 220px')

    p.mb-5 A continuación, se pueden observar otras fórmulas de deducción

    .titulo-quinto.color-acento-contenido
      h4 Tabla 2 Fórmulas para deducción de tallas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Horizontales
            th Verticales
            th Otras fórmulas de deducción
        tbody
          tr
            td
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Tórax máximo = BUSTO
                li
                  i.lista-ul__vineta
                  | Tórax máximo = Talla + 36 cm
                li
                  i.lista-ul__vineta
                  | Pecho = tórax máximo – 2 cm
                li
                  i.lista-ul__vineta
                  | Bajo busto = busto – 6 cm
                li
                  i.lista-ul__vineta
                  | Sep. de busto = 2/5 busto
                li
                  i.lista-ul__vineta
                  | Cintura = busto – 10 cm
                li
                  i.lista-ul__vineta
                  | Cadera = busto + 4 cm
                li
                  i.lista-ul__vineta
                  | Cuello =1/2 busto + 12 cm
                li
                  i.lista-ul__vineta
                  | Rodilla = 1/4 busto + 24 cm
                li
                  i.lista-ul__vineta
                  | Tobillo = 1/8 busto + 15.5 cm
                li
                  i.lista-ul__vineta
                  | Brazo = busto – 18 cm
                li
                  i.lista-ul__vineta
                  | Muñeca = 1/4 busto + 5 cm
                li
                  i.lista-ul__vineta
                  | Ancho Espalda = busto – 8 cm

            td
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Estatura 7ª C = busto + 96 cm
                li
                  i.lista-ul__vineta
                  | Estatura total = estatura 7ª C +20 cm
                li
                  i.lista-ul__vineta
                  | Altura de busto = 3/8 estatura 7ª C – 27 cm
                li
                  i.lista-ul__vineta
                  | Altura bajo busto = 3/8 estatura 7ª C – 18 cm
                li
                  i.lista-ul__vineta
                  | Largo brazo = 4/10 estatura 7ª C
                li
                  i.lista-ul__vineta
                  | Cintura/suelo = 7/10 estatura 7ª C
                li
                  i.lista-ul__vineta
                  | Altura de cadera = 2/3 de tiro
            td
              ul.lista-ul--color
                li
                  i.lista-ul__vineta
                  | Talla= años
                li
                  i.lista-ul__vineta
                  | Pecho = años + 24 cm
                li
                  i.lista-ul__vineta
                  | Cintura = 1/2 de años + 26 cm
                li
                  i.lista-ul__vineta
                  | Cadera = años + 28 cm
                li
                  i.lista-ul__vineta
                  | Cuello = 2/3 de pecho + 4 cm
                li
                  i.lista-ul__vineta
                  | Estatura 7ª C= años x 5 + 65 cm
                li
                  i.lista-ul__vineta
                  | Talle Espalda = 3/10 de estatura 7ª C
                li
                  i.lista-ul__vineta
                  | Estatura total: estatura 7ª C + 15 cm a 18 cm. Corresponden al canon del niño o medida de cabeza
                li
                  i.lista-ul__vineta
                  | Largo de brazo= 4/10 de Estatura 7ª C
                li
                  i.lista-ul__vineta
                  | Codo = 1/2 de brazo. Esta medida sin tener en cuenta lo que corresponde a la muñeca (menos 5 cm para todas las tallas)
                li
                  i.lista-ul__vineta
                  | Cintura al suelo = 7/10 de estatura 7ª C
                li
                  i.lista-ul__vineta
                  | Largo de falda larga = 2/3 de la medida cintura al suelo – 3 cm
                li
                  i.lista-ul__vineta
                  | Largo de falda corta = 1/2 de la medida cintura al suelo -3 cm

    p.mb-5 Ahora, se podrá observar cómo obtener medidas deducidas a partir del desarrollo de las siguientes fórmulas:

    .titulo-quinto.color-acento-contenido
      h4 Tabla 3 Medidas reducidas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Horizontales
            th Verticales
            th Otras fórmulas de deducción
        tbody
          tr
            td Estatura total
            td N/A
            td 170 cm
          tr
            td Tórax Máximo
            td N/A
            td 90 cm
          tr
            td Cadera
            td Tórax máximo + 8 cm
            td 98 cm
          tr
            td Pecho*
            td Tórax máximo – 4 cm
            td 86 cm
          tr
            td Cintura
            td Cadera – 28 cm
            td 70 cm
          tr
            td Estatura 7ª cervical - útil
            td Estatura total – 20 cm
            td 150 cm
          tr
            td Largo de brazo
            td 4/10 de la estatura 7ª C
            td 60 cm

    .h4.mb-4 Construyendo cuadros de tallas
    p.mb-5 Se refiere a los grupos de magnitudes estandarizadas que definen las medidas de una prenda de vestir. Los siguientes cuadros contienen algunos grupos de tallas fundamentales:

    .titulo-quinto.color-acento-contenido
      h4 Tabla 4 Grupos de tallas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Talla
            th
              | XS/30
              br
              | 6
            th
              | S/32
              br
              | 8
            th
              | M/34
              br
              | 10
            th
              | L/38
              br
              | 12
            th
              | XL/40
              br
              | 14
            th
              | SL/42
              br
              | 16
            th INCRE
        tbody
          tr
            td Tórax máximo
            td 40 cm
            td 42 cm
            td 44 cm
            td 46 cm
            td 48 cm
            td 50 cm
            td 2 m
          tr
            td Cadera
            td
            td
            td
            td
            td
            td
            td
          tr
            td Pecho
            td
            td
            td
            td
            td
            td
            td
          tr
            td Cintura
            td
            td
            td
            td
            td
            td
            td
          tr
            td Estatura total
            td 166 cm
            td 168 cm
            td 170 cm
            td 172 cm
            td 174 cm
            td 174 cm
            td 2 m
          tr
            td Estatura 7ª
            td
            td
            td
            td
            td
            td
            td
          tr
            td Largo de brazo
            td
            td
            td
            td
            td
            td
            td
          tr
            td Cuello
            td
            td
            td
            td
            td
            td
            td
          tr
            td Cintura/suelo
            td
            td
            td
            td
            td
            td
            td
          tr
            td Base
            td
            td
            td
            td
            td
            td
            td

    .row
      .col-7
        p.mb-4 A partir de la información anterior, es importante relacionar el siguiente resultado:
        ul.lista-ul--color.mb-4
          li
            i.lista-ul__vineta
            | Cadera = tórax máximo + 4 cm
          li
            i.lista-ul__vineta
            | Pecho = tórax máximo – 2 cm
          li
            i.lista-ul__vineta
            | Cintura = cadera – 14 cm
          li
            i.lista-ul__vineta
            | Estatura total = estatura 7ª C + 20 cm
          li
            i.lista-ul__vineta
            | Estatura 7ª C. = estatura total – 20 cm
          li
            i.lista-ul__vineta
            | Talle = 3/10 de la estatura 7ª C
          li
            i.lista-ul__vineta
            | Largo de brazo = 4/10 de la estatura 7ª c
          li
            i.lista-ul__vineta
            | Cuello= 2/3 de pecho + 4 cm
          li
            i.lista-ul__vineta
            | Cintura/suelo = 7 /10 de la estatura 7ª c
          li
            i.lista-ul__vineta
            | Base = pecho + desahogo + costura (desahogo 4 cm y la costura 2 cm)
        p A renglón seguido, se puede observar cómo se realiza una construcción de talla 6 con aplicación de las fórmulas mencionadas.

      .col
        img(src='@/assets/curso/tema3-imagen2.png')

    .titulo-quinto.color-acento-contenido
      h4 Talla 5 Aplicación de fórmulas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Talla
            th 6
            th
              | XS/30
              br
              | 6
        tbody
          tr
            td Tórax máximo
            td 40 cm
            td 40 cm
          tr
            td Cadera
            td 40 cm + 4 cm = 44 cm
            td 44 cm
          tr
            td Pecho
            td 40 cm - 2 cm =38 cm
            td 38 cm
          tr
            td Cintura
            td 44 - 14 =32 cm
            td 30 cm
          tr
            td Estatura total
            td 166 cm
            td 166 cm
          tr
            td Estatura 7ª C
            td 164 cm - 20 cm = 146 cm
            td 146 cm
          tr
            td Talle
            td 144 cm /10 cm = 14,6 cm * 3 = 43,8 cm
            td 0 cm
          tr
            td Largo de brazo
            td 144/10 = 14,6 * 4 = 58,4
            td 0 cm
          tr
            td Cuello
            td 40 cm / 3 cm = 13,3 cm * 2 cm = 26,6 cm
            td 26,6 cm
          tr
            td Cintura/suelo
            td 144 cm / 10 cm = 14,6 cm * 7 cm = 102,2
            td 0 cm
          tr
            td Base
            td 38 cm + 4 cm + 2 cm = 44 cm
            td 44 cm

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Errores más comunes")
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen

      div(titulo="Normatividad")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

      div(titulo="Análisis de cuadros de tallas")
        figure
          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
          figcaption Leyenda de la imagen

    SlyderB.mb-5(:datos="datosSlyder")

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
    datosSlyder1: [
      {
        titulo: '',
        texto:
          'Los cuadros de tallas y medidas son usados, dentro del sector, para contar fácilmente con la información estandarizada de las tallas de un país o región, las cuales estarán determinadas de acuerdo con estudios antropométricos, dado que las condiciones geográficas, clima, entre otras, hacen que la anatomía y estructura corporal puedan diferir.',
        imagen: require('@/assets/curso/tema3-imagen1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ]
  }),
}
</script>

<style lang="sass" scoped></style>
