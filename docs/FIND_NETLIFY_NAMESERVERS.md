# How to Find Netlify Nameservers

## Where to Find Them

### Method 1: In Domain Settings

1. In Netlify, go to your site dashboard
2. Click **Site settings** → **Domain management**
3. Click on `situatedlaboratories.org`
4. Look for **"Set up Netlify DNS"** or **"DNS"** section
5. The nameservers will be displayed there (usually 4 nameservers)

### Method 2: After Clicking "Set up Netlify DNS"

1. Click **"Set up Netlify DNS"** button (in the dropdown menu)
2. Netlify will show you a page with:
   - **Nameservers** (usually 4 addresses)
   - Instructions on how to update them at GoDaddy

### Method 3: In the DNS Records Section

If you're already in the DNS setup area (like in your screenshot), the nameservers might be:
- At the top of the page
- In a separate section above the DNS records
- In a sidebar or info panel

---

## What They Look Like

Netlify nameservers typically look like:

```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

OR

```
dns1.p02.nsone.net
dns2.p02.nsone.net
dns3.p02.nsone.net
dns4.p02.nsone.net
```

(These are examples - yours will be specific to your account)

---

## If You Can't Find Them

1. **Look for a "Nameservers" section** - might be collapsed or in a different tab
2. **Check the top of the DNS setup page** - sometimes displayed prominently
3. **Click "Set up Netlify DNS"** - this should reveal them
4. **Contact Netlify support** - they can provide them directly

---

## Quick Check

If you're on the DNS setup page, look for:
- A section titled "Nameservers" or "Use Netlify DNS"
- A list of 4 nameserver addresses
- Instructions saying "Update these at your registrar"

The nameservers are usually displayed prominently once you click "Set up Netlify DNS" - they're the key piece of information you need to copy to GoDaddy.
