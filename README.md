# Portal Ecommerce - Soluciones Digitales

Un proyecto frontend moderno que implementa una arquitectura hexagonal (Ports & Adapters) con React y TypeScript.

## 📋 Requisitos

- Node.js 16.x o superior
- npm 7.x o superior

## 🚀 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/portal-ecommerce.git
cd portal-ecommerce
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto basado en `.env.example` y completa con tus credenciales de EmailJS:
```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## ⚙️ Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

## 🔧 Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

## 🧪 Testing

Para ejecutar los tests:

```bash
npm test
```

## 📦 Estructura del Proyecto

El proyecto sigue una arquitectura hexagonal (Ports & Adapters) adaptada al frontend:

```
portal-ecommerce/
├── src/
│   ├── domain/         # Entidades y puertos (interfaces)
│   │   ├── entities/   # Modelos y tipos de datos
│   │   └── ports/      # Interfaces para adaptadores
│   │
│   ├── application/    # Casos de uso
│   │   └── usecases/   # Implementación de funcionalidades
│   │
│   ├── infrastructure/ # Adaptadores e implementaciones externas
│   │   └── adapters/   # Implementaciones concretas de los puertos
│   │
│   ├── ui/             # Componentes y vistas
│   │   ├── components/ # Componentes reutilizables
│   │   ├── hooks/      # Hooks personalizados
│   │   ├── layouts/    # Estructuras de página
│   │   └── pages/      # Páginas completas
│   │
│   └── config/         # Configuración general
│
└── public/             # Archivos estáticos
```

## 🧩 Formulario de Contacto

El formulario de contacto utiliza EmailJS para enviar mensajes sin necesidad de un backend propio:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio y una plantilla
3. Obtén tu Service ID, Template ID y Public Key
4. Añade esos valores a tu archivo `.env`

## 🔌 Tecnologías Principales

- React 19
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- React Hook Form + Zod
- EmailJS
- Testing Library + Vitest

## 🎨 Características

- Diseño responsive para todas las pantallas
- Animaciones modernas y elegantes
- Validación de formularios
- Arquitectura limpia y modular
- Componentes reutilizables
