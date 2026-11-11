# Landscape Studio

**Your vision. Your canvas. Your website.**

A standalone, template-first visual website studio. The editor uses a category-independent JSON document engine; Wedding is the first category module. This application does not reuse another product's branding, saved projects, or browser storage.

## Run on this computer

Requires Node.js 22+ and PostgreSQL. PostgreSQL 18 was found on this Windows machine; the local helper uses its installed binaries.

```powershell
cd C:\Users\Nico\Documents\landscape
npm.cmd install
npm.cmd run db:dev
npm.cmd run db:migrate
npm.cmd run dev
```

Open **http://127.0.0.1:3000** and create your account at `/register`. No default administrator password or example user account is created.

`db:dev` creates a separate PostgreSQL cluster under ignored `.local/postgres`, protected by a generated password and bound only to loopback port 55441. It generates `DATABASE_URL` and `NEXTAUTH_SECRET` in ignored `.env`. It does not connect to or alter your existing PostgreSQL databases. Credentials are not printed. `npm.cmd run db:stop` stops this project's local database. Set `POSTGRES_BIN` if your PostgreSQL binaries are elsewhere.

For your own database, copy `.env.example` to `.env`, configure `DATABASE_URL`, a random `NEXTAUTH_SECRET`, `APP_URL`, and `NEXTAUTH_URL`, and run `db:migrate`. Use the same hostname/port in your browser as the configured application origin. Do not run `db:dev` over a separately configured database.

## The first working release

- Original ivory/stone/forest design, marketing home, authentication, dashboard, template collection, media library, clients, and settings.
- Real registration/sign-in using Auth.js credentials, bcrypt hashes, secure session handling, and server-resolved workspace memberships.
- Project creation, search/filter, grid/list, rename, duplication, archive/restore, and confirmed deletion. Data is stored in PostgreSQL, not simulated in localStorage.
- Five complete structured wedding templates: Editorial Romance, Modern Minimalist, Botanical Elegance, Timeless Classic, and Cinematic Celebration. Five Hero and five Story compositions compile into the same generic node model.
- Professional canvas shell with tools, contextual content panel, properties inspector, responsive viewport selection, zoom, fit controls, breadcrumbs, and an actual website iframe viewport.
- Select elements; edit headings/paragraphs directly; use Tiptap rich text; change typography, colors, spacing, grid columns, image dimensions/framing/focal point/alt text, borders, radius, and opacity.
- Insert registered elements, duplicate/delete/hide/lock, reorder sections with dnd-kit or keyboard/buttons, reorder elements with buttons, and move elements to compatible containers through Layers. Invalid self-nesting and unsupported structures are rejected.
- Base/mobile, tablet, and desktop styles with breakpoint reset controls. Desktop and tablet can each override the mobile-first base.
- Per-editor Zustand history, grouped text edits, undo/redo, keyboard shortcuts, backend autosave, serialized saves, visible save failures, conflict rejection, recovery export, manual checkpoints, and revision restoration.
- Shared event bindings update names/story/event details across the website. Section switching preserves bound data and compatible photographs, creates a checkpoint first, and discloses possible custom-content replacement.
- Private draft preview, validated immutable publication snapshots, separate live/draft state, publication history, rollback, unpublish, public slugs, and page metadata. Public websites render the stored publication through the shared renderer.
- Private seven-day review links, feedback, design approval of a saved revision, and access revocation.
- Guests/households, editing, scoped hashed invitation tokens, invitation renewal/revocation, RSVP deadlines/party limits, idempotent response updates, separate entourage-role confirmation, and protected CSV export.
- Actual stored visit/visitor-day and attendance summaries, response breakdowns, and simple daily charts. Visitor-days are approximate; no raw IP addresses are retained.

## Photographs and storage

Local development uses **real private files** under `.local/assets` with metadata in PostgreSQL (`ASSET_STORAGE=local`). The development-only adapter is disabled in production. The upload workflow validates request size, workspace ownership, file type, actual decoding, and image dimensions, then re-encodes to JPEG and strips metadata. Input limits are 5MB and 40 megapixels; output is constrained to 1800px. Some hosts impose lower request limits.

Production uploads require a private S3-compatible bucket and server-only `S3_ENDPOINT`, `S3_REGION`, `S3_BUCKET`, `S3_ACCESS_KEY_ID`, and `S3_SECRET_ACCESS_KEY`. No storage credentials enter the document or browser bundle. Private assets require operator access or a valid scoped review token; only live publication references are served publicly. Historical references retain their photographs. Only entirely unused assets can be physically removed.

The S3 adapter is implemented, but this session has no live S3 credentials. Verify your chosen provider before serving real clients. Sample template photographs are separate from uploads; provenance is recorded in `public/assets/SOURCES.md`.

## Development and verification

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run test:e2e
```

Vitest covers document/registry validation, node commands, history isolation, responsive inheritance, content preservation, party limits, rich-text escaping, and accessible tabs. Playwright uses installed Chrome and a dedicated server on port 3022. It creates temporary test users/workspaces and exercises the actual registration, editor, upload, autosave, preview, publication, review, RSVP, tenancy, and concurrency paths.

The browser suite uses the local development database by default. Set `LANDSCAPE_TEST_DATABASE_URL` to a **dedicated test database** to isolate it further. Apply the migrations to that database first. Never point browser tests at production. Test account credentials are generated per run and are not product login credentials.

## Project map

- `src/features/editor/schema`: typed v1 document model and strict Zod validation.
- `src/features/editor/registry`: generic component definitions, defaults, and property schemas.
- `src/features/editor/commands`: pure insertion, deletion, duplication, movement, and lookup.
- `src/features/editor/renderer`: one shared renderer and constrained responsive CSS generation.
- `src/features/editor/state`, `hooks`, `components`: per-editor Zustand, autosave, and canvas UI.
- `src/features/templates`, `wedding`: versioned template factories and category-owned data/bindings.
- `src/server`: authentication, authorization, database, services, safe requests, and storage.
- `src/features/reviews`, `guests`, `media`, `publishing`, `analytics`, `clients`: supporting modules.
- `prisma`: relational schema and initial deployable migration.
- `docs`: architecture, plan, engine, document, template, security, and technical notes.

To add a component, define typed properties and their Zod schema, register metadata/defaults, add a renderer and relevant inspector, and test invalid/valid documents. To add a category, provide category data/schema/bindings and templates without changing the core document commands.

## Current boundaries and next increments

This is the initial working release, not a claim that the entire master prompt is production-complete. Advanced follow-up work includes canvas drag handles and cross-container drag/drop (the current Layers move control is functional), pointer-driven resize handles and alignment guides (inspector sizing is functional), animation controls, richer section-layout variants beyond Hero/Story, template authoring/catalog administration, recently-used template filters, full client relationship editing, email verification and automated password reset, automated message delivery, custom-domain verification, publication Open Graph image generation, and deeper performance/accessibility testing.

Password-reset email is explicitly unavailable until a provider is added. Commercial pricing and billing are placeholders; there is no subscription checkout. Domain storage is a future integration boundary, not a working DNS service. No external deployment or GitHub push is performed by this local implementation.

## Deployment

Use a Next.js-compatible Node host with PostgreSQL and private S3 storage. Set the server environment variables, apply migrations, run `npm.cmd run build`, then `npm.cmd start`, or deploy through your host's Next.js pipeline. Keep development `.local`, `.env`, and test artifacts out of source control and deployments. Production must use HTTPS and independently managed database/storage credentials.
