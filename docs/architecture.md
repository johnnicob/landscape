# Architecture

Landscape is a standalone modular monolith: one Next.js App Router application, PostgreSQL via Prisma, and private S3-compatible media. It shares no application branding, documents, storage keys, or project assumptions with other projects.

The category-independent editor owns versioned JSON, constrained layouts, document commands, a per-editor Zustand store, responsive rendering, and undo/redo. Category modules supply event data and bindings. Wedding is the first enabled module. Website and section templates compile into the same generic nodes; the renderer does not need wedding-specific conditions.

Route handlers validate input and origin, resolve the signed-in operator's workspace, and call service functions. Every tenant-sensitive operation checks ownership again on the server. Prisma transactions protect multi-record updates. Immutable revisions and publications retain their document data; restoring history creates a new draft revision.
