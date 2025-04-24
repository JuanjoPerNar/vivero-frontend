# Raíces de La Dolo – Frontend

Este repositorio contiene el frontend del proyecto **Raíces de La Dolo**, una SPA desarrollada con **React** para simular un vivero digital.

Se conecta a un backend propio mediante una API REST y utiliza **Firebase** para la autenticación y almacenamiento.

---

## Objetivo

Ofrecer una experiencia completa e intuitiva al usuario, desde la navegación por el catálogo hasta la participación comunitaria, con funcionalidades de administrador para gestionar productos, publicaciones, servicios, actividades y mensajes.

Este proyecto simula un vivero real con diseño profesional, cumplimiento legal y herramientas modernas de desarrollo web.

---

## Tecnologías utilizadas

- React (Vite)  
- React Router DOM  
- Tailwind CSS  
- Firebase Auth + Firestore + Storage  
- Axios  
- Framer Motion  
- SweetAlert2  
- React Icons  
- HeroIcons  
- Markdown para documentación  

---

## Estructura del proyecto

```
vivero-frontend/
├── public/
│   └── _redirects          # Redirección para rutas SPA en producción
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   ├── components/         # Componentes reutilizables (cards, modals, etc.)
│   ├── context/            # Contexto de autenticación
│   ├── firebase/           # Configuración de Firebase
│   ├── hooks/              # Hooks personalizados (useProducts, usePosts, etc.)
│   ├── pages/              # Vistas principales del sitio
│   ├── services/           # Funciones para conexión con la API
│   ├── styles/             # Archivos de estilos y CSS global
│   ├── App.jsx             # Configuración de rutas
│   └── main.jsx            # Punto de entrada
├── .env                    # Variables de entorno
├── index.html
├── package.json
└── README.md
```

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/JuanjoPerNar/vivero-frontend
cd vivero-frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear el archivo `.env` con las siguientes variables:

```env
VITE_API_URL=https://raices-backend.onrender.com
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_TREFLE_TOKEN=...
```

4. Iniciar el entorno de desarrollo:

```bash
npm run dev
```

---

## Funcionalidades principales

| Módulo              | Descripción                                                   |
|---------------------|---------------------------------------------------------------|
| Catálogo            | Visualización, filtrado, detalle, creación/edición por admin  |
| Servicios           | Listado, detalle en modal, CRUD para admin                    |
| Actividades/Eventos | Listado de talleres y eventos, CRUD para admin                |
| Publicaciones       | Comunidad de usuarios, creación, edición, eliminación         |
| Trefle API          | Búsqueda de plantas reales a través de API externa            |
| Contacto            | Formulario conectado a backend con validación legal           |
| Autenticación       | Registro, login, logout, control de sesión                    |
| Dashboard admin     | Gestión total del contenido (productos, servicios, etc.)      |
| Footer legal        | Política de privacidad, cookies y aviso legal incluidos       |

---

## Cumplimiento legal

- Página de **Política de Privacidad**  
- Página de **Política de Cookies**  
- Página de **Aviso Legal**  
- Checkboxes de consentimiento en formularios  
- Enlaces visibles en el footer  
- Formularios validados y adaptados al **RGPD**

---

## Producción y despliegue

- Proyecto desplegado en **Netlify**: [https://raicesdeladolo.netlify.app](https://raicesdeladolo.netlify.app)  
- Backend conectado desde Render: [https://raices-backend.onrender.com](https://raices-backend.onrender.com)  
- Redirecciones configuradas con `_redirects` en producción

---

## Consideraciones

- El proyecto **no es comercial**. Está creado con fines educativos.  
- Toda la información e imágenes son simuladas o de uso libre.  
- Las funcionalidades de administración están disponibles solo para usuarios autenticados con rol **admin**.  
- La autenticación y los datos de usuarios se gestionan con **Firebase**.  

---

## Autor

Desarrollado por **Juan José Pereira Naranjo**  
Proyecto final del bootcamp **Desarrollo Web Full Stack** en **The Bridge**  
Año: **2025**
