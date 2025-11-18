# Business Deployment Guide - WriteGenix

This guide walks you through deploying your WriteGenix website for your business, including all necessary setup steps.

## Prerequisites Checklist

Before deploying, make sure you have:
- [ ] GitHub account with your code pushed
- [ ] Domain name (optional but recommended)
- [ ] Stripe account for payments
- [ ] Email service (for contact form submissions)
- [ ] Backend API server (for Stripe payments)

---

## Step 1: Choose Your Hosting Platform

### Option A: Vercel (Recommended - Easiest & Free)

**Why Vercel?**
- Free tier is generous
- Automatic deployments from GitHub
- Built-in SSL certificates
- Fast global CDN
- Easy custom domain setup

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `WriteGenix-Frontend` repository
5. Vercel auto-detects Vite - click "Deploy"
6. Your site will be live in ~2 minutes at `your-project.vercel.app`

### Option B: Netlify

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

## Step 2: Set Up Environment Variables

### For Vercel:
1. Go to your project → Settings → Environment Variables
2. Add these variables:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key_here
VITE_API_URL=https://your-backend-domain.com/api
```

### For Netlify:
1. Go to Site Settings → Build & Deploy → Environment Variables
2. Add the same variables as above

**Important:** 
- Use **live** Stripe keys (not test keys) for production
- Never commit `.env` files to GitHub
- Redeploy after adding environment variables

---

## Step 3: Set Up Custom Domain (Optional but Recommended)

### With Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `writegenix.com`)
3. Follow DNS configuration instructions:
   - Add A record or CNAME as instructed
   - Wait for DNS propagation (can take up to 48 hours, usually faster)
4. SSL certificate is automatically provisioned

### With Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS as instructed
4. SSL is automatic

### Domain Purchase (if you don't have one):
- **Namecheap**: [namecheap.com](https://namecheap.com)
- **Google Domains**: [domains.google](https://domains.google)
- **Cloudflare**: [cloudflare.com](https://cloudflare.com) (also provides free DNS)

---

## Step 4: Set Up Stripe for Payments

### Get Live API Keys:
1. Log in to [Stripe Dashboard](https://dashboard.stripe.com)
2. Switch to **Live mode** (toggle in top right)
3. Go to Developers → API keys
4. Copy your **Live Publishable Key** (starts with `pk_live_`)
5. Copy your **Live Secret Key** (starts with `sk_live_`) - keep this secret!

### Add to Environment Variables:
- Frontend: Add `VITE_STRIPE_PUBLISHABLE_KEY` (publishable key)
- Backend: Add `STRIPE_SECRET_KEY` (secret key - never in frontend!)

---

## Step 5: Set Up Backend API (Required for Payments)

You need a backend server to securely handle Stripe payment intents.

### Option A: Deploy Backend to Same Platform

**Vercel Serverless Functions:**
Create `api/create-payment-intent.js` in your project:

```javascript
// api/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, serviceName } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency: 'usd',
      metadata: { serviceName },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

**Update `vite.config.ts`:**
```typescript
// No changes needed - Vercel handles this automatically
```

### Option B: Separate Backend Server

Deploy a Node.js/Express or Python/Flask server:

**Recommended Hosting:**
- **Railway**: [railway.app](https://railway.app) - Easy, free tier
- **Render**: [render.com](https://render.com) - Free tier available
- **Heroku**: [heroku.com](https://heroku.com) - Paid but reliable
- **DigitalOcean**: [digitalocean.com](https://digitalocean.com) - More control

**Update `VITE_API_URL`** to point to your backend:
```
VITE_API_URL=https://your-backend.railway.app/api
```

---

## Step 6: Set Up Contact Form Backend

Your contact form currently just logs to console. You need to:

### Option A: Use a Service (Easiest)
- **Formspree**: [formspree.io](https://formspree.io) - Free tier available
- **EmailJS**: [emailjs.com](https://emailjs.com) - Free tier
- **SendGrid**: [sendgrid.com](https://sendgrid.com) - Free tier

### Option B: Backend API Endpoint

Add to your backend:
```javascript
// api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, serviceType, projectDescription } = req.body;

  // Send email using Nodemailer, SendGrid, etc.
  // Or save to database
  
  res.json({ success: true });
}
```

Update `ContactForm.tsx` to send to your API.

---

## Step 7: Final Pre-Launch Checklist

### Content Updates:
- [ ] Update all contact information (email, phone)
- [ ] Update business address/location
- [ ] Review all service descriptions
- [ ] Update pricing if needed
- [ ] Add real testimonials (if you have them)
- [ ] Update social media links in Footer

### Technical:
- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Test payment flow with test cards
- [ ] Verify SSL certificate is active
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### SEO & Analytics:
- [ ] Set up Google Analytics
- [ ] Add Google Search Console
- [ ] Update meta tags in `index.html`
- [ ] Add sitemap.xml
- [ ] Add robots.txt

### Legal:
- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Add cookie consent (if needed)
- [ ] Ensure GDPR compliance (if serving EU customers)

---

## Step 8: Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a property for your website
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Step 9: Launch Your Site

1. **Final Test:**
   - Visit your live URL
   - Test all functionality
   - Check on mobile devices

2. **Go Live:**
   - Your site is already live if deployed!
   - Share your URL
   - Update social media profiles
   - Add to business cards

3. **Monitor:**
   - Check analytics regularly
   - Monitor form submissions
   - Watch for payment issues
   - Review error logs

---

## Step 10: Post-Launch Tasks

### Week 1:
- [ ] Monitor site performance
- [ ] Respond to all inquiries quickly
- [ ] Fix any bugs that appear
- [ ] Set up email notifications for form submissions

### Month 1:
- [ ] Review analytics data
- [ ] Optimize based on user behavior
- [ ] A/B test different CTAs
- [ ] Collect customer feedback

### Ongoing:
- [ ] Regular content updates (blog posts)
- [ ] Update service offerings
- [ ] Monitor and respond to reviews
- [ ] Keep dependencies updated

---

## Cost Breakdown

### Free Option (Starting Out):
- **Hosting**: Vercel/Netlify (Free)
- **Domain**: ~$10-15/year
- **Stripe**: 2.9% + $0.30 per transaction (no monthly fee)
- **Email Service**: Formspree/EmailJS (Free tier)
- **Total**: ~$10-15/year + transaction fees

### Professional Option:
- **Hosting**: Vercel Pro ($20/month) or Netlify Pro ($19/month)
- **Domain**: ~$10-15/year
- **Backend**: Railway/Render (~$5-10/month)
- **Email**: SendGrid (Free tier or $15/month)
- **Analytics**: Google Analytics (Free)
- **Total**: ~$25-45/month + transaction fees

---

## Troubleshooting

### Site Not Loading:
- Check DNS propagation (can take 24-48 hours)
- Verify environment variables are set
- Check deployment logs in Vercel/Netlify dashboard

### Payments Not Working:
- Verify Stripe keys are correct (live vs test)
- Check backend API is running
- Review Stripe Dashboard → Logs for errors
- Test with Stripe test cards first

### Contact Form Not Working:
- Verify backend endpoint is correct
- Check CORS settings on backend
- Review browser console for errors

### SSL Certificate Issues:
- Usually auto-resolved by Vercel/Netlify
- Wait 24 hours after domain setup
- Contact support if issues persist

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Stripe Docs**: https://stripe.com/docs
- **Vite Docs**: https://vitejs.dev

---

## Quick Start Summary

1. ✅ Deploy to Vercel/Netlify (5 minutes)
2. ✅ Add Stripe publishable key to environment variables
3. ✅ Set up backend API for payments
4. ✅ Configure custom domain (optional)
5. ✅ Test everything
6. ✅ Go live!

**Estimated Time:** 1-2 hours for basic setup, 1-2 days with custom domain DNS propagation.

---

## Need Help?

If you get stuck:
1. Check the deployment platform's documentation
2. Review error logs in the dashboard
3. Test in development mode first
4. Use Stripe test mode before going live

Good luck with your business launch! 🚀

