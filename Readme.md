# Seungheon Doh — Backup CV Site

This repository is the static backup of [seungheondoh.github.io](https://seungheondoh.github.io/).

The site is served directly from the repository root using plain HTML, CSS, and JavaScript. No build step or Node.js dependency is required. The previous React source remains in `src/` and `public/` only as a historical archive and is not used for deployment.

## Local preview

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deployment

Configure GitHub Pages to publish from the `main` branch and repository root. The backup declares the primary site as its canonical URL and opts out of search indexing.
