# Bienseguro Grupo Asesor - Website

### https://www.bienseguro.net/

**Bienseguro Grupo Asesor** is a brokerage firm specializing in risk management, insurance, and surety bonds. This repository contains the source code for their informational website, primarily aimed at potential clients in Mexico seeking expert insurance advice and services. The website is currently available in Spanish only, with no multilingual support at the moment.

The website is designed to be responsive, easy to navigate, and maintain. It uses modern web technologies and includes SEO optimizations (meta tags, Open Graph metadata, JSON-LD structured data), accessibility improvements, and Google Analytics integration. Additionally, it includes `robots.txt` and `sitemap.xml` files to ensure efficient search engine crawling and indexing.

---

## Technologies Used

- **HTML**: Base structure for web pages.
- **CSS / SCSS**: Custom styles for the site's design.
- **Bootstrap 5.3**: Responsive CSS framework for streamlined mobile-friendly development.
- **JavaScript**: For dynamic content loading (e.g., navigation and footer) and user interaction.

## SEO and Accessibility Features

- **Meta Tags**: Optimized meta tags for page titles, descriptions, and keywords.
- **Open Graph Tags**: Social media specific metadata to ensure proper display on platforms like Facebook and LinkedIn.
- **JSON-LD Structured Data**: Boosts search engine visibility through structured content.
- **Favicon**: Custom icon for branding purposes.
- **robots.txt**: Directs search engine crawlers on which pages to index.
- **sitemap.xml**: Provides a map for search engines to efficiently crawl the site.
- **Google Analytics**: Enables tracking of site traffic and user behavior for continuous optimization.
- **Accessibility Features**: Includes `alt` text for images, `aria` attributes for screen reader compatibility, and semantic HTML for better accessibility.

---

## Project Structure

```
.
├── .github/workflows/deploy.yaml   # Auto FTP deployment via GitHub Actions
├── css/style.css                   # Main stylesheet (compiled from SCSS)
├── data/carrusel.json              # Main page carousel configuration data
├── img/                            # Graphic resources
├── js/
│   ├── carrusel.js                 # Carousel logic
│   ├── contact.js                  # Contact page logic
│   └── script.js                   # General scripts
├── partials/                       # Reusable components (e.g.: headers, footers)
├── scss/custom.scss                # Custom SCSS styles
├── seguros/                        # Insurance-specific pages
├── .gitignore                      # Git ignore file
├── .htaccess                       # Configures 404 error page
├── 404.html                       # Custom 404 error page
├── README.md                       # Project description
├── about.html                      # About Us page
├── contact.html                    # Contact page
├── faq.html                        # FAQ page
├── favicon.ico                     # Site favicon
├── fianzas.html                    # Surety Bonds page
├── googlec17a2f2bb6d56eb8.html     # Google verification file
├── index.html                      # Home page
├── package-lock.json               # Dependency lock file
├── package.json                    # Project dependencies
├── robots.txt                      # Search engine crawling rules
├── sitemap.xml                     # Sitemap for search engines
└── thanks.html                     # Contact form thanks page
```
