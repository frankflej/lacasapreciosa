# Overlay Customization Guide

## Current Overlay

```tsx
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
```

## Different Overlay Options:

### 1. Solid Dark Overlay

```tsx
<div className="absolute inset-0 z-10 bg-black/50"></div>
```

### 2. Lighter Overlay

```tsx
<div className="absolute inset-0 z-10 bg-black/30"></div>
```

### 3. Darker Overlay

```tsx
<div className="absolute inset-0 z-10 bg-black/80"></div>
```

### 4. Gradient from Top

```tsx
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-transparent"></div>
```

### 5. Gradient from Bottom

```tsx
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>
```

### 6. Center Focus (Darker edges)

```tsx
<div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-black/30 to-black/70"></div>
```

### 7. Colored Overlay (Blue tint)

```tsx
<div className="absolute inset-0 z-10 bg-blue-900/40"></div>
```

### 8. Warm Overlay (Brown tint)

```tsx
<div className="absolute inset-0 z-10 bg-amber-900/50"></div>
```

### 9. No Overlay (Full image visibility)

```tsx
{
  /* Just comment out or remove the overlay div */
}
```

### 10. Custom Multi-layer Overlay

```tsx
<div className="absolute inset-0 z-10">
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
</div>
```

## How to Change:

Simply replace the overlay div in your `homePage.tsx` file with any of the options above. The `/60` numbers represent opacity (60% in this case). You can adjust these values:

- `/10` = 10% opacity (very light)
- `/30` = 30% opacity (light)
- `/50` = 50% opacity (medium)
- `/70` = 70% opacity (dark)
- `/90` = 90% opacity (very dark)

## Pro Tips:

1. **For better text readability**: Use darker overlays (`/60` to `/80`)
2. **For image prominence**: Use lighter overlays (`/20` to `/40`)
3. **For dramatic effect**: Use gradient overlays
4. **For brand consistency**: Use colored overlays that match your brand colors
