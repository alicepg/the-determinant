# The Determinant — Handoff Guide

This file is for the next web editors. It explains how the site works, how to publish, and what to check when something breaks. For day-to-day publishing, read **EDITOR_GUIDE.md** first.

---

## 1. What this site is

- **The Determinant** is the student magazine of EcoSGP (Master of Public Health Science, Master of Global Health and Master of Biostatistics, Sahlgrenska Academy, University of Gothenburg).
- It is built with **Eleventy 2.0.1** (a static site generator) and styled by **styles.css**.
- It is hosted on **Cloudflare Pages**. Every change pushed to the `main` branch of the GitHub repository rebuilds and publishes the site, usually in 1–2 minutes.

---

## 2. Where things live

| What | Where |
|---|---|
| Articles (one Markdown file each) | `content/articles/` |
| Team members | `data/team.json` (edit through Pages CMS) |
| Magazine settings (name, tagline, issue text) | `data/settings.json` (edit through Pages CMS) |
| Categories | `data/categories.json` (code change only) |
| Images | `public/images/` |
| Homepage | `index.njk` |
| Archive ("Past Issues") | `archive.njk` |
| Our Team page | `team.njk` |
| Article page layout | `_includes/article.njk` |
| Site-wide layout, header, footer | `_includes/base.njk` |
| Design | `styles.css` |
| Settings for Eleventy | `.eleventy.js` |
| CMS configuration | `.pages.yml` |

---

## 3. How to publish an article

Use **Pages CMS** (pagescms.org, signed in with GitHub). Follow **EDITOR_GUIDE.md** for the full steps and field list.

If you ever need to write an article file by hand, copy this into a new file in `content/articles/` (use a short, lowercase, hyphenated file name):

```
---
title: "Headline, under 80 characters"
category: "News & Policy"
volume: "Vol. 1 - Autumn 2026"
date: 2026-12-01
author: "Full Name"
authorBio: "MSc Global Health '28"
published: true
coverStory: false
coverImage: "/images/your-image.jpg"
imageCredit: "Photo: Name"
excerpt: "One or two sentences, under 200 characters."
readTime: 5
---

Article text goes here. Use ## for section headings.
```

Category must be exactly one of: News & Policy, Research & Data, Global Perspectives, Career & Alumni, Campus Life, Op-Ed.

**Images:** JPG or PNG, landscape 16:9 (about 1200 × 675 px) for covers, under 2 MB. Put them in `public/images/` and refer to them as `/images/file-name.jpg`.

**Drafts:** set `published: false`. The article stays hidden until you set it back to `true`.

---

## 4. How to update the Team and the issue information

- **Team:** Pages CMS → Team Members. Set Display Order (1 = first).
- **Issue text** (utility bar, volume number, issue subtitle): Pages CMS → Magazine Settings. There are three separate fields, so update all three when a new issue starts.
- **New volume:** the volume label is currently set in code, in `content/articles/articles.11tydata.js` (the line that reads `volume: "Vol. 1 - Autumn 2026"`). Until that is changed to read from each article, a new volume needs that line edited. Ask the web editor to do this before the new volume starts.

---

## 5. How to check the site before it goes live

1. Open the **Cloudflare Pages** dashboard and confirm the latest build says "Success".
2. Open the live site and check the homepage, one article, the Archive and Our Team.
3. Check on a phone. The layout switches at 960 px and 640 px.

If the build fails, open the failed build log in Cloudflare. It usually names the file and line with the error. Do not publish on top of a failed build. Ask for help first.

---

## 6. Accounts and access

Do not rely on one student's personal login. Before handing over, make sure:

- The GitHub repository is owned by a shared organization or by the shared email account, with at least two admins.
- The Cloudflare account has at least two Super Administrators, using the shared email address.
- The domain (thedeterminant.se, or the workers.dev address until a domain is attached) is registered to the shared email.
- Pages CMS is connected through a GitHub account that has access to the repository.

Record the locations of these logins in a password manager shared with the editorial board. Do not write passwords in this file.

**Current state:** the repository is under a personal GitHub account and needs to be moved to an organization before the next handover.

---

## 7. A prompt for Claude

If you want to change the design or add a feature with Claude, paste this first, then your request:

> This is "The Determinant", a student magazine built with Eleventy 2.0.1 and Nunjucks templates, hosted on Cloudflare Pages. Do not change the routing, the file names in `content/articles/`, the data files in `data/`, or the CSS variables at the top of `styles.css`. Make only the changes I describe, and list every file you changed.

---

## 8. Known issues to fix

Update this list when an item is fixed or a new one is found.

- **Placeholder article text:** all 21 articles in `content/articles/` still have "Lorem ipsum" body text. Replace it with the real article before launch.
- **Volume label is set in code:** `content/articles/articles.11tydata.js` gives every article `Vol. 1 - Autumn 2026`. Remove that default so each article's Volume field in Pages CMS decides its volume.
- **Repository owner:** the repository sits under a personal GitHub account. Move it to a shared organization.
- **Clutter in the repository root:** `ecosgp-logo-masthead.zip` and `read-next.zip` are not used by the site. Delete them or move them out of the repository.
- **Missing default cover image:** `defaultCoverImage` in Magazine Settings is blank, and only two images exist in `public/images/`. Articles without a cover image may show no image. Upload a default and set it.
- **Subscribe form:** the footer shows a "coming soon" note. Set `subscribeFormUrl` in Magazine Settings, or remove the note.
- **Hardcoded contact address:** `editor@thedeterminant.se` appears in `_includes/base.njk` and `team.njk`. Change both places if the address changes.
- **Team photos:** all team members currently have no photo. Check how Our Team looks without photos before launch.
