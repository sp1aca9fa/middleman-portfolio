# Raphael's Portfolio

Personal portfolio site built with Middleman. Deployed on Netlify.

Based on [dmbf29/middleman-template](https://github.com/dmbf29/middleman-template). Refer to the original repo for detailed setup, deploy, and configuration instructions.

## What I changed

The original template had a vertical layout: name and photo at the top, then a scroll to reach projects. I restructured it to a two-column banner (photo left, intro right) with project cards directly below, so the projects content is visible on load.

Projects are data-driven via `data/projects.yml`: each card pulls its name, description, image, and links from that file. Cards also support `image_fit` and `image_position` fields to control how the thumbnail is cropped per project, and descriptions use line-clamping so longer text lengths don't break the card layout.

### i18n (EN / JP)

The site supports English and Japanese. Language is auto-detected from the browser (`navigator.language`) on first visit and saved to `localStorage` for return visits. A toggle button in the top-right of the banner lets users switch manually.

To add translations for a new project, add a `description_ja` field alongside `description` in `data/projects.yml`.

### Project card videos

Cards support an optional hover preview and a YouTube link. Add a `youtube` field to any project in `data/projects.yml` with the full YouTube URL:

```yaml
youtube: https://www.youtube.com/watch?v=VIDEO_ID
```

Hovering the card plays the video muted and looped. A YouTube icon also appears in the card links for full-size viewing. Projects without a `youtube` field are unaffected.

## Stack

- [Middleman](https://middlemanapp.com)
- [Bootstrap 5](https://getbootstrap.com)
- [Sass](https://sass-lang.com)
- [FontAwesome](https://fontawesome.com)

## Run locally

```bash
bundle install
bundle exec middleman
```

Open in the browser: http://localhost:4567
