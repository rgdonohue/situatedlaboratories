# Domain Redirect Setup: .net → .org

**Primary domain:** situatedlaboratories.org  
**Redirect domain:** situatedlaboratories.net → situatedlaboratories.org

---

## Option 1: Netlify Domain Alias (Recommended)

Netlify can handle the redirect automatically. This is the cleanest approach.

### Steps:

1. **In Netlify:**
   - Go to **Site settings** → **Domain management**
   - Click **"Add domain alias"** (button at bottom)
   - Enter: `situatedlaboratories.net`
   - Netlify will add it as an alias

2. **Configure redirect:**
   - Netlify will automatically redirect `.net` to `.org` if `.org` is set as primary
   - Or you can set it explicitly:
     - Click on `situatedlaboratories.net` → **Options** → **Edit domain**
     - Set redirect to: `situatedlaboratories.org`

3. **Configure DNS for .net at GoDaddy:**
   - Same process as .org:
     - Either delegate nameservers to Netlify, OR
     - Add A/CNAME records pointing to Netlify

**Result:** `situatedlaboratories.net` → automatically redirects to `situatedlaboratories.org`

---

## Option 2: GoDaddy Domain Forwarding (Simpler, but less control)

If you just want a simple redirect without adding it to Netlify:

### Steps:

1. **In GoDaddy:**
   - Go to **My Products** → **Domains** → Click `situatedlaboratories.net`
   - Scroll to **Additional Settings** → **Manage DNS**
   - Look for **"Forwarding"** or **"Domain Forwarding"** section
   - Click **Add** or **Edit**
   - Forward to: `https://situatedlaboratories.org`
   - Choose **301 Permanent Redirect** (better for SEO)
   - Choose **Forward only** (not "Forward with masking")
   - Save

**Result:** `situatedlaboratories.net` → redirects to `situatedlaboratories.org` (handled by GoDaddy)

---

## Recommendation

**Use Option 1 (Netlify)** if:
- ✅ You want SSL certificate for .net too
- ✅ You want Netlify to handle everything
- ✅ You want analytics/control over the redirect

**Use Option 2 (GoDaddy)** if:
- ✅ You want the simplest setup
- ✅ You don't need SSL for .net
- ✅ You just want a basic redirect

---

## Quick Setup (GoDaddy Forwarding - Easiest)

1. GoDaddy → My Products → Domains → `situatedlaboratories.net`
2. Additional Settings → Manage DNS
3. Find "Forwarding" section
4. Forward to: `https://situatedlaboratories.org`
5. Type: 301 Permanent Redirect
6. Save

**Done!** No DNS configuration needed - GoDaddy handles it.

---

## After Setup

- `situatedlaboratories.net` → redirects to `situatedlaboratories.org`
- Both domains work
- SEO-friendly (301 redirect)
- Users typing .net will end up at .org

---

> "GoDaddy forwarding is simplest - just point .net to .org and you're done."
