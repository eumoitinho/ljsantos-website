Deploy instructions

This project is a Next.js 14 app configured for production builds using the `standalone` output. Below are quick instructions for common deploy targets.

Vercel (recommended):
- Connect the repository to Vercel.
- Vercel will detect Next.js automatically. Use the default build command: `pnpm build` (or `npm run build`) and output directory is handled by Next.
- No additional configuration is required; environment variables can be set in the Vercel dashboard.

Docker (standalone build):
- Build locally (uses pnpm in the builder stage):

```bash
# from project root
docker build -t ljsantos-website:latest .

# run locally mapping port 3000
docker run --rm -p 3000:3000 -e PORT=3000 ljsantos-website:latest
```

Notes:
- The Dockerfile uses the Next `standalone` build output. The container runs `node server.js` from the standalone folder.
- If you use another package manager, update the Dockerfile accordingly.

Other hosts:
- For platforms like Render, Railway, or DigitalOcean App Platform, set the build command to `pnpm build` and the start command to `pnpm start` (or `npm run start`).

Troubleshooting:
- If the build fails due to native modules, ensure the builder image has the necessary build tools (the Dockerfile includes common build tools).
- If you prefer to use `npm` instead of `pnpm`, remove `pnpm-lock.yaml` and adjust the Dockerfile install steps.

