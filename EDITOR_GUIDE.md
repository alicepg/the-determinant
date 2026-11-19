# The Determinant — Editor Guide

Welcome to the editorial team! This guide explains how to publish articles and update the magazine using **Pages CMS** — no coding required.

---

## Getting Started

1. Go to [pagescms.org](https://pagescms.org) and sign in with your **GitHub account**.
2. Open the **EcoSGP / the-determinant** repository.
3. You'll see three sections in the sidebar: **Articles**, **Team Members**, and **Magazine Settings**.

---

## Publishing an Article

### Step 1 — Create a new article

1. Click **Articles** → **New Article**.
2. Fill in the fields (see field reference below).
3. Set **Published** to **ON** when the article is ready to go live. Leave it **OFF** to save as a draft.

### Step 2 — Upload a cover image (optional)

1. In the **Cover Image** field, click **Upload**.
2. Choose a JPG or PNG from your computer (landscape orientation works best — 1200 × 675 px or similar 16:9 ratio).
3. Add a caption in **Image Credit** (e.g. *Photo: Alice Ng*).

If you leave Cover Image blank, the site will use the magazine's default image (set in Magazine Settings).

### Step 3 — Write the article body

The **Article Body** field is a rich-text editor. You can:
- Use the toolbar for headings, bold, italic, and links.
- Paste from Google Docs — formatting is preserved.
- Add pull quotes using `>` blockquote syntax.

### Step 4 — Save and publish

Click **Save**. If **Published** is ON, the article will appear on the site within a few minutes after the build finishes on Cloudflare Pages.

---

## Field Reference

| Field | Required | Notes |
|---|---|---|
| **Title** | Yes | Keep it under 80 characters for best display on cards |
| **Category** | Yes | Choose one from the dropdown — do not type a custom value |
| **Volume** | Yes | Use the current volume string, e.g. `Vol. 1 - Autumn 2026` |
| **Publication Date** | Yes | The date that appears on the article |
| **Author Name** | Yes | Full name as it should appear on the article |
| **Author Bio** | Yes | Short line, e.g. `MSc Global Health '28` |
| **Published** | Yes | Toggle ON to publish, OFF to save as draft |
| **Pin as Cover Story** | No | Turn ON to force this article as the homepage hero. Only one article should have this on at a time. |
| **Cover Image** | No | Landscape image, 16:9 ratio. Leave blank to use the default. |
| **Image Credit** | No | Photographer or source credit |
| **Excerpt** | Yes | 1–2 sentences shown on cards and in the article subtitle. Keep it under 200 characters. |
| **Read Time** | No | Estimated minutes, e.g. `4` |
| **Sources** | No | See "Adding Sources / Citations" below |
| **Article Body** | Yes | The full article text |

---

## Adding Sources / Citations

If your article cites sources, you can list them in the **Sources** field and they'll appear as a numbered "References" list at the end of the article, formatted in APA style automatically — you don't need to format the citation yourself.

1. Click **Add Source** (you can add as many as you need).
2. Fill in:
   - **Author(s)** — in APA order, e.g. `Andersson, E., & Berg, S.` or an organization name like `World Health Organization`
   - **Year** — e.g. `2026`, or `n.d.` if there's no date
   - **Title** — the title of the article, report or page you're citing
   - **Publication / Website / Journal name**
   - **Link** — optional, but recommended so readers can check the source
3. The site builds the citation from these fields in the order: Author(s) (Year). Title. *Publication*. Link.
4. Sources are optional — articles without any just won't show a References section.

---

## Saving a Draft

Set **Published** to **OFF** before saving. The article will not appear on the site. You can come back later, turn **Published** ON, and save again to publish it.

---

## Editing an Existing Article

1. Click **Articles** in the sidebar.
2. Find the article by title (the list is sorted by date, newest first).
3. Click the article to open it.
4. Make your changes and click **Save**.

---

## Updating Team Members

1. Click **Team Members** in the sidebar.
2. Click an existing member to edit, or **Add Member** to add a new one.
3. Fields: **Full Name**, **Role/Title**, **Programme & Year**, **Photo**, **Short Bio**, **Display Order** (1 = appears first).
4. Click **Save**.

---

## Magazine Settings

Click **Magazine Settings** to update:

- **Tagline** — the line under the masthead
- **Utility Bar Text** — the small text at the very top of every page
- **Issue Subtitle** — displayed next to the volume number
- **Editorial Note** — appears on the homepage
- **Default Cover Image** — fallback image for articles without a cover photo
- **Subscribe Form URL** — if you set up a Mailchimp or similar form, paste the link here

---

## Categories

The five article categories are fixed. Always choose from this list:

- **News & Policy**
- **Research & Data**
- **Global Perspectives**
- **Career & Alumni**
- **Campus Life**
- **Op-Ed**

If you think a new category is needed, contact the web editor — it requires a code change.

---

## Image Guidelines

- **Format**: JPG or PNG
- **Cover images**: 1200 × 675 px (16:9) recommended
- **Team photos**: Square crop, at least 400 × 400 px
- **File size**: Keep under 2 MB per image for fast loading
- **Consent**: Make sure you have permission to publish photos of people

---

## Frequently Asked Questions

**How long does publishing take?**
After you save a published article, Cloudflare Pages runs a build that takes about 1–2 minutes. The live site will update automatically.

**I saved an article but it's not showing up.**
Check that **Published** is set to ON, not OFF. Also wait 2–3 minutes for the build to finish.

**Can I delete an article?**
Yes — open the article in Pages CMS and click the delete icon. This permanently removes it from the site. Consider unpublishing (setting Published to OFF) instead if you might need it later.

**Can two people edit at the same time?**
Avoid editing the same article simultaneously. Changes are saved to GitHub and the second save may overwrite the first.

**Where are images stored?**
Images you upload go into the `public/images` folder in the GitHub repository and are served from the site at `/images/[filename]`.

---

## Need Help?

Contact the web editor or open an issue in the GitHub repository.
