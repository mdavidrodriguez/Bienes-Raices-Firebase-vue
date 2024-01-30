#Proyecto de Bienes Raices Firebase - Vue

Este proyecto es una aplicación web desarrollada con Vue.js y Firebase, que permite a los usuarios visualizar propiedades inmobiliarias en una interfaz amigable. La aplicación utiliza Vue Router para la navegación, composables para la lógica de componentes, stores para la gestión del estado, y Pinia como biblioteca de estado centralizado.

#Características principales
Área pública: Cualquier persona puede acceder al área pública para ver las propiedades disponibles. La información mostrada incluye descripción, precio, imagen, número de habitaciones y número de baños.

Estilo moderno con Vuetify: El diseño y estilo de la aplicación se implementaron utilizando Vuetify, una biblioteca de componentes y estilos para Vue.js que proporciona una interfaz atractiva y responsiva.

#Integración con Firebase:

Authentication: Firebase Authentication se utiliza para gestionar la autenticación de usuarios, proporcionando una capa segura para acceder a la aplicación.
Firestore: La base de datos Firestore de Firebase almacena y gestiona la información de las propiedades inmobiliarias, permitiendo un acceso rápido y eficiente a los datos.
Storage: Firebase Storage se utiliza para almacenar las imágenes asociadas a cada propiedad.
Configuración del proyecto
Requisitos previos
Node.js y npm instalados en tu sistema.

#Estructura del proyecto
src/components: Contiene los componentes reutilizables de la aplicación.
src/composables: Almacena los hooks y composables que encapsulan la lógica de la aplicación.
src/router: Define las rutas de la aplicación utilizando Vue Router.
src/store: Contiene los archivos relacionados con el estado global de la aplicación utilizando Pinia.
src/views: Contiene las vistas principales de la aplicación.
Contribución
Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir issues, proponer mejoras o enviar pull requests. Tu ayuda será apreciada.
