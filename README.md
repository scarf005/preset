# Preset

https://github.com/bluwy/create-vite-extra Vite + Deno + Preact + TypeScript preset but with custom changes

## What's the difference?

- vite `base`: `./`
- `deno.jsonc`: no semicolons, proseWrap never
- uses [@preact/signals](https://preactjs.com/guide/v10/signals/)

## Running

Requires Deno v2.0.0 or later.

```sh
deno task dev
deno task build
deno task typecheck
deno task lint
deno task test
```

## Pre-commit hooks

```sh
git config set hook.quality.command 'deno task typecheck && deno task lint && deno task test'
git config set --append hook.quality.event pre-commit
```
