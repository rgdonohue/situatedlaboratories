# Netlify DNS Setup Guide

**Domain:** situatedlaboratories.org (GoDaddy)  
**Hosting:** Netlify

Based on [Netlify's DNS documentation](https://docs.netlify.com/manage/domains/configure-domains/dns-records/), Netlify uses **NETLIFY-type DNS records** rather than traditional nameserver delegation.

---

## Understanding Netlify DNS

Netlify automatically creates **NETLIFY records** that point your domain to Netlify's servers. You have two options:

### Option 1: Let Netlify Manage DNS (Recommended)

Netlify will handle all DNS automatically. You'll need to delegate your domain to Netlify.

### Option 2: Keep DNS at GoDaddy

Add specific DNS records at GoDaddy to point to Netlify.

---

## Current Status

You're seeing a **NETLIFY record** in Netlify's interface:
- **Name:** `situatedlaboratories.org`
- **Type:** `NETLIFY`
- **Value:** `situatedlaboratories.netlify.app`

This is what Netlify creates automatically. Now you need to configure GoDaddy.

---

## Setup Steps

### Step 1: In Netlify - Continue the Setup

1. On the current page, you can:
   - **Add DNS records** (optional) - if you need email or other services
   - Click **"Continue"** button at the bottom

2. After clicking Continue, Netlify will show you:
   - **Nameservers** to use at GoDaddy (if using Option 1)
   - OR **DNS records** to add at GoDaddy (if using Option 2)

### Step 2: Choose Your Approach

**If you see nameservers:**
- Use Option 1 below (delegate to Netlify)

**If you see specific DNS records:**
- Use Option 2 below (keep DNS at GoDaddy)

---

## Option 1: Delegate Domain to Netlify (Easiest)

### In Netlify:

1. Click **"Continue"** on the current page
2. Netlify will show you **nameservers** (usually 4 addresses)
3. Copy all nameserver addresses

### In GoDaddy:

1. Log into GoDaddy
2. Go to **My Products** → **Domains** → Click `situatedlaboratories.org`
3. Scroll to **Additional Settings** → **Manage DNS**
4. Find **Nameservers** section → Click **Change**
5. Select **Custom**
6. Replace nameservers with Netlify's nameservers
7. Click **Save**

**Result:** Netlify manages all DNS automatically. The NETLIFY record you see is created automatically.

---

## Option 2: Keep DNS at GoDaddy

If you need to keep DNS management at GoDaddy (for email, etc.):

### In Netlify:

1. Click **"Continue"** 
2. Look for **"DNS records to add"** or **"Configure DNS"** section
3. Note the specific records Netlify needs

### In GoDaddy:

You'll typically need to add:

**For root domain:**
- **Type:** A
- **Name:** @
- **Value:** Netlify IP address (Netlify will provide this)

**For www subdomain:**
- **Type:** CNAME  
- **Name:** www
- **Value:** `situatedlaboratories.netlify.app` (or value Netlify provides)

**Note:** You might also need to add the NETLIFY record type at GoDaddy if they support it, but many registrars don't support NETLIFY records - in that case, use A/CNAME records instead.

---

## What to Do Right Now

1. **Click "Continue"** on the Netlify page
2. See what Netlify shows you:
   - Nameservers? → Use Option 1
   - DNS records? → Use Option 2
3. Follow the instructions Netlify provides
4. Update DNS at GoDaddy accordingly

---

## After Setup

- DNS propagation: 1-4 hours (can take up to 48 hours)
- Netlify will automatically issue SSL certificate
- Site will be live at `situatedlaboratories.org`
- `www.situatedlaboratories.org` will redirect automatically

---

## Reference

- [Netlify DNS Records Documentation](https://docs.netlify.com/manage/domains/configure-domains/dns-records/)
- [Netlify Support: NETLIFY DNS Record Type](https://answers.netlify.com/t/support-guide-what-are-the-netlify-and-netlifyv6-type-dns-records-how-do-i-delete-these-records/17430)

---

> "Click Continue and see what Netlify shows you - that will tell you exactly what to do at GoDaddy."
