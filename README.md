# Sunflower Theme

![Screenshot of the home page](https://raw.githubusercontent.com/Ruberhauptmann/sunflower/main/images/screenshot.png)

**Sunflower** is a clean and vibrant Hugo theme that combines the flexibility of **TailwindCSS** and **DaisyUI** to deliver a visually appealing site. It’s optimized for showcasing resumes, projects, and lecture notes, with a striking full-screen landing page.

## Key Features

- **Resume Page**: Easily renders structured data from YAML files into a professional CV.
- **Project & Lecture Note Pages**: Dedicated sections to showcase projects and lecture materials.
- **Full-Screen Hero**: A customizable landing page with social media icons.

## Getting Started

To start using the Sunflower theme, clone the repository and set it up as your theme in your Hugo site:

```bash
git clone https://github.com/Ruberhauptmann/sunflower themes/sunflower
```

Set the `theme` parameter in your `config.toml` to `"sunflower"`:

```toml
theme = "sunflower"
```

### Node.js and TailwindCSS

**Sunflower** relies on **TailwindCSS** for its styling, which requires **Node.js** to process Tailwind’s utility classes.

Ensure that you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org).

After cloning the theme, navigate to the theme folder and install the necessary dependencies:

```bash
cd themes/sunflower
npm install
```

Once the dependencies are installed, you can start Tailwind's watcher to process your CSS:

```bash
npm run dev
```

This will watch for changes in your CSS files and recompile them as needed.

### Production Build

To generate the final production CSS, run:

```bash
npm run build
```

This will optimize and minify the CSS for deployment.

## Configuration Overview

### Basic Configuration

Example `config.toml` setup for a site using the Sunflower theme:

```toml
theme = "sunflower"
languageCode = "en-us"
baseURL = "https://example.com"
title = "Sunflower Example Site"
paginate = 9

[params]
favicon = "sunflower.png"
hero = "hero.jpg"
mainSections = ["projects", "blog"]
abstract = "A site demonstrating the Sunflower theme's capabilities."

[menu]
[[menu.main]]
name = "CV"
url = "/cv"
weight = -120
[[menu.main]]
name = "Projects"
url = "/categories/project-showcases"
weight = -120
[[menu.main]]
name = "Blog"
url = "/blog"
weight = -110
[[menu.main]]
name = "Lecture Notes"
url = "/lecture-notes"
weight = -100
[[menu.main]]
name = "About"
url = "/about"
weight = 0
```

### CV Configuration

Customize the CV page by enabling the necessary sections and defining the URL for the downloadable CV file:

```toml
[params.cv]
url = "/cv/"
download = "#cvdownload"
general = true
education = true
work_experience = true
publications = true
```

### Social Links

Add your social media or contact links to the full-screen landing page using this configuration:

```toml
[params.social.orcid]
link = "#orcid"

[params.social.email]
link = "#email"

[params.social.gitlab]
link = "#gitlab"

[params.social.linkedin]
link = "#linkedin"
```

Currently supported social platforms:
- Email
- ORCID
- GitLab
- LinkedIn

### Taxonomies

Define taxonomies to categorize your content:

```toml
[taxonomies]
category = "categories"
tag = "tags"
series = "series"
```

### Date Handling

Set the date fields used in frontmatter:

```toml
[frontmatter]
date = ['date_finished', ':default']
```

## Archetypes

Easily create new content for projects and lecture notes with the following commands:

```bash
hugo new content/lecture-notes/post1/index.md
hugo new content/projects/post1/index.md
```

These archetypes automatically populate metadata for your content.

## Deployment

Sunflower can be deployed on platforms like Netlify or GitHub Pages. Ensure you have the correct `baseURL` in your `config.toml` file and deploy using the Hugo build commands.
