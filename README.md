# Sunflower theme

![Screenshot of the home page](images/screenshot.png)

A clean Hugo theme with yellows and greens using TailwindCSS and DaisyUI components.

## Features

- a page that renders structured data in yaml files into a resume
- special pages for showcasing projects and lecture notes
- a full screen image as landing page, with social icons

## Archetypes

This page provides archetypes to automatically populate the metadata when creating lecture notes and projects:
```shell
hugo new content lecture-notes/post1/index.md
hugo new content projects/post1/index.md
```

## Configuration

For setting up the url for the CV and the sections that should appear:
```toml
[params.cv]
url = "/cv/"
download = "#download"
general = true
education = true
work_experience = true
publications = true
```

The social links in the hero take the following form:
```toml
[params.social.orcid]
link = "#orcid"
```
For now, only a set of links are implemented:
- Email
- Orcid
- Gitlab
- LinkedIn

Menu items can be created like this:
```toml
[menu]
[[menu.main]]
name = "CV"
url = "/cv"
weight = -120
```


```toml
[params]
favicon = "sunflower.png"
hero = "hero.jpg"
mainSections = ["projects", "blog"]
abstract = "This is a site showing the capacities of the sunflower theme for hugo."
```

Example configuration:
```toml
theme = "sunflower"
languageCode = "en-us"
baseURL = "https://example.com"
title = "Sunflower Example Site"

copyright = "Copyright © 2024, Joe Bob, all rights reserved."

paginate = 9

[params]
favicon = "sunflower.png"
hero = "hero.jpg"
mainSections = ["projects", "blog"]
abstract = "This is a site showing the capacities of the sunflower theme for hugo."

[params.social.orcid]
link = "#orcid"

[params.social.email]
link = "#email"

[params.social.gitlab]
link = "#gitlab"

[params.social.linkedin]
link = "#linkedin"

[params.cv]
url = "/cv/"
download = "#cvdownload"
general = true
education = true
work_experience = true

[taxonomies]
category = "categories"
tag = "tags"
series = "series"

[frontmatter]
date = ['date_finished', ':default']

# syntax highlight settings
[markup]
[markup.highlight]
style = "dracula"

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
