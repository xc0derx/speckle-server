FROM node:12
WORKDIR /src
# Bundle app source
COPY lerna.json package.json ./
RUN npm install
COPY ./packages/server ./packages/server
COPY ./packages/frontend/ ./packages/frontend/
RUN npx lerna bootstrap
RUN npm --prefix packages/frontend install
EXPOSE 3000 8080
CMD ["npx", "lerna", "run","dev", "--stream"]