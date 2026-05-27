# Implementation Plan - Elegant Blue Porcelain Opening Section

We will implement a premium, responsive, and pixel-perfect **Opening Section** for the **Elegant Blue Porcelain Wedding Invitation**. The project is set up with Next.js (App Router), TypeScript, and Tailwind CSS.

## Visual Design & Theme
- **Theme**: Luxury porcelain floral wedding invitation.
- **Color Palette**:
  - **Ivory/Cream**: `#f7f1e8` (main page background), `#fcf9f2` (invory canvas).
  - **Porcelain Navy**: `#0f2a4a` or `#163357` (deep botanical indigo/cobalt blue).
  - **Muted Gold**: `#c5a880` or `#b89765` (elegant metallic accent text/borders).
- **Typography**:
  - Main serif font: `Cormorant Garamond` (classic, high-end editorial feel).
  - Secondary sans-serif font: `Montserrat` (clean, luxurious spacing).
- **Micro-animations**:
  - Subtle, slow spin on the botanical floral layer behind the monogram.
  - Elegant fade-in transition for typography and invitation details.
  - Hover transitions on the "Open Invitation" button.

---

## Proposed Changes

We will create/update three main files:
1. `app/layout.tsx` (configure Google Fonts)
2. `components/OpeningSection.tsx` (the Opening Section component)
3. `app/page.tsx` (the page routing and desktop-split structure)

### 1. Global Setup & Fonts

#### [MODIFY] [layout.tsx](file:///d:/thema/app/layout.tsx)
We will import `Cormorant_Garamond` and `Montserrat` using Next.js's optimized `next/font/google` and configure them as CSS variables (`--font-cormorant` and `--font-montserrat`).

#### [MODIFY] [globals.css](file:///d:/thema/app/globals.css)
We will configure Tailwind CSS to use our custom fonts and add a slow-spin keyframe animation if needed (or standard CSS class).
```css
@theme inline {
  --font-serif: var(--font-cormorant);
  --font-sans: var(--font-montserrat);
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 120s linear infinite;
}
```

---

### 2. Component Design

#### [NEW] [OpeningSection.tsx](file:///d:/thema/components/OpeningSection.tsx)
The component will be a semantic React component implementing:
- **Background**: Absolute full cover with `/ElegantBluePorcelain-Theme/assets/bg-image.png`.
- **Monogram Container**:
  - Layer 1: `monocres-floral.svg` rotating slowly.
  - Layer 2: `monocres-cirlce.svg` centered on top.
  - Layer 3: Text `"D | S"` exactly inside the circle.
- **Main Typography**:
  - `"The Wedding Of"` in an elegant sans-serif, widely spaced.
  - `"DENY KURNIA"` & `"SEPTIANI"` in large serif font.
  - Ampersand `"&"` in elegant script/serif styling.
  - Divider: `/ElegantBluePorcelain-Theme/assets/devider1.svg` or `/ElegantBluePorcelain-Theme/assets/devider2.svg`.
  - `"Kepada Yth. Bapak/ Ibu/ Saudara/ i"` in light sans-serif.
  - `"Nama Tamu"`: A dynamic guest name placeholder. If a `to` parameter is in the URL (e.g. `?to=Budi`), we will display the guest name, otherwise fallback to a generic placeholder (or `"Nama Tamu"`).
  - `"Open Invitation"` button with gold gradients, navy borders, and micro-hover interactions.

---

### 3. Desktop and Mobile Layout Integration

#### [MODIFY] [page.tsx](file:///d:/thema/app/page.tsx)
We will set up the split screen structure:
- **Left Panel (Desktop only)**: Warm cream background (`#f3eadc`), empty as requested, with a subtle elegant floral detail or typography if desired.
- **Right Panel (Mobile view / Desktop preview)**:
  - Width: `w-full lg:w-[430px]`
  - Height: `min-h-[100svh] lg:h-screen lg:overflow-y-auto`
  - Position: Right-aligned, scrollable.
  - Renders `<OpeningSection />`.

---

## Verification Plan

### Automated/Local Build Check
1. Run `npm run build` or `npx tsc --noEmit` to ensure TypeScript compilation passes.
2. Run `npm run dev` to start the local dev server and check output.

### Manual Verification
1. Open the preview on mobile viewport width (< 1024px) to ensure:
   - Elements are centered vertically and horizontally.
   - Background cover matches the screen aspect ratios.
   - Contrast between gold text, white overlays, navy illustration, and bg-image is legible.
2. Open on desktop viewports to ensure:
   - Split layout renders properly.
   - Left side is empty cream background.
   - Right side is exactly `430px` wide, scrollable, and aligned to the far right.
   - Button hover works gracefully.
