# Templates

Catalog entries describe category, versioned document factory, preview image, visual direction, theme, and compositions. Five wedding templates use different node arrangements rather than separate hardcoded pages. Hero and Story section factories each offer five compositions.

Category data is shared through explicit text/date bindings. Layout switching preserves bound content and compatible image references. It creates a server checkpoint before replacement, making the entire old section recoverable through history as well as undo. Unsupported custom additions are disclosed before switching.
