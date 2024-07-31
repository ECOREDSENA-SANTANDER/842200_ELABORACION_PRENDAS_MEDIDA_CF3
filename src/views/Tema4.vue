<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Patronaje: concepto y procedimientos

    figure.mb-3
      img.mb-4(src='@/assets/curso/tema4-imagen1.svg', alt='Hombre usando una regla')

    p.mb-5 El patronaje es la representación en 2D (bidimensional) de un volumen en 3D (tridimensional) que da como resultado la estructura vista desde planos, los que permiten la viabilidad de la arquitectura de una prenda, por ello es importante tener claro la elaboración de planos, moldes o patrones de prendas de vestir para el cuerpo.

    .row.justify-content-center
      .col-lg-5.col-md-10.col-10.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 28. 
          | Plano en 3D
        img.mt-5(src="@/assets/curso/figure29.svg", alt='La imagen expone dos representaciones de un cubo. A la izquierda, hay un cubo dibujado con líneas sólidas para los bordes visibles y líneas discontinuas para los bordes que no están a la vista. A la derecha, hay un cubo representado en un sistema de coordenadas tridimensional con ejes etiquetados como x, y y z. El cubo está orientado de tal manera que una esquina coincide con el origen del sistema de coordenadas y cada cara del cubo es paralela a un plano formado por dos ejes del sistema de coordenadas.')
      
      .col-lg-5.col-md-10.col-10.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 29.  
          | Plano en 2D
        img.mt-5(src="@/assets/curso/figure30.svg", alt='La imagen detalla la plantilla plana de un cubo, conocida como una red de cubo. Esta red consiste en 6 cuadrados idénticos conectados de manera que puedan ser doblados a lo largo de los bordes para formar un cubo tridimensional. La disposición de los cuadrados es tal que hay un cuadrado central, con otros cuatro dispuestos en cada lado del mismo (arriba, abajo, izquierda y derecha), y un sexto cuadrado que se extiende desde el cuadrado que está a la derecha del central.' )

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 30. 
          | De la estructura al molde
        .shadow
          img(src='@/assets/curso/figure31.svg', alt='La imagen ilustra el proceso de creación de un patrón de ropa, mostrando la transformación desde la forma humana hasta el molde de costura final. En el lado izquierdo, hay un dibujo de una figura humana con líneas que indican diferentes secciones de la anatomía relevantes para el diseño de ropa, llamadas "Estructura". En el centro, se detalla un conjunto de rectángulos y líneas que representan la "Plano" o despliegue de estas secciones en dos dimensiones. Finalmente, a la derecha, se encuentran los patrones o "Molde" resultantes que serán usados para cortar la tela. Hay flechas de color que vinculan cada etapa con la siguiente, simbolizando el proceso de diseño de ropa desde la concepción hasta el patrón de corte. Además, en la parte inferior de la imagen se observa un enlace web.')
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              | Teniendo en cuenta lo revisado hasta este momento, es importante preguntarse, ¿para qué sirve el patronaje? La respuesta es un tanto sencilla: permite transferir la información de la estructura corporal en planos que luego se convierten en moldes.
      
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 31.  
          | Interpretación en plano y molde
        .shadow
          img(src='@/assets/curso/figure32.svg', alt='Se expone el proceso de diseño de moda, empezando con la "Figura 3D Estructura", que son dos dibujos de figuras humanas (masculina y femenina) con líneas indicativas de las mediciones clave para patrones de ropa. El siguiente paso es el "Plano 2D", que ilustra cómo se traducen estas mediciones en un patrón plano con líneas discontinuas, posiblemente representando las líneas de corte. A continuación, se expone el "Molde", que son las piezas del patrón de ropa cortadas y delineadas, listas para ser ensambladas. El último paso es la "Prenda", que es el dibujo de una chaqueta terminada. Las flechas entre cada etapa indican el flujo del proceso de diseño desde la estructura del cuerpo humano hasta la prenda de vestir terminada.')
          .texto-imagenes.py-2.px-1
            p.mb-2.px-2.py-3
              | En patronaje las medidas 3D se trazan en 2D, tal como se puede apreciar en la siguiente figura en la que se contempla el cuerpo y su estructura, a partir de ello se estructura el plano en 2D para llegar al molde y, posteriormente, a la prenda.

    p.mb-5 Teniendo en cuenta la figura anterior, se debe considerar otras interpretaciones:

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 32. 
          | Técnica en moulage
        .shadow
          img(src='@/assets/curso/figure33.png', alt="La imagen expone tres diferentes maniquíes de costura exhibiendo distintas técnicas de diseño de moda. En el maniquí de la izquierda, hay un detalle de flores en relieve que cubre el área del busto. El del centro es un vestido con drapeados complejos en la zona de la cintura. Y el maniquí de la derecha presenta una estructura de chaqueta con costuras claramente marcadas y bordes sin terminar, posiblemente para mostrar el proceso de ensamblaje de la prenda antes de los acabados finales. Estos maniquíes se utilizan para el desarrollo y la exhibición de técnicas de modistería en una etapa intermedia del diseño de ropa.")
          .texto-imagenes.py-2.px-1
            p.mb-5.px-2.py-2
              strong Drapeado – Moulage
              | : se trabajan directamente las formas y moldes sobre una estructura 3D.
          .pie-imagenes
            p.mb-0.px-2.py-2 Nota. Tomada de Fex (2020).
      
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 33. 
          | Diseño geométrico
        .shadow
          img(src='@/assets/curso/figure34.png', alt="La imagen detalla dos poses de un modelo usando una prenda de moda vanguardista con un diseño geométrico y estructurado. La ropa parece formar figuras tridimensionales con patrones triangulares que sobresalen, creando una silueta que se aleja considerablemente de las formas corporales tradicionales. Las dos poses capturan la prenda desde diferentes ángulos, destacando la complejidad y el diseño angular del atuendo.")
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              strong Geometría y moda
              | : para el desarrollo de prendas de vestir se implementan conceptos numéricos y geométricos y, además, siluetas, formas, medidas, estructuras, volúmenes, tamaños, armonías, etc.
          .pie-imagenes
            p.mb-0.px-2.py-2 Nota. Tomada de Paredro (2015)

    ul.lista-ul--color.mb-0
      li.d-flex
        i.fas.fa-bullseye
        h4.mb-4.mx-2 Procedimientos de patronaje
    p.mb-5 Para lograr un producto acorde a las necesidades del cliente, se recomienda una serie de pasos para cumplir con los criterios técnicos y de calidad en la elaboración de prendas sobre medidas, ellos son:


    .row.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja4
          h4.negro.p-3.text-center Indicaciones para la producción
          .hr.mb-5  
          .row.justify-content-center
            .col-lg-11.col-md-11.col-11 
                figure.mb-3
                  img.mb-5(src='@/assets/curso/tema4-indicaciones.svg', alt='Indicaciones para la producción')

    p.mb-5 Teniendo en cuenta el procedimiento anterior, ahora se deben seguir los estos pasos:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-md-12.col-12
        .fondo21.p-4.mb-2
          .row.justify-content-center.align-items-center
            .col-lg-1.col-md-12.col-12
              img.mx-2.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/19-Mannequin.svg", alt="tema 2")
            .col-lg-9.col-md-12.col-12
              h4.mb-1 Anexo. PDF – Pasos para definir el patronaje 
              p.mb-0 Es necesario conocer cada uno de los pasos que se deben seguir para realizar el procedimiento de patronaje
            .col-lg-2.col-md-12.col-12
              a.boton.color-acento-botones(href="https://www.studocu.com/co/document/servicio-nacional-de-aprendizaje/patronaje-prendas-basicas/7-anexo-7-pdf-pasos-definir-patronaje/39261850" target="_blank")
                span Descargar
                i.fas.fa-file-download 
  
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
