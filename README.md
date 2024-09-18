# Skilltrade

## Descripción

**Skilltrade** es una plataforma diseñada para conectar talentos y facilitar el intercambio de habilidades entre profesionales, artistas, profesores y cualquier persona interesada en aprender o enseñar nuevas habilidades. A través de nuestro motor de búsqueda por palabra clave y categorías, así como nuestro sistema de "match", facilitamos conexiones significativas y efectivas.

---

## Propuesta de Valor

En un mundo lleno de talento, a menudo es difícil encontrar oportunidades para compartir conocimientos y aprender nuevas habilidades. **Skilltrade** surge para llenar este vacío, proporcionando un espacio dedicado al intercambio de habilidades entre personas con intereses comunes.

**¿Cómo funciona?**

1. **Búsqueda**: Encuentra lo que deseas aprender o enseñar usando nuestro motor de búsqueda por palabra clave o por categoría.
2. **Match**: Conéctate con personas que tienen lo que buscas o necesitan lo que ofreces.
3. **Evaluación**: Evalúa y recibe opiniones sobre usuarios para garantizar una experiencia de aprendizaje confiable.

**¿Cómo interactuamos con nuestros usuarios?**

Además de nuestra plataforma, ofrecemos una comunidad accesible a través de canales como WhatsApp e Instagram, promoviendo una comunicación rápida y efectiva.

---

## Stack Tecnológico

### Backend

El backend de **Skilltrade** está construido con Node.js y utiliza las siguientes dependencias:

- **[axios](https://github.com/axios/axios)**: ^1.7.5  
  Librería para hacer peticiones HTTP.

- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)**: ^5.1.1  
  Librería para cifrar contraseñas.

- **[cookie-parser](https://github.com/expressjs/cookie-parser)**: ^1.4.6  
  Middleware para analizar cookies en las solicitudes HTTP.

- **[dotenv](https://github.com/motdotla/dotenv)**: ^16.4.5  
  Carga variables de entorno desde un archivo `.env`.

- **[express](https://github.com/expressjs/express)**: ^4.19.2  
  Framework de servidor para Node.js.

- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)**: ^9.0.2  
  Librería para generar y verificar tokens JWT.

- **[morgan](https://github.com/expressjs/morgan)**: ^1.10.0  
  Middleware para registrar solicitudes HTTP.

- **[nodemon](https://github.com/remy/nodemon)**: ^3.1.4  
  Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios en el código fuente.

- **[pg](https://github.com/brianc/node-postgres)**: ^8.12.0  
  Cliente PostgreSQL para Node.js.

- **[pg-hstore](https://github.com/scotlandjs/pg-hstore)**: ^2.3.4  
  Herramienta para serializar y deserializar datos JSON en PostgreSQL.

- **[sequelize](https://github.com/sequelize/sequelize)**: ^6.37.3  
  ORM para Node.js que soporta múltiples bases de datos SQL, incluyendo PostgreSQL.

---

### Frontend

El frontend de **Skilltrade** está construido con React y utiliza las siguientes dependencias:

#### Dependencias

- **[axios](https://github.com/axios/axios)**: ^1.7.7  
  Librería para hacer peticiones HTTP.

- **[formik](https://formik.org/)**: ^2.4.6  
  Biblioteca para manejar formularios en React.

- **[js-cookie](https://github.com/js-cookie/js-cookie)**: ^3.0.5  
  Librería para manejar cookies en el navegador.

- **[react](https://reactjs.org/)**: ^18.3.1  
  Biblioteca para construir interfaces de usuario.

- **[react-dom](https://reactjs.org/)**: ^18.3.1  
  Librería para trabajar con el DOM en aplicaciones React.

- **[react-masonry](https://github.com/maslianok/react-masonry)**: ^1.0.7  
  Componentes React para usar con el diseño de mampostería (masonry).

- **[react-masonry-css](https://github.com/paulcollett/react-masonry-css)**: ^1.0.16  
  Librería para implementar el diseño de mampostería con CSS en React.

- **[react-router-dom](https://reactrouter.com/)**: ^6.26.1  
  Librería para enrutamiento en aplicaciones React.

- **[sweetalert2](https://sweetalert2.github.io/)**: ^11.14.0  
  Librería para crear alertas y modales bonitos.

- **[yup](https://github.com/jquense/yup)**: ^1.4.0  
  Biblioteca para la validación de esquemas en formularios.

#### Dependencias de Desarrollo

- **[@eslint/js](https://eslint.org/)**: ^9.9.0  
  Herramienta para el análisis de código estático y la detección de problemas en JavaScript.

- **[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped)**: ^18.3.3  
  Tipos de TypeScript para React.

- **[@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped)**: ^18.3.0  
  Tipos de TypeScript para React DOM.

- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite/tree/main/packages/plugin-react-swc)**: ^3.5.0  
  Plugin para Vite que usa SWC para transformar código React.

- **[eslint](https://eslint.org/)**: ^9.9.0  
  Herramienta para el análisis de código estático.

- **[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)**: ^7.35.0  
  Plugin de ESLint para React.

- **[eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)**: ^5.1.0-rc.0  
  Plugin de ESLint para los hooks de React.

- **[eslint-plugin-react-refresh](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-refresh)**: ^0.4.9  
  Plugin de ESLint para la integración de React Refresh.

- **[globals](https://github.com/commonsenses/globals)**: ^15.9.0  
  Proporciona definiciones globales para JavaScript.

- **[vite](https://vitejs.dev/)**: ^5.4.1  
  Herramienta de construcción y desarrollo rápido para aplicaciones modernas.

---

## Instrucciones de Instalación y Ejecución

### Clonar el Repositorio

Primero, clona el repositorio de GitHub usando el siguiente comando:

```bash
git clone https://github.com/No-Country-simulation/c20-20-m-node-react 
```

## Instalación de Dependencias
Accede a la carpeta del proyecto:
```bash
cd c20-20-m-node-react 
```
### Instala las dependencias necesarias para el backend y el frontend:
```bash
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

## Ejecutar la Aplicación
Para ejecutar la aplicación, primero inicia el backend y luego el frontend:
Accede a la carpeta del proyecto:
```bash
# Iniciar el backend
cd backend
npm start

# En una nueva terminal, iniciar el frontend
cd ../frontend
npm run dev
```
---
### Contacto

Si tienes alguna pregunta o necesitas soporte, no dudes en contactarnos a través de nuestros canales en WhatsApp o Instagram.

### Contribuciones
¡Nos encantaría recibir tus contribuciones! Si deseas ayudar a mejorar Skilltrade, por favor, sigue las directrices de contribución en nuestro repositorio de GitHub.