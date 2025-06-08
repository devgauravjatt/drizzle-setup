# 📚 Drizzle Setup CLI

A powerful CLI tool to automatically scaffold and configure database setup using **Drizzle ORM** for PostgreSQL,SQLite,MySQL and More.

---

## ✨ Features

- 📦 **Zero Config Setup** – Instantly scaffold DB structure and config with minimal input.
- 📜 **Drizzle Scripts** – Automatically updates `package.json` with Drizzle CLI scripts.
- 🔧 **.env Auto Update** – Automatically injects required environment variables.
- 🧩 **Multiple DB Support** – Works seamlessly with PostgreSQL,SQLite,MySQL and More setups.
- 📁 **Template Copying** – Instantly sets up a working `target-folder` structure.

---

## 📦 Installation

Install globally via your preferred package manager:

```bash
npm install -g drizzle-setup
# or
npx drizzle-setup
```

---

## 🚀 Quick Start

Just run the CLI in your project directory:

```bash
drizzle-setup
```

You'll be guided through:

1. **Choosing your database** (PostgreSQL or SQLite moreover)
2. **Selecting a config preset**
3. **Specifying a target folder**
4. **Copying boilerplate files**
5. **Setting up `drizzle.config.ts`**
6. **Updating `.env` and `package.json`**
7. **Installing dependencies** via your chosen package manager

---

## 🧪 Supported Databases

- PostgreSQL - Default, Neon
- SQLite - Default, Turso, Bun SQLite

Each database type comes with its own pre-configured templates and `.env` variables.

---

## 🧱 Directory Structure

After setup, your project might look like this:

```
project-root/
├── drizzle.config.ts
├── .env
├── [target-folder]/
│       ├── schema.ts
│       └── index.ts
```

---

## 📄 License

MIT License

---
