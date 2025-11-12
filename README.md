# 🎨 Personal Portfolio Website

A stunning, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Optimized for fast deployment on Vercel.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## ✨ Features

- 🎯 Modern, clean design with smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile → desktop)
- ⚡ Fast performance with Vite
- 🎨 Beautiful gradient accents and glassmorphism effects
- 🔄 Smooth scrolling navigation
- 💫 Framer Motion animations
- 🚀 One-click deployment to Vercel

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with dark mode toggle
│   │   ├── Hero.jsx         # Hero section with typing animation
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills grid with icons
│   │   ├── Projects.jsx     # Project cards with links
│   │   ├── Contact.jsx      # Contact form and info
│   │   └── Footer.jsx       # Footer component
│   ├── data/
│   │   └── projects.js      # Project data array
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### 1. Personal Information

Edit the following files to add your personal information:

**Hero Section** (`src/components/Hero.jsx`):
- Line 28: Change `"Your Name"` to your actual name
- Line 38: Update the tagline
- Lines 50-70: Update social media links

**About Section** (`src/components/About.jsx`):
- Line 56: Replace profile image URL
- Lines 67-73: Update your bio text

**Contact Section** (`src/components/Contact.jsx`):
- Lines 11-27: Update contact information
- Lines 29-45: Update social media links

**Footer** (`src/components/Footer.jsx`):
- Line 11: Update your name

### 2. Projects

Edit `src/data/projects.js` to add your own projects:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Brief description of your project",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  live: "https://your-project.vercel.app",
  image: "https://your-image-url.com/image.jpg"
}
```

### 3. Skills

Edit `src/components/Skills.jsx` (lines 9-20) to update your tech stack:

```javascript
{ name: "Your Skill", icon: "🎯", color: "from-blue-400 to-cyan-400" }
```

### 4. Colors & Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Method 2: GitHub Integration

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Done!** Your site is now live with automatic deployments on every push.

### Method 3: Vercel Dashboard

1. **Build your project locally**
   ```bash
   npm run build
   ```

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
   - Click "Add New Project"
   - Upload the `dist` folder
   - Click "Deploy"

## 🎯 Performance Tips

- Images are loaded from Unsplash (replace with optimized local images)
- Use WebP format for images
- Lazy load images below the fold
- Keep bundle size minimal

## 📝 Environment Variables

If you add features like contact forms (EmailJS, Formspree), create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🐛 Troubleshooting

**Build fails:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`

**Styles not loading:**
- Check if Tailwind is configured correctly
- Verify `index.css` imports Tailwind directives

**Animations not working:**
- Ensure Framer Motion is installed: `npm install framer-motion`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourusername)
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**

⭐ Star this repo if you found it helpful!
