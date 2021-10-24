FROM node:14-alpine
WORKDIR /app
ADD package.json package-lock.json ./
RUN npm ci
ADD lib ./lib
ADD modules ./modules
ADD public ./public
ADD views ./views
ADD app.js ./
RUN echo $(date +%s) > RELEASE_ID
RUN APOS_RELEASE_ID=$(cat RELEASE_ID) NODE_OPTIONS=--max-old-space-size=1024 npm run build
CMD APOS_RELEASE_ID=$(cat RELEASE_ID) npm run serve
