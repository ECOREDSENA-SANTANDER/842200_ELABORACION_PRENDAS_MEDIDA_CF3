<template lang="pug">
.curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
      p(data-aos="fade-down").mb-5 Síntesis: Estructura corporal y prepatronaje
    
      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El diagrama detalla el proceso de elaboración de patrones en el diseño de ropa, comenzando con el análisis e identificación de la estructura del cuerpo y la clasificación de medidas, seguido por el estudio y construcción de cuadros de tallas. A continuación, se aborda el patronaje, definiendo conceptos y procedimientos, y finalmente se establece una metodología que incluye convenciones y la elaboración de básicos tanto masculinos como femeninos. Este flujo de trabajo organiza de manera estructurada desde la evaluación inicial del cuerpo hasta la implementación de técnicas específicas para crear patrones base.")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf-sintesis.svg")
            .anexo__texto
              p Anexo. Síntesis
    
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
