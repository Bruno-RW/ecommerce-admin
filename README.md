To run the application you have to create a ".env" file at the root of the project. This file will contain the environment variables which are the ones below:

# General
FRONTEND_STORE_URL=[Front end link]


# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[Clerk authentication key]
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


# PlanetScale
DATABASE_USERNAME=b[MySQL database username]
DATABASE_PASSWORD=pscale_pw_[MySQL database password]
DATABASE_URL="[MySQL database URL]"


# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=[Cloudinary public key/name]


# Stripe
STRIPE_API_KEY=[Stripe API key]
STRIPE_WEBHOOK_SECRET=[Stripe secret]