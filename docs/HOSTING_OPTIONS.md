# Hosting Options for Situated Laboratories

**Domain:** situatedlaboratories.org (registered with GoDaddy)  
**Site Type:** Static site (builds to `dist/`)

---

## ✅ Recommended Options

### Option 1: GitHub Pages (Free, Simple)

**Pros:**
- Free forever
- Works directly with GitHub repo
- Simple setup
- Good for static sites

**Cons:**
- Slightly slower than CDN options
- No serverless functions (not needed for this project)

**Setup Steps:**

1. **Push your repo to GitHub** (if not already)
   ```bash
   git remote add origin https://github.com/yourusername/situatedlaboratories.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or create `gh-pages` branch)
   - Folder: `/dist`

3. **Configure DNS at GoDaddy:**
   - Add A record: `@` → `185.199.108.153`
   - Add A record: `@` → `185.199.109.153`
   - Add A record: `@` → `185.199.110.153`
   - Add A record: `@` → `185.199.111.153`
   - Add CNAME: `www` → `yourusername.github.io`

4. **Update astro.config.mjs:**
   ```js
   site: 'https://situatedlaboratories.org',
   ```

**Note:** GitHub Pages serves from root or `/docs` folder. You'll need to either:
- Build to `docs/` instead of `dist/`
- Use GitHub Actions to deploy `dist/` to `gh-pages` branch
- Use a deployment action (see below)

---

### Option 2: Netlify (Recommended - Best DX)

**Pros:**
- Free tier (generous limits)
- Automatic deployments from GitHub
- Easy custom domain setup
- Built-in CDN (fast globally)
- Automatic HTTPS
- Preview deployments for PRs
- Form handling (if needed later)

**Cons:**
- None for this use case

**Setup Steps:**

1. **Push repo to GitHub** (if not already)

2. **Connect to Netlify:**
   - Sign up at netlify.com (free)
   - "Add new site" → "Import an existing project"
   - Connect GitHub repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy

3. **Add custom domain:**
   - Site settings → Domain management
   - Add custom domain: `situatedlaboratories.org`
   - Netlify will show DNS instructions

4. **Configure DNS at GoDaddy:**
   - Netlify will provide specific IPs/nameservers
   - Either:
     - **Option A:** Point nameservers to Netlify (easiest)
     - **Option B:** Add A/CNAME records (keep GoDaddy DNS)

5. **Update astro.config.mjs:**
   ```js
   site: 'https://situatedlaboratories.org',
   ```

**Netlify Configuration File** (optional, but recommended):

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: Vercel (Also Great)

**Pros:**
- Free tier
- Automatic deployments from GitHub
- Excellent performance
- Easy custom domain
- Built by Next.js team (but works great with Astro)

**Cons:**
- Slightly more Next.js-focused (but still great for Astro)

**Setup Steps:**

1. **Push repo to GitHub**

2. **Connect to Vercel:**
   - Sign up at vercel.com (free)
   - "Add New Project"
   - Import GitHub repo
   - Framework Preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
   - Deploy

3. **Add custom domain:**
   - Project settings → Domains
   - Add `situatedlaboratories.org`
   - Follow DNS instructions

4. **Configure DNS at GoDaddy:**
   - Vercel provides specific records
   - Add A/CNAME records as instructed

---

### Option 4: Cloudflare Pages (Free, Fast CDN)

**Pros:**
- Free forever
- Excellent global CDN
- Automatic deployments from GitHub
- Fast performance

**Cons:**
- Slightly more technical setup

**Setup Steps:**

1. **Push repo to GitHub**

2. **Connect to Cloudflare Pages:**
   - Cloudflare dashboard → Pages
   - Create project → Connect to Git
   - Select repo
   - Build settings:
     - Framework: Astro
     - Build command: `npm run build`
     - Build output: `dist`

3. **Add custom domain:**
   - Pages project → Custom domains
   - Add `situatedlaboratories.org`
   - DNS will auto-configure if domain is on Cloudflare

---

## 🎯 Recommendation: Netlify

**Why Netlify:**
1. **Easiest custom domain setup** - Handles DNS automatically
2. **Best developer experience** - Automatic deployments, previews
3. **Free tier is generous** - More than enough for this site
4. **Built for static sites** - Perfect fit
5. **Audio file hosting** - Can handle your practice audio files
6. **No build limits** - Unlimited builds on free tier

---

## Quick Setup Guide (Netlify)

### 1. Prepare Repository

```bash
# Make sure everything is committed
git status

# Push to GitHub (if not already)
git remote add origin https://github.com/yourusername/situatedlaboratories.git
git push -u origin main
```

### 2. Create netlify.toml

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/audio/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3. Update astro.config.mjs

Make sure site URL is set:

```js
export default defineConfig({
  site: 'https://situatedlaboratories.org',
  // ... rest of config
});
```

### 4. Deploy to Netlify

1. Go to netlify.com, sign up/login
2. "Add new site" → "Import an existing project"
3. Connect GitHub, select repo
4. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### 5. Add Custom Domain

1. Site settings → Domain management
2. "Add custom domain" → `situatedlaboratories.org`
3. Netlify will show DNS instructions

### 6. Configure DNS at GoDaddy

**Option A: Use Netlify Nameservers (Easiest)**
- GoDaddy → Domain Settings → Nameservers
- Change to Netlify nameservers (provided by Netlify)
- Everything handled automatically

**Option B: Keep GoDaddy DNS (More Control)**
- Add A record: `@` → Netlify IP (provided)
- Add CNAME: `www` → `your-site.netlify.app`

---

## GitHub Pages Alternative Setup

If you prefer GitHub Pages, you'll need a GitHub Action to deploy:

### Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

Then:
1. Enable GitHub Pages in repo settings
2. Source: GitHub Actions
3. Configure DNS at GoDaddy (A records to GitHub IPs)

---

## Cost Comparison

| Option | Cost | Best For |
|-------|------|----------|
| **Netlify** | Free | Easiest setup, best DX |
| **Vercel** | Free | Performance-focused |
| **GitHub Pages** | Free | Already using GitHub |
| **Cloudflare Pages** | Free | Global CDN performance |

All options are **free** for this use case. Netlify is recommended for simplicity.

---

## Next Steps

1. Choose hosting option (recommend Netlify)
2. Push repo to GitHub
3. Set up hosting account
4. Connect repo and deploy
5. Add custom domain
6. Configure DNS at GoDaddy
7. Test site at situatedlaboratories.org

---

## Audio File Considerations

All hosting options can serve audio files from `/public/audio/`. For larger files or many practices:

- **Netlify:** 100GB bandwidth/month on free tier (plenty)
- **Vercel:** 100GB bandwidth/month on free tier
- **GitHub Pages:** 1GB repo size limit (audio files count)
- **Cloudflare:** Unlimited bandwidth

For 5-10 minute MP3s (5-10MB each), all options work fine. If you have many practices, consider:
- Compressing audio files
- Using a CDN (all options include CDN)
- Moving to dedicated audio hosting later (only if needed)

---

> "Choose the simplest option that works. For a static site, that's usually Netlify."
