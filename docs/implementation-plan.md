# Incremental implementation

1. Foundation: standalone configuration, schema, authentication, environment setup, registry, document validation, and command tests.
2. Vertical slice: five data-driven wedding templates, project creation, visual selection and text editing, typography, image replacement, section reordering, undo/redo, backend autosave, responsive preview, and immutable publishing.
3. Workflow modules: private review, clients, guest/household RSVP, media, activity, and analytics.
4. Hardening: real browser and database tests, responsive checks, safe document and upload validation, production build, documentation of limits.

Each increment must remain runnable. A database-backed workflow must never fall back silently to browser-only persistence. Missing external provider configuration produces explicit setup guidance.
