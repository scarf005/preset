import { signal } from "@preact/signals"
import preactLogo from "./assets/preact.svg"

const count = signal(0)

export const App = () => (
  <>
    <img src="/vite-deno.svg" alt="Vite with Deno" />
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} class="logo preact" alt="Preact logo" />
      </a>
    </div>
    <h1>Vite + Preact</h1>
    <div class="card">
      <button type="button" onClick={() => count.value += 1}>
        count is {count.value}
      </button>
      <p>
        Edit <code>src/app.tsx</code> and save to test HMR
      </p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and Preact logos to learn more
    </p>
  </>
)
