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
          h5 Figura 29  
          | Plano en 3D
        img.mt-5(src="@/assets/curso/figure29.svg")
      
      .col-lg-5.col-md-10.col-10.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 30  
          | Plano en 2D
        img.mt-5(src="@/assets/curso/figure30.svg" )

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 31 
          | De la estructura al molde
        .shadow
          img(src='@/assets/curso/figure31.svg')
          .texto-imagenes.py-2.px-1
            p.mb-0.px-2.py-2
              | Teniendo en cuenta lo revisado hasta este momento, es importante preguntarse, ¿para qué sirve el patronaje? La respuesta es un tanto sencilla: permite transferir la información de la estructura corporal en planos que luego se convierten en moldes.
      
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 32  
          | Interpretación en plano y molde
        .shadow
          img(src='@/assets/curso/figure32.svg')
          .texto-imagenes.py-2.px-1
            p.mb-2.px-2.py-3
              | En patronaje las medidas 3D se trazan en 2D, tal como se puede apreciar en la siguiente figura en la que se contempla el cuerpo y su estructura, a partir de ello se estructura el plano en 2D para llegar al molde y, posteriormente, a la prenda.

    p.mb-5 Teniendo en cuenta la figura anterior, se debe considerar otras interpretaciones:

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 33 
          | Técnica en moulage
        .shadow
          img(src='@/assets/curso/figure33.png', alt="Figura 33 Técnica en moulage")
          .texto-imagenes.py-2.px-1
            p.mb-5.px-2.py-2
              strong Drapeado – Moulage
              | : se trabajan directamente las formas y moldes sobre una estructura 3D.
          .pie-imagenes
            p.mb-0.px-2.py-2 Nota. Tomada de Fex (2020).
      
      .col-lg-5.col-md-12.col-12.mb-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 34 
          | Diseño geométrico
        .shadow
          img(src='@/assets/curso/figure34.png', alt="Figura 34 Diseño geométrico")
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
              a.boton.color-acento-botones(href="/downloads/7_Anexo_7_PDF-Pasos_Definir_Patronaje.pdf" target="_blank")
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
