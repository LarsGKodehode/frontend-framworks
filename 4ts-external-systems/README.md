# Handling External Types with TypeScript

Handling API response in TypeScript can be a bit overwhelming when first starting with TypeScript

## Loosen the TypeScript Type tightness


### Disable Type checking

Disabling typechecking in the build step might be resonable in some cases, though you should be aware that you are now depending on your own eyes to catch and fix all potential errors in your code.

It is done by simply removing the **tsc** step from the build pipeline.

This
```json
   "build": "tsc && vite build",
```

becomes this
```json
   "build": "vite build",
```

<details>
<summary>Full File</summary>

```json
{
  "name": "4ts-external-systems",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```
</details>

