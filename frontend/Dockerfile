FROM node:21-alpine AS build

# Build the frontend
ARG version=0.0.1
WORKDIR /web
COPY ./src /web/src
COPY ./public /web/public
COPY ./package.json /web/
COPY ./package-lock.json /web/
COPY ./nginx.conf /web/
COPY ./next.config.js /web/

RUN npm version --no-git-tag-version ${version} \
  && npm install \
  && npm run build

FROM node:21-alpine
WORKDIR /web

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH=/web/node_modules/sharp

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /web/public /web/public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=build --chown=nextjs:nodejs /web/.next/standalone /web
COPY --from=build --chown=nextjs:nodejs /web/.next/static /web/.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["server.js"]
