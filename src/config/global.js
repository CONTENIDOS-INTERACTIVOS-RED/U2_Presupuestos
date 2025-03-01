export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Presupuesto de producción y ventas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos del Presupuesto de Producción y Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Concepto y propósito del presupuesto en la gestión empresarial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Relación entre presupuesto, planeación estratégica y toma de decisiones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Componentes del presupuesto de producción y ventas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Importancia del control presupuestario en la eficiencia operativa',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis y cálculo de costos en la producción y ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Identificación y clasificación de costos de producción y ventas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gestión de inventarios en la producción',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Evaluación de costos para la toma de decisiones estratégicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estrategias de pronóstico y fijación de precios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: ' Métodos de pronóstico de ventas y tendencias del mercado',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Factores que influyen en la proyección de la demanda',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Estrategias de fijación de precios en función de los costos y el mercado',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Integración del presupuesto de producción y ventas en la planificación empresarial',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Buitrago Ibáñez, J. V. (2021). Presupuestos en Excel: (1 ed.). Editorial UPTC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/219237?page=1',
    },
    {
      referencia:
        'Piedra Aguilera, M. A. & Cubero Abril, T. (2024). Presupuestos. Un enfoque práctico: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/278951?page=2',
    },
    {
      referencia:
        'Pacheco Coello, C. E. (2020). Presupuestos un enfoque gerencial: ( ed.). Instituto Mexicano de Contadores Públicos',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151225',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y Presupuestos para financieros junior: ( ed.). Grupo Editorial Nueva Legislación SAS. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/160288?page=1',
    },
    {
      referencia:
        'Checa Hinojo, E. J. (2024). Elaboración del presupuesto editorial. ARGN0109: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/274320?page=1',
    },
    {
      referencia:
        'Moreno Castro, T. F. (2023). Plan de ventas: productos, pronósticos y presupuestos: (1 ed.). RIL editores. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/268333?page=1',
    },
    {
      referencia:
        'Antón Pérez, J. J. & Garijo de Miguel, S. (2024). Empresa y administración: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo: (1 ed.). Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J. Guerrero López, L. & Salgado Hernández, N. (2016). Fundamentos de Administración: ( ed.). Grupo Editorial Éxodo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
  ],
  glosario: [
    {
      termino: 'Absorción',
      significado:
        'Método de costeo que asigna todos los costos de producción, tanto fijos como variables, a cada unidad elaborada.',
    },
    {
      termino: 'Actividad productiva',
      significado:
        'Conjunto de procesos y operaciones destinadas a transformar insumos en productos o servicios, generando valor.',
    },
    {
      termino: 'Administración',
      significado:
        'Proceso de planificación, organización, dirección y control de los recursos empresariales para alcanzar objetivos estratégicos.',
    },
    {
      termino: 'Análisis de costos',
      significado:
        'Evaluación detallada de los gastos asociados a la producción o prestación de servicios, orientada a optimizar la eficiencia y la asignación de recursos.',
    },
    {
      termino: 'Costos directos',
      significado:
        'Gastos que se pueden asignar de manera inmediata a la elaboración de un producto o servicio, como materia prima y mano de obra directa.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'Gastos que permanecen constantes, independientemente del nivel de producción, tales como alquileres y salarios administrativos.',
    },
    {
      termino: 'Costos indirectos',
      significado:
        'Gastos que no se pueden vincular directamente a un producto específico, por ejemplo, la depreciación de maquinaria y los costos de mantenimiento.',
    },
    {
      termino: 'Costos variables',
      significado:
        'Gastos que fluctúan en función del volumen de producción, como el consumo de materia prima.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes o servicios que los consumidores están dispuestos a adquirir a un precio determinado en un periodo específico.',
    },
    {
      termino: 'Eficiencia operativa',
      significado:
        'Capacidad de maximizar la producción y minimizar el desperdicio de recursos durante el proceso productivo.',
    },
    {
      termino: 'Evaluación de costos',
      significado:
        'Proceso de analizar y comparar los costos reales con los presupuestados para identificar áreas de mejora y optimizar la rentabilidad.',
    },
    {
      termino: 'Fijación de precios',
      significado:
        'Estrategia para determinar el precio de venta de un producto o servicio, combinando el análisis de costos internos con la evaluación del entorno y el valor percibido por el mercado.',
    },
    {
      termino: 'Gestión empresarial',
      significado:
        'Conjunto de actividades y decisiones que orientan la dirección y administración de una organización para lograr sus objetivos.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de bienes, materias primas, productos en proceso y productos terminados que posee una empresa para su producción y venta.',
    },
    {
      termino: 'Margen de contribución',
      significado:
        'Diferencia entre el precio de venta y el costo variable por unidad, la cual contribuye a cubrir los costos fijos y generar utilidades.',
    },
    {
      termino: 'Planificación estratégica',
      significado:
        'Proceso de definir la dirección y objetivos a largo plazo de una organización, estableciendo las acciones necesarias para alcanzarlos.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Herramienta de planificación financiera que estima los ingresos y gastos de una organización en un periodo determinado, sirviendo de guía para la toma de decisiones.',
    },
    {
      termino: 'Producción',
      significado:
        'Conjunto de actividades orientadas a transformar insumos en productos o servicios terminados que satisfagan las necesidades del mercado.',
    },
    {
      termino: 'Proyección de ventas',
      significado:
        'Estimación del volumen de ventas futuro basada en el análisis de datos históricos, tendencias del mercado y otros factores relevantes.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Capacidad de una organización para generar ganancias en relación con los costos y la inversión realizada, reflejando su eficiencia económica.',
    },
  ],
}
