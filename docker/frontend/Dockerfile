FROM node:12
WORKDIR /src
# Bundle app source
COPY ./packages/frontend ./packages/frontend
RUN npm --prefix packages/frontend install
EXPOSE 8080
CMD ["npm", "--prefix", "packages/frontend", "run","dev"]


