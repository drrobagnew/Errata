# Errata — London's Queerest Choir

Official website for Errata, London's Queerest Choir.

## 🌐 Live Site

Hosted on GitHub Pages at: `https://[your-username].github.io/errata`

## 📁 Files

- `index.html` — Main HTML page
- `style.css` — All styles
- `script.js` — Navigation, animations, form handling

## 🚀 Deploying to GitHub Pages

1. **Create a new repository** on GitHub called `errata` (or any name you like)

2. **Push these files** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/errata.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click Save
   - Your site will be live at `https://YOUR_USERNAME.github.io/errata` within a few minutes

## ✏️ Customising

### Update contact details
In `index.html`, search for `hello@errataschoir.co.uk` and replace with your real email.

### Update social links
Search for `@errataschoir` in `index.html` and update the Instagram/Twitter handles.

### Add events
Find the `events-grid` div in `index.html` and update the event cards with real dates and details.

### Update the stats
Find `stat-num` spans in the About section and fill in real numbers.

### Add gallery photos
Replace the `.gallery-placeholder` divs with real `<img>` tags:
```html
<div class="gallery-item">
  <img src="photos/rehearsal.jpg" alt="Errata rehearsal" />
</div>
```

### Custom domain
To use a custom domain (e.g. `errataschoir.co.uk`):
1. Add a `CNAME` file to the repo containing just your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Set the custom domain in repo Settings → Pages

## 🎨 Colours

- Magenta `#d4006b` — primary brand
- Ink `#0f0e0d` — text/dark
- Cream `#f5f0e8` — background
- Gold `#d4a200` — accent
- Teal `#007a6b` — EDI section
- Purple `#5b0d8f` — Join section

## 💌 Contact

Update `hello@errataschoir.co.uk` throughout the site with your real contact address.
