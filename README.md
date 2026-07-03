# 🔥 Pokédex App

> Una aplicación moderna de Pokédex construida con React, que permite explorar, buscar y gestionar tus Pokémon favoritos con una experiencia interactiva y fluida.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología             | Descripción                                           |
| ---------------------- | ----------------------------------------------------- |
| ⚛️ **React 19**        | Librería frontend para construir interfaces dinámicas |
| 🎛️ **React Router**    | Enrutamiento y navegación entre páginas               |
| 🔄 **React Query**     | Gestión avanzada de estado y caché de datos           |
| 🎨 **TailwindCSS**     | Framework CSS utilitario para estilos modernos        |
| 🎭 **DaisyUI**         | Componentes pre-construidos sobre TailwindCSS         |
| 📋 **React Hook Form** | Gestión eficiente de formularios                      |
| ✔️ **Zod**             | Validación de esquemas TypeScript-first               |
| 🔔 **Sonner**          | Sistema de notificaciones elegante                    |
| 📡 **Axios**           | Cliente HTTP para peticiones API                      |
| ⚡ **Vite**            | Build tool ultrarrápido y moderno                     |

---

## 🚀 Instalación

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/amorindev/poke-app.git
   cd poke-app
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto:

   ```env
   VITE_POKEAPI_BASE_URL=https://pokeapi.co/api/v2
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

---

## 📚 Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Construye la aplicación para producción
npm run build

```

---

## 📁 Estructura del Proyecto

```
poke-app/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── MainLayout.jsx          # Layout principal de la app
│   │   ├── pages/
│   │   │   ├── HomePage.jsx            # Página principal con listado
│   │   │   └── Placeholder.jsx         # Página de referencia
│   │   └── sections/
│   │       └── Navbar.jsx              # Barra de navegación
│   ├── features/
│   │   ├── pokemons/                   # Módulo de Pokémon
│   │   │   ├── api/                    # Llamadas API
│   │   │   ├── components/             # Componentes UI
│   │   │   └── validations/            # Validaciones de formularios
│   │   ├── posts/                      # Módulo de Posts
│   │   │   ├── api/                    # Llamadas API
│   │   │   ├── components/             # Componentes UI
│   │   │   ├── local-storage/          # Persistencia local
│   │   │   └── validations/            # Validaciones
│   │   └── comments/                   # Módulo de Comentarios
│   │       ├── api/                    # Llamadas API
│   │       └── components/             # Componentes UI
│   ├── config/
│   │   ├── api.js                      # Configuración de Axios
│   │   └── query_client.js             # Configuración React Query
│   ├── App.jsx                         # Componente raíz
│   └── main.jsx                        # Punto de entrada
├── public/                             # Archivos estáticos
├── package.json                        # Dependencias del proyecto
├── vite.config.js                      # Configuración de Vite
├── eslint.config.js                    # Configuración de ESLint
```

---

## 🎯 Funcionalidades Detalladas

### 🐉 Exploración de Pokémon

- Visualiza el Pokédex completo con paginación
- Busca Pokémon por nombre
- Filtra por tipo (Fuego, Agua, Planta, Eléctrico, etc.)
- Accede a detalles completos de cada Pokémon

### 💪 Detalles de Pokémon

- Estadísticas completas (HP, Ataque, Defensa)
- Imagen y peso del Pokémon
- Tipos y habilidades
- Evoluciones relacionadas

### 📌 Posts y Comentarios

- Crea posts personalizado sobre Pokémon
- Añade comentarios a los posts
- Edita y elimina tus contribuciones
- Almacenamiento persistente en localStorage

### ⚙️ Validación de Datos

- Formularios validados con Zod
- Mensajes de error informativos
- React Hook Form para manejo eficiente

---

## 🌐 API Utilizada

Esta aplicación utiliza la [PokéAPI](https://pokeapi.co/api/v2) - una API RESTful gratuita y completa con datos de Pokémon.

---

## 📧 Contacto

**Autor:** Amorin Dev  
**GitHub:** [@amorindev](https://github.com/amorindev)

---

<div align="center">

**¡Gracias por usar Pokédex App! 🎉**

⭐ Si te fue útil, considera darle una estrella en GitHub

</div>
