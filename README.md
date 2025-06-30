# 📚 Drizzle Setup CLI

A powerful CLI tool to automatically scaffold and configure database setup using **Drizzle ORM** for PostgreSQL,SQLite,MySQL and More.

![GitHub License](https://img.shields.io/github/license/devgauravjatt/drizzle-setup?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/devgauravjatt/drizzle-setup?logo=git)
![NPM Downloads](https://img.shields.io/npm/dw/drizzle-setup?logo=npm&color=%23f75352)
![NPM Version](https://img.shields.io/npm/v/drizzle-setup?logo=npm&color=%23f75352)

---

## ✨ Features

- 🚀 **Zero Configuration Setup** – Instantly scaffold database structure and config with minimal input
- 📜 **Automated Script Generation** – Automatically updates `package.json` with essential Drizzle CLI scripts
- 🔐 **Environment Management** – Automatically injects required environment variables into `.env`
- 🗃️ **Multi-Database Support** – Seamlessly works with PostgreSQL, SQLite, MySQL, and other popular databases
- 📁 **Template System** – Instantly sets up a working project structure with best practices
- 🎯 **Interactive Setup** – Guided CLI experience with smart defaults
- 📦 **Dependency Management** – Automatically installs required packages based on your database choice

---

## 🚀 Quick Start

Navigate to your project directory and run:

```bash
npx drizzle-setup
```

The CLI will guide you through an interactive setup process:

### Setup Flow

1. **🗄️ Database Selection** – Choose from PostgreSQL, SQLite, MySQL, and more
2. **⚙️ Configuration Preset** – Select from optimized presets for different use cases
3. **📁 Target Directory** – Specify where to create your database files
4. **📋 Template Selection** – Choose from various boilerplate templates
5. **🔧 Config Generation** – Automatically create `drizzle.config.ts`
6. **🔐 Environment Setup** – Update `.env` with required variables
7. **📦 Package Management** – Install dependencies via your preferred package manager
8. **✅ Final Verification** – Ensure everything is set up correctly

---

## 🗃️ Supported Databases

### PostgreSQL

- **Default PostgreSQL** – Standard PostgreSQL setup
- **Neon** – Serverless PostgreSQL with automatic scaling
- **Supabase** – Open-source Firebase alternative
- **Vercel Postgres** – Serverless PostgreSQL by Vercel

### SQLite

- **Default SQLite** – Local SQLite database
- **Turso** – Edge SQLite database
- **Bun SQLite** – High-performance SQLite with Bun runtime
- **Cloudflare D1** – Serverless SQLite at the edge

### MySQL

- **Default MySQL** – Standard MySQL setup
- **PlanetScale** – Serverless MySQL platform
- **Railway MySQL** – Cloud MySQL hosting

> Each database type comes with pre-configured templates, optimized settings, and environment variables.

---

## 🏗️ Project Structure

After setup, your project will have a clean, organized structure:

```
project-root/
├── node_modules/            # Installed dependencies
├── drizzle.config.ts        # Drizzle configuration
├── .env                     # Environment variables
├── .env.example             # Example environment file
├── package.json             # Updated with Drizzle scripts
├── [target-folder]/         # Your database folder
│   ├── schema.ts            # Database schema definitions
│   ├── index.ts             # Database connection and exports
```

---

## Perfect for Modern Stacks 🏗️

This tool shines especially bright with modern frameworks:

### 🚀 **Astro Projects**

```bash
# In your Astro project
npx drizzle-setup
# Choose PostgreSQL + Vercel
# Boom! Database ready for your Astro app
```

### ⚡ **Next.js Apps**

```bash
# Perfect for Next.js API routes
npx drizzle-setup
# Select your preferred database
# Start building features, not configs
```

### 🎯 **Any JavaScript/TypeScript Project**

Whether it's Express, Fastify, SvelteKit, or any other framework - this CLI has got you covered.

---

## Real-World Impact 📈

**Before Drizzle Setup CLI:**

- ⏰ 2-3 hours of setup time
- 🐛 Configuration errors and typos
- 📚 Constant reference to documentation
- 😫 Frustration and context switching

**After Drizzle Setup CLI:**

- ⚡ 30 seconds to complete setup
- ✅ Zero configuration errors
- 🎯 Focus on building features
- 😊 Happy developer experience

---

## 📄 License

MIT License © 2025 Drizzle Team
