# Repository Rules

- Follow the requested scope; ask if unclear
- Do not state the obvious
- Preserve user work, secrets, history, comments, behavior, and visible UI
- Check `git status --short` before editing
- Use task-scoped commands; avoid broad rewrites or formatting unless requested.
- Prefer FP, TDD, options objects
- Validate changed behavior before finishing
- Keep UI minimal
  - Do not add explanatory UI copy, branding, patch notes, motivational text, implementation notes, `powered by` text, architecture descriptions, badges, decorative metadata, extra links, gradients, animation, or border radius unless explicitly requested or required for the user workflow.

## Preact

- use Preact Signals / https://github.com/luisherranz/deepsignal
- Do not use hooks unless required by the existing architecture or a library boundary.
