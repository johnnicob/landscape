
# LANDSCAPE — COMPLETE MASTER IMPLEMENTATION PROMPT

## YOUR ROLE

Act as a Principal Software Architect, Product Designer,
UX Architect, Senior Full-Stack Engineer, and Application
Security Engineer with 30+ years of combined expertise.

You are responsible for designing and implementing a new
production-oriented web application named:

LANDSCAPE

Landscape is a premium, template-first, visual website
creation platform.

Your objective is to create a sophisticated product that
feels remarkably simple to use.

Think like a senior engineer:

- Keep the architecture clean and understandable.
- Avoid over-engineering.
- Prefer proven technologies.
- Build reusable components.
- Follow separation of concerns.
- Keep business logic independent from presentation.
- Implement security by design.
- Prioritize excellent UX.
- Build actual functionality, not static mockups.
- Keep the system maintainable for a small development team.
- Avoid unnecessary microservices and dependencies.

Do not copy Canva's exact branding, proprietary designs,
or distinctive visual interface.

Instead, develop an original, improved website-first
editing experience inspired by the usability of modern
visual design tools.

========================================================
1. PROJECT IDENTITY
========================================================

Project Name:
Landscape

Product Name:
Landscape Studio

Tagline:
"Your vision. Your canvas. Your website."

Product Type:
Visual Website Creation Platform

Initial Market:
Wedding Websites and Digital Invitations

Future Markets:
- Birthday websites
- Anniversary websites
- Debut websites
- Baptism websites
- Corporate event websites
- Portfolio websites
- Landing pages
- Small business websites

The platform architecture must be category-independent.

Wedding features must be implemented as a category module,
not hardcoded throughout the core editor.

The project must be developed as a new standalone application.

Do not import branding or project-specific assumptions
from previously developed applications.

========================================================
2. CORE PRODUCT PHILOSOPHY
========================================================

Landscape must follow five principles:

1. TEMPLATE FIRST

Users start by selecting a professionally designed
website template.

2. VISUAL FIRST

Users customize websites directly on the canvas.

3. SMART BY DEFAULT

The editor protects responsive layouts and provides
sensible design defaults.

4. FUNCTIONAL BY DESIGN

Websites contain working navigation, forms, galleries,
countdowns, and other interactive components.

5. SIMPLE TO OPERATE

A nontechnical person must be able to create, customize,
and publish a website without developer assistance.

Primary user journey:

Open Landscape
    ↓
Browse Website Templates
    ↓
Preview Template
    ↓
Choose Template
    ↓
Create Website Project
    ↓
Open Smart Visual Editor
    ↓
Customize Elements
    ↓
Preview Responsive Website
    ↓
Publish
    ↓
Manage Website

Provide a guided onboarding flow for first-time users.

Do not require users to configure technical settings
before they can start designing.

========================================================
3. TECHNOLOGY STACK
========================================================

Use:

Frontend:
- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- Lucide icons

Visual Editor:
- Zustand for editor state
- dnd-kit for drag-and-drop
- Tiptap for rich text
- CSS Grid and Flexbox for responsive layout
- React component registry

Backend:
- Next.js route handlers
- Server-side service layer
- PostgreSQL
- Prisma ORM
- Zod validation

Authentication:
- Auth.js or a maintained compatible solution

Media:
- S3-compatible object storage
- Next.js image optimization

Testing:
- Vitest
- React Testing Library
- Playwright

Use compatible maintained package versions.

Do not install dependencies without a clear purpose.

Use a modular monolith rather than microservices.

The system should be deployable as one application
with PostgreSQL and object storage.

========================================================
4. DESIGN SYSTEM AND BRAND IDENTITY
========================================================

Create an original premium interface for Landscape.

Design characteristics:

- Minimalist
- Modern
- Elegant
- Professional
- Editorial
- Spacious
- Intuitive
- Premium SaaS quality

Suggested visual identity:

Primary background:
Warm white / ivory

Secondary surfaces:
Soft stone / light neutral

Primary text:
Deep charcoal

Accent:
Muted forest green or sophisticated champagne

Borders:
Subtle neutral gray

Typography:
Modern sans-serif for the application interface.

Allow editorial serif typography inside website templates.

Avoid:
- Excessive gradients
- Heavy shadows
- Oversized buttons everywhere
- Decorative clutter
- Generic AI dashboard styling
- Too many modal dialogs
- Overwhelming configuration panels

Use:
- Consistent spacing
- Clear visual hierarchy
- Predictable navigation
- Accessible contrast
- Visible focus indicators
- Contextual tooltips
- Thoughtful empty states
- Skeleton loading states
- Helpful error messages

All major screens must work on desktop and tablet.

Published websites must be mobile-first.

========================================================
5. APPLICATION STRUCTURE
========================================================

Create these primary application areas:

A. PUBLIC LANDING PAGE

Route:
/

Include:
- Premium hero section
- Product introduction
- Template previews
- How it works
- Features
- Example websites
- Pricing placeholder
- Frequently asked questions
- Sign-in and get-started actions

B. AUTHENTICATION

Routes:
- /login
- /register
- /forgot-password

Use real authentication.

C. DASHBOARD

Route:
 /studio

Include:
- Welcome section
- Create website button
- Recent projects
- Draft projects
- Published websites
- Activity
- Pending reviews
- Project search

D. PROJECT MANAGEMENT

Route:
 /studio/projects

Include:
- Project grid and list views
- Create project
- Rename project
- Duplicate project
- Archive project
- Delete with confirmation
- Search and filtering
- Project status
- Last edited timestamp
- Published URL

E. TEMPLATE LIBRARY

Route:
 /studio/templates

Include:
- Category navigation
- Template cards
- Search
- Filters
- Preview
- Template details
- Use template action
- Favorites
- Recently used templates

F. VISUAL EDITOR

Route:
 /studio/projects/[projectId]/edit

This is the central product feature.

G. MEDIA LIBRARY

Route:
 /studio/media

H. CLIENTS AND REVIEWS

Routes:
 /studio/clients
 /studio/projects/[projectId]/reviews

I. GUESTS AND RSVP

Route:
 /studio/projects/[projectId]/guests

J. ANALYTICS

Route:
 /studio/projects/[projectId]/analytics

K. SETTINGS

Route:
 /studio/settings

L. PUBLIC WEBSITE

Route:
 /sites/[slug]

M. CLIENT REVIEW

Route:
 /review/[token]

N. PERSONALIZED INVITATION

Route:
 /invite/[token]

========================================================
6. SMART VISUAL CANVAS — EDITOR LAYOUT
========================================================

Build a professional visual website editor.

The layout must consist of:

1. TOP TOOLBAR
2. LEFT TOOL SIDEBAR
3. EXPANDABLE LEFT CONTENT PANEL
4. CENTER WEBSITE CANVAS
5. RIGHT PROPERTIES PANEL
6. BOTTOM CANVAS CONTROLS

TOP TOOLBAR

Include:
- Landscape logo
- Back to dashboard
- Editable website name
- Save status
- Undo
- Redo
- Desktop preview
- Tablet preview
- Mobile preview
- Preview button
- Version history
- Share
- Publish

LEFT SIDEBAR

Include:
- Templates
- Pages
- Sections
- Elements
- Text
- Media
- Theme
- Layers
- Site Settings

LEFT CONTENT PANEL

Display contextual content depending on selected tool.

For example:

Templates:
Show template categories and previews.

Sections:
Show available section layouts.

Elements:
Show draggable components.

Text:
Show heading and paragraph presets.

Media:
Show uploaded assets and image library.

Theme:
Show global typography and color controls.

Layers:
Show hierarchical document structure.

RIGHT PROPERTIES PANEL

Show only properties relevant to the selected element.

Possible controls:
- Content
- Typography
- Colors
- Background
- Width and height
- Padding
- Margin
- Alignment
- Borders
- Radius
- Shadows
- Opacity
- Position
- Responsive settings
- Animation
- Visibility
- Component-specific settings

CENTER CANVAS

Render the actual website.

Support:
- Element selection
- Hover outlines
- Selection handles
- Direct text editing
- Drag and drop
- Element insertion
- Contextual floating toolbar
- Alignment guides
- Responsive viewport resizing
- Zoom
- Fit-to-screen

BOTTOM CONTROLS

Include:
- Zoom out
- Zoom percentage
- Zoom in
- Fit canvas
- Current viewport dimensions
- Selected element breadcrumbs

Use a cohesive original interface.

Do not make the editor feel like a collection of forms.

========================================================
7. EDITOR INTERACTION REQUIREMENTS
========================================================

Every supported element must be editable through
the visual editor.

ELEMENT SELECTION

Single click:
Select element.

Double click:
Enter inline editing when supported.

Escape:
Exit editing or deselect.

ELEMENT TOOLBAR

Show contextual actions:
- Edit
- Duplicate
- Delete
- Lock
- Hide
- Move forward
- Move backward

TEXT EDITING

Support:
- Direct text editing
- Font family
- Font size
- Font weight
- Text color
- Line height
- Letter spacing
- Text alignment
- Links
- Bold
- Italic
- Underline

IMAGE EDITING

Support:
- Upload
- Replace
- Crop
- Reposition
- Focal point
- Aspect ratio
- Border radius
- Opacity
- Alt text

CONTAINER EDITING

Support:
- Width
- Height
- Min/max dimensions
- Padding
- Gap
- Alignment
- Grid configuration
- Background
- Borders

DRAG AND DROP

Support:
- Reorder sections
- Reorder elements
- Move elements into compatible containers
- Insert new components
- Display drop indicators
- Reject invalid nesting

RESIZING

Support:
- Image resizing
- Container resizing
- Column adjustments
- Constraint-aware resizing

UNDO/REDO

Implement a reliable command history.

Group continuous edits into logical history entries.

AUTOSAVE

Save edits automatically.

Display:
- Saving
- Saved
- Offline
- Conflict
- Error

Use optimistic local updates and debounced persistence.

Never silently overwrite newer server revisions.

========================================================
8. DOCUMENT ENGINE
========================================================

Create a structured JSON document model.

The website document is the source of truth.

Do not store rendered HTML as the primary editable format.

Define:

SiteDocument
SitePage
SiteNode
SiteTheme
SiteAsset
SiteBinding
SiteMetadata

Each node must have:
- Stable ID
- Type
- Properties
- Responsive styles
- Children where supported
- Optional content bindings
- Visibility settings

Use typed discriminated unions and Zod schemas.

Create a central component registry.

The registry defines:
- Component type
- Display label
- Icon
- Default properties
- Allowed parents
- Allowed children
- Property schema
- Inspector controls
- Renderer
- Responsive behavior

Create document schema versioning.

Provide migration functions for future versions.

Reject unsupported or unsafe document properties.

========================================================
9. CORE COMPONENT REGISTRY
========================================================

Implement generic website components:

LAYOUT
- Section
- Container
- Stack
- Grid
- Columns
- Spacer
- Divider
- Overlay

CONTENT
- Heading
- Paragraph
- Rich Text
- Image
- Button
- Icon
- Link
- Badge

MEDIA
- Gallery
- Image Grid
- Background Image
- Video Embed

INTERACTIVE
- Accordion
- Tabs
- Countdown
- Form
- Map
- Navigation Menu

ADVANCED
- Decorative Shape
- Card
- Call-to-Action
- Social Links

Every component must have:
- Valid defaults
- Responsive behavior
- Editable properties
- Public rendering
- Validation

Do not expose arbitrary HTML or JavaScript injection.

========================================================
10. RESPONSIVE DESIGN ENGINE
========================================================

Use a Smart Visual Canvas.

Default positioning must use structured layout.

Support:
- Flexbox
- CSS Grid
- Responsive containers
- Stacks
- Columns
- Overlays

Breakpoints:

Mobile:
Below 768px

Tablet:
768px to 1023px

Desktop:
1024px and above

Use mobile-first base styles.

Allow breakpoint-specific overrides.

The editor must support:
- Switching device previews
- Editing breakpoint-specific properties
- Resetting overrides
- Detecting overflow
- Preventing invalid layouts
- Responsive image behavior
- Adaptive typography

Allow optional free positioning only inside
supported overlay containers.

Do not allow unrestricted absolute positioning
to destroy responsive layouts.

========================================================
11. TEMPLATE SYSTEM
========================================================

Implement four template levels.

LEVEL 1:
Complete website templates.

LEVEL 2:
Section templates.

LEVEL 3:
Element presets.

LEVEL 4:
Global theme presets.

Templates must be represented as versioned data.

Do not hardcode each template as a separate page.

Create template metadata:
- ID
- Name
- Category
- Description
- Thumbnail
- Preview
- Version
- Required fields
- Default theme
- Document definition

Template operations:
- Preview
- Select
- Apply
- Duplicate
- Replace
- Customize

When selecting a template:
1. Instantiate a new project document.
2. Populate available event data.
3. Open the editor.
4. Allow immediate customization.

SECTION TEMPLATE SWITCHING

Users must be able to select a section and choose
a different layout.

Preserve compatible:
- Text
- Images
- Dates
- Links
- Content bindings

Use explicit field mappings.

Warn before removing unsupported content.

Retain the original content for recovery.

Support undo.

========================================================
12. PREMIUM WEDDING TEMPLATES
========================================================

Wedding is the first supported category.

Create at least five distinct complete website templates.

Suggested styles:

1. Editorial Romance
2. Modern Minimalist
3. Botanical Elegance
4. Timeless Classic
5. Cinematic Celebration

Each template must have a genuinely different
composition and visual identity.

Create at least five distinct hero layouts:

1. Full-screen cinematic
2. Editorial split-screen
3. Centered minimal typography
4. Framed portrait composition
5. Botanical asymmetric layout

Create at least five Our Story layouts:

1. Vertical timeline
2. Editorial narrative
3. Alternating photo and text
4. Story cards
5. Full-width cinematic story

Also create multiple layouts for:
- Wedding Details
- Gallery
- Entourage
- Dress Code
- RSVP
- FAQ
- Footer

All layouts must be editable through the same engine.

========================================================
13. WEDDING DATA MODEL
========================================================

Create a wedding category module.

Store structured event data:

Couple:
- Partner one
- Partner two
- Display names

Event:
- Date
- Time
- Time zone
- Venue
- Address
- Map URL

Story:
- Introduction
- Timeline
- Photos

Entourage:
- Name
- Role
- Attire
- Optional personalized message

Dress Code:
- Theme
- Colors
- Instructions

RSVP:
- Deadline
- Guest groups
- Attendance
- Guest count
- Notes

FAQ:
- Question
- Answer

Use shared content bindings.

Changing wedding information in project settings
must update all bound website components.

========================================================
14. FUNCTIONAL WEDDING COMPONENTS
========================================================

Implement:

HERO
- Names
- Date
- Photo
- Call-to-action

COUNTDOWN
- Event date binding
- Time-zone aware countdown

OUR STORY
- Rich text
- Photos
- Timeline

WEDDING DETAILS
- Date
- Time
- Venue
- Address

MAP
- Validated map links
- Directions action

GALLERY
- Responsive image layouts

ENTOURAGE
- Names
- Roles
- Attire guidance

DRESS CODE
- Color palette
- Instructions
- Visual examples

RSVP
- Individual invitations
- Household invitations
- Attendance confirmation
- Guest count
- Deadline enforcement
- Submission confirmation

FAQ
- Accessible accordion

FOOTER
- Contact information
- Event details

Entourage role confirmation must remain separate
from attendance RSVP.

========================================================
15. GUIDED WEBSITE CREATION
========================================================

Create a beginner-friendly wizard.

Step 1:
Choose website category.

Step 2:
Choose template.

Step 3:
Enter project information.

Step 4:
Upload photos.

Step 5:
Create website.

Step 6:
Open editor.

Support skipping optional information.

Use sensible defaults.

Do not force users through unnecessary steps.

========================================================
16. MEDIA LIBRARY
========================================================

Support:
- Upload images
- Browse assets
- Search assets
- Replace images
- Crop images
- Reposition images
- Set focal point
- Set alt text
- Remove unused assets

Use S3-compatible object storage.

Store metadata in PostgreSQL.

Validate uploads on the server.

Use signed URLs where appropriate.

Prevent unauthorized access to private assets.

========================================================
17. DATABASE ARCHITECTURE
========================================================

Use PostgreSQL and Prisma.

Core entities:

User
Workspace
Membership
Client
Project
SiteDocument
SiteRevision
Template
Asset
Publication
Domain
Guest
Invitation
RSVPResponse
Review
AuditEvent

Use UUID or equivalent collision-resistant IDs.

Add:
- Foreign keys
- Appropriate indexes
- Unique constraints
- Created timestamps
- Updated timestamps

All tenant-owned resources must be scoped to a workspace.

Use transactions for multi-record operations.

Use optimistic concurrency for document updates.

========================================================
18. AUTHENTICATION AND AUTHORIZATION
========================================================

Implement real authentication.

Roles:

PLATFORM ADMIN
Manages platform configuration and template catalog.

WORKSPACE OPERATOR
Creates and manages client projects.

CLIENT REVIEWER
Reviews websites and submits feedback.

PUBLIC GUEST
Views published websites and submits authorized RSVP.

Enforce authorization on the server.

Do not trust frontend role checks.

Use secure sessions and least privilege.

========================================================
19. AUTOSAVE AND VERSION HISTORY
========================================================

Implement:
- Immediate local changes
- Debounced server saves
- Revision tracking
- Manual checkpoints
- Restore previous revision
- Save conflict detection
- Retry behavior

Never mutate historical revisions.

Restoring a revision must create a new draft state.

For the initial version, detect concurrent editing
sessions rather than implementing full real-time
multi-user collaborative editing.

========================================================
20. PUBLISHING ENGINE
========================================================

Implement:

Draft
    ↓
Validation
    ↓
Preview
    ↓
Publish
    ↓
Live Website

Published websites must use immutable snapshots.

Editing the draft must not change the live site.

Support:
- Public slugs
- Shareable URLs
- SEO metadata
- Open Graph metadata
- Responsive rendering
- Optimized images
- Publication history
- Rollback
- Custom-domain-ready architecture

Publishing must validate:
- Document structure
- Required content
- Broken internal links
- Invalid assets
- Essential accessibility requirements
- Component compatibility

Use the shared rendering engine.

Do not expose private draft data publicly.

========================================================
21. CLIENT REVIEW WORKFLOW
========================================================

Allow operators to generate private review links.

Clients can:
- View website previews
- Submit feedback
- Request changes
- Approve designs

Clients cannot directly modify the main document
unless explicitly granted a future editor role.

Use secure scoped review tokens.

Support expiration and revocation.

========================================================
22. GUEST MANAGEMENT AND RSVP
========================================================

Implement:
- Guest creation
- Guest editing
- Guest groups
- Household invitations
- Personalized invitation links
- RSVP status
- Attendance counts
- Response deadlines
- CSV exports

Invitation tokens must be:
- Random
- Scoped
- Hashed in storage
- Revocable

Protect guest personal information.

Prevent unauthorized RSVP modification.

========================================================
23. ANALYTICS
========================================================

Provide a simple analytics dashboard.

Track:
- Website visits
- Approximate unique visitors
- RSVP responses
- Confirmed attendance
- Declined attendance
- Pending responses

Display:
- Summary cards
- Simple charts
- Response breakdown
- Recent activity

Use privacy-conscious analytics.

Avoid unnecessary tracking infrastructure.

========================================================
24. SECURITY REQUIREMENTS
========================================================

Implement security from the beginning.

Requirements:
- Server-side authorization
- Tenant isolation
- Zod validation
- Safe URL handling
- Rich-text sanitization
- Secure uploads
- Rate limiting
- CSRF protection where applicable
- Secure cookies
- Token expiration
- Audit logging
- Error handling
- Secret management
- Dependency review

Never execute user-supplied JavaScript.

Never render untrusted arbitrary HTML.

Never allow document JSON to bypass validation.

Never expose private guest data in public responses.

========================================================
25. PROJECT STRUCTURE
========================================================

Use a feature-oriented structure.

Suggested:

src/
  app/
    (marketing)/
    (auth)/
    (studio)/
    (public)/
    api/

  components/
    ui/
    shared/

  features/
    editor/
      components/
      commands/
      hooks/
      registry/
      renderer/
      schema/
      state/
      utils/

    templates/
    projects/
    wedding/
    clients/
    guests/
    rsvp/
    reviews/
    media/
    publishing/
    analytics/

  server/
    auth/
    db/
    authorization/
    services/
    repositories/

  lib/
    validation/
    errors/
    utils/

  styles/

prisma/
  schema.prisma
  migrations/
  seed.ts

tests/
  unit/
  integration/
  e2e/

docs/
  architecture.md
  technical-specification.md
  editor-engine.md
  document-schema.md
  template-system.md
  security.md
  implementation-plan.md

Keep modules cohesive.

Avoid circular dependencies.

Do not create excessive abstraction layers.

========================================================
26. PERFORMANCE REQUIREMENTS
========================================================

The editor must feel responsive.

Optimize:
- Selection updates
- Canvas rendering
- Document mutations
- Autosave
- Media loading
- Template previews

Use:
- Memoization where justified
- Lazy loading
- Efficient state subscriptions
- Image optimization
- Reasonable history limits

Do not optimize prematurely.

Measure performance before introducing complexity.

========================================================
27. ACCESSIBILITY
========================================================

Target WCAG 2.2 AA.

Support:
- Keyboard navigation
- Visible focus
- Semantic HTML
- Accessible form labels
- Image alt text
- Color contrast
- Screen-reader-friendly controls
- Reduced-motion preferences

Provide accessible alternatives to drag-and-drop.

Published websites must remain usable without
the visual editor.

========================================================
28. TESTING REQUIREMENTS
========================================================

Unit tests:
- Document validation
- Node insertion
- Node deletion
- Node duplication
- Node reordering
- Undo/redo
- Responsive styles
- Template mappings

Integration tests:
- Authentication
- Authorization
- Project creation
- Template application
- Autosave
- Publishing
- Tenant isolation
- RSVP submission

End-to-end tests:
- Sign in
- Create project
- Select template
- Open editor
- Edit heading
- Replace image
- Change styling
- Reorder section
- Undo
- Redo
- Reload project
- Preview
- Publish
- Visit live website

Do not report tests as passing unless executed.

========================================================
29. DEVELOPMENT ROADMAP
========================================================

PHASE 0 — INITIALIZATION

Create a new Next.js application.

Set up:
- TypeScript
- Tailwind
- shadcn/ui
- Database
- Prisma
- Authentication
- Environment validation
- Testing infrastructure

PHASE 1 — APPLICATION FOUNDATION

Build:
- Design system
- Authentication
- Dashboard
- Project management
- Navigation
- Database models

PHASE 2 — DOCUMENT ENGINE

Build:
- Typed schemas
- Component registry
- Shared renderer
- Document commands
- Validation
- Schema versioning

PHASE 3 — BASIC VISUAL EDITOR

Build:
- Editor shell
- Selection
- Text editing
- Properties panel
- Responsive preview
- Undo/redo
- Autosave

PHASE 4 — ADVANCED EDITING

Build:
- Drag-and-drop
- Resizing
- Layers
- Media editing
- Theme controls
- Section insertion

PHASE 5 — TEMPLATE ENGINE

Build:
- Template catalog
- Full website templates
- Section templates
- Template switching
- Content preservation

PHASE 6 — WEDDING FEATURES

Build:
- Wedding data
- Functional components
- Guest management
- RSVP
- Entourage invitations

PHASE 7 — PUBLISHING

Build:
- Draft validation
- Preview
- Immutable publications
- Public website rendering
- Version restoration

PHASE 8 — CLIENT WORKFLOW

Build:
- Client reviews
- Feedback
- Approval
- Analytics

PHASE 9 — POLISH

Complete:
- Accessibility
- Security review
- Performance improvements
- Responsive testing
- Error handling
- UX refinements

========================================================
30. INITIAL VERTICAL SLICE
========================================================

Before implementing the entire feature set,
build one complete working workflow:

1. Create a website project.
2. Choose a wedding template.
3. Open the Smart Visual Canvas.
4. Select a heading.
5. Edit the heading directly.
6. Change its typography.
7. Replace an image.
8. Reorder a section.
9. Undo and redo.
10. Autosave changes.
11. Reload the editor.
12. Confirm changes persist.
13. Preview desktop and mobile.
14. Publish the website.
15. Open the published URL.
16. Confirm the published content matches the snapshot.

Do not consider this complete if any step is simulated.

========================================================
31. DEFINITION OF DONE
========================================================

The MVP is complete when:

- Authentication works.
- Projects are persisted.
- Templates load from structured data.
- The visual editor is functional.
- Elements can be selected.
- Text can be edited directly.
- Images can be replaced.
- Styling can be customized.
- Sections can be reordered.
- Undo and redo work.
- Autosave persists changes.
- Responsive previews work.
- Publishing works.
- Public websites render correctly.
- Drafts and publications remain separate.
- Authorization is enforced.
- Essential tests pass.

All implemented features must be genuinely functional.

========================================================
32. ENGINEERING RULES
========================================================

Follow these rules throughout development:

1. Keep the code simple.
2. Use reusable components.
3. Follow separation of concerns.
4. Avoid premature abstraction.
5. Avoid unnecessary dependencies.
6. Prefer explicit types.
7. Validate external input.
8. Enforce authorization server-side.
9. Write meaningful tests.
10. Handle errors properly.
11. Preserve working functionality.
12. Avoid giant components.
13. Avoid duplicated business logic.
14. Avoid fake backend implementations.
15. Avoid hardcoded project-specific content.
16. Document important architectural decisions.
17. Build features incrementally.
18. Keep the application deployable.
19. Never claim untested functionality works.
20. Prioritize maintainability over cleverness.

========================================================
33. EXECUTION INSTRUCTIONS
========================================================

You are now responsible for implementing Landscape.

START WITH:

1. Inspect the current workspace.
2. Confirm whether this is a new or existing repository.
3. If new, initialize the application.
4. Create architecture documentation.
5. Define the database schema.
6. Define the document engine.
7. Define the component registry.
8. Define the template architecture.
9. Create a phased implementation plan.
10. Begin Phase 1.

Do not generate the entire platform in one uncontrolled step.

Work in small, coherent increments.

After each phase:
- Summarize implemented functionality.
- List changed files.
- Report executed tests.
- Identify outstanding issues.
- Recommend the next implementation step.

If infrastructure or credentials are missing,
explain the limitation and provide a development-ready
integration path.

Do not invent successful external operations.

========================================================
FINAL PRODUCT EXPECTATION
========================================================

Landscape must feel like a premium visual design platform.

A user should be able to:

Choose a beautiful website template.

Open it in a professional visual editor.

Click any supported element.

Edit text directly.

Replace images.

Change colors and typography.

Move and resize elements.

Switch section layouts.

Customize responsive designs.

Preview the actual website.

Publish a functional website.

Manage the project without technical knowledge.

The product should be visually sophisticated,
architecturally clean, secure, responsive,
and easy to extend.

Build Landscape as a real software product,
not merely a collection of attractive UI screens.

BEGIN IMPLEMENTATION.
