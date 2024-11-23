# ALLGAMES

ALLGAMES es una **aplicación móvil** diseñada como una plataforma de **e-commerce** para la compra de títulos de videojuegos electrónicos. Está orientada a ofrecer una experiencia sencilla y eficiente para los amantes de los videojuegos, permitiendo gestionar perfiles personalizados, guardar ubicaciones y generar recibos al realizar compras.

---

## 📋 Características Principales

- **Perfil de Usuario**: Cada usuario puede crear su propio perfil, agregar una foto y guardar ubicaciones frecuentes.  
- **Compra de Juegos**: Permite explorar y adquirir títulos directamente desde la aplicación.  
- **Recibo de Compra**: Se genera un recibo al realizar una transacción, facilitando el seguimiento de las compras.  

---

## 🛠️ Tecnologías Usadas

ALLGAMES ha sido desarrollada con **React Native** y utiliza las siguientes dependencias y librerías clave:  

### Dependencias principales
```bash
npx expo start
npx create-expo-app@latest --template blank
npm install expo@51.0.39
npx expo install expo-font
npm install expo-router@3.5.24
npx expo install expo-splash-screen
npm install @react-navigation/native
npm install @reduxjs/toolkit react-redux
npm install react-native-maps
npm install --save react-native-toast-message
npx expo install expo-sqlite
npx expo install expo-image-picker
Comandos importantes
npx expo start -c : Limpia el caché antes de iniciar el proyecto.
Npx Expo run:android: Ejecuta la app en un emulador Android.
🚀 Configuración Inicial
Para instalar y configurar ALLGAMES, sigue estos pasos:

Crea el proyecto localmente:

Crea una carpeta en el disco local y utiliza el comando npm install expo@51.0.39 para instalar la versión específica de Expo (51.0.39).
Instala dependencias:

Instala todas las librerías mencionadas en la sección de tecnologías usadas.
Configura Firebase:

Crea una base de datos en Firebase con los archivos categories.json y products.json que encontrarás en el repositorio.
Una vez creadas las tablas, selecciona el tipo de variable como object y pega el contenido correspondiente en cada archivo JSON.
Archivos del proyecto:

Descarga o clona el repositorio y copia las carpetas src, assets y los archivos raíz en tu entorno de trabajo.
Instala SQLite Server:

Configura SQLite en tu entorno para que la aplicación pueda gestionar las bases de datos locales.
📖 Guía de Uso
Inicia la aplicación:

Ejecuta el comando npx expo start en tu consola para iniciar el servidor Expo.
Crea un perfil:

En la app, completa los datos de tu perfil y agrega una foto.
Explora y compra:

Navega por los títulos de juegos, selecciona el que deseas adquirir y completa la compra.
Guarda ubicaciones:

Guarda tus direcciones favoritas para facilitar futuras compras.
Revisa tus recibos:

Al completar una compra, verifica el recibo generado para confirmar la transacción.
📍 Estado del Proyecto
Actualmente, ALLGAMES es un prototipo. Todavía se encuentra en desarrollo y está abierto a mejoras y nuevas funcionalidades.
📜 Licencia
Este proyecto está licenciado bajo la licencia MIT. Puedes consultar más detalles en el archivo LICENSE.
🤝 Contribuciones
¡Contribuciones son bienvenidas!
Si estás interesado en colaborar, por favor envía un correo a IRON MASTER para coordinar.
✨ Autor
IRON MASTER
Correo electrónico: jlmunozr@gmail.com

