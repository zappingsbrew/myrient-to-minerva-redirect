# Myrient → Minerva Redirect

A simple Tampermonkey userscript that automatically redirects `myrient.erista.me/files/*` to `minerva-archive.org/browse/*`, preserving the full path and query.

---

## ⚠️ Note

This script is purely cosmetic in behavior (URL redirect only) and does not modify any page content. It simply forwards navigation to a mirror site.

---

## ✨ Features

- Redirects all `myrient.erista.me/files/*` pages to `minerva-archive.org/browse/*`
- Preserves full directory structure and file paths
- Works across all No-Intro, Redump, TOSEC, and other archives
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

Example transformation:

```text
/files/No-Intro/Nintendo - Game Boy/
→ /browse/No-Intro/Nintendo - Game Boy/
```

---

## ⚙️ Installation

1. Install **Tampermonkey** in your browser:
   - https://www.tampermonkey.net/

2. Open the userscript file:
   `myrient-to-minerva-redirect.user.js`

3. Click **Install** in Tampermonkey.

4. Visit any Myrient page under `/files/` — it will automatically redirect.

---

## 🔗 Links

- [GitHub](https://github.com/zappingsbrew/myrient-to-minerva-redirect) – Repository and source code  
- (Optional) Greasy Fork – *Add later if published*  
- (Optional) OpenUserJS – *Add later if published*

---

## 🤖 Transparency & Credits

This README and userscript structure follow the same format used in other Zappingsbrew Tampermonkey projects.

- **Userscript logic:** ChatGPT (GPT-5)  
- **Project publishing & ownership:** Zappingsbrew  
- **Documentation formatting:** ChatGPT (GPT-5)

This script is purely a URL redirect utility and does not collect any data or interact with page content.

---

## 🧾 License

This project is licensed under the [MIT License](https://github.com/zappingsbrew/myrient-to-minerva-redirect/blob/main/LICENSE).

© 2026 **Zappingsbrew**
