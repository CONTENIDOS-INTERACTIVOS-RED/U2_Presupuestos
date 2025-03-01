<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Análisis y cálculo de costos en la producción y ventas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-h85.mb-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p.mt-5 El análisis y cálculo de costos en la producción y ventas es un proceso esencial para evaluar la viabilidad económica de las operaciones empresariales. La identificación y evaluación de los distintos componentes de costos, como los costos fijos y variables, se fundamenta en estudios teóricos y prácticos. La integración de esta información en la planificación financiera permite determinar con precisión el costo unitario de los productos, lo que resulta clave para fijar precios competitivos y garantizar la rentabilidad.
            p El análisis de costos implica la suma de gastos directos e indirectos, así como la aplicación de métodos contables como el costeo por absorción y el costeo variable, los cuales facilitan la comparación entre lo planificado y lo ejecutado.

          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Ejemplo práctico: cálculo del costo de producción de un lote
    p.mb-5 Al considerar los gastos en materia prima, mano de obra y costos generales, se obtiene el costo unitario, el cual se usa para evaluar los márgenes de ganancia y definir estrategias de precios.

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Cálculo del costo unitario de producción
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="30%") Concepto
                th.text-center.bg-color-3.text-white Cálculo
                th.text-center.bg-color-3.text-white(width="30%") Valor
            tbody
              tr
                td.text-bold Costo de materia prima
                td.text-center -
                td.text-center $5,000
              tr
                td.text-bold Costo de mano de obra
                td.text-center -
                td.text-center $3,000
              tr
                td.text-bold Costos generales
                td.text-center -
                td.text-center $2,000
              tr
                td.text-bold Costo total de producción
                td.text-center $5,000 + $3,000 + $2,000
                td.text-center.text-bold $10,000
              tr
                td.text-bold Unidades producidas
                td.text-center -
                td.text-center $2,000
              tr
                td.text-bold Costo unitario de producción
                td.text-center $10,000 ÷ 2,000
                td.text-center.text-bold $5 por unidad

        div.p-5.bg-color-10
          p.mb-0 La aplicación de estos métodos en la elaboración de presupuestos de producción y ventas permite proyectar la rentabilidad y optimizar la asignación de recursos. Además, el uso de herramientas tecnológicas como <b>Excel</b> mejora la precisión de los cálculos y facilita la toma de decisiones estratégicas, fortaleciendo la eficiencia operativa y la sostenibilidad financiera de la organización.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Identificación y clasificación de costos de producción y ventas
    

    p.mb-4 La identificación y clasificación de costos de producción y ventas es una herramienta clave para optimizar la asignación de recursos y mejorar la toma de decisiones en la gestión empresarial. Es fundamental diferenciar entre <b>costos fijos y variables</b>, así como entre <b>costos directos e indirectos</b>, ya que esta clasificación permite analizar la estructura de gastos de manera integral.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h2.mb-5(data-aos="fade-left") Ejemplo práctico:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2
        p.mb-0 En una empresa manufacturera dedicada a la producción de botellas de plástico, se identifican los siguientes elementos:
        div.bg-h85-4.px-5
          .row.justify-content-center.align-items-end
            .col-lg-6(data-aos="fade-left").mb-3.mb-lg-0.align-content-end
              h5 Costos directos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Materia prima (resina plástica).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Mano de obra directa en la línea de producción.
              h5 Costos indirectos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Depreciación de la maquinaria.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Gastos de mantenimiento y administración.

            .col-lg-6(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
        div.p-5.bg-color-10
          p.mb-0 Este enfoque permite a las empresas comprender mejor su estructura de costos y tomar decisiones más acertadas para mejorar la rentabilidad y la eficiencia operativa.

      .col-lg-4.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in")
    
    .titulo-figura.mb-4
      h5 Figura 2. 
      span Clasificación de costos. 

    div.p-5.bg-color-15.mb-5
      .row.justify-content-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p  Asimismo, se distinguen los costos fijos, como el alquiler de la planta, que se mantienen constantes independientemente del volumen de producción, y los costos variables, como el consumo de energía, que fluctúan en función del nivel de actividad productiva.
          
        .py-4.px-5.bg-color-4.mb-3(data-aos="fade-up")
          p.mb-0 La identificación precisa de estos elementos permite determinar el costo unitario de producción, lo que es fundamental para establecer precios de venta competitivos y desarrollar presupuestos que reflejan de manera fiel la realidad financiera de la organización.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in")

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Gestión de inventarios en la producción
    
    p.mb-4 La gestión de inventarios en la producción es clave para garantizar la eficiencia operativa y la continuidad de las actividades productivas. Una administración adecuada de los inventarios permite:

    .row.mb-5.aling
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-3.p-4.text-white.h-100
          h5 01
          p.mb-0.text-center Optimizar el flujo de materiales.
    
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.h-100
          h5 02
          p.mb-0.text-center Reducir costos de almacenamiento.
    
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-7.p-4.h-100
          h5 03
          p.mb-0.text-center Minimizar pérdidas por obsolescencia o exceso de stock.
    

    p.mb-4 La integración de sistemas de control facilita la planificación, ejecución y monitoreo de los niveles de inventario, proporcionando datos precisos para la toma de decisiones estratégicas. Entre las principales técnicas de gestión de inventarios se encuentran:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Justo a tiempo (JIT)
                p.mb-0 Reduce los niveles de inventario, permitiendo recibir insumos únicamente cuando se necesitan para la producción.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Sistema de revisión continua
                p.mb-0 Controla los niveles de inventario en tiempo real y realiza pedidos cuando el <em>stock</em> cae por debajo de un umbral determinado.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Planificación de requerimientos de materiales (MRP)
                p.mb-0 Coordina la adquisición de insumos con base en la demanda proyectada y los tiempos de entrega de proveedores.
        
        h2(data-aos="fade-left") Ejemplo práctico: gestión de inventarios en una empresa de dispositivos electrónicos
        p.mb-5 En una empresa de fabricación de dispositivos electrónicos, se establece un nivel mínimo de <em>stock</em> para componentes críticos, como <b>microchips y pantallas</b>, garantizando la continuidad de la producción.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2
        .py-4.px-5.bg-color-1.mb-3(data-aos="fade-up")
          p.mb-0 Para calcular el inventario de seguridad, se analiza el historial de consumo y la variabilidad en el suministro, asegurando respuesta rápida ante fluctuaciones en la demanda o retrasos en entregas.
        p La incorporación de herramientas tecnológicas, como hojas de cálculo avanzadas y <em>software</em> especializado, permite monitorear los inventarios en tiempo real, evitando tanto la escasez como el exceso de productos y optimizando así los recursos y la rentabilidad de la producción.
      .col-lg-4.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema2/9.png", alt="", data-aos="zoom-in")


    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Evaluación de costos para la toma de decisiones estratégicas

    p.mb-4 La evaluación de costos en la toma de decisiones estratégicas es un proceso clave en la gestión financiera, ya que permite:

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        div.bg-color-12.p-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Determinar la viabilidad de proyectos.
      .col-lg-4.mb-3.mb-lg-0
        div.bg-color-12.p-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Optimizar la asignación de recursos.
      .col-lg-4.mb-3.mb-lg-0
        div.bg-color-12.p-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Establecer estrategias competitivas.
    
    p.mb-5 Este análisis implica la recopilación de datos históricos y actuales para proyectar escenarios futuros y definir presupuestos realistas.

    h2(data-aos="fade-left") Ejemplo práctico: evaluación de costos para una nueva línea de productos
    p.mb-5 Una empresa desea lanzar una nueva línea de productos y debe evaluar los costos de producción, como materia prima, mano de obra y gastos indirectos. A partir de estos cálculos, se determina el costo unitario y el precio de venta competitivo.

    .titulo-figura.mb-4
      h5 Tabla 5.
      span Cálculo de costos y precio de venta
    .row.justify-content-center.mb-5
      .col-lg-9.mb-3.mb-lg-0
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="30%") Concepto
                th.text-center.bg-color-3.text-white Cálculo
                th.text-center.bg-color-3.text-white(width="20%") Valor
            tbody
              tr
                td.text-bold Costos directos
                td.text-center Materia prima + Mano de obra directa
                td.text-center Variable
              tr
                td.text-bold Costos indirectos
                td.text-center Gastos administrativos + Mantenimiento
                td.text-center Variable
              tr
                td.text-bold Costo total de producción
                td.text-center Suma de costos directos e indirectos
                td.text-center Variable
              tr
                td.text-bold Costo unitario
                td.text-center Costo total / Unidades producidas
                td.text-center Variable
              tr
                td.text-bold Precio de venta sugerido
                td.text-center Costo unitario + Margen de ganancia
                td.text-center Variable
        p.mb-0.p-4.bg-color-4 La integración de metodologías como el <b>análisis de sensibilidad</b> y la <b>simulación de escenarios</b> optimiza la evaluación, proporcionando información precisa para ajustar estrategias y alcanzar objetivos financieros.

      .col-lg-3
        figure
          img(src="@/assets/curso/tema2/11.svg", alt="", data-aos="zoom-in")
    
    h2.mb-5(data-aos="fade-left") Caso Práctico: Introducción de una nueva línea de smartwatches en TecnoWear
   
    .row.justify-content-center.mb-5
      .col-lg-9.order-2  
        p <em>TecnoWear</em>, empresa del sector tecnológico, planea expandir su portafolio con una nueva línea de <b><em>smartwatches</em></b>. La evaluación de costos permitirá determinar su viabilidad económica y establecer estrategias de precios competitivos.
        .titulo-figura.mb-4
          h5 Tabla 6.
          span Datos del caso
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center.bg-color-3.text-white(width="40%") Concepto
                th.text-center.bg-color-3.text-white(width="60%") Valor
            tbody
              tr
                td.text-bold Proyección de ventas
                td 5,000 unidades
              tr
                td.text-bold Precio de venta proyectado
                td $200 por unidad
              tr
                td.text-bold Costos directos por unidad
                td 
                  p.mb-0 <b>Materia prima y componentes:</b> $80  
                  p.mb-0 <b>Mano de obra directa:</b> $30
              tr
                td.text-bold Costos indirectos
                td 
                  p.mb-0 <b>Variables indirectos por unidad</b> $20  
                  p.mb-0 <b>Fijos anuales: </b> $150.000

      .col-lg-3.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.svg", alt="", data-aos="zoom-in")
    
    h2(data-aos="fade-left") Cálculos
    p.mb-5 A continuación, se presentan los cálculos detallados para la proyección de costos y utilidades en un escenario de producción estimada.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0
    
        AcordionA(tipo="b")
          .div(titulo="Asignación de costos fijos")
            p Costo fijo por unidad = $150,000 ÷ 5,000 = $30
    
          .div(titulo="Costo total por unidad")
            p $80 (materia prima) + $30 (mano de obra) + $20 (variable indirecto) + $30 (fijo asignado) = $160
    
          .div(titulo="FMargen de contribución y rentabilidad")
            p Margen por unidad: $200 - $160 = $40
            p Utilidad total proyectada: 5,000 unidades × $40 = $200,000
    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Análisis y decisión estratégica
        p.mb-5 La evaluación de costos indica que el lanzamiento es financieramente viable. Sin embargo, para optimizar la rentabilidad, se pueden aplicar estrategias como:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center  Optimización de negociación con proveedores 
              p.mb-0.text-center Para reducir costos de materia prima.
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center  Revisión de procesos de producción 
              p.mb-0.text-center Para mejorar la eficiencia en la mano de obra.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center  Reajuste del precio de venta 
              p.mb-0.text-center En función de la respuesta del mercado y la competencia.
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        p.mb-0 Este estudio de caso demuestra cómo la evaluación de costos fortalece la toma de decisiones estratégicas, permitiendo una mejor asignación de recursos y asegurando la sostenibilidad financiera de la organización.




   
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uv.mx/personal/alsalas/files/2013/02/PRESUPUESTOS-I_II.pdf" target="_blank" rel="noopener noreferrer") Función Pública. (n.d.). Relación entre presupuesto, planeación estratégica y toma de decisiones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uv.mx/personal/alsalas/files/2013/02/PRESUPUESTOS-I_II.pdf. " target="_blank" rel="noopener noreferrer") Universidad Veracruzana. (2013). Presupuestos I y II. Recuperado de 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Z0ZDMCR8Wys" target="_blank" rel="noopener noreferrer") Ramírez P. (2019, junio 11). Control y costeo de producción. Universidad continental-Modalidad a distancia. [Video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
