FROM node:16.15.1

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY . .

COPY "package.json" .

RUN yarn

CMD ["yarn",  "dev"]