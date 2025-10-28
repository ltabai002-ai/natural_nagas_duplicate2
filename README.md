# Natural Nagas NGO Website

A modern, responsive website for the Natural Nagas NGO organization built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multi-page organization website** with comprehensive information sections
- **Responsive design** that works on all devices
- **Modern React architecture** with TypeScript for type safety
- **Tailwind CSS** for beautiful, consistent styling
- **React Router** for seamless navigation
- **Optimized build** with Vite for fast loading

## 📄 Pages

- Home - Main landing page
- About - Organization information
- Programs - Details about NGO programs
- Education - Educational initiatives
- Events - Upcoming and past events
- Publications - Documents and resources
- Impact - Organization impact metrics
- Gallery - Photo gallery
- Get Involved - Volunteer and participation info
- Contact - Contact information and form
- FAQ - Frequently asked questions
- Privacy Policy, Terms of Service, Accessibility

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kash2021-hobby/natural_nagas.git
cd natural_nagas
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Automated Deployment (Recommended)

This project is configured for automatic deployment to Cloudflare Pages via GitHub Actions.

**Setup:**

1. Fork or clone this repository to your GitHub account
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Create a Cloudflare Pages project
4. Connect it to your GitHub repository
5. Set build configuration:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

**GitHub Secrets (Optional for direct deployment):**
If you want to use the GitHub Action workflow, add these secrets to your repository:
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID

### Manual Deployment

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Authenticate with Cloudflare:
```bash
wrangler login
```

3. Build and deploy:
```bash
npm run build
wrangler pages deploy dist --project-name="natural-nagas"
```

Or use the provided deployment script:
```bash
./deploy.sh
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   └── ...             # Other pages
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The color scheme features:
- Primary background: `bg-amber-50`
- Text: `text-gray-900`
- Consistent component styling throughout

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `wrangler.toml` - Cloudflare deployment configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## 📞 Support

For questions or support regarding the website, please contact the Natural Nagas organization through the contact page or open an issue in this repository.

## 📄 License

This project is created for the Natural Nagas NGO organization.