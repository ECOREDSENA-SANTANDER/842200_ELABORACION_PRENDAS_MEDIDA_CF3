<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Análisis de medidas y cuadros de tallas

    SlyderD.mb-5.no-slyder-d-primary(:datos="datosSlyder")

    .row.justify-content-center.mb-5
      .col-9
        .BorTit.mb-4 Figura 17 Medidas figura humana
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
        h1 Canon
        p.mb-5 Modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
        .BorTit.mb-4 Figura 18 Canon (número de cabezas)
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure18.png', alt='Canon (número de cabezas)')
              figcaption Canon (número de cabezas)

      .tarjeta.color-primario.p-4(titulo="Proporción")
        h1 Proporción
        p.mb-5 Es la relación de correspondencia, equilibrio o simetría que existe entre los componentes de un todo. Podría definirse como una secuencia de Fibonacci que presenta una serie numérica: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc. En este sentido, es una serie infinita en la que la suma de dos números consecutivos siempre da como resultado el siguiente número tratado en las proporciones Da Vinci o del hombre de Vitruvio, esto es lo que permite analizar en un mapa de simetría del cuerpo y determinar el estándar de 8 cabezas como canon de belleza.
        .BorTit.mb-4 Figura 19 Proporción figura humana
        .row.justify-content-center
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure19.svg', alt='Proporción figura humana')
              figcaption Nota. Tomada de Valero (2013)

      .tarjeta.color-primario.p-4(titulo="Proporciones corporales")
        h1 Proporciones corporales
        p.mb-4 Es un modelo o prototipo que reúne las características que se consideran perfectas en su género, especialmente el referido a la figura humana que reúne las proporciones ideales.
        .BorTit.mb-4 Figura 20 Proporción de acuerdo con etapas de crecimiento
        .row.justify-content-center.mb-5
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure20.svg', alt='Proporción de acuerdo con etapas de crecimiento')
              figcaption Tomada de Cómo cubrir un cuerpo (2013)
        .BorTit.mb-4 Figura 21 Proporción con medidas de la figura
        .row.justify-content-center.mb-5
          .col-9
            figure.mb-5.px-4
              img(src='@/assets/curso/tema3-figure21.svg', alt='Proporción con medidas de la figura')
        .BorTit.mb-4 Figura 22 Modulares, figurín masculino y femenino
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

    //- .tabla-a debe ir acompañado de una de una de estas clases =>
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.justify-content-center.mb-5
      .col-7
        .BorTit.mb-4 Tabla 1 Fórmulas medidas deducidas
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
          .cajon.color-acento-contenido.p-4.mb-4.w-auto.d-inline-flex
            p.mb-0
              strong 7ª cervical o largo útil = largo total – 20 cm.
      .col-5
        .BorTit.mb-4 Figura 23 Cervical o largo útil
        img(src='@/assets/curso/tema3-figure23.svg', style='max-height: 220px')

    p.mb-5 A continuación, se pueden observar otras fórmulas de deducción

    .BorTit.mb-4 Tabla 2 Fórmulas para deducción de tallas

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
                  i.lista-ul__vineta
                  | Tórax máximo = BUSTO
                li.mb-0
                  i.lista-ul__vineta
                  | Tórax máximo = Talla + 36 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Pecho = tórax máximo – 2 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Bajo busto = busto – 6 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Sep. de busto = 2/5 busto
                li.mb-0
                  i.lista-ul__vineta
                  | Cintura = busto – 10 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Cadera = busto + 4 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Cuello =1/2 busto + 12 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Rodilla = 1/4 busto + 24 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Tobillo = 1/8 busto + 15.5 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Brazo = busto – 18 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Muñeca = 1/4 busto + 5 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Ancho Espalda = busto – 8 cm

            td.align-top
              ul.lista-ul--color
                li.mb-0
                  i.lista-ul__vineta
                  | Estatura 7ª C = busto + 96 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Estatura total = estatura 7ª C +20 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Altura de busto = 3/8 estatura 7ª C – 27 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Altura bajo busto = 3/8 estatura 7ª C – 18 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Largo brazo = 4/10 estatura 7ª C
                li.mb-0
                  i.lista-ul__vineta
                  | Cintura/suelo = 7/10 estatura 7ª C
                li.mb-0
                  i.lista-ul__vineta
                  | Altura de cadera = 2/3 de tiro
            td.align-top
              ul.lista-ul--color
                li.mb-0
                  i.lista-ul__vineta
                  | Talla= años
                li.mb-0
                  i.lista-ul__vineta
                  | Pecho = años + 24 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Cintura = 1/2 de años + 26 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Cadera = años + 28 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Cuello = 2/3 de pecho + 4 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Estatura 7ª C= años x 5 + 65 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Talle Espalda = 3/10 de estatura 7ª C
                li.mb-0
                  i.lista-ul__vineta
                  | Estatura total: estatura 7ª C + 15 cm a 18 cm. Corresponden al canon del niño o medida de cabeza
                li.mb-0
                  i.lista-ul__vineta
                  | Largo de brazo= 4/10 de Estatura 7ª C
                li.mb-0
                  i.lista-ul__vineta
                  | Codo = 1/2 de brazo. Esta medida sin tener en cuenta lo que corresponde a la muñeca (menos 5 cm para todas las tallas)
                li.mb-0
                  i.lista-ul__vineta
                  | Cintura al suelo = 7/10 de estatura 7ª C
                li.mb-0
                  i.lista-ul__vineta
                  | Largo de falda larga = 2/3 de la medida cintura al suelo – 3 cm
                li.mb-0
                  i.lista-ul__vineta
                  | Largo de falda corta = 1/2 de la medida cintura al suelo -3 cm

    p.mb-5 Ahora, se podrá observar cómo obtener medidas deducidas a partir del desarrollo de las siguientes fórmulas:

    .BorTit.mb-4 Tabla 3 Medidas reducidas

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Horizontales
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

    .BorTit.mb-4 Tabla 4 Grupos de tallas

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

    .row.mb-5
      .col-7
        p.mb-4 A partir de la información anterior, es importante relacionar el siguiente resultado:
        ul.lista-ul--color.mb-4
          li.mb-0
            i.lista-ul__vineta
            | Cadera = tórax máximo + 4 cm
          li.mb-0
            i.lista-ul__vineta
            | Pecho = tórax máximo – 2 cm
          li.mb-0
            i.lista-ul__vineta
            | Cintura = cadera – 14 cm
          li.mb-0
            i.lista-ul__vineta
            | Estatura total = estatura 7ª C + 20 cm
          li.mb-0
            i.lista-ul__vineta
            | Estatura 7ª C. = estatura total – 20 cm
          li.mb-0
            i.lista-ul__vineta
            | Talle = 3/10 de la estatura 7ª C
          li.mb-0
            i.lista-ul__vineta
            | Largo de brazo = 4/10 de la estatura 7ª c
          li.mb-0
            i.lista-ul__vineta
            | Cuello= 2/3 de pecho + 4 cm
          li.mb-0
            i.lista-ul__vineta
            | Cintura/suelo = 7 /10 de la estatura 7ª c
          li.mb-0
            i.lista-ul__vineta
            | Base = pecho + desahogo + costura (desahogo 4 cm y la costura 2 cm)
        p A renglón seguido, se puede observar cómo se realiza una construcción de talla 6 con aplicación de las fórmulas mencionadas.

      .col
        img(src='@/assets/curso/tema3-imagen2.png')

    .BorTit.mb-4 Talla 5 Aplicación de fórmulas

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

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Errores más comunes")
        p.mb-4 Uno de los más comunes en modistería es la combinación de medidas. Cuando se trabaja con medidas deducidas, se debe realizar con las medidas obtenidas de cada fórmula de manera progresiva; para eso hay que tener en cuenta que el resultado cambia si, en vez de aplicar únicamente las medidas obtenidas por deducción, se debe adicionar una medida anatómica.
          br
          | De acuerdo con lo anterior, es importante establecer los cuadros de tallas:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                | <strong>Anatómicos y deducidos</strong>: según la obtención de medidas.
              li.mb-0
                i.fas.fa-check
                | <strong>Proporcionales</strong>: existe una secuencia numérica en el crecimiento de la talla.
              li.mb-0
                i.fas.fa-check
                | <strong>No proporcionales</strong>: no hay una secuencia numérica en el crecimiento de la talla.
              li.mb-0
                i.fas.fa-check
                | <strong>Completos</strong>: incluyen todas las medidas requeridas para la construcción de patrones de prendas.
              li.mb-0
                i.fas.fa-check
                | <strong>Según prenda</strong>: que incluyen en algunos casos desahogos y costuras.


      .row(titulo="Normatividad")
        p.mb-4 Por lo general no son de uso obligatorio, sino de uso voluntario; y dentro de la normatividad nacional se puede encontrar:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>NTC ISO 8559</strong>. Fabricación de vestuario y estudios antropométricos. Dimensiones corporales – Icontec.
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>Norma UNE-EN 13402-3</strong>. Armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.

      .row(titulo="Análisis de cuadros de tallas")
        p.mb-4 Para el análisis de cuadros de tallas se deben determinar los límites, la frecuencia y el incremento, tal como se relaciona a continuación:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                | <strong>Límites</strong>: fabricación de vestuario y estudios antropométricos. Dimensiones corporales – Icontec.
              li.mb-0
                i.fas.fa-check
                | <strong>Frecuencia</strong>: armoniza y simplifica el etiquetado de tallas de prendas de vestir para el beneficio del consumidor y de la industria en general.
              li.mb-0
                i.fas.fa-check
                | <strong>Incremento</strong>: magnitud de crecimiento de la medida talla por talla.
        p El análisis de los anteriores aspectos dará como resultado: valores, proporciones, rupturas de talla (para una, dos o hasta tres tallas base).

    p.mb-5 Seguidamente se presentan los cuadros de tallas, infantiles, masculino y femenino.
    SlyderBModified.mb-5.slyder-b-primary(:datos="datosSlyder2")

    #t_3_3.titulo-segundo.mb-4
      h2 3.3  Proporciones en la deducción de medidas

    p.mb-4 El aumento secuencial estandarizado para el incremento o disminución de tallas se encuentra identificando la diferencia en unidades de medida de talla a talla en cada línea de medida del cuerpo. En este sentido, la fórmula estandarizada para hallar la proporción es: diferencia del contorno mayor dividido en 4, de allí resultan las fracciones de la proporción, como se relaciona en el siguiente ejemplo:

    .row.justify-content-center.mb-5
      .col-11
        ul.lista-ul--color
          li
            i.fas.fa-check
            | 1 proporción será 1 cm
          li
            i.fas.fa-check
            | ½ proporción será 0,5 cm
          li
            i.fas.fa-check
            | ¼ proporción será 0,25 cm y 1.5 proporción será 1,5 cm

    .row
      .col-6
        .BorTit.mb-4 Figura 24 Proporciones en la deducción
    .row.mb-4
      .col
        img(src='@/assets/curso/tema3-figure24.png')
      .col
        p Para realizar la deducción de medidas es importante realizar su comparación y para ello se debe tener en cuenta:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Incremento entre talla y talla: tomar medida por medida y revisar el incremento que hay entre talla y talla.
              li
                i.fas.fa-check
                | Ruptura de talla: identificar ruptura del cuadro de tallas, por medida y talla.
        .BorTit.mb-4 Figura 25 Comparación de medidas
        img(src='@/assets/curso/tema3-figure25.png')

    p.mb-5 En la figura anterior, la ruptura está entre la talla 14 y 16, porque se incrementa 6 cm, rompiendo con los 4 cm de las demás medidas.

    #t_3_4.titulo-segundo.mb-4
      h2 3.4  Identificar el DROP

    p DROP es la palabra técnica que indica la diferencia en centímetros entre dos medidas del cuerpo que permite determinar su morfología, tal como se puede observar aquí:

    .row.mb-4
      .col
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 <strong>DROP femenino</strong>: diferencia entre cadera y contorno de busto para la mujer. Es decir, <strong>Contorno de Cadera - Contorno de Busto = DROP</strong>
        p.mb-4 El DROP tiene características importantes que se deben considerar al momento de realizar su identificación:
        .row.justify-content-center.mb-4
          .col-11
            ul.lista-ul--color.mb-0
              li.mb-0
                i.fas.fa-check
                | Con el DROP se establecen las diferentes contexturas de una misma talla.
              li.mb-0
                i.fas.fa-check
                | En las mujeres, el DROP es la diferencia entre las medidas de Contorno de Cadera y Contorno de Busto.
              li.mb-0
                i.fas.fa-check
                | En las tallas femeninas predomina un DROP positivo.
              li.mb-0
                i.fas.fa-check
                | Generalmente una talla se considera normal cuando el DROP es positivo entre +2 cm y +4 cm.
              li.mb-0
                i.fas.fa-check
                | El DROP estándar usado en Colombia es + 4 cm.
              li.mb-0
                i.fas.fa-check
                | En las tallas extremas y altas el DROP se vuelve negativo.
        p.mb-4 A continuación, se relacionan algunos ejemplos:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>DROP + 2</strong>, indica la medida de cadera 2 cm mayor que el contorno de busto.
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>El DROP 0</strong>, indica que la medida de cadera es igual a la medida de contorno de busto.
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>El DROP - 4</strong>, indica que la medida de cadera tiene 4 cm menos que el contorno de busto.

      .col
        .px-5.py-3.mb-4(style='background-color: #F7F1D7')
          .BorTit.mb-4 Figura 26 DROP femenino
          img(src='@/assets/curso/tema3-figure26.svg', style='max-height: 400px')

    .row.mb-5
      .col
        .BorTit.mb-4 Figura 27 DROP masculino
        img(src='@/assets/curso/tema3-figure27.svg')
      .col
        .row.justify-content-center.mb-4
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>DROP masculino</strong>: para este caso la diferencia está entre la cintura y el pecho. Generalmente en tallas masculinas predomina el DROP negativo (más pecho que cintura), aunque al realizar una tabla de tallas (a mayor talla menos DROP) en tallas extremas puede a ser positivo, es decir, un cuerpo con más cintura que pecho.
        p.mb-4 A continuación, se relacionan algunos ejemplos:
        .row.justify-content-center
          .col-11
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>Un DROP - 4</strong> indica, una cintura con 4 pulgadas menos que la medida de pecho.
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>Un DROP 0</strong>, indica una cintura igual al pecho.
              li.mb-0
                i.fas.fa-check
                p.mb-0 <strong>Un DROP + 2</strong>, indica una cintura con 2 pulgadas que el pecho.

    p.mb-5 Acorde con el género, cada tipo de silueta tiene un DROP característico determinado, a su vez, por la tipología del cuerpo dentro de una clasificación general, puesto que hay particularidades y cada persona necesita un análisis en cuanto a su silueta para poder abordar el vestuario, patronaje y confección.

    .BorTit.mb-4 Figura 28 Tipos de siluetas generales masculinas y femeninas

    img(src='@/assets/curso/tema3-figure28.svg')


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
    datosSlyder2: [
      {
        imagentitulo: require('@/assets/curso/tema3-slyder1-left.svg'),
        imagen: require('@/assets/curso/tema3-slyder1-right.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagentitulo: require('@/assets/curso/tema3-slyder2-left.svg'),
        imagen: require('@/assets/curso/tema3-slyder2-right.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        imagentitulo: require('@/assets/curso/tema3-slyder3-left.svg'),
        imagen: require('@/assets/curso/tema3-slyder3-right.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
