# Luxury 1 Living - Commercial Cleaning Website Specification

## Overview
A luxury commercial cleaning website built with modern web technologies, featuring a polished, professional aesthetic that enhances credibility and conversion.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (subtle UI/UX animations)
- **Illustrations**: Lottie (via lottie-react) - spray bottles, mops, sparkles
- **Authentication**: Clerk (role-based routing: admin/client)
- **Responsive**: Mobile-first design, fully responsive

## Core Features

### 🌟 1. Public Landing Page (One Page Scroll)
**Route**: `/`

**Navigation**: Anchor-based smooth scroll with soft animations and layout transitions

**Sections**:

#### Hero Section
- **Tagline**: "Where Clean Meets Class"
- **CTAs**: "Get a Quote", "View Services"
- **Effects**: Subtle shimmer animation on text, background gradient/motion
- **Animation**: Lottie (spray bottle, mop, or sparkle)

#### About Section
- Company and founder information (no image required)
- Animated value icons (insured, eco-conscious)
- Slide/fade-in effects on scroll

#### Services Section
- Brief introduction paragraph
- Animated service cards (scale in, hover effects)
- Service icons (optional)

#### Why Choose Us Section
- Feature list (background-checked staff, satisfaction guarantee)
- Subtle scale or glow animation on feature icons

#### FAQ Section
- Accordion layout using Framer Motion
- Icon rotation toggle (+ to -)

#### Contact Section
- Quote request form
- Emergency contact number (bounce animation)
- Service areas list
- Embedded Google Map

#### CTA Banner
- Compelling statement + CTA button
- Animated underline or glow effect

#### Footer
- Navigation links
- Social links with hover interactions
- Copyright information

### 🔐 2. Admin Dashboard
**Route**: `/dashboard` (Protected - Admin role required)

#### Proposal Management
**Create Proposals**:
- Client name/email
- Service type
- Square footage
- Frequency (one-time, weekly, monthly, custom)
- Contract start and end dates (optional)
- Notes and proposed price
- Checkbox to email the proposal

**View Proposals**:
- Status tracking: Pending, Approved, Declined
- Display format: Table or card view

#### Feedback Review
- View client-submitted feedback
- Fields: Name, service type, date, comment, star rating
- "Mark as Testimonial" toggle
- Future testimonials display on public site

### 👤 3. Client Portal
**Route**: `/client` (Protected - Client role required)

#### Proposal Management
- View admin-sent proposals
- Action buttons: "Approve" or "Request Changes"

#### Feedback Submission
- Submit feedback after each session
- Star rating (1-5) and optional comment
- Future enhancement: upcoming/completed cleanings schedule

## Authentication & Security

### Clerk Implementation
- Use `SignedIn`, `SignedOut` components
- Role-based access control
- Protected routes: `/client` and `/dashboard`
- Redirect unauthorized users to login/signup

## Mobile Responsiveness Requirements

### Responsive Design Standards
- Tailwind responsive classes: `sm`, `md`, `lg`, `xl`, `2xl`
- Stack content on smaller screens
- All components must scale properly:
  - Forms
  - Cards
  - Buttons
  - Lottie animations
  - Tables
- Mobile-first approach

## Future Enhancements

### Planned Features
- **Payment**: Stripe integration for billing
- **Automation**: Email automation for proposals and completions
- **Testimonials**: Carousel section on homepage for approved testimonials
- **Scheduling**: Booking reschedule option for clients
- **Calendar**: Admin calendar/scheduler for future jobs
- **Theme**: Dark mode for dashboards

## Design Philosophy
- **Aesthetic**: Modern, luxurious, professional
- **Purpose**: Enhance credibility and conversion
- **Animation**: Subtle and purposeful
- **Accessibility**: Mobile-first, responsive design
- **User Experience**: Smooth, polished interactions

## Development Notes
- Ensure all animations are performance-optimized
- Implement proper loading states for all async operations
- Use semantic HTML for accessibility
- Optimize images and Lottie animations for web
- Implement proper error handling and validation
- Follow Next.js best practices for App Router
- Maintain consistent component structure and naming conventions