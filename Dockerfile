FROM node:22.11.0-alpine AS builder
WORKDIR /app
COPY . .
COPY .env.local .env.local
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn build

FROM node:22.11.0-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.env.local ./.env.local
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/entrypoint.sh ./
RUN chmod +x ./entrypoint.sh
EXPOSE 3000
ENTRYPOINT ["sh", "./entrypoint.sh"]