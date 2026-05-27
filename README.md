# GlowviqueAI.com - Personalized Skincare Recommendations

A beautiful, AI-powered skincare recommendation website that helps users discover their perfect skincare routine based on their skin type, concerns, and budget.

## 🌟 Features

- **Interactive Quiz**: Users answer questions about their skin type, main concerns, and budget
- **AI-Powered Analysis**: Personalized recommendations based on user inputs
- **Product Database**: Curated skincare products from popular Indian e-commerce platforms
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## 🛍️ Supported Platforms

- Nykaa
- Amazon India
- Flipkart
- Myntra
- And more...

## 🚀 Live Demo

Visit: [www.glowviqueai.com](https://www.glowviqueai.com)

## 📦 Project Structure

```
glowviqueai/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Quiz logic and product recommendations
├── CNAME              # Custom domain configuration
├── netlify.toml       # Netlify deployment config
├── vercel.json        # Vercel deployment config
└── DEPLOYMENT_GUIDE.md # Detailed deployment instructions
```

## 🏃‍♂️ Running Locally

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/glowviqueai.git
cd glowviqueai
```

2. Open with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000` in your browser

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy Options:

**Netlify (Recommended)**
1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Add custom domain: www.glowviqueai.com
4. Configure DNS at your domain registrar

**Vercel**
```bash
npm install -g vercel
vercel
```

**GitHub Pages**
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Add CNAME file with your domain
4. Configure DNS

## 🎨 Customization

### Adding New Products

Edit `script.js` and add products to the `productDatabase` object:

```javascript
productDatabase.oily.cleanser.push({
    name: "Product Name",
    brand: "Brand Name",
    price: "₹999",
    priceValue: 999,
    description: "Product description",
    benefits: ["Benefit 1", "Benefit 2"],
    link: "https://product-link.com",
    platform: "nykaa",
    budget: "budget"
});
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffa07a;
}
```

## 🔒 Security Features

- HTTPS enabled by default
- Security headers configured
- XSS protection
- Content Security Policy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact: support@glowviqueai.com

## 🙏 Acknowledgments

- Product data sourced from various Indian e-commerce platforms
- Icons and emojis for enhanced user experience
- Modern CSS gradients and animations

---

Made with ❤️ for skincare enthusiasts