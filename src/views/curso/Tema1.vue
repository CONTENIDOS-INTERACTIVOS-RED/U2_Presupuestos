<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos del Presupuesto de Producción y Ventas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85-3.mb-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p.mt-5 El presupuesto de producción y ventas es una herramienta esencial para la planificación financiera de las organizaciones, ya que permite proyectar y coordinar las actividades productivas y comerciales con el fin de alcanzar los objetivos estratégicos establecidos. Facilita la estimación de recursos necesarios y permite anticipar posibles desafíos operativos.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    p.mb-4 Este presupuesto se divide en dos partes:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presupuesto de producción" :icon="require('@/assets/bullets/icon-tab-c-1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Presupuesto de producción
            p Se elabora a partir del presupuesto de ventas y determina las cantidades a producir considerando las proyecciones de demanda y los niveles de inventario deseados. Implica la planificación de los recursos materiales, humanos y técnicos necesarios.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Presupuesto de ventas" :icon="require('@/assets/bullets/icon-tab-c-2.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Presupuesto de ventas
            p Estima los ingresos esperados por la comercialización de productos o servicios, teniendo en cuenta factores como tendencias del mercado, estrategias de precios y políticas comerciales.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .py-4.px-5.bg-color-1.mb-3(data-aos="fade-up")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La integración de ambos presupuestos permite coordinar eficazmente las áreas operativas y comerciales, asegurando que la producción se alinee con las expectativas del mercado. Además, facilita la detección de desviaciones y la implementación de medidas correctivas oportunas.
        p En un contexto empresarial dinámico y competitivo, contar con presupuestos basados en información actualizada resulta clave para la toma de decisiones estratégicas. El uso de herramientas tecnológicas y metodologías de análisis de datos contribuye a mejorar la precisión de las proyecciones, fortaleciendo la capacidad de adaptación y resiliencia de las organizaciones.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="", data-aos="zoom-in")
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y propósito del presupuesto en la gestión empresarial

    p El presupuesto en la gestión empresarial es una herramienta clave para planificar, coordinar y controlar los recursos financieros de una organización. Su propósito principal es estimar los ingresos y egresos durante un período específico, facilitando la toma de decisiones estratégicas y operativas.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Concepto de presupuesto
                p.mb-0 Es una proyección financiera que detalla ingresos y gastos previstos, guiando las operaciones financieras para lograr los objetivos organizacionales.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Propósito
                p.mb-0 Permite anticipar necesidades financieras, detectar desviaciones y establecer medidas correctivas. Facilita la comunicación entre departamentos y alinea esfuerzos hacia metas comunes.
    
    h2(data-aos="fade-left") Ejemplo práctico: presupuesto de una empresa de calzado

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p Una empresa de calzado proyecta vender 10,000 pares en el próximo trimestre a un precio unitario de $50, generando ingresos esperados de $500,000. Con costos de producción de $300,000, el presupuesto le permite planificar la adquisición de materiales, la contratación de personal y la producción, asegurando rentabilidad y eficiencia operativa.
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Presupuesto de una empresa de mobiliario escolar
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="30%") Concepto
                th.text-center.bg-color-3.text-white Cálculo
                th.text-center.bg-color-3.text-white(width="30%") Valor
            tbody
              tr
                td.text-bold Ingresos estimados
                td.text-center 1,000 × $50
                td.text-center $50,000
              tr
                td.text-bold Costos variables
                td.text-center 1,000 × $20
                td.text-center $20,000
              tr
                td.text-bold Costos fijos
                td.text-center -
                td.text-center $15,000
              tr
                td.text-bold Utilidad bruta
                td.text-center $50,000 - $20,000 - $15,000
                td.text-center.text-bold $15,000
        p.mb-0.p-4.bg-color-4 Este presupuesto permite prever rentabilidad y optimizar la asignación de recursos, evitando sobrecostos y ajustando la producción a la demanda proyectada.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/8.png", alt="", data-aos="zoom-in")
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Relación entre presupuesto, planeación estratégica y toma de decisiones
    
    p.mb-5 El presupuesto no es solo un registro contable, sino un instrumento dinámico que integra objetivos estratégicos y proyecciones financieras, optimizando la asignación de recursos y permitiendo anticipar escenarios futuros.

    .bg-full-width-2.bg-color-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").order-2
            p Durante la planeación estratégica, el presupuesto define metas y establece parámetros de evaluación para dar seguimiento a la ejecución operativa. Por ejemplo, en el lanzamiento de un nuevo producto, el presupuesto puede incluir costos de producción, inversión en marketing y proyección de ventas. Si se proyecta una alta rentabilidad, se justifica la asignación de mayores recursos a la iniciativa, alineando la estrategia empresarial con la realidad del mercado.
            p Asimismo, la integración de la información presupuestaria permite identificar desviaciones y aplicar medidas correctivas, fortaleciendo la capacidad de respuesta ante cambios en el entorno. Para ello, es recomendable revisar y actualizar periódicamente el presupuesto, asegurando su alineación con la estrategia organizacional.
          .col-lg-5(data-aos="zoom-in").order-1.mb-3.mb-lg-0
            img.img-fluid(src='@/assets/curso/tema1/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Ejemplo práctico: presupuesto para el lanzamiento de una plataforma digital
    p.mb-5 Una empresa de servicios tecnológicos planea lanzar una nueva plataforma digital y, tras un estudio de mercado, proyecta un incremento del 20 % en la demanda durante el primer año. En función de esto, el presupuesto contempla:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Presupuesto para una plataforma digital
    .row.mb-5
      .col-lg-8
        
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="40%") Concepto
                th.text-center.bg-color-3.text-white Cálculo
                th.text-center.bg-color-3.text-white(width="20%") Valor
            tbody
              tr
                td.text-bold Ventas proyectadas
                td.text-center 10,000 descargas × $10
                td.text-center $100,000
              tr
                td.text-bold Costos de desarrollo y operación
                td.text-center -
                td.text-center $50,000
              tr
                td.text-bold Inversión en marketing
                td.text-center -
                td.text-center $20,000
              tr
                td.text-bold Utilidad bruta proyectada
                td.text-center $100,000 - $50,000 - $20,000
                td.text-center.text-bold $30,000
      .col-lg-4
        div.p-5.bg-color-10
          p.mb-0 El análisis presupuestario indica un margen de rentabilidad favorable, lo que permite invertir en campañas adicionales de marketing y mejoras tecnológicas. La revisión continua del presupuesto asegura que la estrategia se ajuste a la respuesta del mercado, fortaleciendo la toma de decisiones basadas en datos.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Componentes del presupuesto de producción y ventas

    p.mb-4 Los componentes del presupuesto de producción y ventas son esenciales para la planificación financiera y operativa de una organización. Este presupuesto incluye la proyección de ventas, la planificación de la producción, el análisis de inventarios y la fijación de precios, lo que permite coordinar y optimizar el flujo de recursos en función de los objetivos estratégicos.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Presupuesto de ventas")
            p Proyecta la cantidad de productos o servicios a comercializar en un período determinado. Se basa en estudios de mercado y tendencias de consumo, estableciendo metas que orientan la planificación de la producción.
    
          .div(titulo="Presupuesto de producción")
            p Determina la cantidad de unidades a fabricar para satisfacer la demanda estimada. Considera inventarios iniciales y finales, así como costos directos e indirectos de fabricación, como materia prima, mano de obra e insumos.
    
          .div(titulo="Fijación de precios de venta")
            p Se define en función de los costos de producción y el valor percibido en el mercado. Su objetivo es garantizar rentabilidad y competitividad, asegurando la recuperación de costos.
        
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos elementos permiten a las organizaciones ajustar su capacidad productiva y estrategias comerciales a las condiciones del mercado, evitando problemas como la sobreproducción o la escasez de productos.
    
    .titulo-figura.mb-4
      h5 Figura 1. 
      span Componente del presupuesto de producción y ventas.

    div.p-5.bg-color-15.mb-5
      figure
        img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
      
    h2(data-aos="fade-left") Ejemplo práctico y didáctico

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p Considérese una empresa dedicada a la fabricación de artículos de papelería que proyecta la venta de 5,000 cuadernos en el próximo trimestre, a un precio unitario de $2, generando ingresos estimados de $10,000. Se dispone de un inventario inicial de 500 cuadernos y se requiere mantener un inventario final de 300 unidades.
        
        p Para determinar la cantidad de cuadernos que se deben producir, se utiliza la siguiente fórmula:

        div.bg-h85
          .row.align-items-center.justify-content-center.p-3.p-lg-0
            .col-lg-3
              figure
                img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in")
            .col-lg-9
              p.mb-0 Producción necesaria = Ventas proyectadas + Inventario final deseado – Inventario inicial
        div.bg-color-13
          .row.align-items-center.justify-content-center.p-3.p-lg-0
            .col-lg-4.order-2
              figure
                img(src="@/assets/curso/tema1/14.svg", data-aos="zoom-in")
            .col-lg-8.order-1
              p.mb-0 Producción necesaria = 5,000 + 300 – 500 = 4,800 cuadernos

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", alt="", data-aos="zoom-in")
    
    p.mb-4 Este cálculo permite planificar la producción de manera eficiente, asegurando la disponibilidad del producto sin incurrir en costos excesivos por sobreproducción o enfrentar déficit de inventario, lo que fortalece la toma de decisiones y la competitividad en el mercado.
    
    .titulo-figura.mb-4
      h5 Tabla 3.
      span Relación entre presupuesto de ventas y producción
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="40%") Elemento
                th.text-center.bg-color-3.text-white Cálculo
                th.text-center.bg-color-3.text-white(width="20%") Valor
            tbody
              tr
                td.text-bold Ventas proyectadas
                td.text-center -
                td.text-center 5,000 cuadernos
              tr
                td.text-bold Inventario final deseado
                td.text-center -
                td.text-center 300 cuadernos
              tr
                td.text-bold Inventario inicial disponible
                td.text-center -
                td.text-center 500 cuadernos
              tr
                td.text-bold Producción necesaria
                td.text-center 5,000 + 300 - 500
                td.text-center.text-bold 4,800 cuadernos
              tr
                td.text-bold Ingresos estimados
                td.text-center 5,000 × $2
                td.text-center.text-bold $10,000
    
        div.p-5.bg-color-10
          p.mb-0 En este ejemplo, el <b>presupuesto de ventas</b> define la meta de ingresos y volumen de ventas, mientras que el <b>presupuesto de producción</b> se encarga de calcular la cantidad exacta a producir, considerando los inventarios. Finalmente, la <b>fijación de precios</b> se establece en función de los costos incurridos y el valor que el mercado asigna al producto, asegurando la rentabilidad y competitividad.

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Importancia del control presupuestario en la eficiencia operativa
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p El control presupuestario es un proceso integral que permite monitorear el cumplimiento de las proyecciones financieras y optimizar la asignación de recursos en la organización. Consiste en comparar los resultados reales con los presupuestos planificados, identificando desviaciones y facilitando la implementación de medidas correctivas para alinear la operación con los objetivos estratégicos.
        p Al integrar el control presupuestario en la gestión diaria, se fortalece la toma de decisiones basada en información cuantificable y actualizada. Este enfoque no solo permite detectar áreas de mejora en el desempeño financiero, sino que también contribuye a la sostenibilidad y competitividad de la organización en un entorno dinámico.
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema1/16.png", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/17.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="41%" y="9.5%" numero="+")
                h5 01. Presupuesto planificado
                p Se proyecta un incremento de ingresos del 15 %.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="37%" numero="+")
                h5 02. Seguimiento y resultados reales
                p Se detecta que las ventas reales fueron un 10 % menores a lo previsto.
    
              .bg-color-white.box-shadow.p-3(x="68%" y="81%" numero="+")
                h5 03. Análisis de desviaciones
                p.mb-0 <b>Factores internos:</b> Retrasos en producción, ineficiencias en la distribución. 
                p.mb-0 <b>Factores externos:</b> Cambios en la demanda, aumentos en el costo de insumos.
    
              .bg-color-white.box-shadow.p-3(x="16%" y="56%" numero="+")
                h5 04. Acciones correctivas
                p Reforzar la estrategia de marketing, ajustar la planificación de la producción.
    
    .bg-full-width.bg-color-16
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Este cuadro sintetiza el proceso de control presupuestario, en el cual se planifica el incremento de ingresos, se realiza un seguimiento de los resultados, se analizan las desviaciones y se implementan acciones correctivas para restablecer el equilibrio entre lo planificado y lo real, fortaleciendo la eficiencia operativa.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aulasvirtuales.uniquindio.edu.co/RecDigital/Presupu" target="_blank" rel="noopener noreferrer") Universidad del Quindío. (s.f.). Presupuesto de producción. Recuperado de 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://actualicese.com/elaboracion-presupuesto-produccion-conceptos-beneficios" target="_blank" rel="noopener noreferrer") Actualícese. (2022). La elaboración del presupuesto de producción: Conceptos y beneficios.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9EaxY1-6xrc" target="_blank" rel="noopener noreferrer") Bravo P. (2019, diciembre 11). Costos y presupuestos. Pascual Bravo Virtual. [Video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
