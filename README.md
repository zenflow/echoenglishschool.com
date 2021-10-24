# apos-my-site

> A Personal Website powered by [Apostrophe CMS v3](https://v3.docs.apostrophecms.org/)

### Notes

- Project originally scaffolded from
  https://github.com/apostrophecms/a3-boilerplate/tree/e0804b8ee9dad2f77d235980bb5151764f41fdf4
  by running `apos create apos-my-site`

## Development

#### Prerequisites
1. Git
2. [Node.js](https://nodejs.org/en/)
v14 or later
3. [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/)
v5 or later
4. (Optional) [ImageMagick](https://imagemagick.org/script/download.php) (for compressing image uploads)
5. (Optional) [Docker](https://docs.docker.com/get-docker/) (for testing production Docker image)

#### Setup
1. Fork this repo on GitHub
2. Clone your fork onto your local machine (`git clone https://github.com/<your username/apos-my-site`)
3. `cd` into the repo on your local machine (`cd apos-my-site`)
4. Install dependencies (`npm install`)

#### Tasks

- Run app in dev mode /w `npm run dev`
- Run app in production mode /w `npm run build && npm run serve`
- Build and run production Docker image /w `docker-compose up --build`

## Deploying to production

1. Use the `Dockerfile` in the repo root
2. Configure ports/volumes/environment according to the [docker-compose.yml](./docker-compose.yml).

## TODO

- Get sync-down & sync-up scripts working
