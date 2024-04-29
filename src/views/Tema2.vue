<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")
    
    
    Separador
    #t_2_1.titulo-segundo
      h2 2.1  Sistemas de medidas: clasificación, características, usos e implementación

    p.mb-4 La #[b longitud] es la distancia que hay entre un punto y otro, y para realizar esta medida, existen dos sistemas:

    .row.justify-content.mb-4
      .col-lg-6.col-md-12.col-12
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              |
              span.negro #[b a]
              |
            p #[b Sistema métrico inglés:] la unidad básica de medida es la #[b pulgada], la cual se aplica principalmente en Estados Unidos, Inglaterra y Australia.
          li.d-flex
            .lista-ol--cuadro__vineta.mb-4
              span.negro #[b b]
            p.mb-0 #[b Sistema internacional o métrico decimal:] tiene como unidad principal el #[b metro], el cual se usa en el resto del mundo.
      .col-lg-5.col-md-12.col-12.mb-4
        .cajagri.p-3
          .titulo-sexto.color-acento-contenido.mx-2
            h5 Figura 3
            | Comparación de sistemas de medidas
          .row.justify-content-center
            .col-lg-12
              img.mx-2.img-a.img-t(src='@/assets/curso/tema2-figure3.svg', alt='Comparación de sistemas de medidas')
    
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas, teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.

    ol.lista-ol--cuadro
      li.d-flex
        .lista-ol--cuadro__vineta
          span.negro #[b c]
        p #[b Sistema métrico fraccionario:] como todo número fraccionario, se representa A/B, donde A es el numerador y B el denominador. El numerador indica el número de partes que se toman de la unidad y el denominador en cuántas partes iguales se divide esa unidad.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mx-2
          h5 Figura 4
          | Numerador - Denominador
        img(src='@/assets/curso/tema2-figure4.svg', alt='Denominador')
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mx-2
          h5 Figura 5
          | La pulgada
        img(src='@/assets/curso/tema2-figure5.svg', alt='La pulgada')

    p.mb-5 En confección, se utiliza la pulgada como medida de estandarización la cual mide el número de Puntadas Por Pulgada (PPP).

    .row.mb-3
      .col.d-flex
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Ancho de la puntada:] se utiliza un calibrador para facilitar el proceso y, para ello, se sugiere que la planchuela de la máquina tenga las medidas para que sirva de guía.
      .col.d-flex
        .cajon.color-primario.p-4.mb-4
          p #[b Pies de las máquinas:] pulgadas y de acuerdo con el ancho de las costuras.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          | Planchuela de máquina con ancho de puntada y medidas
        img(src='@/assets/curso/tema2-figure6.svg', alt='Planchuela de máquina con ancho de puntada y medidas')
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          | Planchuela y pie       
        img(src='@/assets/curso/tema2-figure7.svg', alt='Planchuela y pie')

    p.mb-4 Para el patronaje, la denominación de tallas europeas, y también unos cuadros de tallas en especial, los masculinos, se trabajan en pulgadas.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 6
          | Planchuela de máquina con
        img(src='@/assets/curso/tema2-figure8.svg', alt='Utilización de las pulgadas')
      .col-lg-6.col-md-12.col-12.mb-5
        .cajon.color-acento-contenido.p-4.mb-5.my-5
          p Al sistema inglés también se le llama sistema de medidas ‘imperial’ en el entorno de la confección. Sin embargo, la mayoría de los países ha adoptado el sistema de medidas decimal comúnmente llamado sistema ‘universal’, haciendo comunes los procesos de conversión de medidas, donde 1" pulgada mide 2,54 cm.

        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span.negro #[b d]
            p #[b Sistema métrico decimal o universal:] es un sistema de unidades en el cual los múltiplos o submúltiplos de las unidades de una misma naturaleza siguen una escala decimal (10).

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9
          | Análisis de unidades
        .tabla-a.color-acento-contenido.mb-5
          table.pad1
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

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="En confección" :icono="require('@/assets/curso/tema2-tabs1.svg')")
        .row.justify-content-center.mb-5
          .col-lg-7.col-md-12.col-12.mb-30
            p #[b En confeccion:] Se utiliza para verificar medidas finales de la prenda, razón por la cual se debe tener en cuenta lo siguiente:

            ul.lista-ul--color
              li
                i.fas.fa-bullseye
                | Los rangos de tolerancia de una costura se miden en milímetros.
              li
                i.fas.fa-bullseye
                | Algunos insumos de confección, se caracterizan por centímetros.
              li
                i.fas.fa-bullseye
                | El ancho de los materiales textiles se mide en centímetros.
              li
                i.fas.fa-bullseye
                | Los textiles al detal se venden por metros.

          .col-lg-5.col-md-12.col-12.mb-3
            .row.justify-content-center.mb-5
              .col-lg-8.col-md-12.col-12.mb-30
                .titulo-sexto.color-acento-contenido.mb-3.mx-4
                  h5 Figura 10
                  | Medidas en confección
                figure
                  img(src='@/assets/curso/tema2-figure10.svg', alt='Medidas en confección')
          .col-lg-1.col-md-12.col-12.mb-3
          
      .py-4.py-md-5(titulo="En patronaje" :icono="require('@/assets/curso/tema2-tabs2.svg')")
        .row
          .col-lg-5.col-md-12.col-12
            p #[b En patronaje:] La mayoría de los cuadros de tallas anatómicas e industriales, en todas las líneas, están construidos en centímetros que es el sistema métrico estandarizado para el proceso de toma de medidas, patronaje y corte de las prendas. Las reducciones o ampliaciones para el confort de la prenda se realizan en centímetros.
          .col-lg-7.col-md-12.col-12.mb-3
            .row.justify-content-center
              .col-lg-12.col-md-12.col-12.mb-30
                .titulo-sexto.color-acento-contenido
                  h5 Figura 11
                  | Medidas en patronaje
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
          .col-lg-5.col-md-12.col-12.mb-3
            p Para entender las conversiones de metro a decímetros, de decímetro a centímetros y de centímetros a milímetros, se debe tener en cuenta:
              br
              br
              | Cómo se utilizan los centímetros:
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-bullseye
                | #[b 1 metro ]  = 10 decímetros.
              li.mb-0
                i.fas.fa-bullseye
                | #[b 1 decímetro ]  = 10 centímetros.
              li.mb-0
                i.fas.fa-bullseye 
                | #[b 1 centímetro ] = 10 milímetros.
          
          .col-lg-7.col-md-12.col-12.mb-3
            .row.justify-content-center
              .col-lg-12.col-md-12.col-12.mb-3
                .titulo-sexto.color-acento-contenido
                  h5 Figura 12
                  | Utilización de centímetros
                img(src='@/assets/curso/tema2-figure12.svg', alt='Utilización de centímetros')

      .py-4.py-md-5(titulo="En resumen" :icono="require('@/assets/curso/tema2-tabs4.svg')")
        .row.justify-content-between
          .col-lg-5.col-md-12.col-12.mb-3
            p.mb-4 Las fracciones decimales siempre tienen un denominador basado en una potencia de 10; 5/10 es equivalente a ½ ya que ½ por 5/5 es 5/10, por lo tanto, el decimal 0,5 es equivalente a ½ o 2/4.
              p.mb-4
              strong En resumen:
              p.mb-4
              strong fracciones - ½ = decimales – 0,5
              p.mb-4
            figure
              img.mb-2(src='@/assets/curso/tema2-fracciones.svg', alt='Fracciones y decimales')
              figcaption Fracciones y decimales

          .col-lg-5.col-md-12.col-12.mb-3
            .titulo-sexto.color-acento-contenido.mx-4
              h5 Figura 13
              | Fracciones y decimales
            img(src='@/assets/curso/tema2-figure13.png', alt='Fracciones y decimales')


    .row.justify-content-center
      .col-lg-6.col-md-12.col-12.mb-4
        p.mb-4 Para las conversiones y equivalencias de fracciones, milésimas y milímetros es importante tener una tabla que permita hacer una lectura puntual y acertada del ejercicio como la que se muestra a continuación:
        p.mb-4 A continuación, se muestran algunos ejemplos, a partir de la conversión anterior:
        ul.lista-ul--color.mb-4
          li
            i.lista-ul__vineta.mb-3
            | 1/2 pulgada = 1,27 centímetros = 12,700 milímetros
          li
            i.lista-ul__vineta
            | ¼ de Fracción = 0,25 decimales = 0,33 milímetros

        img.mb-4(src='@/assets/curso/tema2-machine.svg', alt='Personas manipulando confecciones')

      .col-lg-6.col-md-12.col-12.mb-3
        .cajanaranja
          .row.justify-content-center
            .col-lg-10.col-md-12.col-12.mb-3
              .titulo-sexto.color-acento-contenido.my-3
                h5 Figura 14
                | Tabla de equivalencias
              img(src='@/assets/curso/tema2-figure15.svg', alt='Tabla de equivalencias')
    
    
    Separador
    #t_2_2.titulo-segundo
      h2 2.2  Las medidas

    .row.justify-content-center
      .col-lg-6.col-md-12.col-12.mb-3

        p.mb-3 Son unidades numéricas que representan el tamaño de las figuras, personas y/u objetos. Por lo general, se trabaja con un sistema de medida (cinta métrica) de manera lineal para medir las diferentes partes del cuerpo. En Colombia, la metodología implementada son centímetros o pulgadas.
        p.mb-3 A continuación, se relacionan algunas consideraciones sobre las medidas:

        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span.negro #[b a]
            p
              strong Las medidas sobre el cuerpo
              | : por lo general se toman sobre los puntos de anclaje del cuerpo teniendo en cuenta los parámetros antropométricos y anatómicos, pasando por los volúmenes (contornos) protuberantes. Se clasifican en tres grupos:
        .row
          .col-1
          .col-11
            ol.lista-ol--cuadro
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span.negro.mb-0 #[b 1]
                p
                  strong Contornos
                  | : se toman alrededor de la parte a medir, cerrando el metro.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span.negro.mb-0 #[b 2]
                p
                  strong Largos
                  | : se toman verticalmente y corresponden a largos y talles.
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span.negro.mb-0 #[b 3]
                p
                  strong Anchos
                  | : se toman horizontalmente y corresponden a los anchos.

      .col
        img.mb-4(src='@/assets/curso/tema2-titulo2.png', alt='Mujeres tomando medidas')

    
    .row.justify-content-center
      .col-lg-8.col-md-10.col-10.mb-5
        .titulo-sexto.color-acento-contenido.my-3
          h5 Figura 15
          | Clasificación de medidas
        img.d-none.d-lg-block(src='@/assets/curso/tema2-figure16.svg', alt='Clasificación de medidas')
        img.imagen-mobile(src='@/assets/curso/tema2-figure16.11.svg', alt='Clasificación de medidas')
    
    p.mb-5 Teniendo en cuenta la clasificación de las medidas, es importante conocer los tres grupos que se presentan en ellas:
    
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gri").mb-5
      .row(titulo="Contornos")
        .col-md-6.mb-4.mb-md-0
          p Se toman alrededor de la parte a medir, cerrando el metro.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-contorno.svg', alt='Texto que describa la imagen')
      
      .row(titulo="Largos")
        .col-md-6.mb-4.mb-md-0
          p Se toman verticalmente y corresponden a largos y talles.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-largos.svg', alt='Texto que describa la imagen')

      .row(titulo="Anchos")
        .col-md-6.mb-4.mb-md-0
          p Se toman horizontalmente y corresponden a los anchos.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-anchos.svg', alt='Texto que describa la imagen')
  

    ol.lista-ol--cuadro
      li.d-flex
        .lista-ol--cuadro__vineta
          span.negro b
        p #[b Clasificación y análisis de medidas anatómicas:]  está dada según la metodología que se emplea en el patronaje para la confección de prendas, por ello es importante diferenciarlas y saber qué medidas tomar o no, si es sobre el cliente o solo se utilizan cuadros de tallas estandarizadas.
    
    
    .tarjeta.tarjeta--azule.p-2.mb-5
      SlyderA(tipo="a")
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Análisis sobre medida
                    p Son aquellas medidas que se toman directamente sobre el cuerpo de la persona. Es importante precisar que estas medidas se deben tomar atendiendo a los ejes de movimiento, es decir, que posibilite que la persona pueda tener movilidad al momento tener la prenda puesta. Sin duda, es importante la observación y análisis previo de la estructura corporal para interpretar aquellos ajustes que se deben dar en cada trazo que se realiza sobre el patrón. 
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-analisis.svg', alt='Texto que describa la imagen')

              
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas deducidas
                    p Son medidas que se sacan sobre otras medidas, en las cuales se aplican fórmulas ya estudiadas y comprobadas. Estas se basan, esencialmente, en una medida horizontal, la cual se toma al contorno del cuerpo más prominente y en una medida vertical que es tomada a lo largo del cuerpo de arriba hacia abajo. En este sentido, con estas medidas deducimos las otras, por eso es importante tomarlas de manera exacta y no deben mezclarse con otras al momento de construir el cuadro de tallas.
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-medidas.svg', alt='Texto que describa la imagen')
                  
              
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas estandarizadas 
                    p Son las medidas que se obtienen del resultado de estudios antropométricos, es decir, que se establecen en un rango de medidas que usualmente corresponden a las principales medidas corporales, es decir, las <strong>tallas</strong>.<br><br>Estas medidas son definidas y adoptadas por norma, por lo que esto ha permitido se generalicen las morfologías y medidas. Es importante precisar que, para acertar en la elección de una talla, debe compararse la coincidencia de la medida del contorno principal, con la medida correspondiente a la talla.
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-medidases.svg', alt='Texto que describa la imagen')

        
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas anatómicas 
                    p Son las medidas que se toman justas sobre el cuerpo teniendo en cuenta los puntos antropométricos y ejes de movimiento. Este tipo de medidas no tienen desahogos ni flojos.
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-medidas3s.svg', alt='Texto que describa la imagen')

        
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas anatómicas – estandarizadas o normalizadas 
                    p Son el resultado de la toma de medidas directas o de estudios antropométricos, las cuales se toman exactas sobre la estructura, es decir, no tiene aumentos ni ajustes.<br><br>Es importante tener claro que de la correcta toma de las medidas depende el resultado del patrón, pues estas medidas son utilizadas para la construcción y elaboración de los básicos, superiores e inferiores.
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-medidasana.svg', alt='Texto que describa la imagen')
    
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-2.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/video.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1 Enlace web.  Video – Clasificación de medidas
              p.mb-0 Es importante conocer los aspectos para desarrollar patrones de prendas de vestir bajo la estructura del reconocimiento de diferentes tipos de formas corpóreas, partiendo desde los conceptos básicos de anatomía hasta el desarrollo de molde básico para la interpretación de la estructura corporal.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nrZzZ6GeEjY" target="_blank")
                span Ir al sitio
                i.fas.fa-link

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
  }),
}
</script>

<style lang="sass" scoped></style>
