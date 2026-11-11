# Technical specification

Routes separate public marketing/template previews, authenticated workspace screens, editor APIs, and published sites. The initial supported category is Wedding; additional categories must add schema/template modules without changing core node commands.

Database records scope projects, clients, templates, and assets to workspaces. Guests and scoped tokens derive tenancy through projects. Document updates use compare-and-increment revision writes inside transactions. Publications have immutable JSON and a separate live pointer for rollback/unpublish. Historical data is not edited in place.

The required initial vertical slice is the release gate. Executed tests and remaining gaps are recorded in README after validation; no feature is considered complete based only on a UI control or schema table.
