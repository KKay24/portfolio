# Kabwe Kabwe — Portfolio

A responsive, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.

## Local development

```sh
npm install
npm run dev
```

Build the production site with `npm run build`; preview it locally with `npm run preview`.

## CV

The original CV PDF was not present when this project was created. The hero currently offers a working email link to request a copy rather than a broken download. To add a downloadable CV, place the authentic PDF at `public/resume.pdf` and update the hero link to `/resume.pdf` with the `download` attribute.

## Contact form

There is no server-side email service configured. The validated contact form opens a prefilled email draft in the visitor's email application; the site does not claim to send or store messages.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. In Vercel, import that repository and keep the detected Vite defaults (`npm run build` and `dist`).
3. Deploy. No environment variables or backend services are required for the current site.

# portfolio
