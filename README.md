# PT Akses Connecting Nusaraya (AKCON) - Company Profile Website

Website company profile profesional untuk PT Akses Connecting Nusaraya (AKCON), sebuah perusahaan yang bergerak di bidang infrastruktur telekomunikasi dan solusi IT.

## 🌟 Fitur Utama

### 📱 Halaman Lengkap
- **Home**: Hero banner dengan highlight layanan utama dan statistik perusahaan
- **About Us**: Profil perusahaan, visi & misi, nilai-nilai inti, tim leadership
- **Services**: Detail layanan SITAC, CME, Project Management, dan Enterprise System & IT Solutions
- **Media**: Berita, artikel, dan update terbaru dengan sistem kategori dan pencarian
- **Contact**: Formulir kontak interaktif dengan informasi lengkap dan peta integrasi

### 🎨 Desain & UX
- **Modern & Profesional**: Desain elegan dengan warna biru tua, putih, dan aksen emas
- **Responsive**: Mobile-first design yang sempurna di semua perangkat
- **Animasi Smooth**: Transisi halus menggunakan Framer Motion
- **Interaktif**: Hover effects, loading states, dan feedback visual

### ⚡ Teknologi
- **Next.js 15** dengan App Router
- **TypeScript 5** untuk type safety
- **Tailwind CSS 4** untuk styling modern
- **shadcn/ui** components yang konsisten
- **Framer Motion** untuk animasi
- **Lucide Icons** untuk ikon modern

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
```bash
# Run linter
npm run lint

# Type checking
npm run type-check
```

## 📁 Struktur Proyek

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── media/             # Media/News page
│   ├── contact/           # Contact page
│   └── api/               # API routes
│       ├── contact/       # Contact form API
│       └── placeholder/   # Image placeholder API
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions
└── hooks/                # Custom React hooks
```

## 🎯 Fitur Detail

### Home Page
- Hero section dengan tagline perusahaan
- Image slider untuk showcase proyek
- Statistik perusahaan yang menarik
- Highlight 4 layanan utama
- Call-to-action section

### About Page
- Profil perusahaan yang komprehensif
- Timeline sejarah perusahaan
- Visi & misi dengan desain menarik
- Nilai-nilai inti perusahaan
- Tim leadership dengan profil
- Sertifikasi & standar kualitas

### Services Page
- 4 kategori layanan dengan detail lengkap
- Proses kerja untuk setiap layanan
- Fitur dan keuntungan masing-masing
- Teknologi dan standar yang digunakan
- Interactive tabs untuk navigasi mudah

### Media Page
- Artikel ungulan dengan layout menarik
- Sistem kategori (Berita, Proyek, Inovasi, Penghargaan)
- Fitur pencarian dan filter
- Statistik artikel (views, likes, comments)
- Newsletter subscription

### Contact Page
- Formulir kontak dengan validasi
- Informasi kontak lengkap
- Integrasi Google Maps
- WhatsApp Business integration
- FAQ section
- Multiple contact channels

## 🛠️ API Endpoints

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+62 812-3456-7890",
  "company": "PT Example",
  "service": "Site Acquisition (SITAC)",
  "message": "Detail message..."
}
```

### Image Placeholder
```
GET /api/placeholder/[width]/[height]
```

## 🎨 Design System

### Colors
- **Primary**: Blue 900 (#1e3a8a)
- **Secondary**: Blue 50 (#eff6ff)
- **Accent**: Gold/Yellow untuk highlight
- **Neutral**: Gray scale untuk text dan background

### Typography
- **Font Family**: Sans-serif modern (Inter/Poppins)
- **Headings**: Bold dengan hierarchy jelas
- **Body**: Regular dengan line height yang nyaman

### Components
- **Cards**: Consistent padding dan shadow
- **Buttons**: Multiple variants dan sizes
- **Forms**: Proper validation dan feedback
- **Navigation**: Sticky header dengan mobile menu

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Hamburger menu
- Touch-friendly buttons (min 44px)
- Optimized form layouts
- Readable typography

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic dengan App Router
- **Lazy Loading**: Components dan images
- **Caching**: API response caching
- **Minification**: Production builds

## 🔒 Security Features

- **CSRF Protection**: Built-in Next.js
- **Input Validation**: Client dan server side
- **XSS Prevention**: React auto-escaping
- **Secure Headers**: Production configuration

## 📈 SEO Optimizations

- **Meta Tags**: Proper title dan description
- **Structured Data**: JSON-LD untuk search engines
- **Semantic HTML**: Proper heading hierarchy
- **Open Graph**: Social media sharing
- **Sitemap**: Auto-generated

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Works tanpa JavaScript

## 📝 Content Management

Website ini menggunakan static content untuk performa optimal. Untuk update content:
1. Edit langsung di file React components
2. Update images di public/ folder
3. Modify API data di route handlers

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

Proprietary - PT Akses Connecting Nusaraya

## 📞 Support

Untuk technical support:
- **Email**: tech@akcon.co.id
- **Phone**: +62 21 27842429
- **Address**: ITS Tower 9th Floor, Jakarta 12510

---

**PT Akses Connecting Nusaraya (AKCON)**  
Connecting Innovation for the Future  
🌐 www.akcon.co.id