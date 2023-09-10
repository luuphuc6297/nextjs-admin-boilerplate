FROM alpine:3.17

WORKDIR /usr/src/app

# Install Node.js and npm
RUN apk add --update nodejs yarn

COPY package*.json yarn.lock ./

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

ENV NODE_ENV production

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
