# Stripe Payment Integration Setup

This guide will help you set up Stripe payments for your WriteGenix Frontend application.

## Prerequisites

1. A Stripe account (sign up at [stripe.com](https://stripe.com))
2. A backend API server to handle payment intents securely

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for production)
4. Copy your **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for production)
   - ⚠️ **Never expose your secret key in frontend code!**

## Step 2: Set Up Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your Stripe publishable key to `.env`:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   VITE_API_URL=http://localhost:3000/api
   ```

3. **For Production (Vercel/Netlify):**
   - **Vercel**: Go to Project Settings → Environment Variables
   - **Netlify**: Go to Site Settings → Build & Deploy → Environment Variables
   - Add `VITE_STRIPE_PUBLISHABLE_KEY` with your production key

## Step 3: Set Up Backend API

You need a backend server to create payment intents securely. Here's a basic example:

### Node.js/Express Example

```javascript
// server.js
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, serviceName } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'usd',
      metadata: {
        serviceName: serviceName,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Python/Flask Example

```python
# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import stripe

app = Flask(__name__)
CORS(app)
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

@app.route('/api/create-payment-intent', methods=['POST'])
def create_payment_intent():
    data = request.json
    amount = data.get('amount')
    service_name = data.get('serviceName')

    try:
        intent = stripe.PaymentIntent.create(
            amount=amount,
            currency='usd',
            metadata={'serviceName': service_name}
        )
        return jsonify({'clientSecret': intent.client_secret})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000)
```

## Step 4: Update API URL

Update the API URL in your `.env` file to point to your backend:

```env
VITE_API_URL=https://your-backend-domain.com/api
```

Or for local development:
```env
VITE_API_URL=http://localhost:3000/api
```

## Step 5: Using Payment Components

### Option 1: Use PaymentButton Component

The easiest way to add payments to any page:

```tsx
import PaymentButton from '@/components/PaymentButton';

// In your component
<PaymentButton
  amount={299.99}
  serviceName="Ghostwriting Service"
  buttonText="Pay Now"
  size="lg"
/>
```

### Option 2: Custom Checkout Dialog

For more control, use the CheckoutForm directly:

```tsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Elements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';
import CheckoutForm from '@/components/CheckoutForm';

function MyComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open Checkout</DialogTrigger>
      <DialogContent>
        <Elements stripe={getStripe()}>
          <CheckoutForm
            amount={299.99}
            serviceName="Ghostwriting"
            onSuccess={() => setOpen(false)}
          />
        </Elements>
      </DialogContent>
    </Dialog>
  );
}
```

## Step 6: Add Payment to Service Pages

Example: Adding a payment button to ServiceDetail page:

```tsx
import PaymentButton from '@/components/PaymentButton';

// In ServiceDetail component, add pricing
const servicePricing = {
  'ghostwriting': 2999.99,
  'book-cover-design': 299.99,
  'editing-proofreading': 499.99,
  // ... other services
};

// Then in your JSX:
<PaymentButton
  amount={servicePricing[service.slug] || 0}
  serviceName={service.title}
  buttonText="Purchase Service"
  size="lg"
  className="w-full"
/>
```

## Step 7: Test Your Integration

1. **Test Mode:**
   - Use test API keys (start with `pk_test_` and `sk_test_`)
   - Use Stripe test cards:
     - Success: `4242 4242 4242 4242`
     - Decline: `4000 0000 0000 0002`
     - Use any future expiry date and any 3-digit CVC

2. **Test the Flow:**
   - Click a payment button
   - Enter test card details
   - Complete payment
   - Verify redirect to `/payment-success`

## Step 8: Go Live

1. Switch to **Live mode** in Stripe Dashboard
2. Get your **live API keys**
3. Update environment variables with live keys
4. Deploy your backend with live secret key
5. Test with a real small transaction first

## Security Best Practices

1. ✅ **Never** commit `.env` files to git
2. ✅ **Never** expose secret keys in frontend code
3. ✅ Always use HTTPS in production
4. ✅ Validate amounts on the backend
5. ✅ Use webhooks to confirm payments server-side
6. ✅ Implement proper error handling

## Webhooks (Recommended)

Set up webhooks to handle payment events securely:

```javascript
// Backend webhook endpoint
app.post('/api/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    // Update your database, send confirmation email, etc.
  }

  res.json({received: true});
});
```

## Troubleshooting

### "Stripe publishable key is not set"
- Check that `VITE_STRIPE_PUBLISHABLE_KEY` is in your `.env` file
- Restart your dev server after adding env variables
- For production, ensure env vars are set in your hosting platform

### "Failed to create payment intent"
- Check your backend API is running
- Verify `VITE_API_URL` is correct
- Check backend logs for errors
- Ensure Stripe secret key is set on backend

### Payment form not showing
- Check browser console for errors
- Verify Stripe Elements is loading
- Ensure you're using the StripeProvider wrapper

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe React Components](https://stripe.com/docs/stripe-js/react)
- [Stripe Testing](https://stripe.com/docs/testing)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)

## Need Help?

If you encounter issues:
1. Check Stripe Dashboard → Logs for errors
2. Review browser console for frontend errors
3. Check backend server logs
4. Verify all environment variables are set correctly

