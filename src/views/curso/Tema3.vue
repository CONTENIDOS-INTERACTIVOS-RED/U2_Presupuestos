<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Estrategias de pronóstico y fijación de precios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las estrategias de pronóstico y fijación de precios son fundamentales en la gestión empresarial, ya que integran el análisis de la demanda, la evaluación de costos y la determinación de márgenes de rentabilidad. Contar con una previsión de ventas precisa y una estrategia de precios bien definida permite mantener la competitividad y la sostenibilidad de la organización.
    
    p.mb-4 El proceso de fijación de precios no se limita a sumar los costos de producción a un margen de beneficio, sino que también considera el <b>valor percibido por el consumidor y la posición de la empresa frente a la competencia.</b> Entre los principales métodos se encuentran:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/2.svg" alt="" style="width: 90px")
              h5.text-center  <em>Cost-plus pricing</em>	
              p.mb-0.text-center Se suma un margen de beneficio al costo total de producción.
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/2.svg" alt="" style="width: 90px")
              h5.text-center  <em>Pricing</em> basado en el valor	 
              p.mb-0.text-center Se fija el precio en función del valor percibido por el consumidor..
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/2.svg" alt="" style="width: 90px")
              h5.text-center  Precio dinámico	 
              p.mb-0.text-center Se ajusta el precio en función de la demanda y la competencia.
        .bg-full-width.bg-color-16.mb-5
          .px-4.px-md-5.py-4
            p.mb-0.text-white El uso de herramientas analíticas y modelos de pronóstico facilita la interpretación de datos históricos y la simulación de escenarios futuros, permitiendo estimar la demanda potencial y establecer una estructura de precios alineada con la estrategia comercial.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1]  Métodos de pronóstico de ventas y tendencias del mercado

    p.mb-4 El pronóstico de ventas y el análisis de tendencias permiten anticipar la demanda y orientar la estrategia comercial. Existen dos enfoques principales:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Métodos cuantitativos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Métodos cuantitativos	
            p Basados en datos históricos y modelos estadísticos como series temporales y regresión.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Métodos cualitativos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Métodos cualitativos	
            p Recopilan opiniones de expertos mediante técnicas como el método Delphi.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
    h2(data-aos="fade-left") Caso práctico: Pronóstico de ventas en ElectroNova
    p.mb-5 ElectroNova, empresa de electrodomésticos, observa variaciones estacionales en la demanda. Para optimizar la planificación de producción y marketing, implementa métodos de pronóstico de ventas.

    .row.align-items-center.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema3/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

        LineaTiempoD(data-aos="fade-left")
          p(numero="1" titulo="Recopilación de datos") Registro de ventas de los últimos tres años para identificar patrones.
          p(numero="2" titulo="Métodos cuantitativos") Análisis de series temporales para proyectar un incremento del 10 % en ventas.
          p(numero="3" titulo="Métodos cualitativos") Aplicación del método Delphi con expertos del sector.
          p(numero="4" titulo="Decisión estratégica") Ajuste de producción e inventarios para el último trimestre.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Este análisis permite a ElectroNova <b>anticipar tendencias y asignar recursos de manera óptima</b>, mejorando la competitividad en el mercado.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2]  Factores que influyen en la proyección de la demanda

    p.mb-4 La proyección de la demanda se ve influenciada por múltiples variables:

    .row.mb-3
      .col-lg-4.mb-3(data-aos="fade-up")
        div.bg-color-12.p-4.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.text-center Cambios en la economía	
              p.mb-0 Inflación y tasas de interés afectan el poder adquisitivo.
      .col-lg-4.mb-3(data-aos="fade-down")
        div.bg-color-12.p-4.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.text-center Tendencias de consumo	
              p.mb-0 Preferencias cambiantes de los clientes.
      .col-lg-4.mb-3(data-aos="fade-down")
        div.bg-color-12.p-4.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.text-center Innovación tecnológica	
              p.mb-0 Avances que impactan la demanda de productos tradicionales.
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3(data-aos="fade-up")
        div.bg-color-12.p-4.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.text-center Estacionalidad	
              p.mb-0 Aumento de ventas en fechas clave como Navidad.
      .col-lg-4.mb-3(data-aos="fade-down")
        div.bg-color-12.p-4.h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.text-center Competencia	
              p.mb-0 Estrategias de precios y promociones de otras empresas.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3]  Estrategias de fijación de precios en función de los costos y el mercado

    .bg-full-width.bg-h85
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            p.mt-5 La fijación de precios combina el análisis de costos internos con la evaluación del entorno competitivo. Existen dos enfoques principales:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Precio basado en costos.</b> Se suma un margen de ganancia al costo de producción (<em>cost-plus pricing</em>).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Precio basado en el mercado.</b> Se ajusta según la percepción del consumidor y la competencia.

          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    .bg-full-width.bg-color-17.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Ejemplo práctico: fijación de precios en una empresa de café artesanal

    .titulo-figura.mb-4
      h5 Tabla 7.
      span Ejemplo fijación de precios

    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.text-center.bg-color-3.text-white(width="40%") Elemento
            th.text-center.bg-color-3.text-white Cálculo
            th.text-center.bg-color-3.text-white(width="20%") Precio ($)
        tbody
          tr
            td.text-bold Costo unitario
            td.text-center Materia prima + mano de obra + costos indirectos
            td.text-center $5
          tr
            td.text-bold Precio cost-plus (50 % margen)
            td.text-center $5 + 50 %
            td.text-center $7.50
          tr
            td.text-bold Precio ajustado al mercado
            td.text-center Basado en valor percibido (café orgánico premium)
            td.text-center $9.00
          

    div.p-4.bg-color-10.text-center.mb-5
      p.mb-0 Este análisis permite establecer <b>una estrategia de precios competitiva y rentable.</b>


    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4]  Integración del presupuesto de producción y ventas en la planificación empresarial
    
    p.mb-4 La integración del <b>presupuesto de producción y ventas</b> garantiza la alineación de las proyecciones de ingresos con la capacidad productiva.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Proyección de ventas.
                p.mb-0 Basada en estudios de mercado y tendencias.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/13.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cálculo del presupuesto de producción	
                p.mb-0 Considerando inventario inicial, ventas proyectadas y nivel de stock final deseado.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/14.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ajuste de producción	
                p.mb-0 Evita sobreproducción o déficit de inventario
    
    h2(data-aos="fade-left") Ejemplo práctico: planificación en una empresa de papelería
    p.mb-5 Una empresa proyecta vender <b>10,000 unidades</b> en un trimestre. Se calcula la producción necesaria, considerando niveles de stock, para <b>optimizar recursos y evitar sobrealmacenamiento.</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .py-4.px-5.bg-color-2.mb-3(data-aos="fade-up")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El uso de herramientas como hojas de cálculo avanzadas o software especializado facilita la actualización y seguimiento del presupuesto, permitiendo ajustes en función del mercado.
        p La integración del presupuesto de producción y ventas mejora la eficiencia operativa y la sostenibilidad financiera, permitiendo ajustes estratégicos oportunos en respuesta a cambios del entorno empresarial.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Caso de estudio: integración del presupuesto de producción y ventas en EcoPrint
            p.mb-4(data-aos="fade-right") Se invita a explorar cómo <b>EcoPrint</b>, una empresa de papel ecológico, ha optimizado su gestión mediante la integración del presupuesto de producción y ventas. En este caso de estudio, se analizarán estrategias clave como la proyección de ventas, el cálculo de costos, la gestión de inventarios y la fijación de precios, elementos esenciales para una planificación empresarial eficiente.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Caso de estudio: integración del presupuesto de producción y ventas en EcoPrint.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/17.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.studocu.com/co/document/universidad-ces/fundamentos-de-la-contabilidad/resumen-capitulo-1-analisis-presupuestal-de-produccion-y-ventas/40604915" target="_blank" rel="noopener noreferrer") Actualícese. (n.d.). Fundamentos del presupuesto de producción y ventas. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.calameo.com/read/004075243fc618d016584" target="_blank" rel="noopener noreferrer") Zuleta, J. I. (2014). El presupuesto de producción e inventarios: Documento de referencia. Eumed.net. Recuperado de 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HCQ4xeBkptA " target="_blank" rel="noopener noreferrer") Montero J. (2023, julio 10). Cómo calcular el precio de venta. Julián Montero. [Video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes es un componente clave en la producción?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Materia prima, mano de obra y maquinaria',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Documentación financiera',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Gestión de ventas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Planificación de marketing',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '2.	¿Cómo se clasifican comúnmente los inventarios en la producción? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Materia prima, productos en proceso y productos terminados',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Activos, pasivos y capital',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Productos frescos y perecederos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Bienes tangibles e intangibles',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué se busca con el uso de tendencias y pronósticos de ventas? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Determinar los precios de los competidores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reducir costos fijos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Anticipar la demanda del mercado y planear la producción',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Registrar los ingresos pasados',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'La fijación del precio de venta de un producto debe considerar: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo los costos fijos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La inflación actual',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Los costos totales, el margen de ganancia y la competencia en el mercado',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El flujo de caja del mes anterior',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué sucede si los pronósticos de ventas son inexactos? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La empresa reduce su capacidad de endeudamiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Puede haber problemas de sobreproducción o desabastecimiento',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumenta la rentabilidad inmediata',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se elimina la necesidad de control de inventarios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
