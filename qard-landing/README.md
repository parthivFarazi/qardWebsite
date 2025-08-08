# Qard Landing Page

A modern, interactive landing page for Qard - a smart card management platform that maximizes rewards while minimizing effort.

## 🚀 Features

- **Interactive 3D Card**: Rotating card with realistic thickness and drag functionality
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Lazy loading images and optimized CSS
- **Custom Cursor**: Unique cursor experience
- **Dynamic Card Behavior**: Card changes position and visibility based on scroll

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **3D Effects**: CSS 3D Transforms
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/parthivFarazi/qardWebsite.git
cd qardWebsite/newStart/qard-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
qard-landing/
├── app/
│   ├── components/
│   │   ├── CardDisplay.tsx          # 3D rotating card component
│   │   ├── CustomCursor.tsx         # Custom cursor implementation
│   │   ├── Footer.tsx               # Website footer
│   │   ├── JoinWaitlistButton.tsx   # Fixed waitlist button
│   │   ├── MissionStatement.tsx     # Mission section
│   │   ├── OurValuesSection.tsx     # Values section
│   │   ├── ScrollKeywordsSection.tsx # Scrolling keywords
│   │   ├── SignupFormSection.tsx    # Waitlist form
│   │   ├── StorySection.tsx         # Story section
│   │   ├── TeamSection.tsx          # Team members section
│   │   └── ThreeDCard.tsx           # Alternative 3D card (unused)
│   ├── providers/
│   │   └── LenisProvider.tsx        # Simple provider (no smooth scroll)
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Main page component
├── public/
│   ├── qardFinal.jpg               # Card image
│   ├── qardlogo2.png               # Logo
│   └── team/                       # Team member images
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Key Components

### CardDisplay.tsx
- **3D rotating card** with realistic thickness
- **Draggable functionality** for user interaction
- **Auto-rotation** with configurable speed
- **Dynamic positioning** based on scroll state

### JoinWaitlistButton
- **Fixed position** in top-right corner
- **Purple theme** with black hover effect
- **Smooth scroll** to signup form

### TeamSection.tsx
- **Lazy loading** team member images
- **Performance optimized** with IntersectionObserver
- **Responsive grid** layout

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Card Thickness
Edit `app/components/CardDisplay.tsx`:
```typescript
export default function CardDisplay({
  thickness = 50,        // Adjust card thickness
  rotationSpeed = 20000, // Adjust rotation speed (ms)
  // ...
})
```

### Button Colors
Edit `app/components/JoinWaitlistButton.module.css`:
```css
.joinWaitlistButton {
  background: #5c39c5;    /* Button fill color */
  border: 2px solid #7c3aed; /* Border color */
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill existing process
pkill -f "next dev"
# Or use different port
npm run dev -- -p 3001
```

**Module parse errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Dependency issues:**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Qard.


---

**Made with ❤️ by the Qard Team**
