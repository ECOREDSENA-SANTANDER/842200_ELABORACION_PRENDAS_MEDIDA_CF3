<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Patronaje: concepto y procedimientos

    figure.mb-3
      img(src='@/assets/curso/tema4-imagen1.svg', alt='Hombre usando una regla')

    p.mb-5 El patronaje es la representación en 2D (bidimensional) de un volumen en 3D (tridimensional) que da como resultado la estructura vista desde planos, los que permiten la viabilidad de la arquitectura de una prenda, por ello es importante tener claro la elaboración de planos, moldes o patrones de prendas de vestir para el cuerpo.

    .row.justify-content-center.mb-5
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 29 Plano en 3D
        img.mt-5(src="@/assets/curso/figure29.png" style="max-height: 270px; object-fit: contain;")
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 30 Plano en 2D
        img.mt-5(src="@/assets/curso/figure30.png" style="max-height: 270px; object-fit: contain;")

    .row.justify-content-center.mb-5.mt-5
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 31 De la estructura al molde
        .shadow
          img(src='@/assets/curso/figure31.png')
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              | Teniendo en cuenta lo revisado hasta este momento, es importante preguntarse, ¿para qué sirve el patronaje? La respuesta es un tanto sencilla: permite transferir la información de la estructura corporal en planos que luego se convierten en moldes.
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 32 Interpretación en plano y molde
        .shadow
          img(src='@/assets/curso/figure32.png')
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              | En patronaje las medidas 3D se trazan en 2D, tal como se puede apreciar en la siguiente figura en la que se contempla el cuerpo y su estructura, a partir de ello se estructura el plano en 2D para llegar al molde y, posteriormente, a la prenda.

    p.mb-5 Teniendo en cuenta la figura anterior, se debe considerar otras interpretaciones:

    .row.justify-content-center.mb-5.mt-5
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 33 Técnica en moulage
        .shadow
          img(src='@/assets/curso/figure33.png', alt="Figura 33 Técnica en moulage")
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              strong Drapeado – Moulage:
              | se trabajan directamente las formas y moldes sobre una estructura 3D.
      .col-5
        .titulo-quinto.color-acento-contenido
          h4 Figura 34 Diseño geométrico
        .shadow
          img(src='@/assets/curso/figure34.png', alt="Figura 34 Diseño geométrico")
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              strong Geometría y moda:
              | para el desarrollo de prendas de vestir se implementan conceptos numéricos y geométricos y, además, siluetas, formas, medidas, estructuras, volúmenes, tamaños, armonías, etc.

    ul.lista-ul.mb-0
      li
        i.lista-ul__vineta
        | <strong>Procedimientos de patronaje</strong>
    p.mb-5 Para lograr un producto acorde a las necesidades del cliente, se recomienda una serie de pasos para cumplir con los criterios técnicos y de calidad en la elaboración de prendas sobre medidas, ellos son:

    figure.mb-3
      img(src='@/assets/curso/tema4-indicaciones.svg', alt='Indicaciones para la producción')

    p Teniendo en cuenta el procedimiento anterior, ahora se deben seguir los estos pasos:
    .row.justify-content-end
      .col-7
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo.
              | PDF – Pasos para definir el patronaje
              br
              | Es necesario conocer cada uno de los pasos que se deben seguir para realizar el procedimiento de patronaje

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
