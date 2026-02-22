# DesiBeats Dance Studio — React App

A beautiful, production-grade website for DesiBeats Dance Studio in Leander, TX.

---

## 🚀 Deploy to Netlify (Step-by-Step)

### Option A: Deploy via Netlify GUI (Recommended — No CLI needed)

#### Step 1: Build the app locally
```bash
cd desibeats
npm install
npm run build
```
This creates a `build/` folder.

#### Step 2: Go to netlify.com
1. Sign up / log in at **https://netlify.com**
2. From your dashboard, click **"Add new site"** → **"Deploy manually"**
3. **Drag and drop** the entire `build/` folder into the upload area
4. Netlify will deploy in ~30 seconds ✅

#### Step 3: Set your custom domain with "desibeats"
1. After deploy, click **"Domain settings"**
2. Under "Custom domains", click **"Options"** → **"Edit site name"**
3. Change the default name to something like: `desibeats-dance-studio`
   - Your site will be live at: `https://desibeats-dance-studio.netlify.app`
4. Or, if you own a custom domain (e.g., `desibeats.com`):
   - Click **"Add custom domain"**
   - Enter your domain
   - Follow the DNS instructions Netlify gives you

---

### Option B: Deploy via Git (auto-deploys on every push)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial DesiBeats website"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/desibeats.git
git push -u origin main
```

#### Step 2: Connect to Netlify
1. Go to **netlify.com** → "Add new site" → **"Import an existing project"**
2. Choose **GitHub** and authorize
3. Select your `desibeats` repository
4. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **"Deploy site"**

#### Step 3: Set domain
Same as Option A, Step 3.

---

## 🛠 Local Development

```bash
npm install
npm start
```
Opens at `http://localhost:3000`

---

## 📦 Project Structure

```
desibeats/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Classes.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── netlify.toml
└── package.json
```

---

## ✏️ Customization Tips

- **Colors**: Edit CSS variables in `src/index.css` (`:root` block)
- **Content**: Edit text directly in each component file
- **Add real photos**: Replace emoji placeholders in `Gallery.js` with `<img>` tags
- **Contact form**: Connect to Netlify Forms by adding `data-netlify="true"` to the `<form>` tag

---

## 📬 Enable Netlify Forms (Free)

In `Contact.js`, update the form tag:
```jsx
<form onSubmit={handleSubmit} data-netlify="true" name="enrollment">
  <input type="hidden" name="form-name" value="enrollment" />
  ...
</form>
```
Netlify will automatically capture all submissions — viewable in your Netlify dashboard!
