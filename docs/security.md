# Security boundaries

- Auth.js credentials sessions, bcrypt hashes, server-resolved workspace memberships, and least-privilege operator access.
- Same-origin checks on custom mutations, Auth.js CSRF handling, input/body limits, persisted throttling, and generic server failures.
- Document allowlists for properties, CSS, rich text, node structure, links, and asset sources. No uploaded scripts or raw HTML execution.
- Password-protected, loopback-only local development PostgreSQL. Secrets belong in ignored `.env`; production requires independently configured credentials and HTTPS.
- Private S3 bucket with server-owned keys. Upload decoding, dimensions, size limits, and re-encoding prevent trusting browser MIME declarations.
- Review/invitation tokens are random, hashed, scoped, expiring, and revocable. Public responses omit guest lists and private workspace data.
- Public pages read immutable publications only. Draft and asset access require authorization or an explicitly scoped token.

This document describes implemented boundaries, not an independent security certification. External storage and email providers require integration testing before real-client launch.
