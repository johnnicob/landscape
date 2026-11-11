# Document schema

`SiteDocument` v1 contains pages, metadata, theme, category ID, and flat category-owned binding data. Pages contain sections; sections contain constrained generic nodes. Nodes have stable IDs, discriminated properties, mobile-first base styles, tablet/desktop overrides, optional bindings, and visibility/lock flags.

Zod rejects unknown properties, arbitrary URLs/styles, HTML/script nodes, unsupported versions, duplicate node IDs/page paths, invalid nesting, and excessive document size/depth. `migrateDocument` currently accepts v1 only; future migrations must be explicit. Rich text is stored as validated Tiptap JSON and rendered as React elements from an allowlist, never arbitrary HTML.
