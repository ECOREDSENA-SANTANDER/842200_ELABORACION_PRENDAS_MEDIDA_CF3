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
          h5 Figura 19.
          | Medidas figura humana
        figure.mb-5.px-4
          img.d-none.d-lg-block(src='@/assets/curso/tema3-medidas.svg', alt='La imagen expone una figura humana con varias líneas y etiquetas que indican cómo tomar medidas corporales. Las medidas especificadas incluyen: cuello, alto de pecho, talle delantero, contorno de pecho, alto sisa, contorno de brazo, cintura, cadera, largo cadera, muslo, largo de falda, gemelo, tobillo y largo total. Las etiquetas están colocadas al lado de la figura, con líneas de diferentes colores que señalan la posición de cada medida en el cuerpo.')
          img.imagen-mobile(src='@/assets/curso/tema3-medidas.3.svg', alt='La imagen expone una figura humana con varias líneas y etiquetas que indican cómo tomar medidas corporales. Las medidas especificadas incluyen: cuello, alto de pecho, talle delantero, contorno de pecho, alto sisa, contorno de brazo, cintura, cadera, largo cadera, muslo, largo de falda, gemelo, tobillo y largo total. Las etiquetas están colocadas al lado de la figura, con líneas de diferentes colores que señalan la posición de cada medida en el cuerpo.')
    
    
    Separador
    #t_3_1.titulo-segundo.mb-4
      h2 3.1  Proporción vs. canon

    p.mb-5 Esta comparación hace relación sobre cuántas cabezas caben en la altura del cuerpo.

    TabsA.color-acento-botones.mb-5.rela(data-aos="flip-up")
      .tarjeta.color-acento-conte--borde.p-4(titulo="Canon")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Canon
            p  Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 20.
              | Canon (número de cabezas)
            .row.justify-content-center
              .col-9
                figure.mb-5.px-4
                  img.mb-4(src='@/assets/curso/tema3-figure18.svg', alt='La imagen expone un diagrama del "Canon" o "Número de cabezas" utilizado para medir proporciones en el cuerpo humano. A la izquierda, se detalla una figura humana dividida en siete partes iguales, cada una del tamaño de una cabeza. A la derecha, se indica cómo estas divisiones corresponden a diferentes partes del cuerpo: mentón, hombros, pechos (final de la caja torácica), ombligo, pubis, nudillos y rodillas. Esta representación ayuda a entender las proporciones ideales del cuerpo humano según el canon clásico.')
      
      .tarjeta.color-acento-conte--borde.p-4(titulo="Proporción")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4.text-dark Proporción
            p.text-dark Se refiere a la armonía y correspondencia entre las partes de un conjunto, buscando un equilibrio y simetría. Un ejemplo clásico es la secuencia numérica de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc., donde cada número resulta de la suma de los dos anteriores. Esta progresión está vinculada a las proporciones ideales del cuerpo humano, como las establecidas por Da Vinci en su estudio del Hombre de Vitruvio. Estos principios permiten la creación de un mapa simétrico del cuerpo humano, donde se utiliza el estándar del canon de las ocho cabezas para definir un ideal de belleza.
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 21.
              | Proporción figura humana
            .row.justify-content-center
              .col-9
                figure.mb-5.px-4
                  img.mb-4(src='@/assets/curso/tema3-figure19.svg', alt='La imagen detalla el famoso dibujo del Hombre de Vitruvio de Leonardo da Vinci, que representa las proporciones ideales del cuerpo humano dentro de un círculo y un cuadrado, ilustrando los principios de la geometría y la armonía en el diseño del cuerpo humano.')
                  figcaption Nota. Tomada de Valero (2013)      

      .tarjeta.color-acento-conte--borde.p-4.modal-content(titulo="Proporciones corporales")
        .row.justify-content-center.align-items-center
          .col-lg-11
            h4 Proporciones corporales
            p Es un modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.

            .row.justify-content-center.mb-0
              .col-lg-3.col-12.d-flex(@click="modal1 = true")
                .py-5.p-3
                  .p-0.d-flex.justify-content-center.mb-4
                    img.mb-lg-0.mb-3( style="width: 181px" alt="" src="@/assets/curso/im1.1.svg")
                  .p-0.d-flex.justify-content-center
                    a.d-flex.indicador__container
                      .indicador--click(v-if="mostrarIndicador")
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 22.
            
              .col-lg-3.col-12.d-flex(@click="modal2 = true")
                .py-5.p-3
                  .p-0.d-flex.justify-content-center.mb-4
                    img.mb-lg-0.mb-3( style="width: 181px" alt="" src="@/assets/curso/im1.2.svg")
                  .p-0.d-flex.justify-content-center
                    a.d-flex.indicador__container
                      .indicador--click(v-if="mostrarIndicador")
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 23.

              .col-lg-3.col-12.d-flex(@click="modal3 = true")
                .py-5.p-3
                  .p-0.d-flex.justify-content-center.mb-4
                    img.mb-lg-0.mb-3( style="width: 181px" alt="" src="@/assets/curso/im1.3.svg")
                  .p-0.d-flex.justify-content-center
                    a.d-flex.indicador__container
                      .indicador--click(v-if="mostrarIndicador")
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 24.

            ModalA(:abrir-modal.sync="modal1")
              .row.justify-content-center.align-items-center
                .col-lg-11.col-md-12.col-12
                  .titulo-sexto.color-acento-contenido.mb-4
                    h5 Figura 22.
                    | Proporción de acuerdo con etapas de crecimiento
                  .row.justify-content-center
                    .col-12
                      figure
                        img.mb-4(src='@/assets/curso/tema3-figure20.svg', alt='La imagen detalla una serie de ilustraciones de figuras humanas en distintas etapas de crecimiento, desde recién nacido hasta adulto de 25 años, con la proporción de sus cuerpos medida en unidades de cabezas. La altura de cada figura aumenta con la edad, desde 4 cabezas para un recién nacido hasta 8 cabezas para un adulto, lo que demuestra cómo las proporciones del cuerpo humano cambian con el desarrollo.')
                        figcaption Tomada de Cómo cubrir un cuerpo (2013)            
            
            ModalA(:abrir-modal.sync="modal2")
              .row.justify-content-center.align-items-center
                .col-lg-11.col-md-12.col-12
                  .titulo-sexto.color-acento-contenido.mb-4            
                    h5 Figura 23.
                    | Proporción con medidas de la figura
                  .row.justify-content-center.mb-5
                    .col-12
                      figure
                      img(src='@/assets/curso/tema3-figure21.svg', alt='La imagen, titulada "Proporción con medidas de la figura", presenta dibujos de la figura masculina inspirados en el Hombre de Vitruvio, con anotaciones numéricas que indican las medidas de diferentes partes del cuerpo en centímetros, como la envergadura de los brazos y la altura total.')
          
            ModalA(:abrir-modal.sync="modal3")
              .row.justify-content-center.align-items-center
                .col-lg-11.col-md-12.col-12
                  .titulo-sexto.color-acento-contenido.mb-4
                    h5 Figura 24.
                    | Modulares, figurín masculino y femenino
                  .row.justify-content-center
                    .col-12
                      figure
                        img(src='@/assets/curso/tema3-figure22.svg', alt='La  imagen, expone dos figuras humanas, una masculina y una femenina, de frente y de espaldas. Están superpuestas sobre una cuadrícula modular que parece servir como referencia para el estudio de las proporciones del cuerpo humano en el diseño de moda.')
    .row.justify-content 

    Separador
    #t_3_2.titulo-segundo.mb-4
      h2 3.2  Medidas deducidas

    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.fondo-b.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-deducida.png')})`}"
          )
          .bloque-texto-g__texto.p-5.mt-4.mb-4
            p.mb-0 Para calcular un cuadro de tallas completo se utilizan, generalmente, dos medidas anatómicas: la altura o estatura total y el contorno superior más prominente. A continuación, se relaciona la fórmula que posibilita una expresión breve y precisa del modo de hacer, resolver o conseguir algo, es decir, del cálculo estandarizado para obtener un resultado.
    
    .row.fondo3.align-items-center
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down") 

          .row.justify-content-center
            .col-lg-7.col-md-12.col-12.mb-3
              .titulo-sexto.color-acento-contenido.my-3
                h5 Tabla 2.
                | Fórmulas medidas deducidas
              .tabla-a.color-acento-contenido.mb-5(alt='La tabla presenta las medidas correspondientes a "Tórax máximo" y "Talla". Para el pecho, la talla es el tórax máximo menos 2 cm; para la cadera, el tórax máximo más 4 cm; y para la cintura, la cadera menos 14 cm. La estatura 7ª cervical es la estatura total menos 20 cm. El talle es 3/10 de la estatura 7ª cervical, la cintura/suelo es 7/10 de la estatura 7ª cervical, y el largo de brazo es 4/10 de la estatura 7ª cervical. La estatura total es la estatura 7ª cervical más 20 cm. La base se calcula sumando pecho, desahogo (4 cm) y costura (2 cm).')
                table
                  thead
                    tr
                      th.text-center Tórax máximo
                      th.text-center Talla
                  tbody
                    tr
                      td.text-center Pecho
                      td.text-center Tórax máximo – 2 cm
                    tr
                      td.text-center Cadera
                      td.text-center Tórax máximo + 4 cm
                    tr
                      td.text-center Cintura
                      td.text-center Cadera – 14 cm
                    tr
                      td.text-center Estatura 7ª
                      td.text-center Estatura total – 20 cm
                    tr
                      td.text-center Talle
                      td.text-center 3/10 de la estatura 7ª cervical
                    tr
                      td.text-center Cintura/suelo
                      td.text-center 7/10 de la estatura 7ª cervical
                    tr
                      td.text-center Largo de brazo
                      td.text-center 4/10 de la estatura 7ª cervical
                    tr
                      td.text-center Estatura total
                      td.text-center Estatura 7ª cervical + 20 cm
                    tr
                      td.text-center Base
                      td.text-center Pecho + desahogo (4 cm) + costura (2 cm)

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
                    h5 Figura 25.
                    | Cervical o largo útil
                  img(src='@/assets/curso/tema3-figure23.svg' ,alt='Se detalla la figura masculina dividida en siete partes iguales, cada una correspondiente al tamaño de una cabeza, para ilustrar las proporciones del cuerpo humano. La figura de frente y de perfil resalta cómo estas proporciones se distribuyen a lo largo del cuerpo, utilizando la medida de la cabeza como unidad de referencia. Esto ayuda a visualizar y entender las proporciones ideales del cuerpo masculino según el canon clásico.')

    p.mb-5 A continuación, se detallan otras fórmulas de deducción de tallas.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      | Fórmulas para deducción de tallas

    .tabla-a.color-acento-contenido.mb-5(alt='La tabla proporciona fórmulas para deducir medidas corporales a partir del busto y otras referencias. Se divide en tres secciones: horizontales, que incluyen medidas como tórax, pecho, cintura, cadera, cuello, rodilla, tobillo, brazo, muñeca y ancho de espalda; verticales, que abarcan estatura total y parcial, altura del busto, largo de brazo, cintura al suelo y altura de cadera; y otras fórmulas de deducción, basadas en la edad y proporciones del cuerpo para determinar medidas adicionales como el talle, codo y largo de falda. Estas fórmulas facilitan el cálculo preciso y proporcional de las dimensiones corporales.')
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

    p.mb-5 Ahora, se podrá estudiar la forma cómo obtener medidas deducidas a partir del desarrollo de las siguientes fórmulas: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 4.
      | Medidas reducidas

    .tabla-a.color-acento-contenido.mb-5(alt='La tabla expone diferentes medidas corporales junto con sus fórmulas y resultados. La estatura total es de 170 cm y el tórax máximo es de 90 cm. La cadera se calcula como el tórax máximo más 8 cm, resultando en 98 cm. El pecho se obtiene restando 4 cm del tórax máximo, dando 86 cm. La cintura se calcula como la cadera menos 28 cm, resultando en 70 cm. La estatura 7ª cervical útil se obtiene restando 20 cm de la estatura total, resultando en 150 cm.')
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
      h5 Tabla 5.
      | Grupos de tallas

    .tabla-a.color-acento-contenido.mb-5.text-center(alt='La tabla expone las medidas de tórax máximo y estatura total para diferentes tallas de ropa, desde XS/30 (talla 6) hasta SL/42 (talla 16), con incrementos de 2 cm entre tallas. Las medidas de tórax máximo varían desde 40 cm hasta 50 cm, y las estaturas totales varían desde 166 cm hasta 174 cm. También se incluye una columna de incremento de 2 cm para ajustar las medidas entre las tallas. Otras medidas, como cadera, pecho, cintura, estatura de la 7ª cervical, talle, largo de brazo, cuello, cintura/suelo y base.')
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
        p A continuación, se expone cómo se realiza una construcción de talla 6 utilizando las fórmulas mencionadas.

      .col-lg-5.col-md-8.col-8
        img.my-2.mb-4(src='@/assets/curso/tema3-imagen2.png')

    .titulo-sexto.color-acento-contenido
      h5 Tabla 6.
      | Aplicación de fórmulas

    .tabla-a.color-acento-contenido.mb-5(alt='La tabla compara las medidas para las tallas 6 y XS/30, mostrando que ambas tienen un tórax máximo de 40 cm, cadera de 44 cm, pecho de 38 cm, cintura de 30 cm y estatura total de 168 cm. La estatura de la 7ª cervical es 148 cm en ambas. Para la talla 6, se detallan cálculos adicionales: talle de 43.8 cm, largo de brazo de 58.4 cm, cuello de 28.6 cm, cintura/suelo de 102.2 cm, y base de 44 cm. En la talla XS/30, estos cálculos no se muestran.')
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
        p.mb-4 En modistería, es habitual trabajar con una combinación de medidas. Al emplear medidas deducidas, es crucial aplicarlas de manera secuencial y considerar que las dimensiones finales pueden variar si se incorpora una medida anatómica adicional a las obtenidas por deducción. Por ello, es esencial definir tablas de tallas basadas en distintos criterios:        
        .row.justify-content-center
          .col-12
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-bullseye
                | #[b Anatómicos y deducidos:] clasificadas según el método de obtención de las medidas.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Proporcionales:] caracterizadas por un crecimiento secuencial y numérico de las tallas.
              li.mb-0
                i.fas.fa-bullseye
                | #[b No proporcionales:] donde el crecimiento de las tallas no sigue una secuencia numérica fija.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Completas:] que abarcan todas las medidas necesarias para la creación de patrones de ropa.
              li.mb-0
                i.fas.fa-bullseye
                | #[b Específicas por prenda:] que pueden incluir holguras y margen de costura según sea necesario.


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
                | #[b Límites:] la más pequeña y la más grande. 
              li.mb-0
                i.fas.fa-bullseye
                | #[b Frecuencia:]  aumento de medida #[b talla a talla] (secuencial y no secuencial - constantes y variables).
              li.mb-0
                i.fas.fa-bullseye
                | #[b Incremento:] magnitud de crecimiento de la medida talla por talla.
        p.mb-4 El análisis de los anteriores aspectos dará como resultado: valores, proporciones, rupturas de talla (para una, dos o hasta tres tallas base).
        p.mb-0 Seguidamente se presentan los cuadros de tallas, infantiles, masculino y femenino.
    
    .tarjeta.tarjeta--azule.p-3.mb-0
      SlyderA(tipo="a")
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center.p-4
              .col-lg-11.col-md-12.col-12.mb-4
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 7.
                  | Tallas infantiles medidas en centímetros
                .tabla-a.color-acento-contenido.mb-5(alt='La tabla presenta diversas medidas para diferentes tallas, que van desde la talla 2 hasta la talla 14. Las medidas incluyen estatura, contorno de cadera, contorno de pecho, contorno de cintura, ancho de espalda, ancho de pecho, largo de talle, largo de costado, largo de centro frente, largo de centro atrás, largo de hombro, largo de pantalón, largo de tiro, largo de falda, largo de blusa, largo de manga, cabeza de manga y puño. Cada columna muestra las medidas específicas para cada talla, indicando cómo varían estas dimensiones entre las diferentes tallas de ropa.')
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
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 8.
                  | Tallas masculinas, medidas en pulgadas
                .tabla-a.color-acento-contenido.mb-5(alt='La tabla presenta medidas de tallas masculinas en pulgadas para tallas de 33 a 44. Las medidas incluyen contornos de cuello, pecho, cintura, y cadera; anchos de espalda, pecho, y hombro; largos de brazo, pantalón, y tiro; y anchos de puño y espalda. Cada fila muestra cómo varían estas medidas según la talla.')
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
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 9.
                  | Tallas femeninas, medidas anatómicas sin desahogos y medidas en centímetros
                .tabla-a.color-acento-contenido.mb-5(alt='La tabla presenta medidas anatómicas femeninas sin desahogos para las tallas 6, 8, 10, 12, 14, 16 y 18, expresadas en centímetros. Las medidas incluyen contornos de busto, cadera, cintura y base; anchos de espalda y pecho; largos de talle, costado, centro frente, centro atrás, y hombro; además de largo de manga, largo de pantalón, largo de tiro, largo de falda, largo de blusa, y largo total. Cada fila expone cómo estas medidas varían según la talla.')
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
      h5 Figura 26.
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
        img.img-a.img-t.move.d-none.d-lg-block(src='@/assets/curso/temm.svg', alt='En la imagen se exponen dos tablas de medidas para tallas de ropa. En la primera tabla, se destacan las medidas de contorno de busto, cintura y cadera para diferentes tallas, con un énfasis en el incremento vertical de 4 centímetros entre ciertas tallas. En la segunda tabla, se listan proporciones de diferentes medidas como el ancho de espalda, ancho de pecho y otras, cada una con un factor proporcional relacionado, indicando cómo estas medidas escalan de una talla a otra. Se subraya que esta información es crucial para el escalado de tallas y el ajuste preciso de las prendas basado en las medidas.')


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
          h5 Figura 27.
          | Comparación de medidas
        img(src='@/assets/curso/tema3-figure25.svg', alt='La imagen expone un cuadro con medidas de contorno de busto para distintas tallas de ropa femenina que van desde la talla 6 hasta la 18. Los incrementos entre cada talla están marcados con flechas rosas, indicando un aumento consistente de 4 centímetros entre las tallas 6 y 14, y luego un incremento de 6 centímetros entre las tallas 14 y 18.')

    p.mb-0 En la figura anterior, la ruptura está entre la talla 14 y 16, porque se incrementa 6 cm, rompiendo con los 4 cm de las demás medidas.
    
    
    Separador
    #t_3_4.titulo-segundo.mb-5
      h2 3.4  Identificar el #[em DROP]

    p.mb-4 #[em DROP] es la palabra técnica que indica la diferencia en centímetros entre dos medidas del cuerpo que permite determinar su morfología, tal como se presenta a continuacion:

    
    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b #[em DROP] femenino]: diferencia entre cadera y contorno de busto para la mujer. Es decir, #[b Contorno de Cadera - Contorno de Busto = DROP].

        p.mb-3 El #[em DROP] tiene características importantes que se deben considerar al momento de realizar su identificación:

        ul.lista-ul--color.mb-3
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 Con el #[em DROP] se establecen las diferentes contexturas de una misma talla.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 En las mujeres, el #[em DROP] es la diferencia entre las medidas de Contorno de Cadera y Contorno de Busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 En las tallas femeninas predomina un #[em DROP] positivo.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 Generalmente una talla se considera normal cuando el #[em DROP] es positivo entre +2 cm y +4 cm.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 El #[em DROP] estándar usado en Colombia es + 4 cm.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 En las tallas extremas y altas el #[em DROP] se vuelve negativo.
        
        p.mb-3 A continuación, se relacionan algunos ejemplos:
        
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b #[em DROP] + 2], indica la medida de cadera 2 cm mayor que el contorno de busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b El #[em DROP] 0], indica que la medida de cadera es igual a la medida de contorno de busto.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b El #[em DROP] - 4], indica que la medida de cadera tiene 4 cm menos que el contorno de busto.

      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 28.
          | #[em DROP] femenino
        .caja12.p-3
          img(src='@/assets/curso/tema3-figure26.svg', style='max-height: 400px')(alt='Se expone una figura femenina en la cual se indica con flechas el DROP que es la diferencia entre las medidas de Contorno de Cadera y Contorno de Busto')

    
    .row.justify-content-center.mb-0
      .col-lg-6.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 29.
          | #[em DROP] masculino
        .caja12.mb-5
          img.img-a.img-t(src='@/assets/curso/tema3-figure27.svg')(alt='Se expone Figura Masculina en la cual se indica con flechas el DROP que es la diferencia entre las medidas de Contorno del pecho y la cintura')
        
      .col-lg-6.col-md-12.col-12.my-5
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b #[em DROP] masculino:] para este caso la diferencia está entre la cintura y el pecho. Generalmente en tallas masculinas predomina el DROP negativo (más pecho que cintura), aunque al realizar una tabla de tallas (a mayor talla menos DROP) en tallas extremas puede a ser positivo, es decir, un cuerpo con más cintura que pecho.
        p.mb-3 A continuación, se relacionan algunos ejemplos:

        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un #[em DROP] - 4] indica, una cintura con 4 pulgadas menos que la medida de pecho.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un #[em DROP] 0,] indica una cintura igual al pecho.
          li.mb-0.d-flex
            i.fas.fa-bullseye
            p.mb-0 #[b Un #[em DROP] + 2,] indica una cintura con 2 pulgadas que el pecho.

        p.mb-4 Acorde con el género, cada tipo de silueta tiene un #[em DROP] característico determinado, a su vez, por la tipología del cuerpo dentro de una clasificación general, puesto que hay particularidades y cada persona necesita un análisis en cuanto a su silueta para poder abordar el vestuario, patronaje y confección.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 30.
      | Tipos de siluetas generales masculinas y femeninas
    img.d-none.d-lg-block(src='@/assets/curso/tema3-figure28.svg', alt='La imagen ilustra unas figuras masculinas y femeninas con distintos tipos de cuerpos clasificados según formas geométricas. Para las mujeres, de izquierda a derecha: Pera, Triángulo Invertido, Manzana, Rectángulo y Reloj de Arena. Para los hombres, las formas son menos variadas y parecen seguir un patrón triangular con ligeras variaciones. Cada tipo de cuerpo está asociado con una forma geométrica específica que describe la distribución de peso y la proporción general del cuerpo.')
    img.imagen-mobile(src='@/assets/curso/tema3-figure28.3.svg', alt='La imagen ilustra unas figuras masculinas y femeninas con distintos tipos de cuerpos clasificados según formas geométricas. Para las mujeres, de izquierda a derecha: Pera, Triángulo Invertido, Manzana, Rectángulo y Reloj de Arena. Para los hombres, las formas son menos variadas y parecen seguir un patrón triangular con ligeras variaciones. Cada tipo de cuerpo está asociado con una forma geométrica específica que describe la distribución de peso y la proporción general del cuerpo.')


</template>

<script>
import SlyderBModified from '@/components/SlyderBModified'
export default {
  name: 'Tema3',
  components: { SlyderBModified },
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    // variables de vue
    components: {},
    data: () => ({
      mostrarIndicador: true,
      modal1: false,
    }),
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
