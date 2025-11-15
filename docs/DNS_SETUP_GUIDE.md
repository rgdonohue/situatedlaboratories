# DNS Setup Guide: GoDaddy → Netlify

**Domain:** situatedlaboratories.org  
**Hosting:** Netlify

---

## Step-by-Step DNS Configuration

### Option 1: Use Netlify DNS (Recommended - Easiest)

This is the simplest option. Netlify manages all DNS for you.

#### In Netlify:

1. Click "Set up Netlify DNS" (in the dropdown menu for `situatedlaboratories.org`)
2. Netlify will show you **nameservers** (usually 4 nameservers like `dns1.p01.nsone.net`)
3. Copy all the nameserver addresses

#### In GoDaddy:

1. Log into GoDaddy
2. Go to **My Products** → **Domains** → Click on `situatedlaboratories.org`
3. Scroll to **Additional Settings** → **Manage DNS**
4. Scroll down to **Nameservers** section
5. Click **Change**
6. Select **Custom** (not "GoDaddy Nameservers")
7. Replace the existing nameservers with Netlify's nameservers
8. Click **Save**

**Wait time:** DNS changes can take 24-48 hours, but usually work within a few hours.

**That's it!** Netlify will handle all DNS automatically, including:
- A records for the root domain
- CNAME for www subdomain
- SSL certificate (automatic)

---

### Option 2: Keep GoDaddy DNS (More Control)

If you want to keep managing DNS at GoDaddy, you'll need to add specific records.

#### In Netlify:

1. Click on `situatedlaboratories.org` → **Options** → **Edit domain**
2. Look for **DNS configuration** or **DNS records needed**
3. Netlify will show you the records you need to add

Typically you'll need:

**For root domain (`situatedlaboratories.org`):**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** Netlify IP address (usually something like `75.2.60.5`)

**For www subdomain (`www.situatedlaboratories.org`):**
- **Type:** CNAME
- **Name:** www
- **Value:** `situatedlaboratories.netlify.app` (or Netlify will provide specific value)

#### In GoDaddy:

1. Log into GoDaddy
2. Go to **My Products** → **Domains** → Click on `situatedlaboratories.org`
3. Scroll to **Additional Settings** → **Manage DNS**
4. Click **Add** to add new records:

   **Add A Record:**
   - **Type:** A
   - **Name:** @
   - **Value:** (Netlify IP from above)
   - **TTL:** 600 seconds (or default)

   **Add CNAME Record:**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** (Netlify CNAME value from above)
   - **TTL:** 600 seconds (or default)

5. **Remove any conflicting records:**
   - Delete any existing A records for @
   - Delete any existing CNAME records for www (if they conflict)

6. Click **Save**

**Wait time:** DNS propagation can take 24-48 hours, but usually works within a few hours.

---

## Which Option Should You Choose?

### Use Netlify DNS (Option 1) if:
- ✅ You want the simplest setup
- ✅ You don't need other DNS records (email, subdomains, etc.)
- ✅ You want Netlify to handle everything automatically

### Keep GoDaddy DNS (Option 2) if:
- ✅ You have email hosted elsewhere (Gmail, etc.)
- ✅ You need other DNS records managed at GoDaddy
- ✅ You want more control over DNS

---

## Verifying DNS Setup

### Check DNS Propagation:

1. **In Netlify:** The yellow warning should disappear once DNS is verified
2. **Test locally:** 
   ```bash
   # Check if DNS is resolving
   nslookup situatedlaboratories.org
   ```
3. **Online tools:**
   - https://dnschecker.org
   - Enter `situatedlaboratories.org`
   - Check if it resolves to Netlify IPs globally

### Common Issues:

**"Pending DNS verification" persists:**
- Wait longer (can take up to 48 hours)
- Double-check nameservers/records are correct
- Make sure you removed conflicting records at GoDaddy

**Site not loading:**
- DNS might still be propagating
- Clear browser cache
- Try accessing via `situatedlaboratories.netlify.app` (should always work)

---

## After DNS is Verified

Once Netlify verifies DNS:
1. ✅ Yellow warning disappears
2. ✅ SSL certificate is automatically issued (can take a few minutes)
3. ✅ Site is live at `situatedlaboratories.org`
4. ✅ `www.situatedlaboratories.org` redirects automatically

---

## Quick Reference: Netlify DNS Nameservers

If you choose Option 1, Netlify will provide nameservers like:
- `dns1.p01.nsone.net`
- `dns2.p01.nsone.net`
- `dns3.p01.nsone.net`
- `dns4.p01.nsone.net`

(These are examples - use the actual ones Netlify shows you)

---

## Need Help?

- **Netlify Status:** Check the domain management page - it will show what's needed
- **GoDaddy Support:** If you're stuck on DNS changes
- **DNS Checker:** Use dnschecker.org to verify propagation

---

> "DNS changes feel slow, but they're usually done within a few hours. Be patient, check back tomorrow."
