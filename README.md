# Raphael's Portfolio

Personal portfolio site built with Middleman. Deployed on Netlify.

Based on [dmbf29/middleman-template](https://github.com/dmbf29/middleman-template). Refer to the original repo for detailed setup, deploy, and configuration instructions.

## What I changed

The original template had a vertical layout: name and photo at the top, then a scroll to reach projects. I restructured it to a two-column banner (photo left, intro right) with project cards directly below, so the projects content is visible on load.

Projects are data-driven via `data/projects.yml`: each card pulls its name, description, image, and links from that file.

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
