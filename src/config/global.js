export default {
  global: {
    componenteFormativo: 'Estructura corporal y prepatronaje',
    descripcionCurso:
      'Comprender la estructura corporal permite tener una visión integral respecto a las necesidades que conlleva a la materialización del vestuario, lo que permite entender la figura humana tridimensional y cómo, para pasar a este plano, necesita interpretarse en segunda dimensión.<br><br>En este sentido y según el Manual de patronaje básico del SENA se desarrollará la aplicabilidad de la elaboración de prendas de vestir, pues esta integra la comprensión de la estructura corporal y anatómica vista desde la ergonomía y el movimiento; por otro lado, los conceptos de prepatronaje se integrarán a la construcción de los básicos femeninos y masculinos, base inicial de todo proceso de patronaje.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis e identificación de la estructura del cuerpo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Sistemas de medidas: clasificación, características, usos e implementación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Las medidas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de medidas y cuadros de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Proporción vs. canon',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Medidas deducidas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Proporciones en la deducción de medidas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Identificar el DROP',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Patronaje: concepto y procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Metodología - Presentación del Manual de patronaje SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Metodología – Convenciones',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Elaboración de básicos masculinos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Elaboración de básicos femeninos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Dibujo bidimensional de prendas de vestir',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      centro: 'Dirección General',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leidy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquía',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez Manchego',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Maria Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia: 'AS - Special Dressing. (2021). Tomar medidas.',
      link: 'https://atuendosuan.wordpress.com/tomar-medidas/',
    },
    {
      referencia:
        'Aula Fácil. (2021). Anatomía y proporción de la figura humana.',
      link: 'https://cutt.ly/rvShcAx',
    },
    {
      referencia:
        'Cómo cubrir un cuerpo. (2013). Proporciones del cuerpo humano Da Vinci y Vitrubio.',
    },
    {
      referencia:
        'Fez, D. (2020). Moulage. El arte y la técnica de la construcción en moda.',
      link: 'https://www.workshopgranada.com/moulage-cursos/',
    },
    {
      referencia:
        'Gutiérrez, R. L., Moncayo, V., A., Tanaka, K., Kimura, F., y Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. SENA, Japan Inernational Cooperation Agency - JICA.',
    },
    {
      referencia:
        'Historias Hiladas. (2021). 5 claves para tomar medidas corporales.',
      link:
        'https://www.nastasianash.com/5-claves-para-tomar-medidas-corporales/',
    },
    {
      referencia:
        'Historias Hiladas. (2021). 5 claves para tomar medidas corporales.',
      link:
        'https://www.comocubriruncuerpo.org/proporciones-del-cuerpo-humano-1-da-vinci-y-vitruvio/',
    },
    {
      referencia:
        'Paredro. (2015). Fractales, geometría y otros juegos matemáticos en la moda de hoy. ',
      link:
        'https://www.paredro.com/fractales-geometria-y-otros-juegos-matematicos-en-la-moda-de-hoy/',
    },
    {
      referencia:
        'SENA. (2020). Manual de patronaje básico e interpretación de diseños.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
    {
      referencia:
        'SENA. (2020). Programa técnico en patronaje industrial de prendas de vestir. SENA.',
    },
    {
      referencia: 'SENA. (s.f.). Fashion Snoops.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },
    {
      referencia: 'Valero, V. (2013). Canon del cuerpo humano.',
      link: 'https://valero7.webnode.es/tecnicas/a16-canon-del-cuerpo-humano/',
    },
  ],
  glosario: [
    {
      termino: 'Estándar',
      significado:
        'sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Trazo de un plano',
      significado:
        'en lo referente al oficio del patronista, el trazo de un plano hace referencia a la estructura de los patrones básicos que, posteriormente, se convertirán en moldes.',
    },
    {
      termino: 'Patronaje',
      significado:
        'oficio dedicado a la creación de patrones en la línea de vestuario que permitan la confección de prendas de vestir.',
    },
    {
      termino: 'Molde',
      significado:
        'término usado en el patronaje para señalar que, después del trazo de planos, se llegan a abstraer los elementos que permiten proceder con el corte del textil.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (2021). Dibujo bidimensional de prendas de vestir. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xptK7CFsF7o',
    },
    {
      texto: 'SENA. (2021). Trazo de bitácora de formas. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ppEdTvy94eU&t=1102s',
    },
    {
      texto:
        'SENA. (2021). Técnicas de achurados y acabados de la prenda. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Di4R3jHoNkQ',
    },
    {
      texto: 'SENA. (2021). Reconocimientos de las prendas. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHhqkd0h4Kw',
    },
    {
      texto:
        'SENA. (2020). Manual de patronaje básico e interpretación de diseños. SENA.',
      tipo: 'Página web',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
  ],
}
