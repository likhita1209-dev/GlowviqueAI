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

Visit: https://likhita1209-dev.github.io/GlowviqueAI/index.html

## 📦 Project Structure

```
glowviqueai/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Quiz logic and product recommendations
├── CNAME              # Custom domain configuration
├── netlify.toml       # Netlify deployment config
├── vercel.json        # Vercel deployment config


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

For questions or support, please contact: https://likhita1209-dev.github.io/GlowviqueAI/index.html

## 🙏 Acknowledgments

- Product data sourced from various Indian e-commerce platforms
- Icons and emojis for enhanced user experience
- Modern CSS gradients and animations

---

Made with ❤️ for skincare enthusiasts
