<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Análisis e identificación de la estructura del cuerpo

    figure.mb-5
      img(src='@/assets/curso/tema1-image1.svg', alt='Mujeres con un maniquí')

    p.mb-5 El vestuario está diseñado para dar cobertura al cuerpo, por lo que analizar el cuerpo en torno a su estructura y movimiento es de suma importancia para comprender a qué se debe el patronaje y las diferentes metodologías utilizadas en su realización. Para el desarrollo de prendas de vestuario sobre medidas se hace aún más taxativo comprenderlo, pues el ser técnicos en el área conlleva enfrentarse a diversas siluetas que necesitan ser analizadas dentro de la metodología y el paso a paso para la elaboración de un patrón.
      br
      br
      | Teniendo en cuenta lo anterior, se hará un recorrido para lograr entender el cuerpo a partir de los siguientes conceptos en relación con la estructura corporal:

    figure.mb-5
      img(src='@/assets/curso/tema1-estructuracorporal.svg', alt='Mujeres con un maniquí')

    //- .row.g-0
    //-   .col
    //-     img.mb-4(src='@/assets/curso/tema1-anatomia.svg', alt='Anatomía')
    //-     .px-1
    //-       .estructura-corporal-titulo Anatomía

    //-   .col
    //-     img.mb-4(src='@/assets/curso/tema1-biomecanica.svg', alt='Biomecánica')
    //-     .px-1
    //-       .estructura-corporal-titulo Biomecánica

    //-   .col
    //-     img.mb-4(src='@/assets/curso/tema1-morfologia.svg', alt='Morfología')
    //-     .px-1
    //-       .estructura-corporal-titulo Morfología

    //-   .col
    //-     img.mb-4(src='@/assets/curso/tema1-ergonomia.svg', alt='Ergonomía')
    //-     .px-1
    //-       .estructura-corporal-titulo Ergonomía

    //-   .col
    //-     img.mb-4(src='@/assets/curso/tema1-antropometria.svg', alt='Antropometría')
    //-     .px-1
    //-       .estructura-corporal-titulo Antropometría



    .row.mb-5
      .col-1
      .col-10
        .BorTit.mb-5 Figura 1 División del cuerpo
        figure.mb-5.px-4
          img(src='@/assets/curso/tema1-arquitectura.svg', alt='Figura 1 Arquitectura del cuerpo')

    .cajon.color-primario.p-5.mb-5
      p
        strong Arquitectura del cuerpo
        br
        br
        | Conocer el cuerpo humano es muy importante para traducir su estructura en medidas y patronaje de prendas, por lo que, a continuación, se visualizará la división para tener en cuenta en su análisis.

      .BorTit.mb-5 Figura 2  Análisis de división de cuerpo

      figure.mb-5.px-4.mt-5
        img(src='@/assets/curso/tema1-divisioncuerpos.svg', alt='Figura 2  Análisis de división de cuerpo')

      a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=V81Fjuq8XWs" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p
            strong Enlace web.
            | Video – Estructura del cuerpo
            br
            | Conoce la estructura corporal, anatomía, cortes y ejes del cuerpo, antropometría y ergonomía, biomecánica, somatotipos, doshas, siluetas y evaluación de plomos y posturas.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
