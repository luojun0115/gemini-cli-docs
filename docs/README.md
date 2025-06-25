# Gemini CLI Documentation

This directory contains the documentation site built with VitePress.

## Development

```bash
# Install dependencies
npm ci

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Structure

```
docs/
├── .vitepress/
│   └── config.ts           # VitePress configuration
├── zh/                     # Chinese translations
│   ├── index.md
│   ├── cli/
│   ├── core/
│   └── tools/
├── index.md               # English documentation (root)
├── cli/                   # CLI documentation
├── core/                  # Core API documentation
├── tools/                 # Tools documentation
└── assets/               # Images and static files
```

## Internationalization (i18n)

The documentation supports multiple languages:

- **English** (default): `/docs/`
- **简体中文**: `/docs/zh/`

To add a new language:

1. Add the locale configuration in `.vitepress/config.ts`
2. Create the corresponding directory structure
3. Translate the navigation and sidebar labels
4. Create translated markdown files

## Deployment

Documentation is automatically deployed to Vercel when changes are pushed to the repository.

### Vercel Setup

1. Connect your GitHub repository to Vercel
2. Set the framework preset to "VitePress" 
3. Configure build settings:
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
   - **Install Command**: `npm ci`

The `vercel.json` configuration file handles routing and caching automatically.