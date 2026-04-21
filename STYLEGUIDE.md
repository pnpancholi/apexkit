# Style Guide

This project uses [Biome](https://biomejs.dev/) for linting and formatting. All rules are enforced via `biome.json` at the project root.

Run the linter with:

```bash
npm run lint
```

---

## Formatting Rules

### No Semicolons
**Rule:** `semicolons: asNeeded`  
Semicolons are omitted unless required to avoid ambiguity. ASI (Automatic Semicolon Insertion) handles the rest.

```ts
// ❌ Bad
const name = 'John';
const age = 30;

// ✅ Good
const name = 'John'
const age = 30
```

---

### Single Quotes
**Rule:** `quoteStyle: single`  
Use single quotes for all JS/TS strings. JSX attributes remain double quoted by default.

```ts
// ❌ Bad
const name = "John"

// ✅ Good
const name = 'John'
```

```tsx
// ✅ JSX stays double quoted
<Button className="primary" />
```

---

### Trailing Commas
**Rule:** `trailingCommas: all`  
Trailing commas are required everywhere including function parameters. Produces cleaner git diffs.

```ts
// ❌ Bad
const obj = {
  name: 'John',
  age: 30
}

// ✅ Good
const obj = {
  name: 'John',
  age: 30,
}

// ✅ Also in function parameters
function foo(
  name: string,
  age: number,
) {}
```

---

### Bracket Spacing
**Rule:** `bracketSpacing: true`  
Spaces required inside object literal braces.

```ts
// ❌ Bad
const obj = {name: 'John'}

// ✅ Good
const obj = { name: 'John' }
```

---

### JSX Bracket Same Line
**Rule:** `bracketSameLine: false`  
JSX closing `>` always goes on its own line when props are multiline.

```tsx
// ❌ Bad
<Button
  onClick={handler}
  className="foo">

// ✅ Good
<Button
  onClick={handler}
  className="foo"
>
```

---

### Line Width
**Rule:** `lineWidth: 100`  
Max line length is 100 characters. TypeScript and Next.js patterns are verbose — 80 is too restrictive.

---

### Indent
**Rule:** `indentStyle: space`, `indentWidth: 2`  
2 spaces, no tabs.

---

## Linter Rules

### No Unused Imports
**Rule:** `correctness/noUnusedImports` — 🔴 Error  
Unused imports add noise, increase bundle size and confuse readers.

```ts
// ❌ Bad
import { useState, useEffect } from 'react' // useEffect never used

// ✅ Good
import { useState } from 'react'
```

> **Tip:** Use `// biome-ignore lint/correctness/noUnusedImports: <reason>` to suppress when needed.

---

### No Unused Variables
**Rule:** `correctness/noUnusedVariables` — 🔴 Error  
Unused variables are dead code and often indicate a bug or incomplete refactor.

```ts
// ❌ Bad
const name = 'John'
const age = 30 // never used

// ✅ Good
const name = 'John'
console.log(name)
```

---

### Exhaustive Dependencies
**Rule:** `correctness/useExhaustiveDependencies` — 🔴 Error  
All values referenced inside a `useEffect`, `useCallback` or `useMemo` must be listed in the dependency array. Missing deps cause stale closure bugs.

```ts
// ❌ Bad
useEffect(() => {
  fetchUser(userId)
}, []) // userId is missing

// ✅ Good
useEffect(() => {
  fetchUser(userId)
}, [userId])
```

---

### No Double Equals
**Rule:** `suspicious/noDoubleEquals` — 🔴 Error  
Always use strict equality (`===`). `==` performs type coercion and leads to subtle bugs.

```ts
// ❌ Bad
if (value == null) {}
if (count == '0') {}

// ✅ Good
if (value === null) {}
if (count === 0) {}
```

---

### No Duplicate Object Keys
**Rule:** `suspicious/noDuplicateObjectKeys` — 🔴 Error  
Duplicate keys in an object silently overwrite each other. Almost always a bug.

```ts
// ❌ Bad
const config = {
  timeout: 3000,
  timeout: 5000, // silently overwrites the first
}

// ✅ Good
const config = {
  timeout: 5000,
}
```

---

### No Console
**Rule:** `suspicious/noConsole` — 🔴 Error  
Console statements should not be committed. Use a proper logger for production code.

```ts
// ❌ Bad
console.log('user data', user)
console.error('something broke')

// ✅ Good — use a logger utility
logger.info('user data', user)
logger.error('something broke')
```

> **Tip:** Use `// biome-ignore lint/suspicious/noConsole: debugging` locally during development.

---

### No Array Index Key
**Rule:** `suspicious/noArrayIndexKey` — 🔴 Error  
Using array index as a React `key` causes reconciliation bugs when items are reordered or removed.

```tsx
// ❌ Bad
items.map((item, index) => (
  <div key={index}>{item.name}</div>
))

// ✅ Good
items.map((item) => (
  <div key={item.id}>{item.name}</div>
))
```

> **Tip:** If your list is truly static and never reorders, you can suppress:
> ```ts
> // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
> ```

---

### No Explicit Any
**Rule:** `suspicious/noExplicitAny` — ⚠️ Warn  
Avoid `any` — it disables TypeScript's type checking entirely. Use specific types, `unknown`, or generics instead. Warn level because there are legitimate migration scenarios.

```ts
// ❌ Bad
function process(data: any) {}

// ✅ Good
function process(data: unknown) {}
function process<T>(data: T) {}
```

---

### Use Const
**Rule:** `style/useConst` — 🔴 Error  
Always use `const` for variables that are never reassigned. Use `let` only when reassignment is needed.

```ts
// ❌ Bad
let name = 'John' // never reassigned

// ✅ Good
const name = 'John'

// ✅ let is fine when reassignment is needed
let count = 0
count += 1
```

---

## Ignoring Rules

To suppress a rule on a single line:
```ts
// biome-ignore lint/<category>/<ruleName>: your reason here
const x: any = externalLibraryData
```

The reason is **required** — Biome will not accept an ignore comment without an explanation.
