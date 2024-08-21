export default {
  global: {
    componenteFormativo: 'Estructura corporal y prepatronaje',
    descripcionCurso:
      'Comprender la estructura corporal es esencial para obtener una visión completa de las necesidades inherentes a la creación de vestuario. Esto facilita la comprensión de la figura humana en tres dimensiones y cómo se debe interpretar en un plano bidimensional para su materialización. De acuerdo con el Manual de patronaje básico del SENA, se explorará la aplicabilidad de esta comprensión en la confección de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/3.svg'),
      },
    ],
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
        icono: '',
        numero: '1',
        titulo: 'Análisis e identificación de la estructura del cuerpo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: 'Análisis y clasificación de las medidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '2.1',
            titulo:
              'Sistemas de medidas: clasificación, características, usos e implementación',
            hash: 't_2_1',
          },
          {
            icono: '',
            numero: '2.2',
            titulo: 'Las medidas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: '',
        numero: '3',
        titulo: 'Análisis de medidas y cuadros de tallas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '3.1',
            titulo: 'Proporción vs. canon',
            hash: 't_3_1',
          },
          {
            icono: '',
            numero: '3.2',
            titulo: 'Medidas deducidas',
            hash: 't_3_2',
          },
          {
            icono: '',
            numero: '3.3',
            titulo: 'Proporciones en la deducción de medidas',
            hash: 't_3_3',
          },
          {
            icono: '',
            numero: '3.4',
            titulo: 'Identificar el DROP',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: '',
        numero: '4',
        titulo: 'Patronaje: concepto y procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: '',
        numero: '5',
        titulo: 'Metodología - Presentación del Manual de patronaje SENA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '5.1',
            titulo: 'Metodología – Convenciones',
            hash: 't_5_1',
          },
          {
            icono: '',
            numero: '5.2',
            titulo: 'Elaboración de básicos masculinos',
            hash: 't_5_2',
          },
          {
            icono: '',
            numero: '5.3',
            titulo: 'Elaboración de básicos femeninos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: '',
        numero: '6',
        titulo: 'Dibujo bidimensional de prendas de vestir',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_842200_DU.zip',
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
  referencias: [
    {
      referencia: 'AS - Special Dressing. (2021). Tomar medidas.',
      link: 'https://atuendosuan.wordpress.com/tomar-medidas/',
    },
    {
      referencia:
        'Aula Fácil. (2021). Anatomía y proporción de la figura humana.',
      link:
        'https://www.aulafacil.com/cursos/dibujo-lineal-secundaria/educacion-plastica-y-visual-4-eso/anatomia-y-proporcion-de-la-figura-humana-l11844',
    },
    {
      referencia:
        'Cómo cubrir un cuerpo. (2013). Proporciones del cuerpo humano Da Vinci y Vitrubio.',
    },
    {
      referencia:
        'Fez, D. (2020). Moulage. El arte y la técnica de la construcción en moda.',
      link:
        'https://www.andrespert.com/moulage-una-tecnica-de-corte-y-confeccion/',
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
    {
      termino: 'Medida más protuberante',
      significado:
        'La medida del contorno corporal más amplio que se utiliza como base para trazar patrones, como el contorno de pecho.',
    },
    {
      termino: 'Cuadro de tallas',
      significado:
        'Tabla que contiene las medidas estándar de diferentes partes del cuerpo para varias tallas, utilizada para la elaboración de patrones. ',
    },
    {
      termino: 'Contorno',
      significado:
        'Medida alrededor de una parte específica del cuerpo, como el contorno de pecho, cadera o cintura. ',
    },
    {
      termino: 'Estatura',
      significado:
        'Altura total de una persona, medida desde la cabeza hasta los pies.',
    },
    {
      termino: 'Talle',
      significado: 'Medida vertical desde el hombro hasta la cintura. ',
    },
    {
      termino: 'Largo de brazo',
      significado: 'Longitud medida desde el hombro hasta la muñeca ',
    },
    {
      termino: 'Cuello',
      significado: 'Medida alrededor de la base del cuello ',
    },
    {
      termino: 'Cintura/suelo',
      significado: 'Distancia vertical desde la cintura hasta el suelo. ',
    },
    {
      termino: 'Base',
      significado:
        'Medida de pecho ajustada con desahogo y costura, utilizada como referencia en patrones. ',
    },
    {
      termino: 'Siluetas',
      significado:
        'Forma o contorno general de una prenda o figura, determinada por el diseño y las medidas utilizadas en los patrones. ',
    },
    {
      termino: 'Papel manila',
      significado:
        'Tipo de papel utilizado en la creación de patrones de costura, recomendado por su opacidad y resistencia. ',
    },
    {
      termino: 'Desahogo',
      significado:
        'Espacio adicional añadido a las medidas corporales en los patrones para permitir comodidad y movimiento. ',
    },
    {
      termino: 'Canon',
      significado:
        'Sistema de proporciones utilizado para representar el cuerpo humano de manera ideal, generalmente basado en la altura de la cabeza.',
    },
    {
      termino: 'Proporciones',
      significado:
        'Relación de tamaño entre diferentes partes del cuerpo, esencial en el diseño de ropa para asegurar un ajuste equilibrado y estético. ',
    },
  ],
  complementario: [
    {
      tema: 'Dibujo bidimensional de prendas de vestir',
      referencia: 'SENA. (2021). Dibujo bidimensional de prendas de vestir. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xptK7CFsF7o',
    },
    {
      tema: 'Elaboración de básicos masculino ',
      referencia: 'SENA. (2021). Trazo de bitácora de formas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ppEdTvy94eU&t=1102s',
    },
    {
      tema: 'medidas reducidas ',
      referencia:
        'SENA. (2021). Técnicas de achurados y acabados de la prenda. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Di4R3jHoNkQ',
    },
    {
      tema: 'las medidas ',
      referencia: 'SENA. (2021). Reconocimientos de las prendas. [Video]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHhqkd0h4Kw',
    },
    {
      tema: 'Todo el componente ',
      referencia:
        'SENA. (2020). Manual de patronaje básico e interpretación de diseños. SENA.',
      tipo: 'Manual',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta Temática',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Ledy Johana Velásquez Hernández',
          cargo: 'Experta Temática',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez ',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Gestión industrial.',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
