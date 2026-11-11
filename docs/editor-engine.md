# Editor engine

Document commands are pure functions. Each editor creates its own Zustand store; no module-global project state is shared between tabs or mounted editors. Continuous edits within 800ms form one history entry; undo/redo history is bounded to 80 documents.

Responsive styles use base/mobile, tablet at 768px, and desktop at 1024px. The renderer emits constrained CSS from validated numeric/enumerated tokens. Overlay nodes use CSS Grid overlap, not arbitrary absolute positions. Drag-and-drop has keyboard and button alternatives. Moving into descendants or incompatible containers is rejected.

Autosave waits 700ms, serializes in-flight requests, and supplies the last acknowledged server revision. A mismatch returns HTTP 409 and preserves local edits. Export is available before reloading. Publication snapshots are not touched by draft saves.
