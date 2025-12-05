# Multi-stage Dockerfile for Next.js 14 standalone output
# Builder stage: install deps and build the app
FROM node:20-alpine AS builder

# Install utilities and enable corepack for pnpm
RUN apk add --no-cache python3 make g++ bash \
  && corepack enable \
  && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package metadata and lockfile first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies (production deps will be packaged into the standalone build)
RUN pnpm install --frozen-lockfile

# Copy the rest of the sources and build
COPY . .
RUN pnpm build

# Runner stage: use the standalone output from Next
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy standalone server and static assets produced by Next.js
COPY --from=builder /app/.next/standalone/ ./
COPY --from=builder /app/.next/static/ ./.next/static/
COPY --from=builder /app/public ./public

# Expose port and start
EXPOSE 3000
CMD ["node", "server.js"]
