# Gibran OL - Portfolio

Bienvenido al repositorio de mi portafolio personal. Este proyecto está construido con una pila de tecnologías modernas para ofrecer un rendimiento óptimo, accesibilidad (WCAG) y un diseño impactante y dinámico.

## 🚀 Tecnologías Principales

- **React 18** - Librería para la interfaz de usuario.
- **TypeScript** - Tipado estático para un código más robusto y menos propenso a errores.
- **Vite** - Herramienta de compilación ultrarrápida (Bundler).
- **Tailwind CSS** - Framework de utilidades CSS para diseño rápido, responsivo y moderno.
- **Framer Motion** - Librería para animaciones y transiciones fluidas.
- **i18next** - Sistema de internacionalización (i18n) para múltiples idiomas.
- **Lucide React** - Conjunto de íconos SVG consistentes y atractivos.
- **Playwright** - Herramienta de pruebas End-to-End (E2E) y pruebas de accesibilidad (con axe-core).

## 🛠 Instalación y Configuración Local

Si deseas ejecutar este proyecto en tu entorno local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/gibrans-portafolio.git
cd gibrans-portafolio
```

### 2. Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego ejecuta:
```bash
npm install
```

### 3. Servidor de Desarrollo
Para iniciar el servidor local en modo desarrollo con HMR (Hot Module Replacement):
```bash
npm run dev
```
La aplicación estará disponible usualmente en `http://localhost:5173`.

## 🧪 Pruebas y Control de Calidad

Este proyecto cuenta con herramientas para asegurar un estándar alto en el código y funcionalidad:

### Linting (Análisis de Código)
Para revisar y mantener el código ordenado bajo las reglas de ESLint:
```bash
npm run lint
```

### Pruebas E2E / Accesibilidad
El proyecto incluye pruebas automatizadas usando **Playwright**.
Para instalar los binarios de los navegadores (solo la primera vez):
```bash
npx playwright install
```
Para ejecutar las pruebas:
```bash
npx playwright test
```

## 📦 Construcción y Despliegue (Deploy)

Para generar la versión optimizada para producción:
```bash
npm run build
```
Esto creará una carpeta `dist` con los archivos listos para ser alojados. (Para probar localmente esta versión puedes usar `npm run preview`).

### Despliegue en Vercel
Este proyecto está optimizado para desplegarse fácilmente en [Vercel](https://vercel.com/):
1. Vincula tu cuenta de Vercel con el repositorio de GitHub de este proyecto.
2. Crea un nuevo proyecto en Vercel, selecciona este repositorio.
3. Vercel detectará automáticamente que es un proyecto **Vite**. Dale a "Deploy".
4. ¡Tu portafolio estará en vivo! Puedes conectarlo después a un dominio personalizado si lo deseas.

---
*Desarrollado con pasión, con un enfoque en control de calidad (QA) e interfaces de usuario que dejan huella.*
