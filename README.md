# Singularity Lab - University Research Laboratory Website

A modern, dynamic landing website for Singularity Lab, a student-run research laboratory featuring seven specialized research divisions.

## 🚀 Features

### Navigation System
- **Floating Navbar**: Remains visible while scrolling with smooth transitions
- **Smart Sidebar**: Transforms into a vertical sidebar when scrolling up
- **Responsive Design**: Mobile-friendly navigation with collapsible menu
- **Smooth Animations**: Modern design aesthetics with Framer Motion

### Homepage
- **Hero Section**: Animated text elements with compelling tagline
- **Lab Overview**: Interactive cards for all 7 research divisions
- **Statistics Section**: Key metrics and achievements
- **Professional Footer**: Comprehensive contact and link information

### Individual Lab Pages
Each of the 7 labs features:
- **Lab Overview**: Mission statement and research focus
- **Interactive Animations**: Relevant to each lab's specialty
- **Team Structure**: Organized by roles (Executives, Affiliates, Members)
- **Research Areas**: Detailed breakdown of focus areas
- **Call-to-Action**: Application and contact sections

## 🏛️ Research Divisions

1. **Prajna Kritrima Lab** - AI/ML, Deep Learning, Generative AI
2. **Aanu Tattva Lab** - Quantum Computing, Quantum Machine Learning
3. **Chitra Darshan Lab** - Game Development, AR, VR, Mixed Reality
4. **Varahamihira Lab** - Cloud Computing, Distributed Systems
5. **Bhaskaracharya Lab** - Cybersecurity, Blockchain, Web3
6. **Agastya Lab** - Robotics, IoT, Embedded Systems
7. **Navya Vigyan Lab** - Interdisciplinary & Experimental Technology

## 🛠️ Technology Stack

- **Frontend**: React 18 with JavaScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Responsive**: Mobile-first design approach

## 🎨 Design Features

- **Modern Aesthetic**: Cutting-edge design befitting a technology research lab
- **Color Scheme**: Professional gradient-based color palette
- **Typography**: Inter font family for readability
- **Glass Effects**: Modern glassmorphism design elements
- **Smooth Transitions**: Consistent animation timing and easing
- **Accessibility**: WCAG compliant design considerations

## 📱 Responsive Design

- **Mobile First**: Optimized for all device sizes
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Mobile-optimized interactions
- **Cross-Browser**: Compatible with modern browsers

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd singularity-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Homepage
│   └── labs/              # Individual lab pages
│       ├── PrajnaKritrimaLab.js
│       ├── AanuTattvaLab.js
│       ├── ChitraDarshanLab.js
│       ├── VarahamihiraLab.js
│       ├── BhaskaracharyaLab.js
│       ├── AgastyaLab.js
│       └── NavyaVigyanLab.js
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Key Components

### Navbar
- Floating navigation with scroll-based transformations
- Dropdown menu for lab navigation
- Mobile-responsive hamburger menu
- Smooth sidebar animation

### Homepage
- Hero section with animated elements
- Lab overview cards with hover effects
- Statistics and about sections
- Call-to-action buttons

### Lab Pages
- Consistent layout across all divisions
- Team member organization
- Research area descriptions
- Interactive elements and animations

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue gradient (primary-400 to primary-600)
- **Secondary**: Gray scale (secondary-50 to secondary-900)
- **Accent**: Purple gradient (accent-400 to accent-600)

### Animations
Custom animations are defined in the Tailwind config:
- `float`: Floating animation for background elements
- `glow`: Glowing effect for interactive elements
- `slide-up`: Slide up animation for content
- `fade-in`: Fade in animation for smooth reveals

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono for code elements

## 📊 Performance

- **Fast Loading**: Optimized bundle size
- **Smooth Animations**: 60fps animations with Framer Motion
- **Lazy Loading**: Components load as needed
- **SEO Optimized**: Proper meta tags and structure

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Code Style

- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting (recommended)
- **Component Structure**: Functional components with hooks
- **File Naming**: PascalCase for components, camelCase for utilities

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for Singularity Lab, University Research Laboratory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- **Email**: contact@singularitylab.edu
- **Phone**: +1 (234) 567-8900
- **Address**: University Research Complex, Technology Building, Room 404

---

**Singularity Lab** - Where Innovation Meets Imagination
# Singularity
