<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de medidas y cuadros de tallas

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")

    .row.justify-content-center.mb-5
      .col-9
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 16
          | Medidas figura humana
        figure.mb-5.px-4
          img.d-none.d-lg-block(src='@/assets/curso/tema3-medidas.svg', alt='Medidas figura humana')
          img.imagen-mobile(src='@/assets/curso/tema3-medidas.3.svg', alt='Medidas figura humana')
    
    
    Separador
    #t_3_1.titulo-segundo.mb-4
      h2 3.1  Proporción vs. canon

    p.mb-5 Esta comparación hace relación sobre cuántas cabezas caben en la altura del cuerpo.

    TabsA.color-acento-botones.mt-5(data-aos="flip-up")
      .tarjeta.color-acento-conte--borde.p-4(titulo="Canon")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Canon
            p  Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 17
              | Canon (número de cabezas)
            .row.justify-content-center
              .col-9
                figure.mb-5.px-4
                  img.mb-4(src='@/assets/curso/tema3-figure18.svg', alt='Canon (número de cabezas)')
                  figcaption Canon (número de cabezas)
      
      .tarjeta.color-acento-conte--borde.p-4(titulo="Proporción")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4.text-dark Proporción
            p.text-dark Es la relación de correspondencia, equilibrio o simetría que existe entre los componentes de un todo. Podría definirse como una secuencia de Fibonacci que presenta una serie numérica: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc. En este sentido, es una serie infinita en la que la suma de dos números consecutivos siempre da como resultado el siguiente número tratado en las proporciones Da Vinci o del hombre de Vitruvio, esto es lo que permite analizar en un mapa de simetría del cuerpo y determinar el estándar de 8 cabezas como canon de belleza.
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 18
              | Proporción figura humana
            .row.justify-content-center
              .col-9
                figure.mb-5.px-4
                  img.mb-4(src='@/assets/curso/tema3-figure19.svg', alt='Proporción figura humana')
                  figcaption Nota. Tomada de Valero (2013)      

      .tarjeta.color-acento-conte--borde.p-4(titulo="Proporciones corporales")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Proporciones corporales
            p Es un modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 19
              | Proporción de acuerdo con etapas de crecimiento
            .row.justify-content-center.mb-5
              .col-9
                figure.mb-5.px-4
                  img.mb-4(src='@/assets/curso/tema3-figure20.svg', alt='Proporción de acuerdo con etapas de crecimiento')
                  figcaption Tomada de Cómo cubrir un cuerpo (2013)


          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 20
            | Proporción con medidas de la figura
        .row.justify-content-center.mb-5
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure21.svg', alt='Proporción con medidas de la figura')
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 21
            | Modulares, figurín masculino y femenino
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure22.svg', alt='Modulares, figurín masculino y femenino')
      


    Separador
    #t_3_2.titulo-segundo.mb-4
      h2 3.2  Medidas deducidas

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-9.col-md-10.col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.img-a.img-t.d-none.d-lg-block(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-deducida.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Para calcular un cuadro de tallas completo se utilizan, generalmente, dos medidas anatómicas: la altura o estatura total y el contorno superior más prominente. A continuación, se relaciona la fórmula que posibilita una expresión breve y precisa del modo de hacer, resolver o conseguir algo, es decir, del cálculo estandarizado para obtener un resultado.
    
    
    .row.fondo3.align-items-center
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down") 

          .row.justify-content-center
            .col-lg-6.col-md-12.col-12.mb-3
              .titulo-sexto.color-acento-contenido.my-3
                h5 Tabla 1
                | Fórmulas medidas deducidas
              .tabla-a.color-acento-contenido.mb-5
                table
                  thead
                    tr
                      th.text-center Tórax máximo
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

          .row.justify-content-center
            .col-lg-8.col-md-12.col-12.mb-3
              .row.justify-content-center
                .col-lg-8.col-md-12.col-12.mb-3
                  p.mb-5 De acuerdo con lo anterior, es importante saber cómo obtener medidas deducidas. Aquí un ejemplo: para deducir la medida de 7ª cervical, se toma la medida total de una persona y se le resta 20 cm. ¿Por qué 20 cm? Porque en la estandarización de medidas, se establece que 20 cm corresponde a la medida aprox. de la cabeza. A continuación se presenta la fórmula:
                    div.text-center
                      .row.justify-content-center
                        .col-lg-12
                          .cajon.color-acento-contenido.p-4.mb-4.w-auto
                            p.text-center.mb-0.negro 7ª cervical o largo útil = largo total – 20 cm.
                
                .col-lg-4.col-md-12.col-12.mb-4
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 22
                    | Cervical o largo útil
                  img(src='@/assets/curso/tema3-figure23.svg')

    p.mb-5 A continuación, se pueden observar otras fórmulas de deducción

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      | Fórmulas para deducción de tallas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Horizontales
            th Verticales
            th Otras fórmulas de deducción
        tbody
          tr
            td.align-top
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Tórax máximo] = BUSTO
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Tórax máximo] = Talla + 36 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Pecho] = tórax máximo – 2 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Bajo busto] = busto – 6 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Sep. de busto] = 2/5 busto
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cintura] = busto – 10 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cadera] = busto + 4 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cuello] = 1/2 busto + 12 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Rodilla] = 1/4 busto + 24 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Tobillo] = 1/8 busto + 15.5 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Brazo] = busto – 18 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Muñeca] = 1/4 busto + 5 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Ancho Espalda] = busto – 8 cm

            td.align-top
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Estatura 7ª C] = busto + 96 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Estatura total] = estatura 7ª C +20 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Altura de busto] = 3/8 estatura 7ª C – 27 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Altura bajo busto] = 3/8 estatura 7ª C – 18 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Largo brazo] = 4/10 estatura 7ª C
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cintura/suelo] = 7/10 estatura 7ª C
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Altura de cadera] = 2/3 de tiro
            td.align-top
              ul.lista-ul--color.mb-4
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Talla] = años
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Pecho] = años + 24 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cintura] = 1/2 de años + 26 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cadera] = años + 28 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cuello] = 2/3 de pecho + 4 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Estatura 7ª C] = años x 5 + 65 cm
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Talle Espalda] = 3/10 de estatura 7ª C
                li.mb-0.d-flex
                  i.fas.fa-bullseye
                  p.mb-0
                    strong #[b Estatura total: ]
                    | estatura 7ª C + 15 cm a 18 cm. Corresponden al canon del niño o medida de cabeza
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Largo de brazo] = 4/10 de Estatura 7ª C
                li.d-flex
                  i.fas.fa-bullseye
                  p.mb-0
                    strong #[b Codo] =  
                    |  1/2 de brazo. Esta medida sin tener en cuenta lo que corresponde a la muñeca (menos 5 cm para todas las tallas)
                li.mb-0
                  i.fas.fa-bullseye
                  | #[b Cintura al suelo] = 7/10 de estatura 7ª C
                li.mb-0.d-flex
                  i.fas.fa-bullseye
                  p.mb-0
                    strong #[b Largo de falda larga]
                    |  = 2/3 de la medida cintura al suelo – 3 cm
                li.mb-0.d-flex
                  i.fas.fa-bullseye
                  p.mb-0
                    strong #[b Largo de falda corta] 
                    |  = 1/2 de la medida cintura al suelo -3 cm

    p.mb-5 Ahora, se podrá observar cómo obtener medidas deducidas a partir del desarrollo de las siguientes fórmulas:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3
      | Medidas reducidas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th #[b Horizontales]
            th Verticales
            th Otras fórmulas de deducción
        tbody
          tr
            td.text-center Estatura total
            td.text-center N/A
            td.text-center 170 cm
          tr
            td.text-center Tórax Máximo
            td.text-center N/A
            td.text-center 90 cm
          tr
            td.text-center Cadera
            td.text-center Tórax máximo + 8 cm
            td.text-center 98 cm
          tr
            td.text-center Pecho*
            td.text-center Tórax máximo – 4 cm
            td.text-center 86 cm
          tr
            td.text-center Cintura
            td.text-center Cadera – 28 cm
            td.text-center 70 cm
          tr
            td.text-center Estatura 7ª cervical - útil
            td.text-center Estatura total – 20 cm
            td.text-center 150 cm
          tr
            td.text-center Largo de brazo
            td.text-center 4/10 de la estatura 7ª C
            td.text-center 60 cm

    .h4.mb-4 Construyendo cuadros de tallas
    
    p.mb-5 Se refiere a los grupos de magnitudes estandarizadas que definen las medidas de una prenda de vestir. Los siguientes cuadros contienen algunos grupos de tallas fundamentales:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4
      | Grupos de tallas

    .tabla-a.color-acento-contenido.mb-5.text-center
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
            td Talle
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

    .row.justify-content-center.mb-5
      .col-lg-7.col-md-12.col-12
        p.mb-4 A partir de la información anterior, es importante relacionar el siguiente resultado:
        ul.lista-ul--color.mb-4
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | #[b Cadera] = tórax máximo + 4 cm
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | #[b Pecho] = tórax máximo – 2 cm
          li.mb-0
            i.fas.fa-bullseye
            | #[b Cintura] = cadera – 14 cm
          li.mb-0
            i.fas.fa-bullseye
            | #[b Estatura total] = estatura 7ª C + 20 cm
          li.mb-0
            i.fas.fa-bullseye
            | #[b Estatura 7ª C.] = estatura total – 20 cm
          li.mb-0
            i.fas.fa-bullseye
            | #[b Talle] = 3/10 de la estatura 7ª C
          li.mb-0
            i.fas.fa-bullseye
            | #[b Largo de brazo] = 4/10 de la estatura 7ª c
          li.mb-0
            i.fas.fa-bullseye
            | #[b Cuello] = 2/3 de pecho + 4 cm
          li.mb-0
            i.fas.fa-bullseye
            | #[b Cintura/suelo] = 7 /10 de la estatura 7ª c
          li.mb-0
            i.fas.fa-bullseye
            | #[b Base] = pecho + desahogo + costura (desahogo 4 cm y la costura 2 cm)
        p A renglón seguido, se puede observar cómo se realiza una construcción de talla 6 con aplicación de las fórmulas mencionadas.

      .col-lg-5.col-md-8.col-8
        img.my-2.mb-4(src='@/assets/curso/tema3-imagen2.png')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 5
      | Aplicación de fórmulas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Talla
            th 6
            th XS/30
              |
              p.mb-0 6
        tbody
          tr
            td.text-center Tórax máximo
            td.text-center 40 cm
            td.text-center 40 cm
          tr
            td.text-center Cadera
            td.text-center 40 cm + 4 cm = 44 cm
            td.text-center 44 cm
          tr
            td.text-center Pecho
            td.text-center 40 cm - 2 cm =38 cm
            td.text-center 38 cm
          tr
            td.text-center Cintura
            td.text-center 44 - 14 =32 cm
            td.text-center 30 cm
          tr
            td.text-center Estatura total
            td.text-center 166 cm
            td.text-center 166 cm
          tr
            td.text-center Estatura 7ª C
            td.text-center 164 cm - 20 cm = 146 cm
            td.text-center 146 cm
          tr
            td.text-center Talle
            td.text-center 144 cm /10 cm = 14,6 cm * 3 = 43,8 cm
            td.text-center 0 cm
          tr
            td.text-center Largo de brazo
            td.text-center 144/10 = 14,6 * 4 = 58,4
            td.text-center 0 cm
          tr
            td.text-center Cuello
            td.text-center 40 cm / 3 cm = 13,3 cm * 2 cm = 26,6 cm
            td.text-center 26,6 cm
          tr
            td.text-center Cintura/suelo
            td.text-center 144 cm / 10 cm = 14,6 cm * 7 cm = 102,2
            td.text-center 0 cm
          tr
            td.text-center Base
            td.text-center 38 cm + 4 cm + 2 cm = 44 cm
            td.text-center 44 cm

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--grist")
      .row(titulo="Errores más comunes")
        p.mb-4 Uno de los más comunes en modistería es la combinación de medidas. Cuando se trabaja con medidas deducidas, se debe realizar con las medidas obtenidas de cada fórmula de manera progresiva; para eso hay que tener en cuenta que el resultado cambia si, en vez de aplicar únicamente las medidas obtenidas por deducción, se debe adicionar una medida anatómica.
        p.mb-3 De acuerdo con lo anterior, es importante establecer los cuadros de tallas:
        .row.justify-content-center
          .col-12
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-bullseye
                | #[b Anatómicos y deducidos:]  según la obtención de medidas.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Proporcionales:] existe una secuencia numérica en el crecimiento de la talla.
              li.mb-0
                i.fas.fa-bullseye
                | #[b No proporcionales:] no hay una secuencia numérica en el crecimiento de la talla.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Completos:] incluyen todas las medidas requeridas para la construcción de patrones de prendas.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Según prenda:] que incluyen en algunos casos desahogos y costuras.


      .row(titulo="Normatividad")
        p.mb-4 Por lo general no son de uso obligatorio, sino de uso voluntario; y dentro de la normatividad nacional se puede encontrar:
        .row.justify-content-center
          .col-12
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-bullseye
                | #[b NTC ISO 8559]. Fabricación de vestuario y estudios antropométricos. Dimensiones corporales – Icontec.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Norma UNE-EN 13402-3]. Armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.

      .row(titulo="Análisis de cuadros de tallas")
        p.mb-4 Para el análisis de cuadros de tallas se deben determinar los límites, la frecuencia y el incremento, tal como se relaciona a continuación:
        .row.justify-content-center
          .col-12
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-bullseye
                | #[b Límites:] fabricación de vestuario y estudios antropométricos. Dimensiones corporales – Icontec.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Frecuencia:] armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Incremento:] magnitud de crecimiento de la medida talla por talla.
        p El análisis de los anteriores aspectos dará como resultado: valores, proporciones, rupturas de talla (para una, dos o hasta tres tallas base).

    
    .tarjeta.tarjeta--azule.p-3.mb-5
      SlyderA(tipo="a")
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center.p-4
              .col-lg-11.col-md-12.col-12.mb-4
                h4.mb-5 Cuadro de tallas infantil, medidas en centímetros
                .tabla-a.color-acento-contenido.mb-5
                  table(style="background-color: white")
                    thead
                      tr
                        th(colspan="2").fw-bold MEDIDAS
                        th.fw-bold 2
                        th.fw-bold 4
                        th.fw-bold 5
                        th.fw-bold 6
                        th.fw-bold 7
                        th.fw-bold 8
                        th.fw-bold 10
                        th.fw-bold 12
                        th.fw-bold 14
                    tbody
                      tr
                        td(colspan="2").fw-bold ESTATURA
                        td 93
                        td 103
                        td 108
                        td 113
                        td 118
                        td 123
                        td 133
                        td 143
                        td 153
                      tr
                        td(colspan="2").fw-bold Contorno de Cadera
                        td 62
                        td 64
                        td 66
                        td 68
                        td 70
                        td 72
                        td 76
                        td 80
                        td 84
                      tr
                        td(colspan="2").fw-bold Contorno de Pecho
                        td 62
                        td 64
                        td 66
                        td 68
                        td 70
                        td 72
                        td 76
                        td 80
                        td 84
                      tr
                        td(colspan="2").fw-bold Contorno de Cintura
                        td 50
                        td 52
                        td 54
                        td 56
                        td 58
                        td 60
                        td 64
                        td 68
                        td 72
                      tr
                        td(colspan="2").fw-bold Ancho de Espalda
                        td 24.25
                        td 25
                        td 25.75
                        td 26.5
                        td 27.25
                        td 28
                        td 29.5
                        td 31
                        td 32.5
                      tr
                        td(colspan="2").fw-bold Ancho de Pecho
                        td 23.25
                        td 24
                        td 24.75
                        td 25.5
                        td 26.5
                        td 27
                        td 28.5
                        td 30
                        td 21.5
                      tr
                        td(colspan="2").fw-bold Largo de Talle
                        td 26.5
                        td 27.5
                        td 28.6
                        td 29.75
                        td 30.82
                        td 32
                        td 34.25
                        td 36.5
                        td 38.75
                      tr
                        td(colspan="2").fw-bold Largo de Costado
                        td 10.25
                        td 11
                        td 11.75
                        td 12.5
                        td 13.25
                        td 14
                        td 15.5
                        td 17
                        td 18.5
                      tr
                        td(colspan="2").fw-bold Largo de Centro Frente
                        td 21.5
                        td 22.5
                        td 23.5
                        td 24.5
                        td 25.5
                        td 26.5
                        td 28.5
                        td 30.5
                        td 32.5
                      tr
                        td(colspan="2").fw-bold Largo de Centro Atrás
                        td 25
                        td 26
                        td 27.12
                        td 28.25
                        td 29.37
                        td 30.5
                        td 32.75
                        td 35
                        td 37.25
                      tr
                        td(colspan="2").fw-bold Largo de Hombro
                        td 8.75
                        td 9
                        td 9.25
                        td 9.5
                        td 9.75
                        td 10
                        td 10.5
                        td 11
                        td 11.5
                      tr
                        td(colspan="2").fw-bold Largo de Pantalón
                        td 60
                        td 64
                        td 66.5
                        td 69
                        td 71.5
                        td 74
                        td 79
                        td 84
                        td 89
                      tr
                        td(colspan="2").fw-bold Largo de Tiro
                        td 17.5
                        td 18
                        td 18.5
                        td 19
                        td 19.5
                        td 20
                        td 21
                        td 22
                        td 23
                      tr
                        td(colspan="2").fw-bold Largo de Falda
                        td 35
                        td 37
                        td 39
                        td 41
                        td 43
                        td 45
                        td 49
                        td 53
                        td 57
                      tr
                        td(colspan="2").fw-bold Largo de Blusa
                        td 44.25
                        td 45
                        td 45.75
                        td 46.5
                        td 47.25
                        td 48
                        td 49.5
                        td 51
                        td 52.5
                      tr
                        td(colspan="2").fw-bold Largo de Manga
                        td 35
                        td 37
                        td 39
                        td 41
                        td 43
                        td 45
                        td 49
                        td 53
                        td 57
                      tr
                        td(colspan="2").fw-bold Cabeza de Manga
                        td 9
                        td 9.5
                        td 10
                        td 10.5
                        td 11
                        td 11.5
                        td 12
                        td 12.5
                        td 13
                      tr
                        td(colspan="2").fw-bold Puño
                        td 17.5
                        td 18
                        td 18.5
                        td 19
                        td 19.5
                        td 20
                        td 20.5
                        td 21
                        td 22
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center.p-4
              .col-lg-11.col-md-12.col-12.mb-4
                h4.mb-5 Cuadro de tallas masculinas, medidas en pulgadas
                .tabla-a.color-acento-contenido.mb-5
                  table(style="background-color: white")
                    thead
                      tr.tableizer-firstrow
                        th(colspan="2").fw-bold TALLA
                        th 33
                        th 34
                        th 35
                        th 36
                        th 37
                        th 38
                        th 39
                        th 40
                        th 41
                        th 42
                        th 43
                        th 44
                    tbody
                      tr
                        td(colspan="2").fw-bold Contorno Cuello en cm. Talla Camisa
                        td 33
                        td 34
                        td 35
                        td 36
                        td 37
                        td 38
                        td 39
                        td 40
                        td 41
                        td 42
                        td 43
                        td 44
                      tr
                        td(colspan="2").fw-bold Contorno Cintura en Pulgadas. Talla Pantal&oacute;n
                        td 27
                        td 28
                        td 29
                        td 30
                        td 31
                        td 32
                        td 33
                        td 34
                        td 35
                        td 36
                        td 37
                        td 38
                      tr
                        td(colspan="2").fw-bold Contorno Pecho en Pulgadas. Talla Saco
                        td 33
                        td 34
                        td 35
                        td 36
                        td 37
                        td 38
                        td 39
                        td 40
                        td 41
                        td 42
                        td 43
                        td 44
                      tr
                        td(colspan="2").fw-bold Contorno Base Cadera
                        td 33
                        td 34
                        td 35
                        td 36
                        td 37
                        td 38
                        td 39
                        td 40
                        td 41
                        td 42
                        td 43
                        td 44
                      tr
                        td(colspan="2").fw-bold &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                      tr
                        td(colspan="2").fw-bold Mitad Cuello de Medida Espalda Camisa
                        td 2 11/16
                        td 2 3/4
                        td 2 13/16
                        td 2 7/8
                        td 2 15/16
                        td 3
                        td 3  1/16
                        td 3 1/8
                        td 3  5/16
                        td 3 1/4
                        td 3  5/16
                        td 3 3/4
                      tr
                        td(colspan="2").fw-bold Mitad Cuello de Espalda Saco o Chaqueta
                        td 3  1/16
                        td 3 1/8
                        td 3  3/16
                        td 3 1/4
                        td 3  5/16
                        td 3 3/8
                        td 3  7/16
                        td 3 1/2
                        td 3  9/16
                        td 3 5/8
                        td 3 11/16
                        td 3 3/4
                      tr
                        td(colspan="2").fw-bold Cuello Delantero Horizontal de Camisa
                        td 2  3/16
                        td 2 1/4
                        td 2  5/16
                        td 2  3/6
                        td 2  7/16
                        td 2 1/2
                        td 2  9/16
                        td 2 5/8
                        td 2 11/16
                        td 2 3/4
                        td 2 13/16
                        td 2 7/8
                      tr
                        td(colspan="2").fw-bold Cuello Vertical Horizontal de Camisa
                        td 3  7/16
                        td 3 1/2
                        td 3  9/16
                        td 3 5/8
                        td 3 11/16
                        td 3 3/4
                        td 3 13/16
                        td 3 7/8
                        td 3 15/16
                        td 4
                        td 4  1/16
                        td 4 1/6
                      tr
                        td(colspan="2").fw-bold &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                      tr
                        td(colspan="2").fw-bold Altura Cabeza Manga Camisa
                        td 4 5/8
                        td 4 3/4
                        td 4 7/8
                        td 5
                        td 5 1/8
                        td 5 1/4
                        td 5 3/8
                        td 5 1/2
                        td 5 5/8
                        td 5 3/4
                        td 5 7/8
                        td 6
                      tr
                        td(colspan="2").fw-bold Altura Cabeza Manga Chaqueta o Camisa Sport
                        td 3 5/8
                        td 3 3/4
                        td 3 3/8
                        td 4
                        td 4 1/8
                        td 4 1/4
                        td 4 3/8
                        td 4 1/2
                        td 4 5/8
                        td 4 3/4
                        td 4 7/8
                        td 5
                      tr
                        td(colspan="2").fw-bold Altura Cabeza Manga Saco
                        td 6 7/8
                        td 7
                        td 7 1/8
                        td 7 1/4
                        td 7 3/8
                        td 7 1/6
                        td 7 5/8
                        td 7 3/4
                        td 7 7/8
                        td 8
                        td 8 1/8
                        td 8 1/4
                      tr
                        td(colspan="2").fw-bold &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                        td &nbsp;
                      tr
                        td(colspan="2").fw-bold Ancho Espalda
                        td 15 3/4
                        td 16
                        td 16 1/4
                        td 16 1/2
                        td 16 3/4
                        td 17
                        td 17 1/4
                        td 17 1/2
                        td 17 3/4
                        td 18
                        td 18 1/4
                        td 18 1/2
                      tr
                        td(colspan="2").fw-bold Ancho Pecho
                        td 14 1/4
                        td 14 1/2
                        td 14 3/4
                        td 15
                        td 15 1/4
                        td 15 1/2
                        td 15 3/4
                        td 16
                        td 16 1/4
                        td 16 1/2
                        td 16 3/4
                        td 17
                      tr
                        td(colspan="2").fw-bold Largo Talle
                        td 17 3/8
                        td 17 1/2
                        td 17 5/8
                        td 17 3/4
                        td 17 7/8
                        td 18
                        td 18 1/8
                        td 18 1/4
                        td 18 3/8
                        td 18 1/2
                        td 18 5/8
                        td 18 3/4
                      tr
                        td(colspan="2").fw-bold Largo Total Camisa
                        td 28 5/8
                        td 28 3/4
                        td 28 7/8
                        td 29
                        td 29 1/8
                        td 29 1/4
                        td 29 3/8
                        td 29 1/2
                        td 29 5/8
                        td 29 3/4
                        td 29 7/8
                        td 30
                      tr
                        td(colspan="2").fw-bold Largo Manga Camisa
                        td 22 5/8
                        td 22 3/4
                        td 22 7/8
                        td 23
                        td 23 1/8
                        td 23 1/4
                        td 23 3/8
                        td 23 1/2
                        td 23 5/8
                        td 23 3/4
                        td 23 7/8
                        td 24
                      tr
                        td(colspan="2").fw-bold Largo Total Saco
                        td 29 5/8
                        td 29 3/4
                        td 29 7/8
                        td 30
                        td 30 1/8
                        td 30 1/4
                        td 30 3/8
                        td 30 1/2
                        td 30 5/8
                        td 30 3/4
                        td 30 7/8
                        td 31
                      tr
                        td(colspan="2").fw-bold Largo Manga Saco
                        td 24 5/8
                        td 24 3/4
                        td 24 7/8
                        td 25
                        td 25 1/8
                        td 25 1/4
                        td 25 3/8
                        td 25 1/2
                        td 25 5/8
                        td 25 3/4
                        td 25 7/8
                        td 26
                      tr
                        td(colspan="2").fw-bold Largo Hombro
                        td 6  1/16
                        td 6 1/8
                        td 6  3/16
                        td 6 1/4
                        td 6  5/16
                        td 6 3/8
                        td 6  7/16
                        td 6 1/2
                        td 6  9/16
                        td 6 5/8
                        td 6 11/16
                        td 6 3/4
                      tr
                        td(colspan="2").fw-bold Largo Tiro
                        td 9 5/6
                        td 9 3/4
                        td 9 7/8
                        td 10
                        td 10 1/8
                        td 10 1/4
                        td 10 3/8
                        td 10 1/2
                        td 10 5/8
                        td 10 3/4
                        td 10 7/8
                        td 11
                      tr
                        td(colspan="2").fw-bold Largo Pantal&oacute;n
                        td 41 5/8
                        td 41 3/4
                        td 41 7/8
                        td 42
                        td 42 1/8
                        td 42 1/4
                        td 42 3/8
                        td 42 1/2
                        td 42 5/8
                        td 42 3/4
                        td 42 7/8
                        td 43
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center.p-4
              .col-lg-11.col-md-12.col-12.mb-4
                h4.mb-5 Cuadro de tallas femeninas, medidas anatómicas sin desahogos. Medidas en centímetros
                .tabla-a.color-acento-contenido.mb-5
                  table(style="background-color: white")
                    thead
                      tr
                        th(colspan="2").fw-bold MEDIDAS
                        th 6
                        th 8
                        th 10
                        th 12
                        th 14
                        th 16
                        th 18
                    tbody
                      tr
                        td(colspan="2").fw-bold Contorno de Busto
                        td 84
                        td 88
                        td 92
                        td 96
                        td 100
                        td 106
                        td 112
                      tr
                        td(colspan="2").fw-bold Contorno de cintura
                        td 60
                        td 64
                        td 68
                        td 72
                        td 76
                        td 82
                        td 88
                      tr
                        td(colspan="2").fw-bold Contorno de Cadera
                        td 88
                        td 92
                        td 96
                        td 100
                        td 104
                        td 110
                        td 116
                      tr
                        td(colspan="2").fw-bold Ancho de Espalda
                        td 33
                        td 34
                        td 35
                        td 36
                        td 37
                        td 38.5
                        td 40
                      tr
                        td(colspan="2").fw-bold Ancho de Pecho
                        td 31
                        td 32
                        td 33
                        td 34
                        td 35
                        td 36.5
                        td 38
                      tr
                        td(colspan="2").fw-bold Talle Frente
                        td 43.5
                        td 44
                        td 44.5
                        td 45
                        td 45.5
                        td 46.25
                        td 47
                      tr
                        td(colspan="2").fw-bold Talle Atr&aacute;s
                        td 41.5
                        td 42
                        td 42.5
                        td 43
                        td 43.5
                        td 44.25
                        td 45
                      tr
                        td(colspan="2").fw-bold Centro Frente
                        td 36.5
                        td 36.75
                        td 37
                        td 37.25
                        td 37.5
                        td 37.875
                        td 38.25
                      tr
                        td(colspan="2").fw-bold Centro Atr&aacute;s
                        td 39.5
                        td 40
                        td 40.5
                        td 41
                        td 41.5
                        td 42.25
                        td 43
                      tr
                        td(colspan="2").fw-bold Costado
                        td 18.75
                        td 19
                        td 19.25
                        td 19.5
                        td 19.75
                        td 20.125
                        td 20.50
                      tr
                        td(colspan="2").fw-bold Hombro
                        td 11.5
                        td 11.75
                        td 12
                        td 12.25
                        td 12.5
                        td 12.875
                        td 13.25
                      tr
                        td(colspan="2").fw-bold Contorno de Cuello
                        td 33
                        td 34.5
                        td 36
                        td 37.5
                        td 39
                        td 41.25
                        td 43.5
                      tr
                        td(colspan="2").fw-bold Cuello Delantero
                        td 20
                        td 21
                        td 22
                        td 23
                        td 24
                        td 25.5
                        td 27
                      tr
                        td(colspan="2").fw-bold Cuello Espalda
                        td 13
                        td 13.5
                        td 14
                        td 14.5
                        td 15
                        td 15.75
                        td 16.5
                      tr
                        td(colspan="2").fw-bold Largo de Manga
                        td 59
                        td 59.5
                        td 60
                        td 60.5
                        td 61
                        td 61.75
                        td 62.5
                      tr
                        td(colspan="2").fw-bold Largo int. de Manga
                        td 45.5
                        td 45.75
                        td 46
                        td 46.25
                        td 46.5
                        td 46.875
                        td 47.25
                      tr
                        td(colspan="2").fw-bold Largo de Blusa
                        td 61
                        td 61.5
                        td 62
                        td 62.5
                        td 63
                        td 63.75
                        td 64.5
                      tr
                        td(colspan="2").fw-bold Largo de Falda
                        td 59
                        td 59.5
                        td 60
                        td 60.5
                        td 61
                        td 61.75
                        td 62.5
                      tr
                        td(colspan="2").fw-bold Altura de Cadera
                        td 17.5
                        td 17.75
                        td 18
                        td 18.25
                        td 18.5
                        td 18.875
                        td 19.25
                      tr
                        td(colspan="2").fw-bold Largo de Pantal&oacute;n
                        td 103
                        td 104
                        td 105
                        td 106
                        td 107
                        td 108.5
                        td 110
                      tr
                        td(colspan="2").fw-bold Tiro
                        td 24
                        td 25
                        td 26
                        td 27
                        td 28
                        td 29.5
                        td 31
                      tr
                        td(colspan="2").fw-bold Rodilla
                        td 19
                        td 19.5
                        td 20
                        td 20.5
                        td 21
                        td 21.75
                        td 22.5
                      tr
                        td(colspan="2").fw-bold Bota
                        td 17
                        td 17.5
                        td 18
                        td 18.5
                        td 19
                        td 19.75
                        td 20.5
                      tr
                        td(colspan="2").fw-bold Largo de Bata
                        td 100.5
                        td 101.5
                        td 102.5
                        td 103.5
                        td 104.5
                        td 106
                        td 107.5
                      tr
                        td(colspan="2").fw-bold Largo de Chaqueta
                        td 60
                        td 60.5
                        td 61
                        td 61.5
                        td 62
                        td 62.75
                        td 63.5
                      tr
                        td(colspan="2").fw-bold Largo de Capa
                        td 60
                        td 60.5
                        td 61
                        td 61.5
                        td 62
                        td 62.75
                        td 63.5
                      tr
                        td(colspan="2").fw-bold Largo de Abrigo
                        td 105
                        td 105.5
                        td 106
                        td 106.5
                        td 107
                        td 107.75
                        td 108.5
                      tr
                        td(colspan="2").fw-bold Separaci&oacute;n de Busto
                        td 17
                        td 17.5
                        td 18
                        td 18.5
                        td 19
                        td 19.75
                        td 20.5
                      tr
                        td(colspan="2").fw-bold Altura de Busto
                        td 25.5
                        td 25.75
                        td 26
                        td 26.25
                        td 26.5
                        td 26.75
                        td 27

    
    Separador
    #t_3_3.titulo-segundo.mb-4
      h2 3.3  Proporciones en la deducción de medidas

    p.mb-4 El aumento secuencial estandarizado para el incremento o disminución de tallas se encuentra identificando la diferencia en unidades de medida de talla a talla en cada línea de medida del cuerpo. En este sentido, la fórmula estandarizada para hallar la proporción es: diferencia del contorno mayor dividido en 4, de allí resultan las fracciones de la proporción, como se relaciona en el siguiente ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        ul.lista-ul--color
          li
            i.fas.fa-bullseye
            | 1 proporción será 1 cm
          li
            i.fas.fa-bullseye
            | ½ proporción será 0,5 cm
          li
            i.fas.fa-bullseye
            | ¼ proporción será 0,25 cm y 1.5 proporción será 1,5 cm

    
    
    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 24
      | Proporciones en la deducción
    
    .row.justify-content
      .col-lg-6.col-md-12.col-12
        img(src='@/assets/curso/temma.svg')
          
    .row.justify-content-center 
      .col-lg-7.col-md-12.col-12
        .row.justify-content 
          .col-lg-5.col-md-12.col-12
            p.mb-4.my-3 Permitiendo analizar el crecimiento vertical de las medidas de una talla.
            p.mb-4 Esta información es fundamental para el escalado de tallas y ajuste del mismo sobre medidas.
          .col-lg-7.col-md-10.col-10
            img.img-a.img-t.mx-4.mov(src='@/assets/curso/temmaa.svg')
      .col-lg-5.col-md-12.col-12
        img.img-a.img-t.move.d-none.d-lg-block(src='@/assets/curso/temm.svg')


    .row.justify-content
      .col-lg-12.col-md-12.col-12
        p.mb-4 Para realizar la deducción de medidas es importante realizar su comparación y para ello se debe tener en cuenta:
  
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-bullseye
            | Incremento entre talla y talla: tomar medida por medida y revisar el incremento que hay entre talla y talla.
          li
            i.fas.fa-bullseye
            | Ruptura de talla: identificar ruptura del cuadro de tallas, por medida y talla.
    

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 25
          | Comparación de medidas
        img(src='@/assets/curso/tema3-figure25.svg')

    p.mb-5 En la figura anterior, la ruptura está entre la talla 14 y 16, porque se incrementa 6 cm, rompiendo con los 4 cm de las demás medidas.
    
    
    Separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4  Identificar el DROP

    p.mb-5 DROP es la palabra técnica que indica la diferencia en centímetros entre dos medidas del cuerpo que permite determinar su morfología, tal como se puede observar aquí:

    
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b DROP femenino]: diferencia entre cadera y contorno de busto para la mujer. Es decir, #[b Contorno de Cadera - Contorno de Busto = DROP]

        p.mb-3 El DROP tiene características importantes que se deben considerar al momento de realizar su identificación:

        ul.lista-ul--color.mb-3
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | Con el DROP se establecen las diferentes contexturas de una misma talla.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | En las mujeres, el DROP es la diferencia entre las medidas de Contorno de Cadera y Contorno de Busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | En las tallas femeninas predomina un DROP positivo.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | Generalmente una talla se considera normal cuando el DROP es positivo entre +2 cm y +4 cm.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | El DROP estándar usado en Colombia es + 4 cm.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            | En las tallas extremas y altas el DROP se vuelve negativo.
        
        p.mb-3 A continuación, se relacionan algunos ejemplos:
        
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b DROP + 2], indica la medida de cadera 2 cm mayor que el contorno de busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b El DROP 0], indica que la medida de cadera es igual a la medida de contorno de busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b El DROP - 4], indica que la medida de cadera tiene 4 cm menos que el contorno de busto.

      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 26
          | DROP femenino
        .caja12.p-3
          img(src='@/assets/curso/tema3-figure26.svg', style='max-height: 400px')

    
    .row.justify-content-center.mb-4
      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 27
          | DROP masculino
        .caja12.mb-5
          img.img-a.img-t(src='@/assets/curso/tema3-figure27.svg')
        
      .col-lg-6.col-md-12.col-12.my-5
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b DROP masculino:] para este caso la diferencia está entre la cintura y el pecho. Generalmente en tallas masculinas predomina el DROP negativo (más pecho que cintura), aunque al realizar una tabla de tallas (a mayor talla menos DROP) en tallas extremas puede a ser positivo, es decir, un cuerpo con más cintura que pecho.
        p.mb-3 A continuación, se relacionan algunos ejemplos:

        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un DROP - 4] indica, una cintura con 4 pulgadas menos que la medida de pecho.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un DROP 0,] indica una cintura igual al pecho.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un DROP + 2,] indica una cintura con 2 pulgadas que el pecho.

        p.mb-5 Acorde con el género, cada tipo de silueta tiene un DROP característico determinado, a su vez, por la tipología del cuerpo dentro de una clasificación general, puesto que hay particularidades y cada persona necesita un análisis en cuanto a su silueta para poder abordar el vestuario, patronaje y confección.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 28
      | Tipos de siluetas generales masculinas y femeninas
    img.d-none.d-lg-block(src='@/assets/curso/tema3-figure28.svg')
    img.imagen-mobile(src='@/assets/curso/tema3-figure28.3.svg')


</template>

<script>
import SlyderBModified from '@/components/SlyderBModified'
export default {
  name: 'Tema3',
  components: { SlyderBModified },
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
    ],
  }),
  mounted() {
    // document.querySelector('.carousel').carousel({ interval: false })
  },
}
</script>

<style lang="sass" scoped></style>
