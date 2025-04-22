# Raíces de La Dolo – Frontend

Este repositorio contiene el frontend del proyecto **Raíces de La Dolo**, una SPA desarrollada con React para simular un vivero digital.  
Se conecta a un backend propio mediante una API REST y utiliza Firebase para la autenticación.

---

## Objetivo

Ofrecer una experiencia completa e intuitiva al usuario, desde la navegación por el catálogo hasta la participación comunitaria, con funcionalidades de administrador como la gestión de productos, publicaciones, servicios, actividades y mensajes.

Este proyecto simula un vivero real, con secciones públicas y privadas, integrando diseño profesional, cumplimiento legal y herramientas modernas de desarrollo web.

---

## Tecnologías utilizadas

- React (Vite)  
- React Router DOM  
- Tailwind CSS  
- Firebase Auth + Firestore + Storage  
- Axios  
- Framer Motion  
- React Icons  
- HeroIcons  
- ViteEnv (.env)  
- SweetAlert2  
- Markdown para documentación  

---

## Estructura del proyecto

```
vivero-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/       # Componentes reutilizables
│   ├── context/          # AuthContext
│   ├── firebase/         # Configuración Firebase
│   ├── hooks/            # Custom hooks (useProducts, usePosts, etc.)
│   ├── pages/            # Vistas principales
│   ├── services/         # Servicios API
│   ├── styles/           # CSS globales
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── README.md
```

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/vivero-frontend.git
cd vivero-frontend
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear el archivo `.env` con las variables necesarias:

```env
VITE_API_URL=https://<tu-backend>.onrender.com
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

---

## Funcionalidades principales

| Módulo              | Descripción                                                   |
|---------------------|---------------------------------------------------------------|
| Catálogo            | Visualización, filtrado, detalles, CRUD admin                |
| Servicios           | Listado, detalle en modal, CRUD admin                        |
| Publicaciones       | Comunidad de usuarios, creación, edición, eliminación        |
| Actividades/Eventos | Listado de talleres y eventos, CRUD admin                    |
| Contacto            | Formulario conectado a backend, validación legal             |
| Autenticación       | Registro, login, logout con Firebase                         |
| Perfil              | Modificación de email/contraseña, eliminación de cuenta      |
| Dashboard Admin     | Gestión de todo el contenido desde el frontend               |
| Trefle API          | Búsqueda de plantas reales (API externa integrada)           |

---

## Cumplimiento legal

Incluye:

- Página de **Política de Privacidad**  
- Página de **Política de Cookies**  
- Página de **Aviso Legal**  
- Checkboxes de consentimiento en formularios  
- Enlaces visibles en el footer  
- Todos los formularios cumplen con el **RGPD**

---

## Producción y despliegue

El frontend está preparado para producción:

- Código limpio y modular  
- Uso de `.env` para entornos  
- Desplegado en [Netlify]  

---

## Consideraciones

- El proyecto **no es comercial**. Es **ficticio y educativo**.  
- Toda la información e imágenes son simuladas o de uso público.  
- Firebase se usa para login y base de datos de usuarios.  
- Backend propio desplegado en **Render**.  

---

## Autor

Desarrollado por **Juan José Pereira Naranjo**  
Proyecto final del bootcamp **Desarrollo Web Full Stack** en **The Bridge**  
Año: **2025**
