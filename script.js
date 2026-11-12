/* ===== CONTENIDO (edita aquí para completar/ajustar texto del PDF) ===== */
/* ===== IMÁGENES (alojadas junto al sitio; cambia aquí las rutas si usas otros archivos) ===== */
const IMG={org:'organigrama.png',caps:['cap1.svg','cap2.svg','cap3.svg','cap4.svg','cap5.svg']};

const P=(t,x)=>`<h3>${t}</h3><p>${x}</p>`;
const T=(h,r)=>`<div class="tw"><table><tr>${h.map(c=>`<th>${c}</th>`).join('')}</tr>${r.map(f=>`<tr>${f.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const L=u=>u?`<a href="${u}" target="_blank" rel="noopener">${u}</a>`:'—';

const AREAS=[
["Dirección General y Calidad",[
["Planeación de objetivos","Fijar objetivos anuales de calidad medibles","Acta de objetivos de calidad","Que las metas fueron acordadas y tienen responsable (ISO 9001, 6.2)."],
["Control de documentos","Mantener vigentes procedimientos y formatos","Lista maestra de documentos","Que solo se usan versiones autorizadas (ISO 9001, 7.5.2)."],
["Auditoría interna","Revisar una vez al año el cumplimiento del sistema","Informe de auditoría interna","Que se verificó el sistema con evidencia (ISO 9001, 9.2)."],
["Tratamiento de no conformidades","Registrar fallas y eliminar su causa","Formato de no conformidad y acción correctiva","Que cada falla tuvo causa y acción de cierre (ISO 9001, 10.2)."],
["Revisión por la dirección","Evaluar resultados y decidir mejoras","Acta de revisión por la dirección","Que la dirección revisó el desempeño y asignó recursos (ISO 9001, 9.3)."]]],
["Compras",[
["Detección de necesidad","Identificar la refacción faltante a partir de las solicitudes del taller","Requisición de compra o solicitud de material","El gasto interno solicitado por el taller."],
["Selección de proveedor","Comparar al menos tres cotizaciones","Cuadro comparativo de cotizaciones","Por qué se eligió a un proveedor frente a sus competidores."],
["Formalización del pedido","Confirmar cantidad, precio y fecha de entrega","Orden de compra","El compromiso con el proveedor y el precio acordado."],
["Recepción de mercancía","Verificar que lo recibido coincide con lo pedido y funciona","Remisión o factura sellada con revisión de recepción","Que la pieza llegó completa y en buen estado antes de usarse."],
["Evaluación de proveedores","Calificar entregas, calidad y precio cada semestre","Registro de evaluación de proveedores","Qué proveedores permanecen aprobados (ISO 9001, 8.4)."],
["Reposición de inventario","Reabastecer refacciones de mayor rotación","Control de inventario con mínimos y máximos","Que no falten piezas de uso frecuente."]]],
["Finanzas",[
["Cobro del servicio","Cobrar al entregar el equipo","Nota de venta o recibo de pago","Que el cliente pagó el monto presupuestado."],
["Facturación","Emitir comprobante fiscal cuando el cliente lo solicita","CFDI","El cumplimiento fiscal de la venta."],
["Corte de caja","Conciliar el dinero recibido cada día","Reporte diario de caja","Que ingresos y efectivo coinciden."],
["Pago a proveedores","Pagar facturas en la fecha pactada","Comprobante de pago con factura y orden de compra","Que el pago corresponde a una compra autorizada."],
["Control de costos","Comparar costo de refacciones contra precio de venta","Reporte mensual de ingresos y egresos","Que los servicios son rentables y los precios se ajustan."]]],
["Ventas y Atención al Cliente",[
["Recepción del equipo","Registrar cliente, equipo, falla y estado físico con fotografías","Orden de servicio con inventario de recepción","En qué condiciones llegó el equipo, para evitar disputas."],
["Validación de autorización","Solicitar identificación o comprobante de propiedad en procedimientos de seguridad","Carta de autorización firmada con copia de identificación","Que el cliente es propietario o consiente el procedimiento."],
["Presupuesto","Informar costo, tiempo y garantía antes de reparar","Presupuesto con aceptación del cliente","Que el cliente conoce y aprobó el costo (LFPC)."],
["Seguimiento al cliente","Avisar avance y retrasos","Registro de comunicación en la orden de servicio","Que el cliente estuvo informado."],
["Entrega del equipo","Entregar con prueba en presencia del cliente","Comprobante de entrega y garantía","Que el cliente recibió el equipo funcionando y conoce su garantía."],
["Medición de satisfacción","Aplicar encuesta breve y atender quejas","Encuesta de satisfacción y registro de quejas","Si se cumplen las expectativas del cliente (ISO 9001, 9.1.2)."]]],
["Servicio Técnico",[
["Asignación del técnico","Asignar la orden según carga y especialidad","Orden de servicio con técnico asignado","Quién es responsable de la reparación."],
["Diagnóstico","Identificar la falla con pruebas estandarizadas","Hoja de diagnóstico técnico","La causa de la falla y la reparación propuesta."],
["Solicitud de refacciones","Pedir piezas al área de compras","Solicitud de material","Que la compra nace de una necesidad real del taller."],
["Reparación","Ejecutar la reparación aprobada","Bitácora técnica de la orden","Qué piezas y pasos se usaron y quién los hizo."],
["Pruebas de funcionamiento","Verificar pantalla, batería, carga, cámaras y conectividad","Lista de verificación final","Que el equipo quedó funcionando antes de entregarse."],
["Control de equipos y herramienta","Dar mantenimiento al equipo de taller","Registro de mantenimiento de herramienta","Que los recursos de medición y trabajo son confiables (ISO 9001, 7.1.5)."],
["Manejo de residuos","Separar baterías y partes desechadas","Registro de residuos entregados a acopio","Cumplimiento ambiental de la LGPGIR."]]]
];

const GLOS=[
["Sistema de gestión de la calidad","Conjunto de procesos, responsabilidades y recursos con los que SMARTFIX planea, controla y mejora la calidad de sus servicios.","Gestión de la calidad","ISO 9000:2015, vocabulario de sistemas de gestión."],
["Calidad","Grado en que el servicio entregado cumple las necesidades y expectativas del cliente y los requisitos aplicables.","Gestión de la calidad","ISO 9000:2015, fundamentos."],
["Cliente","Persona que solicita y recibe un servicio técnico para uno o más dispositivos.","Partes interesadas","ISO 9000:2015; LFPC, que lo identifica como consumidor."],
["Parte interesada","Persona u organización que puede afectar o ser afectada por las decisiones y actividades de SMARTFIX.","Partes interesadas","ISO 9001:2015, cláusula 4.2."],
["Proveedor","Persona o empresa que suministra refacciones, accesorios o herramientas a SMARTFIX.","Procesos","ISO 9000:2015; ISO 9001, cláusula 8.4."],
["Dispositivo","Equipo Android (teléfono o tableta) registrado en el sistema para recibir un servicio.","Operación","Definición operativa del proyecto SMARTFIX."],
["Orden de servicio","Registro que concentra cliente, dispositivo, diagnóstico, presupuesto, técnico, estado y seguimiento de una solicitud.","Operación","Información documentada, ISO 9001, cláusula 7.5."],
["Diagnóstico","Proceso para identificar la falla o condición técnica de un dispositivo antes de repararlo.","Operación","Entrada de la prestación del servicio, ISO 9001, cláusula 8.5."],
["Presupuesto","Estimación escrita de costos de piezas, mano de obra y tiempo, que el cliente debe aceptar antes de reparar.","Operación","LFPC, obligación de informar el precio antes de prestar el servicio."],
["Garantía","Compromiso por escrito de corregir sin costo las fallas atribuibles a la reparación durante un plazo definido.","Servicio al cliente","LFPC, capítulo sobre garantías."],
["FRP (Factory Reset Protection)","Mecanismo de Android que impide usar un equipo tras restablecerlo sin la cuenta autorizada.","Seguridad","Documentación del sistema Android; definición del proyecto."],
["Autorización","Confirmación documentada de que el cliente es propietario o consiente un procedimiento sobre su equipo.","Seguridad","Principio de uso responsable del proyecto; LFPDPPP en el manejo de datos."],
["Bitácora","Registro cronológico de operaciones del sistema con usuario, fecha, acción y resultado.","Control","ISO 9001, cláusula 7.5.3, control de registros."],
["Información documentada","Información que SMARTFIX debe controlar y conservar, como procedimientos y registros.","Control","ISO 9001:2015, cláusula 7.5."],
["No conformidad","Incumplimiento de un requisito, por ejemplo una reparación entregada con falla o un registro incompleto.","Mejora","ISO 9001:2015, cláusula 10.2."],
["Acción correctiva","Acción para eliminar la causa de una no conformidad y evitar que se repita.","Mejora","ISO 9001:2015, cláusula 10.2."],
["Auditoría interna","Revisión sistemática e independiente para comprobar si el sistema cumple lo planeado.","Mejora","ISO 9001, cláusula 9.2; NMX-CC-19011-IMNC."],
["Riesgo","Efecto de la incertidumbre sobre los resultados esperados, por ejemplo falta de refacciones o pérdida de datos.","Gestión de la calidad","ISO 9001:2015, cláusula 6.1."],
["Aviso de privacidad","Documento que informa al cliente qué datos se recaban, para qué y cómo ejercer sus derechos.","Legal","LFPDPPP."],
["CFDI","Comprobante fiscal digital por internet que ampara servicios y ventas.","Legal","Código Fiscal de la Federación."],
["Rol","Conjunto de permisos que define lo que un usuario puede hacer en el sistema digital.","Sistema digital","Definición operativa del proyecto."]
];
const D="https://www.diputados.gob.mx/LeyesBiblio/pdf/";
const REFS=[
["Sistemas de gestión de la calidad – Requisitos","NMX-CC-9001-IMNC-2015 (equivalente a ISO 9001:2015)","2015 (declaratoria de vigencia en el DOF)","Norma base del proyecto. Establece los requisitos del SGC de SMARTFIX; fuente de los capítulos 4 a 10.","https://repositorio.buap.mx/rcontraloria/public/inf_public/2019/0/NOM_ISO_9001-2015.pdf"],
["Sistemas de gestión de la calidad – Fundamentos y vocabulario","NMX-CC-9000-IMNC-2015 (equivalente a ISO 9000:2015)","2015","Define el vocabulario y los principios de la gestión de la calidad; sustenta el capítulo 3.","https://repositorio.buap.mx/rcontraloria/public/inf_public/2019/0/NOM_ISO_9001-2015.pdf"],
["Directrices para la auditoría de los sistemas de gestión","NMX-CC-19011-IMNC-2018 (equivalente a ISO 19011:2018)","2018","Orienta la planeación y ejecución de las auditorías internas (cláusula 9.2).","https://reii.tese.edu.mx/ccyt_reii_files/4315_NUCMMU.pdf"],
["Ley Federal de Protección al Consumidor","LFPC","24 de diciembre de 1992 (con reformas)","Regula la relación con el cliente: información clara, presupuestos, garantías por escrito, comprobantes.",D+"LFPC.pdf"],
["Ley Federal de Protección de Datos Personales en Posesión de los Particulares","LFPDPPP","Ley vigente publicada en el DOF el 20 de marzo de 2025 (sustituye a la de 2010)","Obliga a proteger los datos de clientes y contar con aviso de privacidad; respalda roles, permisos y bitácora.",D+"LFPDPPP.pdf"],
["Ley de Infraestructura de la Calidad","LIC","1 de julio de 2020","Marco legal de normalización, evaluación de la conformidad y metrología; fundamenta el uso de normas NMX y NOM.",D+"LIC.pdf"],
["Información comercial para productos electrónicos, eléctricos y electrodomésticos","NOM-024-SCFI-2013","2013 (DOF)","Información comercial que debe acompañar a los productos electrónicos que SMARTFIX venda.","https://www.gob.mx/cms/uploads/attachment/file/483864/Norma_Oficial_Mexicana_NOM-003-SCFI2014_Productos_el_EctricosEspecificaciones_de_seguridad.pdf"],
["Factores de riesgo psicosocial en el trabajo","NOM-035-STPS-2018","23 de octubre de 2018","Identificar y prevenir factores de riesgo psicosocial (ISO 9001, 7.1.4).","https://asinom.stps.gob.mx/upload/nom/48.pdf"],
["Prevención y protección contra incendios en los centros de trabajo","NOM-002-STPS-2010","9 de diciembre de 2010","Aplica al taller por el uso de baterías, soldadura y herramientas eléctricas.","https://dof.gob.mx/normasOficiales/4228/stps/stps.htm"],
["Ley General para la Prevención y Gestión Integral de los Residuos","LGPGIR","8 de octubre de 2003","Regula el manejo de baterías, pantallas y componentes electrónicos desechados.",D+"LGPGIR.pdf"],
["Código Fiscal de la Federación","CFF","31 de diciembre de 1981 (con reformas)","Fundamenta la emisión de CFDI por los servicios y ventas.",D+"CFF.pdf"]
];

const CH=[
{n:"Objeto y campo de aplicación",c:"var(--c1)",d:"Empresa, actividad, servicios y alcance del sistema de calidad.",h:()=>
P("Nombre de la empresa","La organización se denomina SMARTFIX, Centro de Servicio Técnico Especializado en Dispositivos Android. El nombre se utiliza tanto para el negocio físico, donde se recibe y repara el equipo del cliente, como para el sistema digital que administra sus órdenes de servicio, y será la identidad con la que se documente todo el sistema de gestión de la calidad.")+
P("Actividad económica","Reparación y mantenimiento de teléfonos inteligentes y tabletas Android, complementada con venta de refacciones, accesorios y servicios de software. Es una microempresa de servicios técnicos que, en el SCIAN, se ubica en la reparación y mantenimiento de equipo electrónico de uso doméstico y personal. Opera en territorio mexicano bajo la normativa fiscal, laboral y de protección al consumidor aplicable.")+
P("Productos o servicios ofrecidos","El servicio central es la reparación de dispositivos Android: diagnóstico técnico, cambio de pantalla, batería, puerto de carga, cámaras y otros componentes, además de la corrección de fallas de software como actualizaciones fallidas, lentitud o pérdida de funcionalidades. Cada servicio parte de un diagnóstico previo y de un presupuesto que el cliente acepta antes de intervenir su equipo. Como servicios complementarios: respaldo y migración de información, limpieza y mantenimiento preventivo, y venta de accesorios y refacciones. También se atienden procedimientos relacionados con mecanismos de seguridad como la protección contra restablecimiento (FRP), únicamente cuando el cliente demuestra la propiedad del equipo o presenta una autorización válida, registrada en la orden de servicio y en la bitácora. El producto digital es la plataforma SMARTFIX, que centraliza clientes, dispositivos, órdenes, diagnósticos, presupuestos, técnicos, reparaciones y reportes. Todo servicio incluye comprobante de recepción, seguimiento del estado de la orden y garantía por escrito.")+
P("Alcance del sistema de calidad","Basado en ISO 9001:2015, cubre el ciclo completo: recepción y registro del cliente, diagnóstico, autorización cuando corresponda, presupuesto y aceptación, compra de refacciones, reparación, pruebas, entrega con garantía y seguimiento; además ventas, compras, finanzas y control de documentos y registros. Se aplica a la sede del centro de servicio y a todo el personal involucrado. Queda fuera la fabricación de dispositivos o piezas y la reparación de plataformas distintas de Android. Aplican los requisitos de los capítulos 4 a 10; diseño y desarrollo se declara no aplicable al servicio de reparación, y para la plataforma digital se sigue la metodología de proyecto de 12 semanas ya definida.")},
{n:"Referencias normativas",c:"var(--c2)",d:"Normas y leyes que sustentan el sistema, con sus enlaces.",h:()=>
T(["Nombre del documento","Código o identificador","Fecha de publicación","Descripción","Enlace"],REFS.map(r=>[r[0],r[1],r[2],r[3],L(r[4])]))},
{n:"Términos y definiciones",c:"var(--c3)",d:"Glosario del sistema con buscador de conceptos.",h:()=>
`<input class="search" id="q" type="search" placeholder="Buscar un concepto…" aria-label="Buscar concepto"><div id="gl"></div>`,after:()=>{
 const q=document.getElementById('q'),g=document.getElementById('gl');
 const hl=(s,k)=>k?s.replace(new RegExp('('+k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi'),'<mark>$1</mark>'):s;
 const draw=()=>{const k=q.value.trim(),n=k.toLowerCase();
  const r=GLOS.filter(x=>x.join(' ').toLowerCase().includes(n));
  g.innerHTML=r.length?T(["Término","Definición","Categoría","Sustento de la definición"],r.map(x=>x.map(c=>hl(c,k)))):'<p class="empty">No se encontró ningún concepto con esa búsqueda.</p>'};
 q.oninput=draw;draw()}},
{n:"Contexto de la organización",c:"var(--c4)",d:"Descripción, misión, visión, factores y partes interesadas.",h:()=>
P("Descripción de la organización","SMARTFIX es un centro de servicio técnico pequeño, con un equipo reducido que concentra funciones administrativas, comerciales y técnicas. Hoy la información de clientes, equipos, diagnósticos, piezas y costos suele manejarse en notas, mensajes y memoria de las personas, lo que dificulta el seguimiento y los reportes confiables. La plataforma nace para centralizar esa información y darle trazabilidad. Ventas recibe al cliente y su equipo, el servicio técnico diagnostica y repara, y compras y finanzas abastecen refacciones y controlan el dinero.")+
P("Misión","Proporcionar una solución tecnológica integral para la gestión de servicios técnicos de dispositivos Android, centralizando la información de clientes, equipos, diagnósticos, presupuestos y reparaciones mediante procesos organizados, seguros y trazables que mejoren la atención al cliente y la eficiencia operativa.")+
P("Visión","Ser una solución tecnológica de referencia para centros de servicio técnico de dispositivos Android, reconocida por facilitar la administración de reparaciones, mejorar el seguimiento de los servicios y promover procesos seguros, eficientes y transparentes.")+
P("Valores","Responsabilidad, seguridad, transparencia, calidad, innovación, confidencialidad, trabajo en equipo y ética profesional: cumplir la fecha prometida, no intervenir un equipo sin autorización, informar el costo antes de reparar y no compartir datos personales.")+
`<h3>Factores internos y externos</h3>`+T(["Tipo","Factor","Efecto sobre SMARTFIX"],[
["Interno","Equipo pequeño con conocimiento técnico concentrado en pocas personas","Riesgo de retrasos si alguien falta; se mitiga documentando procedimientos."],
["Interno","Información dispersa en distintos medios","Dificulta el seguimiento; se resuelve con la plataforma digital."],
["Interno","Capacidad limitada de inventario por capital reducido","Obliga a comprar bajo pedido y a controlar reposiciones."],
["Interno","Herramientas de desarrollo disponibles (Android Studio, VS Code, Java, MySQL, XAMPP)","Permiten construir el prototipo con bajo costo."],
["Externo","Dependencia de proveedores de refacciones nacionales e importadas","Variaciones de precio y tiempos de entrega afectan los presupuestos."],
["Externo","Competencia de talleres informales y de centros de servicio de marcas","Exige diferenciarse por trazabilidad, garantía por escrito y trato claro."],
["Externo","Cambios frecuentes de modelos Android y de sus mecanismos de seguridad","Requiere capacitación continua y validación de autorización."],
["Externo","Marco legal de protección al consumidor y de datos personales","Obliga a presupuestos, garantías y avisos de privacidad formales."],
["Externo","Riesgo de uso indebido de servicios de desbloqueo","Se controla con validación de propiedad y bitácora."]])+
`<h3>Partes interesadas y sus necesidades</h3>`+T(["Parte interesada","Necesidades y expectativas"],[
["Clientes","Reparación confiable, costo claro antes de iniciar, tiempos cumplidos, información del estado de su equipo, protección de sus datos y garantía."],
["Técnicos","Información ordenada del equipo, herramientas y refacciones disponibles, instrucciones claras y reconocimiento de su trabajo."],
["Administrador o dirección","Control de órdenes, presupuestos, ventas, costos y reportes para decidir con datos."],
["Proveedores","Pedidos claros, pagos puntuales y relación comercial estable."],
["Líder del proyecto y equipo de desarrollo","Requisitos definidos, alcance acotado y comunicación continua."],
["Responsable de calidad","Registros completos para auditar, incidencias documentadas y pruebas de funcionamiento."],
["Autoridades (SAT, Profeco)","Comprobantes fiscales correctos, garantías por escrito y trato justo al consumidor."]])+
P("Alcance del sistema de gestión","Abarca recepción, diagnóstico, presupuesto, reparación, pruebas, entrega y seguimiento de dispositivos Android, junto con los procesos de apoyo de ventas, compras, finanzas y control documental, en la sede de SMARTFIX.")+
P("Procesos principales de la empresa","Estratégicos: planeación y revisión por la dirección y gestión de la calidad. Operativos: registro del cliente y del dispositivo, selección del servicio, diagnóstico, validación de autorización, presupuesto, aceptación del cliente, asignación de técnico, reparación, pruebas de funcionamiento, actualización del estado, generación de reporte, entrega y cierre de la orden. De apoyo: compras y reposiciones, finanzas y facturación, control de documentos y registros, y mantenimiento de la plataforma.")},
{n:"Liderazgo",c:"var(--c5)",d:"Política, roles, organigrama y procesos por área (descargables).",h:()=>
P("Responsable de calidad","La dirección designa un Responsable de Calidad como representante ante el sistema; por el tamaño de la empresa puede recaer en el área administrativa. Mantiene actualizada la información documentada, programa y da seguimiento a auditorías internas, registra y cierra no conformidades y acciones correctivas, y reporta a la dirección el desempeño del sistema.")+
P("Política de calidad","En SMARTFIX nos comprometemos a reparar los dispositivos Android de nuestros clientes con calidad, transparencia y seguridad: informamos el costo antes de intervenir, entregamos cada equipo probado y con garantía por escrito, protegemos los datos personales y realizamos procedimientos de seguridad únicamente con la autorización del propietario. Cumplimos los requisitos legales aplicables y mejoramos de manera continua nuestro sistema de gestión.")+
P("Objetivos de calidad medibles","Entregar al menos 95 % de las reparaciones en el plazo prometido; mantener las reparaciones con reclamo de garantía por debajo de 5 %; registrar 100 % de las órdenes con autorización y presupuesto aceptado; y alcanzar una satisfacción del cliente de al menos 90 %.")+
`<h3>Roles y responsabilidades</h3>`+T(["Rol","Responsabilidades principales"],[
["Dirección general","Define la política y los objetivos, asigna recursos, aprueba presupuestos de gasto y encabeza la revisión por la dirección."],
["Responsable de calidad","Mantiene el sistema, controla documentos y registros, coordina auditorías y da seguimiento a no conformidades."],
["Administración, compras y finanzas","Gestiona requisiciones, cotizaciones, órdenes de compra, pagos, facturación y evaluación de proveedores."],
["Ventas y atención al cliente","Recibe al cliente, registra equipo y orden, elabora y comunica el presupuesto, entrega el equipo y da seguimiento posventa."],
["Técnico de servicio","Diagnostica, repara, prueba y documenta cada intervención, y solicita refacciones."],
["Administrador de la plataforma","Gestiona usuarios, roles, permisos, respaldos y reportes del sistema digital."]])+
P("Compromiso de la dirección","Aprueba y comunica la política, fija objetivos medibles, provee personal, herramientas y refacciones, y revisa el sistema al menos una vez al año en una reunión documentada en acta. Promueve el enfoque a procesos y el pensamiento basado en riesgos, y respalda al Responsable de Calidad ante incumplimientos.")+
P("Enfoque al cliente","Se identifican los requisitos desde la recepción mediante una entrevista breve y un registro del estado del equipo. El cliente conoce costo, tiempo estimado y garantía antes de aceptar, recibe avisos de avance y su información está protegida. La satisfacción se mide con una encuesta breve al entregar y las quejas se atienden con acciones correctivas.")+
`<h3>Organigrama</h3><figure class="orgfig"><img src="${IMG.org}" alt="Organigrama de SMARTFIX. Dirección General, a cargo de Serafín Espejo Gerardo, de la que depende el Responsable de Calidad, Mario Rodríguez Salas. De este se derivan tres áreas: Administración, Compras y Finanzas (Luis Castillo Mesa), con encargado de compras y proveedores, auxiliar administrativo y encargado de caja, facturación y pagos; Ventas y Atención al Cliente (Carlos Ayala López), con recepcionista y asesor de presupuestos; y Servicio Técnico (Arturo Velázquez Vázquez), con técnicos de reparación y auxiliar de taller y almacén." loading="lazy"></figure>`+
P("Flujo entre áreas","Ventas recibe al cliente y genera el presupuesto; Servicio Técnico repara y envía solicitudes de material; Compras cotiza y reabastece con el proveedor (reposiciones); Finanzas registra cobros y pagos; Ventas entrega el equipo y da seguimiento.")+
`<h3>Procesos por área</h3><p>Descarga en PDF la tabla de cada área o consulta con «Ver ejemplo» el documento que justifica cada proceso; desde la vista previa podrás descargarlo en PDF.</p>`+
AREAS.map((a,i)=>`<div class="area"><h3>Procesos del área de ${a[0]}</h3><button class="btn sm" data-area="${i}">Descargar procesos del área (PDF)</button>`+
T(["Proceso","Acción específica","Documento que lo respalda","Qué justifica","Ejemplo"],a[1].map((r,j)=>[...r,`<button class="btn sm" data-doc="${i}-${j}">Ver ejemplo</button>`]))+`</div>`).join(''),
after:()=>{
 document.querySelectorAll('[data-area]').forEach(b=>b.onclick=()=>pdfArea(+b.dataset.area));
 document.querySelectorAll('[data-doc]').forEach(b=>b.onclick=()=>{const[i,j]=b.dataset.doc.split('-');openDoc(+i,+j)})}}
];

/* ===== EJEMPLOS DE DOCUMENTOS (Capítulo 5) =====
   Cada documento: "Campo=Valor|Campo=Valor". Los datos son ficticios; edítalos aquí si quieres otros ejemplos. */
const DOCS={
"Acta de objetivos de calidad":"Fecha=02/01/2027|Objetivo=Entregar 95% de las reparaciones en el plazo prometido|Indicador=Órdenes entregadas a tiempo / órdenes totales|Meta=95%|Responsable=Responsable de Calidad|Revisión=Trimestral",
"Lista maestra de documentos":"Código=FO-CAL-01|Documento=Orden de servicio|Versión=2|Vigente desde=01/01/2027|Responsable=Calidad|Ubicación=Plataforma SMARTFIX",
"Informe de auditoría interna":"Fecha=15/06/2027|Proceso auditado=Recepción y entrega|Hallazgo=3 órdenes sin autorización firmada|Tipo=No conformidad menor|Acción propuesta=Reforzar la revisión en recepción|Auditor=Auditor interno",
"Formato de no conformidad y acción correctiva":"Folio=NC-004|Descripción=Equipo entregado con carga intermitente|Causa raíz=Puerto de carga mal soldado|Acción correctiva=Reparación sin costo y revisión del procedimiento de soldadura|Responsable=Técnico de servicio|Fecha de cierre=20/03/2027|¿Fue efectiva?=Sí",
"Acta de revisión por la dirección":"Fecha=10/12/2027|Asistentes=Dirección, Calidad, Compras, Ventas y Servicio|Temas=Objetivos, quejas, auditorías y proveedores|Decisiones=Comprar una estación de aire caliente|Recursos asignados=$8,500|Seguimiento=Responsable de Calidad",
"Requisición de compra o solicitud de material":"Folio=REQ-021|Fecha=05/03/2027|Solicita=Servicio Técnico|Material=Pantalla AMOLED modelo X (2 piezas)|Motivo=Reparaciones en espera|Orden relacionada=OS-0345|Autoriza=Administración",
"Cuadro comparativo de cotizaciones":"Folio=CC-012|Material=Pantalla AMOLED modelo X|Proveedor A=$780, entrega en 2 días, garantía de 90 días|Proveedor B=$720, entrega en 5 días, garantía de 30 días|Proveedor C=$810, entrega en 1 día, garantía de 90 días|Proveedor elegido=Proveedor A|Justificación=Mejor garantía y tiempo de entrega con precio razonable",
"Orden de compra":"Folio=OC-034|Fecha=06/03/2027|Proveedor=Proveedor A|Descripción=Pantalla AMOLED modelo X|Cantidad=2|Precio unitario=$780|Entrega=08/03/2027|Condición de pago=Contra entrega",
"Remisión o factura sellada con revisión de recepción":"Documento=Remisión 8812|Orden de compra=OC-034|Cantidad recibida=2 de 2|Prueba de encendido=Correcta|Daños=Ninguno|Recibió=Encargado de almacén|Fecha=08/03/2027",
"Registro de evaluación de proveedores":"Periodo=Enero a junio de 2027|Proveedor=Proveedor A|Puntualidad=9/10|Calidad=9/10|Precio=8/10|Resultado=Aprobado|Acción=Mantener como proveedor principal",
"Control de inventario con mínimos y máximos":"Refacción=Batería modelo Y|Existencia=3|Mínimo=5|Máximo=15|Acción=Pedir 10 piezas|Último movimiento=Salida por OS-0351",
"Nota de venta o recibo de pago":"Folio=NV-1207|Fecha=10/03/2027|Cliente=Cliente de ejemplo|Concepto=Cambio de pantalla (OS-0345)|Monto=$1,450|Forma de pago=Efectivo|Recibió=Caja",
"CFDI":"Folio fiscal=Lo asigna el SAT al timbrar|Emisor=SMARTFIX (RFC de la empresa)|Receptor=Datos fiscales del cliente|Concepto=Servicio de reparación|Subtotal=$1,250|IVA 16%=$200|Total=$1,450",
"Reporte diario de caja":"Fecha=10/03/2027|Fondo inicial=$500|Ingresos en efectivo=$3,200|Ingresos por transferencia=$1,900|Egresos=$450|Efectivo esperado=$3,250|Efectivo contado=$3,250|Diferencia=$0",
"Comprobante de pago con factura y orden de compra":"Pago=PG-019|Proveedor=Proveedor A|Factura=A-5521|Orden de compra=OC-034|Monto=$1,560|Fecha de pago=15/03/2027|Método=Transferencia|Autorizó=Dirección",
"Reporte mensual de ingresos y egresos":"Mes=Marzo de 2027|Ingresos por servicio=$48,000|Venta de accesorios=$9,500|Costo de refacciones=$21,000|Gastos operativos=$16,000|Utilidad=$20,500|Observación=Revisar el precio de las baterías",
"Orden de servicio con inventario de recepción":"Folio=OS-0345|Fecha=05/03/2027|Cliente=Cliente de ejemplo, tel. 55 0000 0000|Equipo=Android modelo X, IMEI registrado|Falla reportada=No da imagen|Estado físico=Marco rayado, pantalla estrellada|Accesorios=Funda, sin cargador|Fotografías=3 adjuntas|Firma del cliente=Sí",
"Carta de autorización firmada con copia de identificación":"Fecha=05/03/2027|Cliente=Nombre del propietario|Declaro=Ser propietario del equipo con IMEI registrado|Autorizo=Desbloqueo de cuenta (FRP)|Identificación=INE, copia anexa|Comprobante de propiedad=Ticket de compra|Firmas=Cliente y recepcionista",
"Presupuesto con aceptación del cliente":"Folio=PR-0345|Servicio=Cambio de pantalla|Refacción=$780|Mano de obra=$470|Total=$1,250 más IVA|Tiempo estimado=2 días hábiles|Garantía=90 días|Aceptación=Firma del cliente o confirmación en la plataforma",
"Registro de comunicación en la orden de servicio":"Orden=OS-0345|Fecha y hora=06/03/2027 11:00|Medio=Llamada telefónica|Mensaje=Refacción en camino, entrega estimada el 08/03|Respuesta del cliente=De acuerdo|Registró=Recepción",
"Comprobante de entrega y garantía":"Orden=OS-0345|Fecha de entrega=08/03/2027|Trabajo realizado=Cambio de pantalla|Pruebas=Táctil, imagen, cámara y carga correctas|Garantía=90 días, cubre pieza y mano de obra|No cubre=Golpes y humedad|Recibió=Firma del cliente",
"Encuesta de satisfacción y registro de quejas":"Orden=OS-0345|Trato (1 a 5)=5|Tiempo (1 a 5)=4|Calidad (1 a 5)=5|¿Recomendaría el servicio?=Sí|Comentario=Rápido y claro|Queja registrada=Ninguna",
"Orden de servicio con técnico asignado":"Orden=OS-0345|Técnico=Técnico 1|Especialidad=Hardware|Carga actual=3 equipos|Fecha de asignación=05/03/2027|Prioridad=Normal",
"Hoja de diagnóstico técnico":"Orden=OS-0345|Pruebas=Encendido, táctil, imagen y carga|Falla encontrada=Panel dañado, placa sin daño|Causa=Golpe|Solución propuesta=Cambio de pantalla|Refacción=Pantalla modelo X|Tiempo estimado=2 horas|Técnico=Técnico 1",
"Solicitud de material":"Folio=SM-018|Orden=OS-0345|Pieza=Pantalla modelo X|Cantidad=1|Urgencia=Alta|Solicita=Técnico 1|Destino=Compras",
"Bitácora técnica de la orden":"Orden=OS-0345|Inicio=08/03/2027 10:00|Pasos=Desarme, cambio de pantalla y sellado|Pieza usada=Pantalla del lote 8812|Incidencias=Ninguna|Fin=08/03/2027 11:30|Técnico=Técnico 1",
"Lista de verificación final":"Orden=OS-0345|Encendido=Correcto|Táctil=Correcto|Imagen=Correcto|Cámaras=Correcto|Carga=Correcto|Wi-Fi y datos=Correcto|Aprobó=Técnico 1",
"Registro de mantenimiento de herramienta":"Equipo=Estación de aire caliente|Fecha=01/03/2027|Actividad=Limpieza y verificación de temperatura|Resultado=Correcto|Próximo mantenimiento=01/06/2027|Responsable=Técnico 2",
"Registro de residuos entregados a acopio":"Fecha=28/02/2027|Residuo=Baterías y pantallas dañadas|Cantidad=6 piezas|Destino=Centro de acopio autorizado|Comprobante=Folio del centro de acopio|Responsable=Auxiliar de taller"};
const fields=t=>(DOCS[t]||'Folio=SF-2026-0001|Fecha=____/____/______|Responsable=____________________|Resultado=Conforme / No conforme|Observaciones=____________________').split('|').map(x=>{const k=x.indexOf('=');return[x.slice(0,k),x.slice(k+1)]});

/* ===== PDF ===== */
const NAVY=[20,18,59],ORG=[255,122,26];
function newPdf(title,sub){const d=new jspdf.jsPDF();d.setFillColor(...NAVY);d.rect(0,0,210,28,'F');
 d.setTextColor(255);d.setFontSize(18);d.text('SMARTFIX',14,13);d.setFontSize(9);d.text('Sistema de Gestión de Calidad · ISO 9001:2015',14,21);
 d.setTextColor(...NAVY);d.setFontSize(16);d.text(d.splitTextToSize(title,180),14,40);d.setFontSize(10);d.setTextColor(90);d.text(sub,14,40+(d.splitTextToSize(title,180).length)*7);return d}
function block(d,y,label,text){const l=d.splitTextToSize(text,176);if(y+l.length*5+10>285){d.addPage();y=20}
 d.setTextColor(...ORG);d.setFontSize(10);d.text(label,14,y);d.setTextColor(30);d.text(l,14,y+5);return y+l.length*5+9}
function pdfArea(i){const a=AREAS[i],d=newPdf('Procesos del área de '+a[0],'SMARTFIX · Capítulo 5. Liderazgo');let y=60;
 a[1].forEach(r=>{if(y>230){d.addPage();y=20}d.setFontSize(12);d.setTextColor(...NAVY);d.text(r[0],14,y);y+=6;d.setFontSize(10);
 y=block(d,y,'Acción específica',r[1]);y=block(d,y,'Documento que lo respalda',r[2]);y=block(d,y,'Qué justifica',r[3]);y+=3});
 d.save('SMARTFIX_Procesos_'+a[0].replace(/\W+/g,'_')+'.pdf')}
const docName=r=>'Ejemplo_'+r[2].replace(/\W+/g,'_').slice(0,50)+'.pdf';
function buildDoc(i,j){const a=AREAS[i],r=a[1][j],d=newPdf(r[2],'EJEMPLO ILUSTRATIVO · Área: '+a[0]);
 d.setFontSize(16);const tl=d.splitTextToSize(r[2],180).length;d.setFontSize(10);let y=40+tl*7+12;
 y=block(d,y,'Proceso que respalda',r[0]+': '+r[1]+'.');y=block(d,y,'Qué justifica',r[3]);y+=2;
 fields(r[2]).forEach(([k,v])=>{const l=d.splitTextToSize(v,120),h=Math.max(l.length,1)*5+4;if(y+h>268){d.addPage();y=20}
  d.setDrawColor(185);d.setFillColor(238,243,251);d.rect(14,y,56,h,'FD');d.rect(70,y,126,h);
  d.setFont('helvetica','bold');d.setTextColor(...NAVY);d.text(d.splitTextToSize(k,52),16,y+5.5);
  d.setFont('helvetica','normal');d.setTextColor(30);d.text(l,72,y+5.5);y+=h});
 y+=26;if(y>270){d.addPage();y=40}
 d.setDrawColor(...NAVY);d.line(20,y,85,y);d.line(125,y,190,y);d.setFontSize(9);d.setTextColor(30);d.text('Elaboró (nombre y firma)',22,y+5);d.text('Revisó / Autorizó',135,y+5);
 const n=d.getNumberOfPages();for(let p=1;p<=n;p++){d.setPage(p);d.setFontSize(8);d.setTextColor(120);
  d.text('Ejemplo ilustrativo con datos ficticios. Debe adaptarse a la información real de cada caso.',14,288);d.text('Página '+p+' de '+n,170,288)}
 return d}
function openDoc(i,j){const a=AREAS[i],r=a[1][j],d=buildDoc(i,j),url=URL.createObjectURL(d.output('blob')),prev=document.activeElement;
 const canView=navigator.pdfViewerEnabled&&matchMedia('(min-width:700px)').matches;
 const view=canView?`<iframe src="${url}#view=FitH" title="Vista previa en PDF: ${r[2]}"></iframe>`:
  `<div class="sheet"><h3>${r[2]}</h3><p class="sub">EJEMPLO ILUSTRATIVO · Área: ${a[0]}</p><p><b>Proceso que respalda:</b> ${r[0]}. ${r[1]}.</p><p><b>Qué justifica:</b> ${r[3]}</p>`+
  T(['Campo','Ejemplo'],fields(r[2]))+`<p class="sub">Ejemplo con datos ficticios. Al descargarlo obtendrás este mismo documento en PDF.</p></div>`;
 const m=document.createElement('div');m.className='modal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-label','Ejemplo: '+r[2]);
 m.innerHTML=`<div class="mbox"><div class="mbar"><b>${r[2]}</b><span><button class="btn sm" id="dlx">Descargar ejemplo (PDF)</button><button class="btn sm ghost" id="clx">Cerrar</button></span></div><div class="mview">${view}</div></div>`;
 document.body.appendChild(m);document.body.style.overflow='hidden';
 const close=()=>{m.remove();URL.revokeObjectURL(url);document.body.style.overflow='';document.removeEventListener('keydown',esc);prev&&prev.focus&&prev.focus()};
 const esc=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',esc);
 m.onclick=e=>{if(e.target===m)close()};m.querySelector('#clx').onclick=close;m.querySelector('#dlx').onclick=()=>d.save(docName(r));m.querySelector('#dlx').focus()}

/* ===== NAVEGACIÓN ===== */
const $=s=>document.querySelector(s);
const show=id=>{document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));scrollTo(0,0)};
function route(){const h=location.hash;
 if(h.startsWith('#cap')){const n=+h.slice(4)-1;if(CH[n]){openCh(n);return}}
 show(h==='#contenido'?'contents':'welcome')}
function openCh(n){const c=CH[n];show('chapter');
 $('#tabs').innerHTML=CH.map((x,i)=>`<a href="#cap${i+1}" class="${i===n?'on':''}"><em style="background:${x.c}">${String(i+1).padStart(2,'0')}</em>${x.n}</a>`).join('');
 $('#band').style.background=c.c;$('#band').innerHTML=`CAPÍTULO ${n+1}<small>${c.n.toUpperCase()}</small>`;
 const b=$('#body');b.style.animation='none';b.offsetWidth;b.style.animation='';b.innerHTML=c.h();c.after&&c.after()}
$('#cards').innerHTML=CH.map((c,i)=>`<a class="card" href="#cap${i+1}" style="text-decoration:none;color:inherit"><div class="top" style="background:${c.c}"><img src="${IMG.caps[i]}" alt="" onerror="this.replaceWith(document.createTextNode('${i+1}'))"></div><div><h3>Capítulo ${i+1}</h3><p><b>${c.n}.</b> ${c.d}</p></div></a>`).join('');
$('#enter').onclick=()=>location.hash='#contenido';
history.replaceState(null,'',location.pathname+location.search); /* al recargar siempre inicia en la bienvenida */
addEventListener('hashchange',route);route();
