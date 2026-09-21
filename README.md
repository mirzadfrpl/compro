# W4DIGID4W - Corporate Profile

A premium, geometrically-disciplined corporate profile website built with **Astro**, **Tailwind CSS**, and **Keystatic CMS**. Features a bold, minimalist *Ikko Tanaka*-inspired design system, complete with a fully editable Git-based CMS and a custom real-time visual Theme Editor.

## ✨ Key Features

- **Blazing Fast Performance**: Built with Astro in Server-Side Rendering (SSR) mode for instant load times and perfect SEO.
- **Git-Based CMS (Keystatic)**: Manage all text, content, teams, and portfolios directly through a beautiful admin dashboard without needing an external database.
- **Custom Theme Editor**: A built-in visual color picker to change the entire website's design system (Background, Main Text, Primary & Secondary Accents) instantly via CSS Variables.
- **Built-in Security**: The CMS and Theme Editor are locked behind a Basic Authentication middleware to prevent unauthorized access.
- **Responsive & Accessible**: Mobile-first Tailwind CSS architecture ensuring the geometric layouts scale perfectly on all devices.

## 🛠️ Tech Stack

- [Astro 5](https://astro.build/) - Web Framework (Node.js Adapter)
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Keystatic](https://keystatic.com/) - Git-based CMS for Astro
- [React](https://reactjs.org/) - Used internally for Keystatic Admin UI

## 🚀 Getting Started

### 1. Installation

Ensure you have Node.js installed, then clone the repository and install dependencies:

```bash
npm install --legacy-peer-deps
```
*(Note: `--legacy-peer-deps` is required to resolve peer dependencies between Astro and older Tailwind plugins if any).*

### 2. Running the Development Server

Start the local development server:

```bash
npm run dev
```

The website will be available at [http://localhost:4321](http://localhost:4321).

## 📝 Content Management (CMS)

To edit the content of the website (hero text, portfolios, team members, etc.):

1. Navigate to [http://localhost:4321/keystatic](http://localhost:4321/keystatic)
2. You will be prompted for authentication.
   - **Username**: `admin`
   - **Password**: `studioara`
3. Edit your content! Changes are saved directly to the `src/content/` directory as YAML files.

*(To change the admin username and password, edit the `src/middleware.ts` file).*

## 🎨 Theme Editor

To change the website's color scheme visually:

1. Navigate to [http://localhost:4321/theme](http://localhost:4321/theme).
2. Authenticate using the same credentials as the CMS.
3. Use the color pickers to define your Background, Main Text, and Accent colors.
4. Click **Save Theme Colors** and refresh your homepage to see the global changes instantly applied.

## 🌍 Deployment

### Vercel / Standard Hosting
This project is configured with `@astrojs/node` (`output: 'server'`) and is ready to be deployed to any Node.js compatible hosting environment (VPS, DigitalOcean, Niagahoster).

If you are deploying to a serverless environment like **Vercel** and want to edit content directly on the live site:
1. You must change the Keystatic storage mode in `keystatic.config.ts` from `local` to `github`.
2. Connect it to a GitHub App to allow Keystatic to push commits directly to your repository.
3. Switch the Astro adapter in `astro.config.mjs` to `@astrojs/vercel`.

---
*Designed with precision.*
