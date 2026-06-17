# 🎨 Resume AI - Frontend Interface

Esta es la interfaz de usuario (UI) para el Generador de Hojas de Vida con IA. Una aplicación web de una sola página (SPA) moderna, fluida y altamente interactiva, diseñada para ofrecer una experiencia limpia mientras la IA trabaja por detrás.

## ✨ Características de la Interfaz

* ⚡ **Arquitectura Moderna:** Construido sobre React 19 y Vite 8 para tiempos de carga e inicio en desarrollo casi instantáneos.
* 🛡️ **Tipado Estricto:** Desarrollado al 100% con TypeScript, garantizando que los datos del formulario coincidan perfectamente con la estructura que espera el Backend y la API de Gemini.
* 🎨 **Tailwind Avanzado:** Estilos responsivos con animaciones personalizadas para los estados de carga (efectos de borde animado "Neón/Passepartout").
* 📦 **Estructura de Componentes Limpia:** División modular entre paneles de control (inputs) y panel de previsualización (hoja de vida).

## 📂 Estructura del Proyecto

Para mantener el código mantenible, organicé la carpeta `src/` de la siguiente manera:

```text
src/
├── assets/          # Imágenes, logos y estilos globales.
├── components/      # Componentes visuales reutilizables (Botones, Modales, Skeletons).
│   ├── Header.tsx
│   ├── LeftPanel.tsx   # Formulario y entradas de datos.
│   └── RightPanel.tsx  # Vista previa del CV en diseño A4.
├── hooks/           # Lógica separada de la UI (ej. manejo de formularios, fetch de datos).
├── services/        # Módulos encargados de hacer fetch a la API del Backend.
├── types/           # Interfaces de TypeScript que definen el contrato del CV.
│   └── cv.ts
├── App.tsx          # Componente principal que orquesta el estado global.
└── main.tsx         # Punto de entrada de la aplicación.

## 🚦 Cómo levantar el Frontend en local
Sigue estos pasos para ejecutar la interfaz en tu entorno de desarrollo.

1. Variables de Enorno
Crea un archivo .env en la raíz de esta carpeta y configura las rutas de tu API local (el puerto 3900 de tu Backend):

# URL para enviar los datos y obtener el JSON optimizado por Gemini
VITE_API_URL_AI=http://localhost:3900/generate-cv

# URL para enviar el JSON listo y descargar el archivo PDF
VITE_API_URL_PDF=http://localhost:3900/download-pdf

## Instalación y Arranque
Abre tu terminal en esta carpeta y ejecuta:

# Instalar dependencias
npm install

# Levantar servidor de desarrollo (Vite)
npm run dev

Abre tu navegador en la dirección que te indique la consola (normalmente http://localhost:5173) y empieza a crear tus CVs.