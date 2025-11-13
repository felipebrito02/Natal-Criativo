# Design Guidelines: Christmas Felt Craft Patterns Ebook Sales Page

## Design Approach
**Reference-Based**: Drawing inspiration from Etsy, creative marketplace product pages, and premium digital product landing pages. Focus on warm, inviting aesthetics that appeal to craft enthusiasts with festive Christmas spirit.

## Layout Structure

### Hero Section (100vh)
- Full-viewport height with large hero background image showcasing beautiful Christmas felt crafts
- Centered layout with prominent headline and subheadline
- Single CTA button with blurred background overlay - no hover states needed
- Button text: "Ver os Moldes" (See the Patterns) with smooth scroll behavior

### Main Content Section (Natural height)
- Maximum width container (max-w-6xl) with generous padding
- Two-column layout on desktop (lg:grid-cols-2), stacked on mobile
- Left column: Video presentation (16:9 aspect ratio, embedded YouTube/Vimeo player)
- Right column: Product description text with compelling copy structure

### Photo Gallery Section
- Three-column masonry grid on desktop (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- 6-8 high-quality images of craft pattern examples
- Images should show finished felt crafts: ornaments, decorations, stockings
- Subtle hover scale effect on images (scale-105)

### Final CTA Section
- Centered layout with max-w-4xl
- Compelling final pitch text
- Large prominent button: "Adquirir Agora" (Get Now) - blurred background if over image
- Trust indicators below button (secure payment, instant download, etc.)

## Typography Hierarchy

**Font System**: Google Fonts
- Primary (Headings): 'Playfair Display' or 'Cormorant' - elegant serif for festive feel
- Secondary (Body): 'Inter' or 'Plus Jakarta Sans' - clean sans-serif for readability

**Scale**:
- H1 (Hero): text-5xl md:text-7xl, font-bold
- H2 (Sections): text-3xl md:text-5xl, font-semibold
- H3 (Subsections): text-2xl md:text-3xl, font-medium
- Body: text-base md:text-lg, leading-relaxed
- CTA Buttons: text-lg md:text-xl, font-semibold

## Spacing System
**Tailwind Units**: Consistent use of 4, 8, 12, 16, 20 units
- Section padding: py-12 md:py-20
- Container padding: px-4 md:px-8
- Element spacing: space-y-8 for vertical stacks
- Grid gaps: gap-8 on desktop, gap-4 on mobile

## Component Specifications

### Navigation
- Sticky header (optional): Simple logo + "Comprar Agora" button
- Minimal distraction from main content flow

### Video Player
- Aspect ratio container (aspect-video)
- Rounded corners (rounded-xl)
- Shadow for depth (shadow-2xl)
- Responsive iframe embed

### Image Gallery Cards
- Rounded corners (rounded-lg)
- Subtle shadow (shadow-lg)
- Overflow hidden for clean edges
- Object-cover for consistent sizing

### CTA Buttons
- Large padding: px-12 py-4
- Rounded (rounded-full for primary)
- Bold typography
- Prominent placement with breathing room

### Text Content Structure
- Short paragraphs (2-3 sentences max)
- Bullet points for pattern features/benefits
- Emphasis on quantity: "300 moldes exclusivos"
- Highlight: instant download, printable, beginner-friendly

## Images

**Hero Image**: 
Full-width background image showing a beautiful Christmas scene with multiple felt crafts - think decorated tree with felt ornaments, cozy holiday setting, warm and inviting. Image should have subtle overlay for text readability.

**Gallery Images (6-8 images)**:
1. Felt Christmas tree ornaments
2. Felt stockings/boots
3. Felt Santa Claus figure
4. Felt snowflakes and stars
5. Felt nativity scene pieces
6. Felt wreaths/garlands
7. Felt reindeer/animals
8. Felt angels and bells

All images should be high-quality, well-lit, showing craftsmanship detail.

## Responsive Behavior
- Mobile-first approach
- Single column on mobile (< 768px)
- Two columns on tablet (768px - 1024px)
- Full multi-column layouts on desktop (> 1024px)
- Touch-friendly button sizes on mobile (min 44px height)
- Readable font sizes without zoom (minimum 16px base)

## Interaction Details
- Smooth scroll behavior for anchor links (scroll-behavior: smooth)
- Minimal animations - gentle fade-in on scroll for gallery items
- No distracting motion - focus on content
- Fast-loading images with proper optimization

## Content Tone (Portuguese)
- Warm, enthusiastic, crafty community feel
- Emphasize: creativity, tradition, family activities
- Key phrases: "artesanato natalino", "moldes exclusivos", "download instantâneo", "para iniciantes e experientes"