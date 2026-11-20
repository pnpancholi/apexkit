---
name: clean-component
description: Write and edit any React/Next.js component in a clean and readable way. Use every time a JSX component/file is created or changed, even if user doesn't ask for it, and when they say "clean up", "make it readable" or "refactor this".
---
# Clean component

## Rules
- Do not add unused imports.
- Import React once and use the namespace: `React.useState`, `React.useEffect`, `React.useRef`. Do not use named hook imports.
- If an element needs five or more class names, store them in a constant outside the component with a `STYLES` suffix (`BUTTON_STYLES`, `CARD_STYLES`, `NAV_LINKS_STYLES`) and apply it to the element.
- For props, use `React.ComponentProps`.
- Always use spread operator to spread the props.
- Add `"use client"` only when the component uses state, effects, event handlers, or browser APIs.

### Pattern

```tsx
// Input.tsx
const INPUT_STYLES = "input input-bordered w-full";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="input w-full">
      <span className="label">{label}</span>
      <input {...props} className={INPUT_STYLES} />
    </label>
  );
}

```

```tsx
// Button.tsx
const BUTTON_STYLES = "btn";

const SIZES = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const VARIANTS = {
  regular: "btn-primary",
  outline: "btn-primary btn-outline",
};

type ButtonProps = React.ComponentProps<"button"> & {
  size?: keyof typeof SIZES;
  variant?: keyof typeof VARIANTS;
};

export default function Button({ size = "md", variant = "regular", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${BUTTON_STYLES} ${SIZES[size]} ${VARIANTS[variant]}`}
    />
  );
}
```

```tsx
// Counter.tsx
"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </div>
  );
}

```

## Done When

- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes

