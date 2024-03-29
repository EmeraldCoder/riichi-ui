# Riichi UI CSS

CSS library designed to facilitate the creation of riichi mahjong-related applications. This library offers a collection of CSS styles without any dependency on JavaScript, providing a foundational layer for building interfaces and UI components.

## Purpose

This library aims to serve as a fundamental, low-level resource, leveraging only CSS and HTML. However, for more advanced and comprehensive functionality, we highly recommend exploring our more feature-rich library:
- <a href="https://github.com/EmeraldCoder/riichi-ui/tree/main/packages/riichi-ui-vue">Riichi UI Vue</a>

## Primary Use-cases
- **Foundation for Higher-Level UI Components:** Ideal for establishing a groundwork for a more advanced UI component library utilizing sophisticated JavaScript frameworks.
- **HTML/CSS-Only Projects:** Suited for projects where JavaScript is not utilized or required.

## Getting Started

### Installation

Install the library via your preferred package manager (NPM, Yarn, PNPM, etc...):

```bash
npm install @emeraldcoder/riichi-ui-css
```

### Implementation

Reference the library's CSS file within your page or component:

```html
<link rel="stylesheet" href="@emeraldcoder/riichi-ui-css/build/riichi-ui.min.css">
```

Utilize CSS classes to incorporate the library's components:

```html
<span class="riichi-tile">
  <span class="riichi-tile-icon riichi-tile-icon--1m"></span>
</span>
```

## Caution

**Please Note:** This library is currently in progress and subject to changes without prior notice. Use it at your discretion and understanding.

## Credits

The tile images utilized within this library are sourced from <a href="https://github.com/FluffyStuff/riichi-mahjong-tiles" target="_blank">https://github.com/FluffyStuff/riichi-mahjong-tiles</a>

## Additional Resources

- <a href="https://riichi-ui-css.phil.moe" target="_blank">Documentation</a>
- <a href="https://github.com/EmeraldCoder/riichi-ui/tree/main/packages/riichi-ui-css" target="_blank">Github Repository</a>
- <a href="https://www.npmjs.com/package/@emeraldcoder/riichi-ui-css" target="_blank">NPM Package</a>

Feel free to explore and contribute to our repository, and don't hesitate to reach out with any queries or suggestions.