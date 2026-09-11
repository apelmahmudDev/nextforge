# Next.js template

This is a Next.js template with shadcn/ui.

## Environment variables

Copy `.env.example` to `.env.local` and set `API_BASE_URL` to the backend API URL.
Environment variables are validated when the server starts.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```
