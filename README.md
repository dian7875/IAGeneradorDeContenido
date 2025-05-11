
# 🧠 Generador de Contenido con IA

Este proyecto es una aplicación web moderna construida con **Vue.js** y **Vite** que permite generar contenido automatizado utilizando inteligencia artificial. El frontend se comunica con una API backend para enviar prompts y obtener respuestas generadas dinámicamente.

---

## 🚀 Características

- ✍️ Generación de textos a partir de prompts personalizados.
- 🔁 Opción de **regenerar** contenido ya generado.
- 🗂️ Gestión de prompts: listar, eliminar y reutilizar.
- 📱 Interfaz de usuario **responsiva y accesible**.
- 🌙 Soporte para modo **oscuro/claro**.

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone <https://github.com/dian7875/IAGeneradorDeContenido.git>
cd IAGeneradorDeContenido
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto y define la URL base de tu API backend:

```env
VITE_BASE_URL=https://api.tu-backend.com
```

> Reemplaza `https://api.tu-backend.com` con la URL real de tu servidor.

---

## 🧪 Modo de desarrollo

Ejecuta el siguiente comando para levantar la app en modo desarrollo:

```bash
npm run dev
```

Luego abre tu navegador en (http://localhost:5173) (o la URL indicada por Vite en consola).

---

## 📦 Construcción para producción

Para generar los archivos optimizados de producción:

```bash
npm run build
```

Los archivos se colocarán en la carpeta `dist/`, listos para ser desplegados en un servidor.

---

## 🛠️ Tecnologías usadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Query](https://tanstack.com/query/latest/docs/vue/)
- [TypeScript](https://www.typescriptlang.org/)
- [i18n (internacionalización)](https://vue-i18n.intlify.dev/)

---

## 📄 Licencia

Este proyecto está licenciado bajo los términos de la [MIT License](LICENSE).
