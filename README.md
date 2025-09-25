### Bureaucracy Toolbar Plugin for DokuWiki

The Bureaucracy Toolbar plugin enhances DokuWiki's [Bureaucracy plugin](https://www.dokuwiki.org/plugin:bureaucracy) by adding a simple toolbar above forms, allowing users to easily insert common Dokuwiki syntax (e.g., bold, italic, links) into textarea fields. This is particularly useful for forms with rich text inputs, such as those for creating pages, emails, or structured content.

#### Features
- **Buttons for Common Syntax**: Includes buttons for:
  - **Bold** (`**text**`)
  - *Italic* (`//text//`)
  - __Underline__ (`__text__`)
  - `Code` (`<code>text</code>`)
  - List Item (` * text`)
  - Link (`[[text]]`)
- **Smart Textarea Targeting**: When a button is clicked, the syntax is inserted into the currently focused textarea (or the last focused one) in the bureaucracy form. This supports forms with multiple textareas without always defaulting to the first.
- **Selection Handling**: If text is selected in the textarea, the syntax wraps around it. The cursor is then repositioned inside the inserted markup for easy editing.
- **Styling**: The toolbar has basic CSS for a clean, modern look (light gray background, rounded corners).

#### Installation
1. Download the plugin files (`syntax.php` and `script.js`).
2. Place them in your DokuWiki's plugin directory: `lib/plugins/bureaucracytoolbar/`.
3. Ensure the Bureaucracy plugin is already installed and enabled, as this toolbar depends on it.
4. Refresh your DokuWiki plugin manager to activate it.

#### Usage
To add the toolbar to a page with a bureaucracy form:
- Insert the syntax `<bureaucracytoolbar>` anywhere on the page (typically above the form definition for better placement).
