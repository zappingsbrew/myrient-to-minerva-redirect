# Myrient → Minerva Redirect

A simple Tampermonkey userscript that automatically redirects `myrient.erista.me/files/*` to `minerva-archive.org/browse/*`, preserving the full path and query.

---

## ⚠️ Note

This script is purely a URL redirect utility. It does not modify page content, inject elements, or collect any data. It only changes navigation from Myrient to Minerva Archive.

---

## ✨ Features

- Redirects all `myrient.erista.me/files/*` pages to `minerva-archive.org/browse/*`
- Preserves full directory structure, filenames, and query strings
- Works across all archive categories (No-Intro, Redump, TOSEC, etc.)
- Runs instantly on page load (no flicker)
- Lightweight and dependency-free

---

## 🧠 How It Works

The script detects any URL under:

```
https://myrient.erista.me/files/
```

and rewrites it into:

```
https://minerva-archive.org/browse/
```

Example:

```text
/files/No-Intro/Nintendo - Game Boy/
→ /browse/No-Intro/Nintendo - Game Boy/
```

---

## ⚙️ Installation

1. Install **Tampermonkey**:
   https://www.tampermonkey.net/

2. Install via one of the official pages:
   - https://greasyfork.org/en/scripts/582968-myrient-to-minerva-redirect
   - https://openuserjs.org/scripts/Zappingsbrew/Myrient_to_Minerva_Redirect

3. Or manually:
   - Copy the script from the repository
   - Paste into a new Tampermonkey script
   - Save and enable

---

## 🔗 Links

- GitHub: https://github.com/zappingsbrew/myrient-to-minerva-redirect
- Greasy Fork: https://greasyfork.org/en/scripts/582968-myrient-to-minerva-redirect
- OpenUserJS: https://openuserjs.org/scripts/Zappingsbrew/Myrient_to_Minerva_Redirect

---

## 🎨 Assets

The favicon used in this userscript is sourced from Minerva Archive and is hosted in this repository for userscript identification purposes (e.g. Tampermonkey icon display). It is used only for cosmetic identification and does not affect functionality.

Favicon source:
https://minerva-archive.org/assets/favicon.svg

---

## 🤖 Transparency & Credits

- **Userscript logic:** ChatGPT (GPT-5)
- **Publishing & maintenance:** Zappingsbrew
- **Documentation structure:** ChatGPT (GPT-5)

This script is purely a redirect utility and does not collect data, inject content, or modify page behavior beyond URL navigation.

---

## 🧾 License

This project is licensed under the [MIT License](https://github.com/zappingsbrew/myrient-to-minerva-redirect/blob/main/LICENSE).

© 2026 Zappingsbrew
