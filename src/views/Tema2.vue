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

    p.mb-4 La <strong>longitud</strong> es la distancia que hay entre un punto y otro, y para realizar esta medida, existen dos sistemas:

    .row
      .col-5
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            p <strong>Sistema métrico inglés</strong>: La unidad básica de medida es la <strong>pulgada</strong>, la cual se aplica principalmente en Estados Unidos, Inglaterra y Australia.
          li
            .lista-ol--cuadro__vineta
              span b
            p.mb-0 <strong>Sistema internacional o métrico decimal</strong>: Tiene como unidad principal el <strong>metro</strong>, el cual se usa en el resto del mundo.
      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 3 Comparación de sistemas de medidas
        img(src='@/assets/curso/tema2-figure3.svg', alt='Comparación de sistemas de medidas')
    .row.justify-content-center.mb-5
      .col-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas, teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.

    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span c
        p <strong>Sistema métrico fraccionario</strong>: Como todo número fraccionario, se representa A/B, donde A es el numerador y B el denominador. El numerador indica el número de partes que se toman de la unidad y el denominador en cuántas partes iguales se divide esa unidad.

    .row
      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 4 Numerador - Denominador
        img(src='@/assets/curso/tema2-figure4.svg', alt='Denominador', style='max-height: 400px')
      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 5 La pulgada
        img(src='@/assets/curso/tema2-figure5.svg', alt='La pulgada', style='max-height: 400px')

    p.mb-5 En confección, se utiliza la pulgada como medida de estandarización la cual mide el número de Puntadas Por Pulgada (PPP).

    .row.mb-3
      .col.d-flex
        .cajon.color-primario.p-4.mb-4
          p <strong>Ancho de la puntada</strong>: Se utiliza un calibrador para facilitar el proceso y, para ello, se sugiere que la planchuela de la máquina tenga las medidas para que sirva de guía.
      .col.d-flex
        .cajon.color-primario.p-4.mb-4
          p <strong>Pies de las máquinas</strong>: Pulgadas y de acuerdo con el ancho de las costuras.

    .row.mb-3
      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 6 Planchuela de máquina con ancho de puntada y medidas
        img(src='@/assets/curso/tema2-figure6.svg', alt='Planchuela de máquina con ancho de puntada y medidas', style='max-height: 270px')
      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 7 Planchuela y pie
        img(src='@/assets/curso/tema2-figure7.svg', alt='Planchuela y pie', style='max-height: 270px')

    p.mb-4 Para el patronaje, la denominación de tallas europeas, y también unos cuadros de tallas en especial, los masculinos, se trabajan en pulgadas.

    .row
      .col-6
        .titulo-quinto.color-acento-contenido
          h4 Figura 8 Utilización de las pulgadas
    .row.mb-5
      .col
        img(src='@/assets/curso/tema2-figure8.svg', alt='Utilización de las pulgadas', style='max-height: 270px')
      .col.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p Al sistema inglés también se le llama sistema de medidas ‘imperial’ en el entorno de la confección. Sin embargo, la mayoría de los países ha adoptado el sistema de medidas decimal comúnmente llamado sistema ‘universal’, haciendo comunes los procesos de conversión de medidas, donde 1" pulgada mide 2,54 cm.

    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span d
        p <strong>Sistema métrico decimal o universal</strong>: Es un sistema de unidades en el cual los múltiplos o submúltiplos de las unidades de una misma naturaleza siguen una escala decimal (10).

    .titulo-quinto.color-acento-contenido
      h4 Figura 9 Análisis de unidades

    .row.justify-content-center
      .col-10
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th Unidad
                th Abreviatura
                th Equivalente
            tbody
              tr
                td Kilómetro
                td km
                td 1000 m
              tr
                td Hectómetro
                td hm
                td 100 m
              tr
                td Decámetro
                td dam
                td 10 m
              tr
                td Metro
                td m
                td 1 m
              tr
                td Decímetro
                td dm
                td 0,1 m
              tr
                td Centímetro
                td cm
                td 0,01 m
              tr
                td Milímetro
                td mm
                td 0,001 m

    p.mb-5
      strong Por lo anterior, en patronaje y en confección las características generales encontradas son las siguientes:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="En confección" :icono="require('@/assets/curso/tema2-tabs1.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            p
              strong En confección:
              | Se utiliza para verificar medidas finales de la prenda, razón por la cual se debe tener en cuenta lo siguiente:

            ul.lista-ul--color
              li
                i.fas.fa-check
                | Los rangos de tolerancia de una costura se miden en milímetros.
              li
                i.fas.fa-check
                | Algunos insumos de confección, se caracterizan por centímetros.
              li
                i.fas.fa-check
                | El ancho de los materiales textiles se mide en centímetros.
              li
                i.fas.fa-check
                | Los textiles al detal se venden por metros.

          .col-md-5
            .titulo-quinto.color-acento-contenido
              h4 Figura 10 Medidas en confección
            figure
              img(src='@/assets/curso/tema2-figure10.svg', alt='Medidas en confección', style='max-height: 300px')

      .py-4.py-md-5(titulo="En patronaje" :icono="require('@/assets/curso/tema2-tabs2.svg')")
        .row
          .col-md-4.mb-4.mb-md-0
            p
              strong En patronaje
              | la mayoría de los cuadros de tallas anatómicas e industriales, en todas las líneas, están construidos en centímetros que es el sistema métrico estandarizado para el proceso de toma de medidas, patronaje y corte de las prendas. Las reducciones o ampliaciones para el confort de la prenda se realizan en centímetros.
          .col-md-8
            .titulo-quinto.color-acento-contenido
              h4 Figura 11 Medidas en patronaje
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th
                    th S
                    th M
                    th L
                    th XL
                    th 2XL
                    th 3XL
                tbody
                  tr
                    td PECHO cm
                    td 86/93
                    td 94/99
                    td 100/105
                    td 106/111
                    td 112/117
                    td 118/123
                  tr
                    td CINTURA cm
                    td 76/81
                    td 82/87
                    td 88/93
                    td 94/99
                    td 100/105
                    td 106/111
                  tr
                    td CADERA cm
                    td 92/97
                    td 98/103
                    td 104/109
                    td 110/115
                    td 116/121
                    td 122/127
                  tr
                    td ENTREPIERNA cm
                    td 80/81
                    td 81/84
                    td 82/84
                    td 84/87
                    td 86/87
                    td 86/87

      .py-4.py-md-5(titulo="Cómo se utilizan los centímetros: " :icono="require('@/assets/curso/tema2-tabs3.svg')")
        .row
          .col-md-4.mb-4.mb-md-0
            p Para entender las conversiones de metro a decímetros, de decímetro a centímetros y de centímetros a milímetros, se debe tener en cuenta:
              br
              br
              | Cómo se utilizan los centímetros:
            ul.lista-ul--color
              li
                i.lista-ul__vineta
                | 1 metro = 10 decímetros.
              li
                i.lista-ul__vineta
                | 1 decímetro = 10 centímetros.
              li
                i.lista-ul__vineta
                | 1 centímetro = 10 milímetros.


          .col-md-8
            .titulo-quinto.color-acento-contenido
              h4 Figura 12 Utilización de centímetros
            img(src='@/assets/curso/tema2-figure12.svg', alt='Utilización de centímetros')

      .py-4.py-md-5(titulo="En resumen" :icono="require('@/assets/curso/tema2-tabs4.svg')")
        .row.justify-content-between
          .col-md-5.mb-4.mb-md-0
            p.mb-4 Las fracciones decimales siempre tienen un denominador basado en una potencia de 10; 5/10 es equivalente a ½ ya que ½ por 5/5 es 5/10, por lo tanto, el decimal 0,5 es equivalente a ½ o 2/4.
              br
              br
              strong En resumen:
              br
              br
              strong fracciones - ½ = decimales – 0,5
            figure
              img(src='@/assets/curso/tema2-fracciones.svg', alt='Fracciones y decimales')
              figcaption Fracciones y decimales

          .col-md-5
            .titulo-quinto.color-acento-contenido
              h4 Figura 13 Fracciones y decimales
            img(src='@/assets/curso/tema2-figure13.png', alt='Fracciones y decimales')


    .row
      .col
        p.mb-4 Para las conversiones y equivalencias de fracciones, milésimas y milímetros es importante tener una tabla que permita hacer una lectura puntual y acertada del ejercicio como la que se muestra a continuación:
          br
          br
          | A continuación, se muestran algunos ejemplos, a partir de la conversión anterior:
        ul.lista-ul--color
          li
            i.lista-ul__vineta
            | 1/2 pulgada = 1,27 centímetros = 12,700 milímetros
          li
            i.lista-ul__vineta
            | ¼ de Fracción = 0,25 decimales = 0,33 milímetros

        img(src='@/assets/curso/tema2-machine.svg', alt='Personas manipulando confecciones')

      .col
        .titulo-quinto.color-acento-contenido
          h4 Figura 15 Tabla de equivalencias
        img(src='@/assets/curso/tema2-figure15.png', alt='Tabla de equivalencias')

    #t_2_2.titulo-segundo
      h2 2.2  Las medidas

    .row.mb-5
      .col
        p.mb-5 Son unidades numéricas que representan el tamaño de las figuras, personas y/u objetos. Por lo general, se trabaja con un sistema de medida (cinta métrica) de manera lineal para medir las diferentes partes del cuerpo. En Colombia, la metodología implementada son centímetros o pulgadas.
          br
          br
          | A continuación, se relacionan algunas consideraciones sobre las medidas:

        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span a
            p
              strong Las medidas sobre el cuerpo:
              | Por lo general se toman sobre los puntos de anclaje del cuerpo teniendo en cuenta los parámetros antropométricos y anatómicos, pasando por los volúmenes (contornos) protuberantes. Se clasifican en tres grupos:
        .row
          .col-1
          .col-11
            ol.lista-ol--cuadro
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 1
                p
                  strong Contornos:
                  | Se toman alrededor de la parte a medir, cerrando el metro.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 2
                p
                  strong Largos:
                  | Se toman verticalmente y corresponden a largos y talles.
              li.mb-0
                .lista-ol--cuadro__vineta
                  span 3
                p
                  strong Anchos:
                  | se toman horizontalmente y corresponden a los anchos.


      .col
        img(src='@/assets/curso/tema2-titulo2.png', alt='Mujeres tomando medidas')

    .titulo-quinto.color-acento-contenido
      h4 Figura 16 Clasificación de medidas
    .row.justify-content-center.mb-4
      .col-8
        img(src='@/assets/curso/tema2-figure16.svg', alt='Clasificación de medidas')
    p.mb-5 Teniendo en cuenta la clasificación de las medidas, es importante conocer los tres grupos que se presentan en ellas:
    SlyderB.mb-5.slyder-b-primary(:datos="datosSlyder2")

    ol.lista-ol--cuadro
      li
        .lista-ol--cuadro__vineta
          span b
        p <strong>Clasificación y análisis de medidas anatómicas</strong>:  Está dada según la metodología que se emplea en el patronaje para la confección de prendas, por ello es importante diferenciarlas y saber qué medidas tomar o no, si es sobre el cliente o solo se utilizan cuadros de tallas estandarizadas.
    SlyderB.mb-5.slyder-b-primary(:datos="datosSlyder3")

    .row.justify-content-end
      .col-9
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p
              strong Enlace web.
              | Video – Clasificación de medidas
              br
              | Es importante conocer los aspectos para desarrollar patrones de prendas de vestir bajo la estructura del reconocimiento de diferentes tipos de formas corpóreas, partiendo desde los conceptos básicos de anatomía hasta el desarrollo de molde básico para la interpretación de la estructura corporal.

</template>

<script>
export default {
  name: 'Tema2',
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
    datosSlyder2: [
      {
        titulo: 'Contornos',
        texto: 'Se toman alrededor de la parte a medir, cerrando el metro.',
        imagen: require('@/assets/curso/tema2-contorno.svg'),
      },
      {
        titulo: 'Largos',
        texto: 'Se toman verticalmente y corresponden a largos y talles.',
        imagen: require('@/assets/curso/tema2-largos.svg'),
      },
      {
        titulo: 'Anchos',
        texto: 'se toman horizontalmente y corresponden a los anchos.',
        imagen: require('@/assets/curso/tema2-anchos.svg'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Análisis sobre medida',
        texto:
          'Son aquellas medidas que se toman directamente sobre el cuerpo de la persona. Es importante precisar que estas medidas se deben tomar atendiendo a los ejes de movimiento, es decir, que posibilite que la persona pueda tener movilidad al momento tener la prenda puesta. Sin duda, es importante la observación y análisis previo de la estructura corporal para interpretar aquellos ajustes que se deben dar en cada trazo que se realiza sobre el patrón.',
        imagen: require('@/assets/curso/tema2-analisis.svg'),
      },
      {
        titulo: 'Medidas deducidas',
        texto:
          'Son medidas que se sacan sobre otras medidas, en las cuales se aplican fórmulas ya estudiadas y comprobadas. Estas se basan, esencialmente, en una medida horizontal, la cual se toma al contorno del cuerpo más prominente y en una medida vertical que es tomada a lo largo del cuerpo de arriba hacia abajo. En este sentido, con estas medidas deducimos las otras, por eso es importante tomarlas de manera exacta y no deben mezclarse con otras al momento de construir el cuadro de tallas.',
        imagen: require('@/assets/curso/tema2-medidas.svg'),
      },
      {
        titulo: 'Medidas estandarizadas',
        texto:
          'Son las medidas que se obtienen del resultado de estudios antropométricos, es decir, que se establecen en un rango de medidas que usualmente corresponden a las principales medidas corporales, es decir, las <strong>tallas</strong>.<br><br>Estas medidas son definidas y adoptadas por norma, por lo que esto ha permitido se generalicen las morfologías y medidas. Es importante precisar que, para acertar en la elección de una talla, debe compararse la coincidencia de la medida del contorno principal, con la medida correspondiente a la talla.',
        imagen: require('@/assets/curso/tema2-medidases.svg'),
      },
      {
        titulo: 'Medidas anatómicas',
        texto:
          'Son las medidas que se toman justas sobre el cuerpo teniendo en cuenta los puntos antropométricos y ejes de movimiento. Este tipo de medidas no tienen desahogos ni flojos.',
        imagen: require('@/assets/curso/tema2-medidas3s.svg'),
      },
      {
        titulo: 'Medidas anatómicas – estandarizadas o normalizadas',
        texto:
          'Son el resultado de la toma de medidas directas o de estudios antropométricos, las cuales se toman exactas sobre la estructura, es decir, no tiene aumentos ni ajustes.<br><br>Es importante tener claro que de la correcta toma de las medidas depende el resultado del patrón, pues estas medidas son utilizadas para la construcción y elaboración de los básicos, superiores e inferiores.',
        imagen: require('@/assets/curso/tema2-medidasana.png'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
