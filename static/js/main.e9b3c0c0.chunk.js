(this.webpackJsonpgym=this.webpackJsonpgym||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/yoga.f2495150.jpg"},,,,function(e,a,t){e.exports=t.p+"static/media/kickbox.97170924.jpg"},function(e,a,t){e.exports=t.p+"static/media/entre.00528315.jpg"},function(e,a,t){e.exports=t.p+"static/media/Gymshark.24e208a3.png"},function(e,a,t){e.exports=t(41)},,,,,,,function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/gym.54e57383.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),o=t.n(l),s=(t(29),t(10)),c=t(3),i=t(8),m=t(18),u=t(5);const d=Object(m.a)({apiKey:"AIzaSyDskBI3Xy8YH6P6u205OndpeY-h5aPjgWE",authDomain:"gymbase-f8a8f.firebaseapp.com",projectId:"gymbase-f8a8f",storageBucket:"gymbase-f8a8f.appspot.com",messagingSenderId:"1046677553431",appId:"1:1046677553431:web:678fac30e602cce0e57752",measurementId:"G-J02SBP7BM0"}),p=Object(i.b)(d),E=Object(u.f)(d);t(34);var b=()=>{var e,a;const[t,l]=Object(n.useState)({email:"",password:""}),[o,s]=Object(n.useState)({email:"",password:""}),m=Object(c.o)(),u=(null===(e=Object(c.m)().state)||void 0===e||null===(a=e.from)||void 0===a?void 0:a.pathname)||"/home";Object(n.useEffect)(()=>{const e=Object(i.c)(p,e=>{e&&m(u)});return()=>e()},[m,u]);const d=(e,a)=>{const{name:n,value:r}=e.target;"login"===a?l({...t,[n]:r}):s({...o,[n]:r})};return r.a.createElement("div",{className:"login-register-container"},r.a.createElement("div",{className:"login-form"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const{email:a,password:n}=t;try{await Object(i.d)(p,a,n),m(u)}catch(r){alert("Error en el inicio de sesi\xf3n: "+r.message)}}},r.a.createElement("div",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:t.email,onChange:e=>d(e,"login"),required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:t.password,onChange:e=>d(e,"login"),required:!0})),r.a.createElement("button",{type:"submit"},"Iniciar sesi\xf3n"))),r.a.createElement("div",{className:"register-form"},r.a.createElement("h2",null,"Registro"),r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const{email:a,password:t}=o;try{await Object(i.a)(p,a,t),alert("Registro exitoso"),m(u)}catch(n){alert("Error en el registro: "+n.message)}}},r.a.createElement("div",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:o.email,onChange:e=>d(e,"register"),required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Contrase\xf1a:"),r.a.createElement("input",{type:"password",name:"password",value:o.password,onChange:e=>d(e,"register"),required:!0})),r.a.createElement("button",{type:"submit"},"Registrar"))))};t(35),t(36);var g=()=>r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"overlay"},r.a.createElement("h1",null,"Bienvenido a GymShark"),r.a.createElement("p",null,"Transforma tu cuerpo y mente con nuestros programas."),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section-content"},r.a.createElement("h2",null,"Cursos"),r.a.createElement("p",null,"En GymBase, ofrecemos una variedad de cursos especializados para ayudarte a alcanzar tus metas de fitness. Uno de nuestros cursos m\xe1s populares es el ",r.a.createElement("strong",null,'"Entrenamiento Funcional"'),", dise\xf1ado para mejorar la fuerza, resistencia y agilidad a trav\xe9s de ejercicios intensos y din\xe1micos. \xa1Es ideal para cualquier persona que quiera estar en forma y desafiar sus l\xedmites!"),r.a.createElement(s.b,{to:"/cursos",className:"cta-button"},"Explorar Cursos"))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section-content"},r.a.createElement("h2",null,"Entrenadores Personales"),r.a.createElement("p",null,"Nuestros entrenadores est\xe1n certificados y listos para guiarte en cada paso de tu entrenamiento. Por ejemplo,",r.a.createElement("strong",null," Laura Mart\xednez")," es experta en entrenamiento de fuerza y nutrici\xf3n deportiva. Con a\xf1os de experiencia ayudando a sus clientes a alcanzar sus objetivos, Laura puede dise\xf1ar un plan personalizado para que consigas resultados efectivos y duraderos."),r.a.createElement(s.b,{to:"/entrenadores",className:"cta-button"},"Conoce a los Entrenadores"))))),v=(t(37),t(15)),f=t.n(v),y=t(19),h=t.n(y),j=t(20),N=t.n(j);var O=()=>{const[e,a]=Object(n.useState)([]),[t,l]=Object(n.useState)(!1),[o,s]=Object(n.useState)(null),[c,m]=Object(n.useState)({nombre:"",apellidos:"",email:"",telefono:""}),[d,b]=Object(n.useState)(!1),[g,v]=Object(n.useState)("");Object(n.useEffect)(()=>{y();const e=Object(i.c)(p,e=>{e?b(!0):(b(!1),alert("Debes iniciar sesi\xf3n para registrarte en un curso."))});return()=>e()},[]);const y=async()=>{try{const e=(await(async()=>{try{const e=Object(u.b)(E,"cursos"),a=await Object(u.e)(e);if(a.empty)return console.log("No se encontraron cursos en Firestore."),[];return a.docs.map(e=>{const a=e.data();return{id:e.id,nombre:a.Nombre||"Nombre no disponible",horario:a.Horario||"Horario no disponible",entrenador:a.Entrenador||"Entrenador no disponible",especializacion:a.Especializaci\u00f3n||"Especializaci\xf3n no disponible"}})}catch(e){throw console.error("Error obteniendo cursos:",e),e}})()).map((e,a)=>({...e,imagenUrl:[f.a,h.a,N.a][a]||f.a}));a(e)}catch(e){console.error("Error al obtener los cursos:",e)}},j=e=>{m({...c,[e.target.name]:e.target.value})},O=async e=>{if(e.preventDefault(),d)if(o)try{await Object(u.g)(Object(u.d)(E,"courseRegistrations",`${o.id}_${c.telefono}`),{...c,curso:o.nombre}),v("Bienvenido al curso "+o.nombre),l(!1),m({nombre:"",apellidos:"",email:"",telefono:""}),setTimeout(()=>{v("")},2e3)}catch(a){console.error("Error al registrar en el curso:",a),alert("Error: "+a.message)}else alert("Por favor, selecciona un curso.");else alert("Debes iniciar sesi\xf3n para registrarte en un curso.")};return r.a.createElement("div",{className:"cursos-container"},r.a.createElement("div",{className:"cursos-background"})," ",g&&r.a.createElement("div",{className:"success-message"},g),e.map(e=>r.a.createElement("div",{key:e.id,className:"curso-card",style:{backgroundImage:`url(${e.imagenUrl})`}},r.a.createElement("div",{className:"curso-background"}),r.a.createElement("div",{className:"curso-info"},r.a.createElement("h3",null,e.nombre),r.a.createElement("p",null,"Horario: ",e.horario),r.a.createElement("p",null,"Entrenador: ",e.entrenador),r.a.createElement("button",{onClick:()=>(e=>{s(e),l(!0)})(e)},"Registrar"),t&&(null===o||void 0===o?void 0:o.id)===e.id&&r.a.createElement("div",{className:"register-form"},r.a.createElement("h2",null,"Registro en ",o.nombre),r.a.createElement("form",{onSubmit:O},r.a.createElement("div",null,r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{type:"text",name:"nombre",value:c.nombre,onChange:j,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Apellidos:"),r.a.createElement("input",{type:"text",name:"apellidos",value:c.apellidos,onChange:j,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:c.email,onChange:j,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Tel\xe9fono:"),r.a.createElement("input",{type:"tel",name:"telefono",value:c.telefono,onChange:j,required:!0})),r.a.createElement("button",{type:"submit"},"Registrar en el curso")))))))};t(38);const C=[{nombre:"Juan",apellidos:"P\xe9rez",especializacion:"Entrenamiento Personalizado",descripcion:"Juan tiene m\xe1s de 5 a\xf1os de experiencia ayudando a personas a alcanzar sus metas de fitness. Se especializa en entrenamiento funcional y nutrici\xf3n.",email:"juan.perez@gymshark.com"},{nombre:"Mar\xeda",apellidos:"G\xf3mez",especializacion:"Yoga y Meditaci\xf3n",descripcion:"Con m\xe1s de 8 a\xf1os en la pr\xe1ctica de yoga, Mar\xeda ofrece clases que combinan relajaci\xf3n y fortalecimiento f\xedsico.",email:"maria.gomez@gymshark.com"},{nombre:"Carlos",apellidos:"L\xf3pez",especializacion:"Entrenamiento de Fuerza",descripcion:"Carlos es un apasionado del levantamiento de pesas y est\xe1 aqu\xed para ayudarte a maximizar tu fuerza y rendimiento.",email:"carlos.lopez@gymshark.com"},{nombre:"Ana",apellidos:"Mart\xednez",especializacion:"Entrenamiento Cardiovascular",descripcion:"Ana se enfoca en la salud cardiovascular y ofrece rutinas de cardio personalizadas que se adaptan a las necesidades de cada cliente.",email:"ana.martinez@gymshark.com"},{nombre:"Luis",apellidos:"Fern\xe1ndez",especializacion:"Rehabilitaci\xf3n y Fisioterapia",descripcion:"Luis tiene experiencia en fisioterapia y se especializa en ayudar a las personas a recuperarse de lesiones a trav\xe9s de ejercicios espec\xedficos.",email:"luis.fernandez@gymshark.com"}];var z=()=>{const[e,a]=Object(n.useState)(!1),[t,l]=Object(n.useState)({nombre:"",apellidos:"",telefono:"",correo:"",experiencia:""}),[o,s]=Object(n.useState)(""),c=e=>{const{name:a,value:n}=e.target;l({...t,[a]:n})};return r.a.createElement("div",{className:"entrenadores-container"},r.a.createElement("h1",null,"Entrenadores Personales"),r.a.createElement("button",{onClick:()=>a(!e)},e?"Cancelar":"Enviar curr\xedculum"),o&&r.a.createElement("div",{className:"success-message"},o),e&&r.a.createElement("form",{onSubmit:async e=>{e.preventDefault();try{await Object(u.a)(Object(u.b)(E,"entrenadores"),t),s("\xa1Gracias por tu curr\xedculum! Nos pondremos en contacto pronto."),setTimeout(()=>{s("")},3e3),a(!1),l({nombre:"",apellidos:"",telefono:"",correo:"",experiencia:""})}catch(n){console.error("Error al enviar informaci\xf3n:",n),s("Error al enviar tu curr\xedculum. Int\xe9ntalo de nuevo."),setTimeout(()=>{s("")},3e3)}},className:"curriculum-form"},r.a.createElement("input",{type:"text",name:"nombre",placeholder:"Nombre",value:t.nombre,onChange:c,required:!0}),r.a.createElement("input",{type:"text",name:"apellidos",placeholder:"Apellidos",value:t.apellidos,onChange:c,required:!0}),r.a.createElement("input",{type:"tel",name:"telefono",placeholder:"Tel\xe9fono",value:t.telefono,onChange:c,required:!0}),r.a.createElement("input",{type:"email",name:"correo",placeholder:"Correo electr\xf3nico",value:t.correo,onChange:c,required:!0}),r.a.createElement("textarea",{name:"experiencia",placeholder:"Experiencia previa",value:t.experiencia,onChange:c,required:!0}),r.a.createElement("button",{type:"submit"},"Enviar")),r.a.createElement("div",{className:"entrenadores-list"},C.map((e,a)=>r.a.createElement("div",{className:"entrenador-card",key:a},r.a.createElement("h2",null,e.nombre," ",e.apellidos),r.a.createElement("p",null,r.a.createElement("strong",null,"Especializaci\xf3n:")," ",e.especializacion),r.a.createElement("p",null,r.a.createElement("strong",null,"Descripci\xf3n:")," ",e.descripcion),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",r.a.createElement("a",{href:"mailto:"+e.email},e.email))))))},x=(t(39),t(21)),S=t.n(x);var k=()=>{const[e,a]=Object(n.useState)(null);Object(n.useEffect)(()=>{const e=Object(i.c)(p,e=>{a(e)});return()=>e()},[]);return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"logo-container"},r.a.createElement(s.b,{to:"/home"},r.a.createElement("img",{src:S.a,alt:"Gymshark",className:"logo"}))),r.a.createElement("div",{className:"nav-right"},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"user-email"},"Bienvenido, ",e.email),r.a.createElement("div",{className:"nav-links"},r.a.createElement(s.b,{to:"/cursos"},"Cursos"),r.a.createElement(s.b,{to:"/entrenadores"},"Entrenadores personales"),r.a.createElement(s.b,{to:"/mis-cursos"},"Mis Cursos")),r.a.createElement("button",{className:"logout-button",onClick:async()=>{try{await Object(i.e)(p)}catch(e){alert("Error al cerrar sesi\xf3n: "+e.message)}}},"Cerrar sesi\xf3n")):r.a.createElement(s.b,{to:"/login"},"Login"))))};var w=()=>{const[e,a]=Object(n.useState)({nombre:"",apellidos:"",email:"",telefono:""}),t=t=>{a({...e,[t.target.name]:t.target.value})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Registro"),r.a.createElement("form",{onSubmit:async t=>{t.preventDefault();const{nombre:n,apellidos:r,email:l,telefono:o}=e;try{await Object(u.g)(Object(u.d)(E,"users",l),{nombre:n,apellidos:r,email:l,telefono:o}),alert("Usuario registrado y datos guardados en Firestore."),a({nombre:"",apellidos:"",email:"",telefono:""})}catch(s){console.error("Error al registrar usuario",s),alert("Error: "+s.message)}}},r.a.createElement("div",null,r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{type:"text",name:"nombre",value:e.nombre,onChange:t,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Apellidos:"),r.a.createElement("input",{type:"text",name:"apellidos",value:e.apellidos,onChange:t,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:e.email,onChange:t,required:!0})),r.a.createElement("div",null,r.a.createElement("label",null,"Tel\xe9fono:"),r.a.createElement("input",{type:"tel",name:"telefono",value:e.telefono,onChange:t,required:!0})),r.a.createElement("button",{type:"submit"},"Registrar")))};t(40);var q=()=>{const[e,a]=Object(n.useState)([]),[t,l]=Object(n.useState)({nombre:"",apellidos:"",telefono:""}),[o,s]=Object(n.useState)("");Object(n.useEffect)(()=>{const e=Object(i.c)(p,e=>{e&&(s(e.email),c(e.email))});return()=>e()},[]);const c=async e=>{try{const t=Object(u.b)(E,"courseRegistrations"),n=(await Object(u.e)(t)).docs.map(e=>({id:e.id,...e.data()})).filter(a=>a.email===e);a(n)}catch(t){console.error("Error al obtener inscripciones:",t)}},m=e=>{const{name:a,value:n}=e.target;l({...t,[a]:n})};return r.a.createElement("div",{className:"mis-cursos-container"},r.a.createElement("h1",null,"Mis Cursos"),e.length>0?e.map(e=>r.a.createElement("div",{className:"course-card",key:e.id},r.a.createElement("h3",null,e.curso||"Curso sin nombre"),r.a.createElement("p",null,"Nombre: ",e.nombre),r.a.createElement("p",null,"Apellidos: ",e.apellidos),r.a.createElement("p",null,"Email: ",e.email)," ",r.a.createElement("p",null,"Tel\xe9fono: ",e.telefono),r.a.createElement("input",{type:"text",placeholder:"Nuevo Nombre",name:"nombre",value:t.nombre,onChange:m}),r.a.createElement("input",{type:"text",placeholder:"Nuevos Apellidos",name:"apellidos",value:t.apellidos,onChange:m}),r.a.createElement("input",{type:"tel",placeholder:"Nuevo Tel\xe9fono",name:"telefono",value:t.telefono,onChange:m}),r.a.createElement("button",{onClick:()=>(async(e,a)=>{try{const a=Object(u.d)(E,"courseRegistrations",e),n={};t.nombre&&(n.nombre=t.nombre),t.apellidos&&(n.apellidos=t.apellidos),t.telefono&&(n.telefono=t.telefono),await Object(u.h)(a,n),alert("Inscripci\xf3n actualizada correctamente."),c(o),l({nombre:"",apellidos:"",telefono:""})}catch(n){console.error("Error al actualizar inscripci\xf3n:",n),alert("Error: "+n.message)}})(e.id)},"Actualizar"),r.a.createElement("button",{onClick:()=>(async e=>{try{const a=Object(u.d)(E,"courseRegistrations",e);await Object(u.c)(a),alert("Te has dado de baja del curso."),c(o)}catch(a){console.error("Error al eliminar inscripci\xf3n:",a),alert("Error: "+a.message)}})(e.id)},"Eliminar Inscripci\xf3n"))):r.a.createElement("p",null,"No est\xe1s registrado en ning\xfan curso."))};var R=()=>r.a.createElement(s.a,null,r.a.createElement(k,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(b,null)}),r.a.createElement(c.a,{path:"/login",element:r.a.createElement(b,null)}),r.a.createElement(c.a,{path:"/cursos",element:r.a.createElement(O,null)}),r.a.createElement(c.a,{path:"/entrenadores",element:r.a.createElement(z,null)}),r.a.createElement(c.a,{path:"/home",element:r.a.createElement(g,null)}),r.a.createElement(c.a,{path:"/registro",element:r.a.createElement(w,null)}),r.a.createElement(c.a,{path:"/mis-cursos",element:r.a.createElement(q,null)})));var I=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then(a=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:l,getTTFB:o}=a;t(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null))),I()}],[[22,1,2]]]);
//# sourceMappingURL=main.e9b3c0c0.chunk.js.map