<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis y clasificación de las medidas
    
    .row.justify-content-center 
      .col-lg-12.col-md-12.col-12
        SlyderD.mb-0.no-slyder-d-primary(:datos="datosSlyder")
    
    Separador
    #t_2_1.titulo-segundo
      h2 2.1  Sistemas de medidas: clasificación, características, usos e implementación

    p.mb-4(data-aos="zoom-in-up") La #[b longitud] es la distancia que hay entre un punto y otro, y para realizar esta medida, existen dos sistemas:

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
            h5 Figura 3.
            | Comparación de sistemas de medidas
          .row.justify-content-center
            .col-lg-12
              img.mx-2.img-a.img-t(src='@/assets/curso/tema2-figure3.svg', alt='La imagen expone un diagrama que presenta una cinta métrica con dos escalas diferentes. En la parte superior, marcada con verde, está la escala en pulgadas, representando el "SISTEMA INGLÉS". En la parte inferior, marcada con rosado, está la escala en centímetros, representando el "SISTEMA INTERNACIONAL". El diagrama sirve para mostrar visualmente la diferencia entre estas dos unidades de medida.')
    
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-12.col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p(data-aos="zoom-in-up") Los dos tipos de sistemas son utilizados en diferentes áreas y cadenas productivas, teniendo en cuenta que algunos estándares están trabajados en medidas diferentes a las que usa oficialmente el país.

    ol.lista-ol--cuadro
      li.d-flex
        .lista-ol--cuadro__vineta
          span.negro #[b c]
        p(data-aos="zoom-in-up") #[b Sistema métrico fraccionario:] como todo número fraccionario, se representa A/B, donde A es el numerador y B el denominador. El numerador indica el número de partes que se toman de la unidad y el denominador en cuántas partes iguales se divide esa unidad.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mx-2
          h5 Figura 4.
          | Numerador - Denominador
        img(src='@/assets/curso/tema2-figure4.svg', alt='La imagen hace una representación gráfica de la fracción 1/3. En la parte superior se encuentran los términos "Numerador" y "Denominador" separados por la fracción 1/3. Abajo, un gráfico circular está dividido en tres partes iguales, cada una etiquetada como 1/3. Debajo del gráfico circular, se repite la fracción 1/3 tres veces en una barra horizontal, enfatizando que la fracción es una de las tres partes iguales del total.')
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido.mx-2
          h5 Figura 5.
          | La pulgada
        img(src='@/assets/curso/tema2-figure5.svg', alt='La imagen expone una regla que indica fracciones de pulgada desde 0 a 1. Cada fracción está representada en su forma más reducida y también como una equivalencia en treintaidosavos de pulgada. Además, se proporciona una breve lección de unidades de medida en inglés, indicando que la pulgada es la unidad básica, que un pie equivale a 12 pulgadas y que una yarda equivale a 3 pies.')

    p.mb-5(data-aos="zoom-in-up") En confección, se utiliza la pulgada como medida de estandarización la cual mide el número de Puntadas Por Pulgada (PPP).
    
    .row.justify-content-center
      .col-lg-6.col-md-12.col-12
        .row.mb-3
          .col.d-flex
            .cajon.color-primario.p-4.mb-4
              p.mb-0 #[b Ancho de la puntada:] se utiliza un calibrador para facilitar el proceso y, para ello, se sugiere que la planchuela de la máquina tenga las medidas para que sirva de guía.
      .col-lg-6.col-md-12.col-12
        .row.mb-3
          .col.d-flex.col-md-12.col-12
            .cajon.color-primario.p-4.mb-4
              p.mb-4(data-aos="zoom-in-up") #[b Pies de las máquinas:] se miden por pulgadas y de acuerdo con el ancho de las costuras.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          | Planchuela de máquina con ancho de puntada y medidas
        img(src='@/assets/curso/tema2-figure6.svg', alt='En la  imagen se  detalla  un calibrador o pie de rey, un instrumento utilizado para medir dimensiones de objetos con precisión. Se observa la escala en pulgadas, con marcas que indican fracciones como 1/16, 1/8, 3/16, hasta 9/32 y 5/16. La palabra "CALIBRADOR" es visible, y una línea rosa resalta parte del instrumento, probablemente enfocando la atención en la escala de medición.')
      .col-lg-6.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          | Planchuela y pie       
        img(src='@/assets/curso/tema2-figure7.svg', alt='La imagen expone dos herramientas de medición. A la izquierda, hay una planchuela, una placa de metal con varias aberturas de diferentes tamaños, probablemente utilizada para medir el grosor o el diámetro de alambres o pequeños objetos. A la derecha, aparece un pie de rey, un instrumento de precisión para medir dimensiones pequeñas y distancias internas y externas de los objetos. Ambas herramientas están resaltadas con líneas de contorno dibujadas en verde y azul, posiblemente para señalar sus características o las partes que son de interés en este contexto.')

    p.mb-4(data-aos="zoom-in-up") Para el patronaje, la denominación de tallas europeas, y también algunos cuadros de tallas, especialmente los masculinos, se trabajan en pulgadas.

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.col-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8.
          | Utilización de las pulgadas
        img(src='@/assets/curso/tema2-figure8.svg', alt='La imagen contiene un gráfico que exponen medidas en pulgadas de manera progresiva. La gráfica tiene una escala de 0 a 1 pulgada, con divisiones marcadas y etiquetadas con fracciones de pulgada y sus equivalentes en fracciones de 32 y 16. Por ejemplo, se muestra 1/32, 2/32 (que también es 1/16), 4/32 (1/8), hasta llegar a 32/32 (1 pulgada).  "Se detallan las pulgadas que van de acuerdo a la medida progresiva encontrada así:" sugiere que el gráfico está diseñado para ayudar a entender cómo las fracciones de pulgada se acumulan o incrementan para formar una pulgada completa.')
      .col-lg-6.col-md-12.col-12.mb-5
        .cajon.color-acento-contenido.p-4.mb-5.my-5
          p(data-aos="zoom-in-up") Al sistema inglés también se le llama sistema de medidas ‘imperial’ en el entorno de la confección. Sin embargo, la mayoría de los países ha adoptado el sistema de medidas decimal comúnmente llamado sistema ‘universal’, haciendo comunes los procesos de conversión de medidas, donde 1" pulgada mide 2,54 cm.

        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span.negro #[b d]
            p(data-aos="zoom-in-up") #[b Sistema métrico decimal o universal:] es un sistema de unidades en el cual los múltiplos o submúltiplos de las unidades de una misma naturaleza siguen una escala decimal (10).

    .row.justify-content-center.mb-5
      .col-lg-7.col-md-12.col-12.mb-3
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 9.
          | Análisis de unidades
        .tabla-a.tabl.color-acento-contenido
          table(alt='La imagen detalla una tabla que enumera unidades de medida de longitud junto con sus abreviaturas y equivalencias en metros. De arriba hacia abajo, las unidades son: Kilómetro (km) equivale a 1000 metros, Hectómetro (hm) a 100 metros, Decámetro (dam) a 10 metros, Metro (m) a 1 metro, Decímetro (dm) a 0,1 metros, Centímetro (cm) a 0,01 metros y Milímetro (mm) a 0,001 metros. Hay líneas azules que conectan visualmente las equivalencias de estas unidades con la unidad base, el metro.')
            thead
              tr
                th Unidad
                th Abreviatura
                th Equivalente
            tbody
              tr
                td.text-center Kilómetro
                td.text-center km
                td.text-center
                  .row.justify-content 
                    .col-lg-12
                      .bg88.p-1
                        p.mb-0 1000 m
              tr
                td.text-center Hectómetro
                td.text-center hm
                td.text-center 100 m
              tr
                td.text-center Decámetro
                td.text-center dam
                td.text-center 10 m
              tr
                td.text-center Metro
                td.text-center m
                td.text-center
                  .row.justify-content 
                    .col-lg-12
                      .bg88.p-1
                        p.mb-0 1 m
              tr
                td.text-center Decímetro
                td.text-center dm
                td.text-center 0,1 m
              tr
                td.text-center Centímetro
                td.text-center cm
                td.text-center 0,01 m
              tr
                td.text-center.ler Milímetro
                td.text-center.ler mm
                td.text-center.ler
                  .row.justify-content.mb-0 
                    .col-lg-12
                      .bg88.p-1
                        p.mb-0 0,001 m

    p.mb-5
      strong Por lo anterior, en patronaje y en confección las características generales encontradas son las siguientes:

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="En confección" :icono="require('@/assets/curso/tema2-tabs1.svg')")
        .row.justify-content-center
          .col-lg-7.col-md-12.col-12
            p(data-aos="zoom-in-up") #[b En confección:] Se utiliza para verificar medidas finales de la prenda, razón por la cual se debe tener en cuenta lo siguiente:

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

          .col-lg-5.col-md-12.col-12
            .row.justify-content-center
              .col-lg-8.col-md-12.col-12
                .titulo-sexto.color-acento-contenido.mb-3.mx-4
                  h5 Figura 10.
                  | Medidas en confección
                figure
                  img(src='@/assets/curso/tema2-figure10.svg', alt='La imagen ilustra una comparación de espesores de tela en rollo. Hay tres rollos de tela apiladas, cada una con una etiqueta de espesor: 3 mm, 5 mm y 6 mm. Además, hay una imagen de una tela enrollada junto a una regla que muestra la medida de 140 cm, indicando la anchura de la tela desenrollada, y el espesor de esta tela enrollada se indica como 12 mm. La imagen se usa para mostrar las diferentes opciones de espesor para los clientes interesados en este tipo de producto.')
          .col-lg-1.col-md-12.col-12
          
      .py-4.py-md-5(titulo="En patronaje" :icono="require('@/assets/curso/tema2-tabs2.svg')")
        .row
          .col-lg-5.col-md-12.col-12
            p(data-aos="zoom-in-up") #[b En patronaje:] La mayoría de los cuadros de tallas anatómicas e industriales, en todas las líneas, están construidos en centímetros que es el sistema métrico estandarizado para el proceso de toma de medidas, patronaje y corte de las prendas. Las reducciones o ampliaciones para el confort de la prenda se realizan en centímetros.
          .col-lg-7.col-md-12.col-12
            .row.justify-content-center
              .col-lg-12.col-md-12.col-12
                .titulo-sexto.color-acento-contenido
                  h5 Figura 11.
                  | Medidas en patronaje
            .tabla.hj.tabl.color-acento-contenido
              table(alt='La imagen expone las  tallas para prendas de vestir, con medidas específicas para distintas partes del cuerpo en centímetros. Se indican tallas que van desde la S (pequeña) hasta la 3XL (triple extra grande). Para cada talla, se proporcionan rangos de medidas para el pecho, la cintura, la cadera y la entrepierna. Por ejemplo, para la talla S, el pecho mide entre 86 y 93 cm, la cintura entre 76 y 81 cm, la cadera entre 92 y 97 cm, y la entrepierna entre 80 y 81 cm. Las medidas aumentan progresivamente con cada talla más grande.')
                thead
                  tr.color2
                    th(colspan="2")
                    th S
                    th M
                    th L
                    th XL
                    th 2XL
                    th 3XL
                tbody
                  tr
                    td(colspan="2").gg.p-1 PECHO cm
                    td.p-0.gg.text-center 86/93
                    td.p-0.gg.text-center 94/99
                    td.p-0.gg.text-center 100/105
                    td.p-0.gg.text-center 106/111
                    td.p-0.gg.text-center 112/117
                    td.p-0.gg.text-center 118/123
                  tr
                    td(colspan="2").gg.p-1 CINTURA cm
                    td.p-0.gg.text-center 76/81
                    td.p-0.gg.text-center 82/87
                    td.p-0.gg.text-center 88/93
                    td.p-0.gg.text-center 94/99
                    td.p-0.gg.text-center 100/105
                    td.p-0.gg.text-center 106/111
                  tr
                    td(colspan="2").gg.p-1 CADERA cm
                    td.p-0.gg.text-center 92/97
                    td.p-0.gg.text-center 98/103
                    td.p-0.gg.text-center 104/109
                    td.p-0.gg.text-center 110/115
                    td.p-0.gg.text-center 116/121
                    td.p-0.gg.text-center 122/127
                  tr
                    td(colspan="2").gg.p-1 ENTREPIERNA cm
                    td.p-0.gg.text-center 80/81
                    td.p-0.gg.text-center 81/84
                    td.p-0.gg.text-center 82/84
                    td.p-0.gg.text-center 84/87
                    td.p-0.gg.text-center 86/87
                    td.p-0.gg.text-center 86/87

      .py-4.py-md-5(titulo="Cómo se utilizan los centímetros" :icono="require('@/assets/curso/tema2-tabs3.svg')")
        .row
          .col-lg-5.col-md-12.col-12
            p(data-aos="zoom-in-up") Para entender las conversiones de metro a decímetros, de decímetro a centímetros y de centímetros a milímetros, se debe tener en cuenta:
              br
              br
              | #[b Cómo se utilizan los centímetros:]
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
          
          .col-lg-7.col-md-12.col-12
            .row.justify-content-center
              .col-lg-12.col-md-12.col-12
                .titulo-sexto.color-acento-contenido
                  h5 Figura 12.
                  | Utilización de centímetros
                img(src='@/assets/curso/tema2-figure12.svg', alt='La imagen expone una representación gráfica de una regla, marcada en centímetros y milímetros, con la longitud total de 10 centímetros, que también se indica como 1 decímetro. Hay una línea que marca 1 centímetro y otra más pequeña que indica 1 milímetro. Debajo de la regla hay una serie de equivalencias escritas que definen las relaciones entre diferentes unidades de medida de longitud: 1 metro es igual a 10 decímetros, 1 decímetro es igual a 10 centímetros, y 1 centímetro es igual a 10 milímetros.')

      .py-4.py-md-5(titulo="En resumen" :icono="require('@/assets/curso/tema2-tabs4.svg')")
        .row.justify-content-between
          .col-lg-5.col-md-12.col-12
            p.mb-5(data-aos="zoom-in-up") Las fracciones decimales siempre tienen un denominador basado en una potencia de 10; 5/10 es equivalente a ½ ya que ½ por 5/5 es 5/10, por lo tanto, el decimal 0,5 es equivalente a ½ o 2/4.
              p.mb-4
              strong En resumen:
              p.mb-4
              strong fracciones - ½ = decimales – 0,5
              p.mb-4
            .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              | Fracciones y decimales
            figure
              img.mb-2(src='@/assets/curso/tema2-fracciones.svg', alt='La imagen expone una representación gráfica de una regla, marcada en centímetros y milímetros, con la longitud total de 10 centímetros, así mismo en la parte inferior muestra fracciones divididas entres 2,5 centímetros y se etiquetan como ½, esto re reporte hasta 4 en donde equivale a 10 cm.')


          .col-lg-6.col-md-12.col-12
            .titulo-sexto.color-acento-contenido.mx-4
              h5 Figura 14.
              | Conversión de fracciones y decimales
            .row.justify-content-center
              .col-lg-12
                figure.mb-2
                  img(src='@/assets/curso/tema2-figure13.png', alt='La imagen expone la conversión que correlaciona fracciones de pulgada con sus equivalentes decimales y medidas en milímetros. La tabla está dividida en dos columnas, con la mitad izquierda presentando fracciones desde 1/32 hasta 1/2, y la mitad derecha desde 17/32 hasta 1 pulgada completa. Cada fila lista una fracción de pulgada, seguida por su conversión a número decimal y luego su equivalencia en milímetros. La tabla parece es una herramienta útil para persona que necesite convertir medidas de pulgadas a milímetros, por ello se adjunta en este material.')
                figcaption Fuente: https://es.scribd.com/document/402601611/Decimal-Metrico-Equivalente-en-Pulgadas
    
    p.mb-4(data-aos="zoom-in-up") Para las conversiones y equivalencias de fracciones, milésimas y milímetros es importante tener una tabla que permita hacer una lectura puntual y acertada del ejercicio como la que se presenta a continuación:
    

    .row.justify-content-center.align-items-center
      .col-lg-6.col-md-12.col-12.mb-2
        .cajanaranja.p-2
          .row.justify-content-center
            .col-lg-11.col-md-12.col-12.mb-2.my-2
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Tabla 1.
                | Tabla de equivalencias
              .row.justify-content-center(alt='La tabla de equivalencias expone cómo se  convierten fracciones de pulgada a milésimas de pulgada y también expone las equivalencias a milímetros, de cada fracción.')
                .col-lg-12.col-md-11.col-11.cajablanca.p-2
                  h4.mb-0.text-center Tabla de equivalencias
                  h4.mb-1.text-center (fracciones, milésimas y milímetros)
                  .row.justify-content-center.mb-0
                    .col-lg-6.col-md-12.col-12.mb-1
                      .tabla-d.tabla-pequet.color-acento-contenido
                        table
                          thead
                            tr
                              th.bgv.gg  
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Fracción
                                    p.mb-0.text-center.fw-bold (pul)
                          
                              th.bgv.gg  
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Milésimas 
                                    p.mb-0.text-center.fw-bold (pul)
                              th.bgv.gg  
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Milímetros 
                                    p.mb-0.text-center.fw-bold (pul)
                          tbody
                            tr
                              td.text-center 1/64
                              td.text-center 0.015625
                              td.text-center 0.40
                            tr
                              td.text-center 1/32
                              td.text-center 0.03125
                              td.text-center 0.79
                            tr
                              td.text-center 3/64
                              td.text-center 0.046875
                              td.text-center 1.19
                            tr
                              td.text-center 1/16
                              td.text-center 0.0625
                              td.text-center 1.59
                            tr
                              td.text-center 5/64
                              td.text-center 0.078125
                              td.text-center 1.98
                            tr
                              td.text-center 3/32
                              td.text-center 0.09375
                              td.text-center 2.38
                            tr
                              td.text-center 7/64
                              td.text-center 0.109375
                              td.text-center 2.78
                            tr
                              td.text-center 1/8
                              td.text-center 0.125
                              td.text-center 3.18
                            tr
                              td.text-center 9/64
                              td.text-center 0.140625
                              td.text-center 3.57
                            tr
                              td.text-center 5/32
                              td.text-center 0.15625
                              td.text-center 3.97
                            tr
                              td.text-center 11/64
                              td.text-center 0.171875
                              td.text-center 4.37
                            tr
                              td.text-center 3/16
                              td.text-center 0.1875
                              td.text-center 4.76
                            tr
                              td.text-center 13/64
                              td.text-center 0.203125
                              td.text-center 5.16
                            tr
                              td.text-center 7/32
                              td.text-center 0.21875
                              td.text-center 5.56
                            tr
                              td.text-center 15/64
                              td.text-center 0.234375
                              td.text-center 5.95
                            tr
                              td.text-center 1/4
                              td.text-center 0.25
                              td.text-center 6.35
                            tr
                              td.text-center 17/64
                              td.text-center 0.265625
                              td.text-center 6.75
                            tr
                              td.text-center 9/32
                              td.text-center 0.28125
                              td.text-center 7.14
                            tr
                              td.text-center 19/64
                              td.text-center 0.296875
                              td.text-center 7.54
                            tr
                              td.text-center 5/16
                              td.text-center 0.3125
                              td.text-center 7.94
                            tr
                              td.text-center 21/64
                              td.text-center 0.328125
                              td.text-center 8.33
                            tr
                              td.text-center 11/32
                              td.text-center 0.34375
                              td.text-center 8.73
                            tr
                              td.text-center 23/64
                              td.text-center 0.359375
                              td.text-center 9.13
                            tr
                              td.text-center 3/8
                              td.text-center 0.375
                              td.text-center 9.53
                            tr
                              td.text-center 25/64
                              td.text-center 0.390625
                              td.text-center 9.92
                            tr
                              td.text-center 13/32
                              td.text-center 0.40625
                              td.text-center 10.32
                            tr
                              td.text-center 27/64
                              td.text-center 0.421875
                              td.text-center 10.72
                            tr
                              td.text-center 7/16
                              td.text-center 0.4375
                              td.text-center 11.11
                            tr
                              td.text-center 29/64
                              td.text-center 0.453125
                              td.text-center 11.51
                            tr
                              td.text-center 15/32
                              td.text-center 0.46875
                              td.text-center 11.91
                            tr
                              td.text-center 31/64
                              td.text-center 0.484375
                              td.text-center 12.30
                            tr
                              td.text-center 1/2
                              td.text-center 0.5
                              td.text-center 12.70

                    .col-lg-6.col-md-12.col-12
                      .tabla-d.tabla-pequet.color-acento-contenido
                        table(alt='')
                          thead
                            tr
                              th.bgv.gg  
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Fracción
                                    p.mb-0.text-center.fw-bold (pul)
                          
                              th.bgv.gg  
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Milésimas 
                                    p.mb-0.text-center.fw-bold (pul)
                              th.bgv.gg 
                                .row.justify-content-center.p-1
                                  .col-lg-12.mb-0
                                    p.mb-0.text-center.fw-bold Milímetros 
                                    p.mb-0.text-center.fw-bold (pul)
                          tbody
                            tr
                              td.text-center 33/64
                              td.text-center 0.515625
                              td.text-center 13.10
                            tr
                              td.text-center 17/32
                              td.text-center 0.53125
                              td.text-center 13.49
                            tr
                              td.text-center 35/64
                              td.text-center 0.546875
                              td.text-center 13.89
                            tr
                              td.text-center 9/16
                              td.text-center 0.5625
                              td.text-center 14.29
                            tr
                              td.text-center 37/64
                              td.text-center 0.578125
                              td.text-center 14.68
                            tr
                              td.text-center 19/32
                              td.text-center 0.59375
                              td.text-center 15.08
                            tr
                              td.text-center 39/64
                              td.text-center 0.609375
                              td.text-center 15.48
                            tr
                              td.text-center 5/8
                              td.text-center 0.625
                              td.text-center 15.88
                            tr
                              td.text-center 41/64
                              td.text-center 0.640625
                              td.text-center 16.27
                            tr
                              td.text-center 21/32
                              td.text-center 0.65625
                              td.text-center 16.67
                            tr
                              td.text-center 43/64
                              td.text-center 0.671875
                              td.text-center 17.07
                            tr
                              td.text-center 11/16
                              td.text-center 0.6875
                              td.text-center 17.46
                            tr
                              td.text-center 45/64
                              td.text-center 0.703125
                              td.text-center 17.86
                            tr
                              td.text-center 23/32
                              td.text-center 0.71875
                              td.text-center 18.26
                            tr
                              td.text-center 47/64
                              td.text-center 0.734375
                              td.text-center 18.65
                            tr
                              td.text-center 3/4
                              td.text-center 0.75
                              td.text-center 19.05
                            tr
                              td.text-center 49/64
                              td.text-center 0.765625
                              td.text-center 19.45
                            tr
                              td.text-center 25/32
                              td.text-center 0.78125
                              td.text-center 19.84
                            tr
                              td.text-center 51/64
                              td.text-center 0.796875
                              td.text-center 20.24
                            tr
                              td.text-center 13/16
                              td.text-center 0.8125
                              td.text-center 20.64
                            tr
                              td.text-center 53/64
                              td.text-center 0.828125
                              td.text-center 21.03
                            tr
                              td.text-center 27/32
                              td.text-center 0.84375
                              td.text-center 21.43
                            tr
                              td.text-center 55/64
                              td.text-center 0.859375
                              td.text-center 21.83
                            tr
                              td.text-center 7/8
                              td.text-center 0.875
                              td.text-center 22.23
                            tr
                              td.text-center 57/64
                              td.text-center 0.890625
                              td.text-center 22.62
                            tr
                              td.text-center 29/32
                              td.text-center 0.90625
                              td.text-center 23.02
                            tr
                              td.text-center 59/64
                              td.text-center 0.921875
                              td.text-center 23.43
                            tr
                              td.text-center 15/16
                              td.text-center 0.9375
                              td.text-center 23.81
                            tr
                              td.text-center 61/64
                              td.text-center 0.953125
                              td.text-center 24.21
                            tr
                              td.text-center 31/32
                              td.text-center 0.96875
                              td.text-center 24.61
                            tr
                              td.text-center 63/64
                              td.text-center 0.984375
                              td.text-center 25.00
                            tr
                              td.text-center 1
                              td.text-center 1
                              td.text-center 25.40

              
      .col-lg-6.col-md-12.col-12.mb-0
        .cajaer.p-5.mb-5
          p.mb-5(data-aos="zoom-in-up") A continuación, se presentan algunos ejemplos, a partir de la conversión anterior:
          ul.lista-ul--color.mb-4
            li
              i.fas.fa-circle.op.mb-5
              | 1/2 pulgada = 1,27 centímetros = 12,700 milímetros
            li
              i.fas.fa-circle.op.mb-3
              | ¼ de Fracción = 0,25 decimales = 0,33 milímetros
              
        .row.justify-content-center
          .col-lg-12.col-md-9.col-10.mb-0
            img(src='@/assets/curso/maqu.svg', alt='Personas manipulando confecciones')

            
    
    Separador
    #t_2_2.titulo-segundo
      h2 2.2  Las medidas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12.col-12.mb-3

        p.mb-5(data-aos="zoom-in-up") Estas unidades numéricas indican el tamaño de figuras, personas y objetos. Comúnmente, se emplea un sistema de medición lineal, como la cinta métrica, para determinar las dimensiones de las diversas partes del cuerpo. En Colombia, las unidades de medida más utilizadas son los centímetros y las pulgadas.
        p.mb-5(data-aos="zoom-in-up") A continuación, se relacionan algunas consideraciones sobre las medidas:

        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span.negro #[b a]
            p
              strong Las medidas sobre el cuerpo
              | : por lo general se toman sobre los puntos de anclaje del cuerpo teniendo en cuenta los parámetros antropométricos y anatómicos, pasando por los volúmenes (contornos) protuberantes. Se clasifican en tres grupos:

      .col-lg-6.col-md-10.col-10
        img(src='@/assets/curso/tema2-titulo2.png', alt='Mujeres tomando medidas')

    
    .row.justify-content-center
      .col-lg-8.col-md-10.col-10.mb-5
        .titulo-sexto.color-acento-contenido.my-3
          h5 Figura 15.
          | Clasificación de medidas
        img.d-none.d-lg-block.mb-3(src='@/assets/curso/tema2-figure16.svg', alt='La imagen detalla dibujos esquemáticos de figuras humanas con líneas y números que indican diferentes medidas del cuerpo, como el contorno de pecho, cintura, cadera, el largo de piernas y brazos, entre otros, para propósitos de confección o diseño de prendas de vestir.')
        figcaption.d-none.d-lg-block Fuente: https://www.nastasianash.com/5-claves-para-tomar-medidas-corporales/
        img.imagen-mobile.mb-3(src='@/assets/curso/tema2-figure16.11.svg', alt='La imagen detalla dibujos esquemáticos de figuras humanas con líneas y números que indican diferentes medidas del cuerpo, como el contorno de pecho, cintura, cadera, el largo de piernas y brazos, entre otros, para propósitos de confección o diseño de prendas de vestir.')
        figcaption.imagen-mobile Fuente: https://www.nastasianash.com/5-claves-para-tomar-medidas-corporales/
    p.mb-5(data-aos="zoom-in-up") Teniendo en cuenta la clasificación de las medidas, es importante conocer los tres grupos que se presentan en ellas:
    
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gri").mb-5
      .row(titulo="Contornos")
        .col-md-6.mb-4.mb-md-0
          p Se toman alrededor de la parte a medir, cerrando el metro.
        .col-md-5
          .titulo-sexto.color-acento-contenido.my-3
            h5 Figura 16.
            | Contornos
          figure
            img(src='@/assets/curso/tema2-contorno.svg', alt='La imagen expone una figura humana con etiquetas que indican cómo tomar medidas de diferentes contornos del cuerpo: cuello, pecho/busto, cintura, codo, brazo, puño, cadera, rodilla y bota. Las instrucciones señalan que las medidas deben tomarse alrededor de la parte correspondiente, cerrando el metro.')
      
      .row(titulo="Largos")
        .col-md-6.mb-4.mb-md-0
          p Se toman verticalmente y corresponden a largos y talles.
        .col-md-5
          .titulo-sexto.color-acento-contenido.my-3
            h5 Figura 17.
            | Largos
          figure
            img(src='@/assets/curso/tema2-largos.svg', alt='La imagen presenta un esquema anatómico con diferentes referencias de medidas corporales marcadas a lo largo del cuerpo. Estas referencias incluyen medidas como talle frente, centro frente, altura busto, costado, altura tiro, talle atrás, centro atrás, hombro, altura de cadera, largo de manga, largo de falda y largo de pantalón. Cada una de estas medidas está indicada con líneas y etiquetas específicas, lo que sugiere su uso para la toma de medidas en confección o sastrería, abarcando tanto la parte superior como inferior del cuerpo.')

      .row(titulo="Anchos")
        .col-md-6.mb-4.mb-md-0
          p Se toman horizontalmente y corresponden a los anchos.
        .col-md-5
          .titulo-sexto.color-acento-contenido.my-3
            h5 Figura 18.
            | Anchos
          figure
            img(src='@/assets/curso/tema2-anchos.svg', alt='La imagen representa dos esquemas de la parte superior del torso de una figura humana, donde se indican tres medidas clave: la separación de busto, el ancho de pecho y el ancho de espalda. El esquema superior destaca la separación de busto, marcada entre los puntos más prominentes del busto, y el ancho de pecho, medido de lado a lado en la zona superior del busto. El esquema inferior señala el ancho de espalda, que se mide horizontalmente en la parte superior de la espalda, por debajo de los hombros. Estas medidas son esenciales en el ámbito de la confección para asegurar un ajuste adecuado en prendas superiores.')
  

    ol.lista-ol--cuadro
      li.d-flex
        .lista-ol--cuadro__vineta
          span.negro b
        p(data-aos="zoom-in-up") #[b Clasificación y análisis de medidas anatómicas:] son fundamentales en el proceso de patronaje para la confección de prendas de vestir, por ello resulta esencial comprender y distinguir qué medidas específicas se deben tomar, dependiendo de si estas se realizan directamente sobre el cliente o si se basan en tablas de tallas estandarizadas. Esta diferenciación es clave para asegurar un ajuste adecuado y la precisión en el diseño final de la prenda.
    
    
    .tarjeta.tarjeta--azule.p-2.mb-5
      SlyderA(tipo="a")
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-11
                    h4.mb-4 Análisis sobre medida
                    p(data-aos="zoom-in-up") Son aquellas medidas que se toman directamente sobre el cuerpo de la persona. Es importante precisar que estas medidas se deben tomar atendiendo a los ejes de movimiento, es decir, que posibilite que la persona pueda tener movilidad al momento tener la prenda puesta. Sin duda, es importante la observación y análisis previo de la estructura corporal para interpretar aquellos ajustes que se deben dar en cada trazo que se realiza sobre el patrón. 
                  .col-lg-6.col-md-10.col-11.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-analisis.svg', alt='Texto que describa la imagen')

              
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas deducidas
                    p(data-aos="zoom-in-up") Son medidas que se sacan sobre otras medidas, en las cuales se aplican fórmulas ya estudiadas y comprobadas. Estas se basan, esencialmente, en una medida horizontal, la cual se toma al contorno del cuerpo más prominente y en una medida vertical que es tomada a lo largo del cuerpo de arriba hacia abajo. En este sentido, con estas medidas deducimos las otras, por eso es importante tomarlas de manera exacta y no deben mezclarse con otras al momento de construir el cuadro de tallas.
                  .col-lg-6.col-md-12.col-12.mb-4
                    figure
                      img.img-a.img-t.mb-1(src='@/assets/curso/tema2-medidas.svg', alt='Texto que describa la imagen')
                    figcaption Fuente: adaptación SENA
              
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12.mb-3
                    h4.mb-4 Medidas estandarizadas 
                    p.mb-4(data-aos="zoom-in-up") Son las medidas que se obtienen del resultado de estudios antropométricos, es decir, que se establecen en un rango de medidas que usualmente corresponden a las principales medidas corporales, es decir, las tallas.
                    p.mb-0(data-aos="zoom-in-up") Estas medidas son definidas y adoptadas por norma, por lo que esto ha permitido se generalicen las morfologías y medidas. Es importante precisar que, para acertar en la elección de una talla, debe compararse la coincidencia de la medida del contorno principal, con la medida correspondiente a la talla.
                  .col-lg-6.col-md-11.col-12.mb-4
                    figure
                      img.img-a.img-t(src='@/assets/curso/tema2-medidases.svg', alt='La imagen proporciona una guía para medir la cintura y las caderas con una cinta métrica, destacando la forma correcta de tomar las medidas. En la primera  (A), se indica cómo medir la cintura colocándose la cinta alrededor de la parte más estrecha del torso, mientras que en la segunda  (B), se expone la medición de las caderas colocando la cinta alrededor de la parte más ancha. Además, se incluye una tabla que relaciona la talla S con las medidas correspondientes: la cintura debe medir entre 64 y 68 cm, y las caderas entre 89 y 92 cm.')

        
        .row.justify-content-center.p-4
          .col-lg-12.col-md-12.col-12.mb-4
            .row.justify-content-center
              .col-lg-11.col-md-12.col-12
                .row.justify-content-center
                  .col-lg-5.col-md-12.col-12
                    h4.mb-4 Medidas anatómicas 
                    p(data-aos="zoom-in-up") Son las medidas que se toman justas sobre el cuerpo teniendo en cuenta los puntos antropométricos y ejes de movimiento. Este tipo de medidas no tienen desahogos ni flojos.
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
                    p(data-aos="zoom-in-up") Son el resultado de la toma de medidas directas o de estudios antropométricos, las cuales se toman exactas sobre la estructura, es decir, no tiene aumentos ni ajustes.<br><br>Es importante tener claro que de la correcta toma de las medidas depende el resultado del patrón, pues estas medidas son utilizadas para la construcción y elaboración de los básicos, superiores e inferiores.
                  .col-lg-6.col-md-10.col-12.mb-4
                    .row.justify-content-center.mb-0
                      .col-lg-12.col-md-12.col-12.mb-1
                        .tabla-d.tabla-pequet.color-acento-contenido
                          table
                            thead
                              tr
                                th.bgv.gg  
                                  .row.justify-content-center.p-1
                                    .col-lg-12.mb-0
                                      p.mb-0.text-center.fw-bold 10
                                th.bgv.gg  
                                  .row.justify-content-center.p-1
                                    .col-lg-12.mb-0
                                      p.mb-0.text-center.fw-bold 12
                                th.bgv.gg  
                                  .row.justify-content-center.p-1
                                    .col-lg-12.mb-0
                                      p.mb-0.text-center.fw-bold 14
                                th.bgv.gg  
                                  .row.justify-content-center.p-1
                                    .col-lg-12.mb-0
                                      p.mb-0.text-center.fw-bold 16
                                th.bgv.gg  
                                  .row.justify-content-center.p-1
                                    .col-lg-12.mb-0
                                      p.mb-0.text-center.fw-bold 18
                            tbody
                              tr
                                td.text-center 92
                                td.text-center 96
                                td.text-center 100
                                td.text-center 106
                                td.text-center 112
                              tr
                                td.text-center 68
                                td.text-center 72
                                td.text-center 76
                                td.text-center 82
                                td.text-center 88
                              tr
                                td.text-center 96
                                td.text-center 100
                                td.text-center 104
                                td.text-center 110
                                td.text-center 116
                              tr
                                td.text-center 35
                                td.text-center 36
                                td.text-center 37
                                td.text-center 38.5
                                td.text-center 40
                              tr
                                td.text-center 33
                                td.text-center 34
                                td.text-center 35
                                td.text-center 36.5
                                td.text-center 38
                              tr
                                td.text-center 34
                                td.text-center 35
                                td.text-center 36
                                td.text-center 36.5
                                td.text-center 37
                              tr
                                td.text-center 44.5
                                td.text-center 43
                                td.text-center 43.5
                                td.text-center 44.25
                                td.text-center 45
                              tr
                                td.text-center 37
                                td.text-center 37.25
                                td.text-center 37.5
                                td.text-center 37.875
                                td.text-center 38.25
                              tr
                                td.text-center 40.5
                                td.text-center 41
                                td.text-center 41.5
                                td.text-center 42.25
                                td.text-center 43
                              tr
                                td.text-center 19.25
                                td.text-center 19.5
                                td.text-center 19.75
                                td.text-center 20.125
                                td.text-center 20.5
                              tr
                                td.text-center 12
                                td.text-center 12.25
                                td.text-center 12.5
                                td.text-center 12.875
                                td.text-center 13.25
                              tr
                                td.text-center 36
                                td.text-center 37.5
                                td.text-center 39
                                td.text-center 41.25
                                td.text-center 43.5
                              tr
                                td.text-center 22
                                td.text-center 23
                                td.text-center 24
                                td.text-center 25.5
                                td.text-center 27
                              tr
                                td.text-center 14
                                td.text-center 14.5
                                td.text-center 15
                                td.text-center 15.75
                                td.text-center 16.5
                              tr
                                td.text-center 60
                                td.text-center 60.5
                                td.text-center 61
                                td.text-center 61.75
                                td.text-center 62.5
                              tr
                                td.text-center 46
                                td.text-center 46.25
                                td.text-center 46.5
                                td.text-center 46.875
                                td.text-center 47.25
                              tr
                                td.text-center 62
                                td.text-center 62.5
                                td.text-center 63
                                td.text-center 63.75
                                td.text-center 64.5
                              tr
                                td.text-center 60.5
                                td.text-center 61
                                td.text-center 61
                                td.text-center 61.75
                                td.text-center 62.5
                              tr
                                td.text-center 18
                                td.text-center 18.25
                                td.text-center 18.5
                                td.text-center 18.875
                                td.text-center 19.25
                              tr
                                td.text-center 105
                                td.text-center 106
                                td.text-center 107
                                td.text-center 108.5
                                td.text-center 110
                              tr
                                td.text-center 26
                                td.text-center 28
                                td.text-center 28
                                td.text-center 29.5
                                td.text-center 31
                              tr
                                td.text-center 20
                                td.text-center 20.5
                                td.text-center 21
                                td.text-center 21.75
                                td.text-center 22.5
                          
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-2.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/video.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1 Enlace #[em web].  Video – Clasificación de medidas
              p.mb-0(data-aos="zoom-in-up") Es importante conocer los aspectos para desarrollar patrones de prendas de vestir bajo la estructura del reconocimiento de diferentes tipos de formas corpóreas, partiendo desde los conceptos básicos de anatomía hasta el desarrollo de molde básico para la interpretación de la estructura corporal.
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://youtu.be/ppOfZh4ZzQg" target="_blank")
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
