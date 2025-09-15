# e-shop — Modern E-Commerce Platform

## Table of Contents
- [Core Features](#core-features)
  - [For Shoppers](#for-shoppers)
  - [For Admins](#for-admins)
- [Tech Stack](#tech-stack)
- [Authentication Flow](#authentication-flow)
- [Performance & Optimisations](#performance--optimisations)
- [Future Updates](#future-updates)
- [Data Structure Overview](#data-structure-overview)
- [Summary](#summary)


**e-shop is a fully responsive, feature-rich online store built with React and Firebase.** It delivers a smooth, enjoyable shopping experience where users can explore products, browse visually appealing carousels, filter and sort items, view detailed product pages, add items to the cart, and complete purchases securely via Stripe.

The platform also offers a smart admin interface for managing products efficiently, while behind the scenes, dynamic pagination, lazy-loaded images, and optimised performance ensure everything runs seamlessly—even with hundreds of products.


## Core Features
**For Shoppers**
- **Smooth Browsing:** Navigate effortlessly through multiple categories, including Featured Products, New Arrivals, Best Sellers, and Spring Sale collections.
- **Smart Search:** Quickly find products using a responsive search bar with live suggestions.
- **Visually Engaging Carousels:** Products are displayed in attractive carousels that make exploring the store a delight.
- **Flexible Cart Management:** Add, remove, or adjust quantities in the cart with ease.
- **Secure Checkout:** Complete real transactions safely through **Stripe**, providing users with a seamless payment experience.

**For Admins**
- **Add Products:** Upload new products with multiple images and select predefined categories easily.
- **Role-Based Access:** Admins have exclusive access to management features, while normal users enjoy a smooth shopping experience.
- **Future Enhancements:** Editing and deleting products, as well as adding new categories, will further expand admin capabilities.

## Tech Stack
**Frontend:** React, Tailwind CSS, Redux, React Router  
**Backend & Integrations:** Node.js + Express (for Stripe), Firebase Authentication, Firestore Database

*This combination ensures a modern, scalable, and high-performance platform.*

## Authentication Flow
- **Signup/Login:** Users can create accounts or sign in using **email/password** or **Google OAuth**.
- **Role-Based Access:** Admins and normal users have clearly defined permissions, ensuring secure access control.
- **Security-Focused:** All authentication and access management are handled securely through Firebase.

## Performance & Optimisations
- **Compressed Images:** All product images are optimised for fast loading.
- **Lazy Loading:** Images load only when visible, improving performance on all devices.
- **Dynamic Pagination:** Efficiently handles large inventories without affecting user experience.
- **Advanced Filtering & Sorting:** Quick filtering by category, brand, rating, popularity, and price keeps browsing fast and intuitive.

## Future Updates
- **Full Admin Control:** Admins can edit, remove, and read existing products, and even add new categories.
- **Adding New Role "Owner":** Owners can see all users, including admins, and can give or remove admin access whenever needed. They have all admin controls plus extra features to manage the platform.
- **Product Review & Rating:** Users can share their thoughts and rate products in real time, helping others make informed purchasing decisions.
- **Order History for Users:** Users can view previous purchases in detail.
- **Currency Switching:** Users will be able to change product prices globally to different currencies.
- **Enhanced User Dashboard:** A visually appealing dashboard displaying total spending, chart, profile picture uploads, display name/password updates, and other essential information.
- **Blog Page:** Users can write blogs on different topics. Once submitted, blogs go through an approval process—any admin can approve it for publishing or delete it if needed. And others can comment and upvote the blog after published.
- **Wishlist Feature:** Users will be able to save favorite products for later.

## Data Structure Overview
**Products Collection:**
- `title`, `description`, `price`, `previousPrice`
- `discountPercent`, `discountTag`
- `images[]`, `tags[]`
- `specifications[]` (key/value pairs)
- `stock`, `rating`, `totalRatings`
- `category`, `brand`, `createdAt`

**Users Collection:**
- `name`, `email`, `cart[]`, `orders[]`
- `userType` (`normal` / `admin`) for role-based access
- `photoURL` for profile pictures

*The structure is clean, professional, and designed for scalability.*


## Summary
e-shop is more than just an online store—it’s a **complete, modern e-commerce platform** designed with performance, usability, and scalability in mind. Every feature, from visually appealing product carousels to Stripe integration, is crafted to provide a seamless experience for users and an intuitive workflow for admins. With future enhancements on the horizon, e-shop demonstrates a professional approach to building **real-world, high-quality web applications**.
