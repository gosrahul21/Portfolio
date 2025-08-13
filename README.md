# 🚀 Rahul Goswami - Interactive Portfolio

A cutting-edge, interactive portfolio website built with modern web technologies. Features stunning 3D animations, smooth interactions, and a centralized data management system for easy content updates.

![Portfolio Preview](https://media.licdn.com/dms/image/v2/D5603AQEp0qYO3TmsXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714213494465?e=1758153600&v=beta&t=ATrUhJ_8eRVzmQjseS3EfBTX-iwtBE0COlA6b8_B5YI)

## ✨ Features

- **🎨 Modern Design** - Beautiful gradient themes and smooth animations
- **🌐 3D Backgrounds** - Interactive Three.js canvas with dynamic effects
- **📱 Responsive** - Fully responsive design for all devices
- **⚡ Performance** - Optimized with Vite and modern React patterns
- **🎵 Music Player** - Built-in audio player for background music
- **🔍 Smart Filtering** - Advanced project filtering and search
- **📊 Dynamic Content** - Centralized data management system
- **🎭 Smooth Animations** - Framer Motion powered interactions
- **🌙 Dark Mode** - Elegant dark theme with smooth transitions

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Data Management**: Centralized JSON + TypeScript interfaces

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── 3D/            # Three.js 3D components
│   ├── Navigation.tsx # Main navigation
│   ├── HeroSection.tsx # Hero section with 3D background
│   ├── SkillsSection.tsx # Skills display
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── ContactSection.tsx # Contact form and social links
│   └── ...            # Other UI components
├── data/               # Centralized data management
│   ├── portfolio-data.json # Main data file
│   └── README.md      # Data editing guide
├── types/              # TypeScript type definitions
│   ├── index.ts       # Main type exports
│   └── portfolio-data.ts # Portfolio data types
├── utils/              # Utility functions
│   └── portfolio-data.ts # Data access utilities
├── Dashboard.tsx       # Main app component
└── App.tsx            # App entry point
```

## 📝 Content Management

### Centralized Data System

This portfolio uses a centralized JSON data system that makes content updates simple and error-free. All your portfolio information is stored in `src/data/portfolio-data.json`.

#### What You Can Edit:

- **Personal Information** - Name, title, description, avatar
- **Skills** - Technical skills with proficiency levels
- **Projects** - Project details, images, technologies, links
- **Contact** - Social links, email, CTA buttons
- **Theme** - Colors, gradients, default settings
- **SEO** - Meta information for search engines

#### Example Update:

```json
{
  "personal": {
    "name": "Your New Name",
    "title": "Your New Title",
    "description": "Your updated description..."
  }
}
```

### Data Validation

Validate your data structure before building:

```bash
npm run validate-data
```

This will check for:
- ✅ JSON syntax validity
- ✅ Required sections presence
- ✅ Data structure integrity
- ✅ Content completeness

## 🎨 Customization

### Colors and Themes

Update the theme configuration in `portfolio-data.json`:

```json
{
  "theme": {
    "colors": {
      "primary": {
        "blue": "#3b82f6",
        "purple": "#8b5cf6"
      }
    },
    "gradients": {
      "hero": "from-blue-400 via-purple-400 to-pink-400",
      "cta": "from-blue-500 to-purple-600"
    }
  }
}
```

### Adding New Projects

```json
{
  "projects": {
    "list": [
      {
        "title": "New Project",
        "description": "Project description...",
        "image": "project-image-url",
        "tech": ["React", "TypeScript", "Node.js"],
        "liveUrl": "https://project-url.com",
        "githubUrl": "https://github.com/username/project",
        "featured": true
      }
    ]
  }
}
```

### Updating Skills

```json
{
  "skills": {
    "list": [
      {
        "name": "New Technology",
        "level": 90,
        "color": "#ff6b6b"
      }
    ]
  }
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run validate-data` - Validate portfolio data

### Component Development

Components are designed to be modular and reusable. Each component:

- Accepts props for customization
- Uses centralized data when possible
- Implements smooth animations
- Is fully responsive
- Follows TypeScript best practices

### Adding New Sections

1. Create your component in `src/components/`
2. Add section data to `portfolio-data.json`
3. Update types in `src/types/portfolio-data.ts`
4. Add utility functions in `src/utils/portfolio-data.ts`
5. Integrate into `Dashboard.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components automatically adapt to screen sizes with:
- Responsive typography
- Adaptive layouts
- Touch-friendly interactions
- Optimized 3D performance

## 🎭 Animation System

### Framer Motion Integration

- **Page Transitions** - Smooth section navigation
- **Hover Effects** - Interactive element animations
- **Scroll Animations** - Intersection Observer based
- **3D Interactions** - Three.js powered animations

### Performance Optimization

- Lazy loading for 3D components
- Optimized animation triggers
- Reduced motion support
- Efficient re-renders

## 🌐 Deployment

### Build Output

The build process creates a `dist/` folder with:
- Optimized HTML, CSS, and JavaScript
- Compressed assets
- Service worker ready
- SEO optimized

### Deployment Options

- **Netlify** - Drag and drop `dist/` folder
- **Vercel** - Connect GitHub repository
- **GitHub Pages** - Deploy from `dist/` branch
- **Custom Server** - Serve static files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run validate-data`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Beautiful icon set
- **Vite** - Fast build tool

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

---

Built with ❤️ using modern web technologies
