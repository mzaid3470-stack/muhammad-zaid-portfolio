# Muhammad Zaid — Premium Personal Portfolio Website
> **Full Stack Developer & Professional Embroidery Digitizer**  
> Karachi, Pakistan &bull; [mzaid3470@gmail.com](mailto:mzaid3470@gmail.com) &bull; +92 329 2619816  
> GitHub: [github.com/mzaid3470-stack](https://github.com/mzaid3470-stack) &bull; Upwork: [Upwork Profile](https://www.upwork.com/freelancers/~01fb4c901421a1fd44?mp_source=share)

---

## 🌟 Project Overview

This is the production-ready personal portfolio website for **Muhammad Zaid**, showcasing dual expertise in **Full Stack Web Development** (HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL) and **Professional Embroidery Digitizing** (Wilcom Embroidery Studio, Flat, 3D Puff, and Applique).

### Key Features:
- **Premium Visual Identity:** Deep charcoal/black themes with vibrant electric violet, indigo, and cyan gradients; subtle glassmorphism and modern card styling.
- **Functional Dark / Light Mode Toggle:** Smooth transition with `localStorage` persistence and automatic system color scheme detection.
- **Complete Single-Page Portfolio Architecture:**
  1. **Hero Section:** Animated headlines, dual-specialty badge pills, quick CTAs, social links, and interactive visual avatar frame.
  2. **About Me:** Professional narrative, core values, location badges, and dual specialization breakdown.
  3. **Technical Skills:** Category-grouped skill cards (Frontend, Backend, Tools, Embroidery Digitizing). No arbitrary percentages—purely professional competency tags.
  4. **Professional Experience:** Work history covering Freelance Practice, Armcom (QA Assistant, 1 Year), and T.E.S Office (Sales Person, 6 Months).
  5. **Education:** Clean academic timeline covering CMA (ICMA Pakistan, Currently Studying), DISM (Aptech Pakistan, Currently Studying), Intermediate (Govt. Dehli College), and Matriculation (The Eeman Academy).
  6. **Featured Web Development Projects:** Live previews and verified information for *Vebra Sound* (PHP/MySQL) and *Excellent Coaching* (Bootstrap/JS) with real screenshots.
  7. **Embroidery Digitizing Portfolio:** Dedicated commercial showcase for Wilcom ES, supported formats (DST, PES, EMB, JEF), interactive category filtering tabs, and a **Lightbox Modal** for inspecting stitch details.
  8. **ATS-Friendly CV (Resume):** Interactive web preview card, standalone ATS-optimized HTML version (`cv.html`), and vector PDF download (`Muhammad_Zaid_CV.pdf`).
  9. **Professional Cover Letter:** Dedicated proposal document (`cover-letter.html`) with downloadable vector PDF (`Muhammad_Zaid_Cover_Letter.pdf`).
  10. **Freelancing Profiles:** Highlighting Upwork and GitHub direct channels.
  11. **Contact Section:** Form validation, honeypot anti-spam protection, direct WhatsApp chat link, direct email link, and dual-mode backend support (`contact.php` and static fallback).
  12. **Footer:** Quick navigation, social links, back to top button, and dynamic copyright year.
- **SEO & Performance:** Full Open Graph metadata, Twitter Cards, Schema.org JSON-LD structured data, XML Sitemap (`sitemap.xml`), and `robots.txt`.

---

## 📁 Project Structure

```text
c:\Users\Zaid\Desktop\Personal Portfolio\
├── index.html                           # Main single-page portfolio
├── cv.html                              # Standalone ATS-friendly CV page
├── cover-letter.html                    # Standalone formal Cover Letter page
├── contact.php                          # Secure PHP backend mail handler
├── robots.txt                           # Search engine crawling rules
├── sitemap.xml                          # XML sitemap for SEO indexing
├── README.md                            # Complete documentation & maintenance manual
└── assets/
    ├── css/
    │   ├── style.css                    # Main design system, dark/light themes, typography
    │   └── animations.css               # Scroll reveals, micro-interactions, hardware-accelerated animations
    ├── js/
    │   ├── main.js                      # Theme switcher, nav spy, mobile menu, lightbox, form validation
    │   └── animations.js                # IntersectionObserver scroll reveals & card tilt interaction
    ├── images/
    │   ├── profile/
    │   │   ├── profile-placeholder.svg  # Default sleek vector placeholder avatar
    │   │   └── README.txt               # Instructions on replacing with your real photo
    │   ├── projects/
    │   │   ├── excellent-coaching.png   # Real screenshot of Excellent Coaching project
    │   │   ├── vebra-sound.png          # Real screenshot of Vebra Sound project
    │   │   └── README.txt               # Instructions on adding more project screenshots
    │   ├── digitizing/
    │   │   ├── flat-embroidery-crest.svg# Flat embroidery sample placeholder
    │   │   ├── 3d-puff-athletics.svg    # 3D Puff foam embroidery sample placeholder
    │   │   ├── applique-patch-design.svg# Applique embroidery sample placeholder
    │   │   ├── corporate-logo-stitch.svg# Logo digitizing sample placeholder
    │   │   ├── headwear-cap-stitch.svg  # Cap / headwear sample placeholder
    │   │   ├── jacket-back-complex.svg  # Jacket back embroidery sample placeholder
    │   │   └── README.txt               # Instructions on dropping real embroidery photos
    │   └── icons/
    │       └── favicon.svg              # Custom MZ brand monogram icon
    └── documents/
        ├── Muhammad_Zaid_CV.pdf           # Downloadable ATS-friendly vector PDF CV
        ├── Muhammad_Zaid_Cover_Letter.pdf # Downloadable vector PDF Cover Letter
        └── README.txt                     # Guide on generating and updating PDFs
```

---

## 🚀 How to Run Locally

Because the project is built with lightweight, zero-dependency modern HTML5, CSS3, and JavaScript:

### Method 1: Direct Browser Launch (Fastest)
Double-click `index.html` in your file explorer, or right-click `index.html` and select **Open with Google Chrome** or **Microsoft Edge**.

### Method 2: Live Server (VS Code Extension)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click **"Go Live"** in the bottom status bar or right-click `index.html` &rarr; **Open with Live Server**.
4. The site will open at `http://127.0.0.1:5500/`.

### Method 3: Local PHP Server (Testing Contact Form)
If you have PHP installed (or XAMPP/WampServer):
```bash
# In the project root directory:
php -S localhost:8000
```
Open `http://localhost:8000` in your web browser.

---

## 🛠️ Maintenance & Content Updates

### 1. How to Replace Your Profile Photograph
1. Save your professional photo as a square or portrait image (e.g., 600x700px or 800x800px).
2. Save it to:
   ```text
   assets/images/profile/profile.jpg
   ```
3. In `index.html`, find `id="profile-img"` (around Line 195) and update the `src`:
   ```html
   <!-- Change this: -->
   <img src="assets/images/profile/profile-placeholder.svg" alt="Muhammad Zaid" id="profile-img">

   <!-- To: -->
   <img src="assets/images/profile/profile.jpg" alt="Muhammad Zaid" id="profile-img">
   ```

### 2. How to Add Your Real Embroidery Work Samples
1. Export high-resolution photographs or 3D Wilcom simulation images as JPG or PNG.
2. Place them into `assets/images/digitizing/` (e.g. `cap-design-1.jpg`, `jacket-logo.jpg`).
3. In `index.html`, find the `<section id="digitizing">` section and update the `<img>` tags inside `.gallery-thumb-wrap`:
   ```html
   <img src="assets/images/digitizing/cap-design-1.jpg" alt="Custom Cap Embroidery Digitizing">
   ```
4. The built-in **Lightbox Modal** will automatically display and zoom your real photo when clicked!

### 3. How to Add New Web Projects
1. Take a screenshot of your website (recommended: 1280x800 or 1600x1000px).
2. Save into `assets/images/projects/your-project-name.png`.
3. In `index.html`, duplicate one of the `.project-card` blocks inside `.projects-grid`, update the title, description, live URL, and technology pills.

### 4. How to Update Your CV and Cover Letter
- Edit `cv.html` or `cover-letter.html` directly with your updated experience, education, or contact details.
- To re-generate the downloadable PDF:
  1. Open `cv.html` in Chrome or Edge.
  2. Click the **"Print CV"** button in the top action bar (or press `Ctrl + P`).
  3. Select **"Save as PDF"** as the destination.
  4. Ensure **Margins: None** and **Background Graphics: Enabled**.
  5. Save to `assets/documents/Muhammad_Zaid_CV.pdf`.
  *(Repeat the same for `cover-letter.html` &rarr; `Muhammad_Zaid_Cover_Letter.pdf`)*.

### 5. How to Configure the Contact Form

The contact form is equipped with two operating modes:

#### Option A: Built-in PHP Handler (`contact.php`)
If hosted on standard PHP hosting (cPanel, Apache, XAMPP, InfinityFree, Great-Site):
- Open `contact.php`.
- Ensure `$recipient_email = 'mzaid3470@gmail.com';` is your target email.
- Emails will be delivered directly from your web server.

#### Option B: Third-Party Form Service (Formspree / Web3Forms)
If you deploy on static hosting (GitHub Pages, Vercel, Netlify):
- Create a free account at [Formspree.io](https://formspree.io) or [Web3Forms.com](https://web3forms.com).
- Update the `<form>` tag in `index.html`:
  ```html
  <form id="portfolio-contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
- Or rely on the built-in automatic fallback button that allows clients to send their message with one click via **WhatsApp** or their local **Email Client**.

---

## 🌐 How to Deploy

### Option 1: GitHub Pages (Free & Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a repository on GitHub (e.g. `mzaid3470-stack.github.io` or `portfolio`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/mzaid3470-stack/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to repository **Settings** &rarr; **Pages** &rarr; Select Branch: `main` &rarr; Save. Your website will be live in 60 seconds!

### Option 2: Netlify / Vercel (Drag & Drop)
1. Log in to [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com).
2. Simply drag and drop the `Personal Portfolio` folder onto the dashboard.
3. Your website will be instantly live on a global CDN with free SSL/TLS encryption.

### Option 3: InfinityFree / cPanel Hosting (Full PHP Support)
1. Log in to your hosting cPanel or FTP account.
2. Navigate to `public_html` or `htdocs`.
3. Upload all files and folders maintaining the exact directory structure.
4. Both the website and the `contact.php` mail script will function immediately.

---

## 🛡️ Privacy & Security
- No private API keys or sensitive credentials are embedded in client-side code.
- Honeypot spam fields protect the contact form from automated spam bots.
- Social links use `rel="noopener"` to prevent tab-nabbing vulnerabilities.

---

&copy; 2026 **Muhammad Zaid**. Full Stack Developer &amp; Embroidery Digitizer.
