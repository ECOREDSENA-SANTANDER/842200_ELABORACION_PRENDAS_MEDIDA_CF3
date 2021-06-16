<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Metodología - Presentación del Manual de patronaje SENA

    SlyderD.mb-3.no-slyder-d-primary(:datos="datosSlyder")

    .row.justify-content-end.mb-5
      .col-7
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo. PDF – Manual de patronaje básicos e interpretación de diseños
              br
              | Ahora, se debe explorar el Manual de patronaje del SENA el cual se constituye en instrumento de consulta permanente.

    #t_5_1.titulo-segundo
      h2 5.1  Metodología – Convenciones
    .row.mb-5
      .col
        p.mb-4 Dentro de este proceso es necesario conocer y manejar las diferentes simbologías que facilitan los procesos técnicos de patronaje y corte. Algunos de estos símbolos permiten entender, fácilmente, las gráficas de construcción, eliminando el uso de textos y referencias alfanuméricas; otros indican de qué manera deben estar aplomados los patrones despiezados para su corte.
          br
          br
          | Es importante anotar que, en el momento de despiezar el patrón para su identificación, cada pieza debe estar marcada así:
        ul.lista-ul--color
          li.mb-0
            i.fas.fa-check
            | Nombre de la pieza
          li.mb-0
            i.fas.fa-check
            | Referencia
          li.mb-0
            i.fas.fa-check
            | Talla
          li.mb-0
            i.fas.fa-check
            | Nombre del patronista
          li.mb-0
            i.fas.fa-check
            | Simbología para corte
          li.mb-0
            i.fas.fa-check
            | Número de veces a cortar
          li.mb-0
            i.fas.fa-check
            | Piquetes de confección
          li.mb-0
            i.fas.fa-check
            | Líneas de aplome
        p.mb-0 También es posible establecer otras especificaciones, como anexar datos de estampación, cambios de color o material, acabados especiales, ubicación de bolsillos, etc.
      .col
        img(src='@/assets/curso/tema5-titulo2.svg')

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario-fuerte.p-5
        .row.justify-content-center.mb-5
          .col-6
            figure
              img(src='@/assets/curso/tema5-form1.svg', alt='Formas geométricas')

        p.fw-bold.text-center Formas geométricas
        p Se debe tener en cuenta cuáles son las claves geométricas, horizontal, vertical, perpendicular (escuadrar), rectángulo, cuadrado, paralelo, ángulo recto, diagonal, diagonal o sesgo, vértice, radio, rotar, semicurva, curva, convexo, cóncavo. Siempre se inicia la construcción desde un rectángulo y se tiene en cuenta el contorno principal y el talle o largo del básico.

      .col-md.tarjeta.color-primario-suave.p-5
        .row.justify-content-center.mb-5
          .col-6
            figure
              img(src='@/assets/curso/tema5-form2.svg', alt='Escalas')

        p.fw-bold.text-center Escalas
        p Estas permiten representar piezas de tamaño físico igual, mayor o menor que la realidad. Las escalas más utilizadas, son:
          br
          | 1:1 – Escala normal 10 x 10 cm.
          br
          | 1:2 – Mitad de escala 5 cm – 5 cm.
          br
          | 1:4 – Cuarto de escala 2,5 cm, - 2,5 cm.

      .col-md.tarjeta.color-primario-fuerte.p-5
        .row.justify-content-center.mb-5
          .col-6
            figure
              img(src='@/assets/curso/tema5-form3.svg', alt='Trazo de patrones a escala')

        p.fw-bold.text-center Trazo de patrones a escala
        p Permiten realizar la construcción de básicos corporales y trazo de patrones en tamaños más pequeños.

    p Además, se deben tener en cuenta los materiales que se sugieren para la implementación del Manual:

    .row.mb-5
      .col-7
        ul.lista-ul--color
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Regla mágica
              | : Regla de 60 cm x 5 cm con cuadrícula de 5 mm a lo largo y ancho, y marcación de ángulo de 45°.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Curvígrafo
              | :  Regla utilizada como complemento para el proceso del desarrollo en varios módulos de la habilidad.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Cinta métrica
              | : Sistema de medida utilizada en centímetros.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Esfero tinta negra
              | : Marcación en tela y papel.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Lápiz – portaminas
              | : Se sugiere trabajar con Hb, 2H, 0,5 mm, 0,7 mm, 0,2 mm.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Cinta invisible
              | : Sugerido para trabajar en papel.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Tijeras para cortar papel
              | : Se sugiere utilizar tijeras de Titanium.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Manifold o trazo
              | : Se sugiere que el papel sea blanco para mayor facilidad en la interpretación.
          li.mb-0
            i.fas.fa-check
            p.mb-0
              strong Juego de reglas convencional de patronaje
              | : Como apoyo, se sugiere trabajar con el juego de reglas convencional, sisómetro, curva de cadera, curva de tiro, escuadra.
      .col-5
        figure
          img(src='@/assets/curso/tema5-figure1.svg', alt='Trazo de patrones a escala')

    .row.justify-content-end.mb-5
      .col-7
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/5_Anexo_5_Presentación_del_Manual_del_Sena.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo.
              |  PDF – Manual de patronaje. “Básico e interpretación de diseños”.
              br
              | Conoce y maneja las diferentes simbologías que facilitan los procesos técnicos de patronaje y corte.

    #t_5_2.titulo-segundo
      h2 5.2  Elaboración de básicos masculinos

    p.mb-5 La elaboración de básicos masculinos se centra en un análisis estructural, lo que conlleva a establecer el prepatronaje de los básicos, por lo anterior, es necesario abordar ciertos puntos para tener en cuenta, a saber:

    LineaTiempoD.color-primario.mb-5
      p(numero="1" titulo="Sistema de medida") Los cuadros de tallas, las medidas, las tallas en masculino se trabaja en pulgadas.
        br
        strong 1 pulgada = 1 IN = 1".

      div(numero="2" titulo="Las pulgadas")
        p El vestuario es tan antiguo como la humanidad así como su confección, y en la década de 1970 las casas de alta costura francesa y europeas, que confeccionaban únicamente ‘ropa a la medida’, decidieron incursionar en el mercado de la confección industrial lanzando sus famosas colecciones prêt à porter (listo para llevar), dando apertura a la creación de tallas comerciales y su estandarización. A continuación, se podrá observar su adaptación:
        ul.lista-ul
          li
            i.lista-ul__vineta
            | Sistema de medidas ‘imperial’: la mayoría de los países han adoptado el sistema de medidas ‘universal’, es decir: 1” pulgada mide 2,54 cm.

      div(numero="3" titulo="Incremento antropométrico")
        p El crecimiento entre tallas, según la estandarización en pulgadas, corresponde:
        ul.lista-ul
          li
            i.lista-ul__vineta
            p.mb-0 Por <strong>contorno</strong> aumenta de 4" en 4" (pulgadas).
          li
            i.lista-ul__vineta
            p.mb-0  Por <strong>ancho</strong> de 1" en 1" (pulgadas).
          li
            i.lista-ul__vineta
            p.mb-0  Por <strong>largo</strong> de 1/2" en 1/2" (pulgadas).
        p
          strong En este sentido se debe aclarar que:
        ul.lista-ul
          li
            i.lista-ul__vineta
            | 4 pulgadas equivalen a 10,2 centímetros.
          li
            i.lista-ul__vineta
            | 1 pulgada equivale a 2,54 centímetros.
          li
            i.lista-ul__vineta
            | 1/2 pulgada equivale a 1,27 centímetros.

      div(numero="5" titulo="Tallas masculino (medidas en pulgada)")
        ul.lista-ul
          li
            i.lista-ul__vineta
            p.mb-0  Por <strong>contorno</strong> aumenta de 4" en 4" (pulgadas).
          li
            i.lista-ul__vineta
            p.mb-0  Por <strong>ancho</strong> de 1" en 1" (pulgadas).
          li
            i.lista-ul__vineta
            p.mb-0  Por <strong>largo</strong> de 1/2" en 1/2" (pulgadas).
          li
            i.lista-ul__vineta
            | Talla = contorno en pulgadas.

    .row.mb-5
      .col-7
        p.mb-5
          strong Manejo de tallas
          | : cada país o región trataba de <strong>copiar</strong> las medidas de la <strong>ropa</strong> producida por las grandes fábricas, cuya elaboración se hacía con base en <strong>‘pulgadas’</strong> y al copiarlas se <strong>adaptaban</strong> las medidas en <strong>‘centímetros’</strong>. Con el tiempo en varias regiones se <strong>inventaban</strong> los nombres de las tallas según su propia definición o experiencia, generando así 'nuevos' cuadros de tallas. Fue así como, la expansión en la estandarización de tallas generó caos por su falta de información técnica, invadiendo países en vía de desarrollo.
        .cajon.color-acento-contenido.p-4.mb-4.w-auto
          p Hoy en día son pocos los países que usan el sistema de medidas ‘imperial’, pues la mayoría han adoptado el ‘universal’.

      .col-5
        img(src="@/assets/curso/tema5-figure2.svg")

    .row.mb-5
      .col-8
        p
          strong El crecimiento entre la talla S y talla M
          | : en el <strong>sistema imperial</strong> equivale a 4” pulgadas por contorno = a 10,2 cm, para el caso del <strong>sistema universal</strong> es de 8 cm, al hacer el equivalente no hay proporción. En este sentido, los <strong>cuadros de tallas en pulgadas</strong> serán igual al <strong>trazo en centímetros</strong>.
          br
          br
          | A continuación, se relaciona la conversión del cuadro de tallas masculino de pulgadas a centímetros:

      .col-4
        .cajon.color-acento-contenido.p-4.mb-4.w-auto
          p.text-center 1" = 2,54 cm
            br
            | Pulgadas x 2,54= cm
            br
            | 33" = 83,8 cm
    .row.justify-content-center
      .col-10
        .row.mb-4.py-4.row-list
          .col-3
            img(src="@/assets/curso/tema5-figure10.svg")
          .col-8
            .h3 Identificación de talla
            p Para la mayoría de los casos, al hacer lectura de un cuadro de tallas se toma el encabezado como la identificación de la talla, tanto superior como inferior. Sin embargo, en este cuadro de tallas, el nombre de la medida viene acompañado con una especificación adicional.
              br
              br
              | Para tomar el encabezado como talla superior e inferior, se estaría trabajando una talla superior diferente a la inferior. Es decir, la talla 34 quedaría:
            .text-center
              .cajon.color-acento-contenido.p-4.d-inline-flex
                p
                  strong Talla superior: 34.
                  br
                  strong Talla Inferior: 28.
        .row.mb-4.py-4.row-list
          .col-3
            img(src="@/assets/curso/tema5-figure11.svg")
          .col-8
            .h3 Horma masculina
            p En términos de patronaje, en el ajuste y horma masculino se trabajan diferentes tipos de siluetas, en este caso el manual trabaja con: clásica y Slim fit. Esto hace referencia al tipo de horma o ajuste que se busca. En el cuadro de tallas, se podría tener un hombre talla 40 superior, con diferentes siluetas.
        .row.mb-5.py-4.row-list
          .col-3
            img(src="@/assets/curso/tema5-figure12.svg")
          .col-8
            .h3 Implementación del manual masculino
            p Para trabajar los básicos de masculino se deben identificar las páginas correspondientes que, para este caso, son desde la página 65 hasta la 78. Como se referenció en temas anteriores, se debe iniciar revisando y analizando el cuadro de tallas de la página 64, para identificar la talla, las medidas, incrementos y diferencias necesarias. Es importante señalar que este Manual está diseñado para iniciar siempre desde los básicos que, en la metodología SENA, funcionan de la siguiente manera:

    .titulo-quinto.color-acento-contenido
      h4 Tabla 5. Desarrollo de básicos masculinos

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        .h3.mb-0.text-white Desarrollo de básicos masculinos
      table
        tr
          th Tipo de plano
          td Identificar qué tipo de plano se va a trabajar: unido, separado o montado.
        tr
          th Rectángulo
          td Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida del contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
        tr
          th Medida más protuberante a trabajar
          td
            p.mb-0 Por lo general, el Manual trabaja con fórmulas o convenciones, en la mayoría de los casos la medida más protuberante es sustituida por una letra, por ejemplo, en masculino, contorno de pecho (medida más protuberante de la cintura para arriba) equivale o es igual a la letra “P”
            p.text-center
              strong P = contorno de pecho de la talla a trabajar
              br
              strong Talla 34: B = 86,5 cm
              br
              | (contorno de pecho del cuadro de tallas correspondiente a la talla 34).
        tr
          th Medida más larga a trabajar
          td
            p.mb-0 El largo inicial del rectángulo se trabaja con la medida más larga de la parte del cuerpo a trabajar, por ejemplo:
            ul.lista-ul--color
              li.mb-0
                i.lista-ul__vineta
                | Pantalón: largo de pantalón
              li.mb-0
                i.lista-ul__vineta
                | Falda: altura de rodilla
              li.mb-0
                i.lista-ul__vineta
                | Superior: largo de talle posterior

        tr
          th Medidas en el trazo
          td
            p.mb-0 Las medidas que se trabajan en la metodología son deducidas, en algunos casos únicamente se saca del cuadro de talla, la medida de contorno y largo, no se trabajan medidas como hombro, anchos, cuello y demás; dichas medidas se obtienen por fórmula o por medidas deducidas.
            p.text-center En masculino la medida de cuello posterior equivale a
              br
              strong P/20+2,5 = P (contorno de pecho) / 20 + 2,5
        tr
          th Manejo del papel
          td Por lo general, el trazo de moldes se suele hacer con papel trazo o manifold, dicho papel tiene dos caras, una que al tacto es liso y brillante y otra que es corrugada y opaca; se recomienda trabajar por la parte corrugada con el fin de tener una mejor adhesión del grafito (lápiz) y no permitir que rebote la luz, es recomendable emplear papel blanco con el fin de no cansar la vista y descansar la mente.
        tr
          th Siluetas
          td El manejo de siluetas varía únicamente en las fórmulas; los pasos y guías serán los mismos.

    #t_5_3.titulo-segundo
      h2 5.3  Elaboración de básicos femeninos

    .row.justify-content-center
      .col-9
        //- .bloque-texto-a debe ir acompañado de una de una de estas clases =>
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema5-figure14.svg')
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para la implementación del Manual, lo primero es identificar las páginas con las que se va a trabajar, que en este caso van desde la página 21 hasta la 32, pues como se referenció en temas anteriores, se debe iniciar revisando y analizando el cuadro de tallas página 20, para identificar la talla, las medidas, incrementos y diferencias que se va a trabajar. Este Manual está diseñado para iniciar siempre desde los básicos en la metodología SENA, que funcionan de la siguiente manera:

    .titulo-quinto.color-acento-contenido
      h4 Tabla 6. Desarrollo de básicos femeninos

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        .h3.mb-0.text-white Desarrollo de básicos femeninos
      table
        tr
          th Tipo de plano
          td Identificar qué tipo de plano se va a trabajar: unido, separado o montado.
        tr
          th Rectángulo
          td Todo básico inicia siempre desde un rectángulo, el cual se traza con la medida del contorno más protuberante y el largo más largo de la parte del cuerpo a trabajar.
        tr
          th Cuadro de tallas
          td Para el femenino, la elaboración de los básicos se trabaja con las medidas del cuadro de tallas, es decir, cada punto de referencia sobre el cuerpo es trabajado del cuadro de tallas, a diferencia de lo anterior, este desarrollo hace necesario identificar todo el listado de las medidas que se van a implementar para hacer el desarrollo.

    p A diferencia del masculino el cuadro de tallas viene en centímetros por lo cual no se hace necesario hacer ninguna conversión, como para el caso del masculino que se establece en pulgadas. Este Manual permitirá desarrollar el patronaje básico femenino lo que dará las pautas necesarias para la interpretación de diseños en patronaje.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El Manual de patronaje SENA es un documento elaborado con el propósito de unificar las técnicas del patronaje, lo cual lo convierte en una guía práctica de gran relevancia que se utilizará en todo el desarrollo de este proceso formativo con una metodología secuencial que permita comprender el patronaje a partir del análisis del cuerpo.',
        imagen: require('@/assets/curso/tema5-titulo.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
