# Responsive Images Guide

## Overview

The new responsive image system automatically shows different images based on the user's device type (mobile, tablet, desktop). This ensures optimal image display and loading performance across all devices.

## How It Works

### Device Breakpoints:

- **Mobile**: Screen width < 768px
- **Tablet**: Screen width 768px - 1023px
- **Desktop**: Screen width ≥ 1024px

## Usage Examples

### 1. Basic Usage (Current Implementation)

```tsx
<ResponsiveBackgroundImage
  mobileImage={backgroundImages.mobile}
  tabletImage={backgroundImages.tablet}
  desktopImage={backgroundImages.desktop}
  alt="La Perla Negra Background"
  priority={true}
/>
```

### 2. Custom Images

```tsx
<ResponsiveBackgroundImage
  mobileImage="https://your-mobile-image.jpg"
  tabletImage="https://your-tablet-image.jpg"
  desktopImage="https://your-desktop-image.jpg"
  alt="Custom Background"
/>
```

### 3. Without Tablet Image (Falls back to mobile)

```tsx
<ResponsiveBackgroundImage
  mobileImage="https://your-mobile-image.jpg"
  desktopImage="https://your-desktop-image.jpg"
  alt="Background"
/>
```

### 4. Local Images

```tsx
import mobileImg from "@/assets/mobile-bg.jpg";
import desktopImg from "@/assets/desktop-bg.jpg";

<ResponsiveBackgroundImage
  mobileImage={mobileImg.src}
  desktopImage={desktopImg.src}
  alt="Local Background"
/>;
```

## Customization Options

### Props Available:

- `mobileImage` (required): Image for mobile devices
- `tabletImage` (optional): Image for tablets (falls back to mobile if not provided)
- `desktopImage` (required): Image for desktop
- `alt` (required): Alt text for accessibility
- `className` (optional): Custom CSS classes
- `width` (optional): Image width (default: 1000)
- `height` (optional): Image height (default: 1000)
- `priority` (optional): Load image with priority (default: false)

### Custom Styling:

```tsx
<ResponsiveBackgroundImage
  mobileImage="mobile.jpg"
  desktopImage="desktop.jpg"
  alt="Background"
  className="w-full h-full object-cover absolute inset-0 z-0 opacity-80"
  width={1200}
  height={800}
/>
```

## Adding New Images

### Method 1: Update the backgroundImages object in assets/index.ts

```typescript
export const backgroundImages = {
  mobile: "your-new-mobile-image-url",
  tablet: "your-new-tablet-image-url",
  desktop: "your-new-desktop-image-url",
};
```

### Method 2: Create new image sets

```typescript
export const heroImages = {
  mobile: "hero-mobile.jpg",
  tablet: "hero-tablet.jpg",
  desktop: "hero-desktop.jpg",
};

export const aboutImages = {
  mobile: "about-mobile.jpg",
  desktop: "about-desktop.jpg",
};
```

## Using the Device Hook Directly

You can also use the `useDeviceType` hook directly in any component:

```tsx
import { useDeviceType } from "@/hooks/useDeviceType";

function MyComponent() {
  const { isMobile, isTablet, isDesktop, deviceType, screenWidth } =
    useDeviceType();

  return (
    <div>
      {isMobile && <p>You're on mobile!</p>}
      {isTablet && <p>You're on tablet!</p>}
      {isDesktop && <p>You're on desktop!</p>}
      <p>Device: {deviceType}</p>
      <p>Screen width: {screenWidth}px</p>
    </div>
  );
}
```

## Best Practices

### 1. Image Optimization

- **Mobile**: Use portrait or square images (9:16 or 1:1 ratio)
- **Tablet**: Use landscape images (4:3 or 16:10 ratio)
- **Desktop**: Use wide landscape images (16:9 or 21:9 ratio)

### 2. File Sizes

- **Mobile**: Smaller file sizes for faster loading on mobile networks
- **Desktop**: Higher quality images for larger screens

### 3. Content Focus

- **Mobile**: Ensure important content is centered and visible
- **Desktop**: Can use wider compositions with more detail

## Example Image Recommendations

### For La Perla Negra:

- **Mobile**: Close-up room shots, vertical compositions
- **Tablet**: Medium-wide shots of rooms or amenities
- **Desktop**: Wide landscape shots of the property, pools, or scenic views

## Troubleshooting

### Images not switching?

1. Check that the hook is working: `console.log(useDeviceType())`
2. Verify image URLs are accessible
3. Check browser dev tools for any console errors

### Performance issues?

1. Use `priority={true}` for above-the-fold images
2. Optimize image sizes for each device
3. Consider using Next.js Image optimization features
