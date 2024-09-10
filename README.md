# 📝 Rich Text Editor with Markdown Support

This project is a simple **Rich Text Editor** that supports basic **Markdown** formatting. It allows users to type and format text in Markdown, with a live preview of how the formatted content will appear in HTML. The editor features common formatting options such as bold, italic, blockquotes, inline code, and hyperlinks.

## 🚀 Features
- **Live Preview**: View real-time HTML rendering as you type in Markdown.
- **Markdown Buttons**: Easily insert bold, italic, blockquote, inline code, and links using toolbar buttons.
- **Customizable Styling**: Responsive and clean interface, styled with modern CSS.
- **User-Friendly Interface**: Simple and intuitive layout, ideal for quick note-taking and text formatting.

## 🛠️ Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout (responsive design, hover effects, and clean typography).
- **JavaScript**: Dynamic behavior for markdown conversion and live preview.

## 📂 Project Structure
- `index.html`: Contains the structure of the web application and links the necessary CSS and JS files.
- `styles.css`: Styles the text editor and toolbar, providing a modern and user-friendly design.
- `script.js`: Handles the markdown parsing and updates the preview in real-time.

## 🔍 Key Code Snippets

### Markdown Parsing (JavaScript)
```js
function renderMarkdown(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')   // Bold
        .replace(/_(.*?)_/g, '<em>$1</em>')                 // Italic
        .replace(/`(.*?)`/g, '<code>$1</code>')             // Inline code
        .replace(/\>\s(.*?)\n/g, '<blockquote>$1</blockquote>')  // Blockquote
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'); // Link
}
```
This function parses the markdown syntax and converts it into HTML, making it possible to preview formatted text as it is typed.

### Toolbar Buttons (HTML)
```html
<div class="toolbar">
    <button data-markdown="**bold**">Bold</button>
    <button data-markdown="_italic_">Italic</button>
    <button data-markdown="`code`">Code</button>
    <button data-markdown="> blockquote">Blockquote</button>
    <button data-markdown="[link](http://example.com)">Link</button>
</div>
```
The toolbar provides buttons for easy insertion of markdown syntax without needing to type it manually.

## 📸 Preview

![Editor Screenshot](path_to_screenshot)

## 🧑‍💻 Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/rich-text-editor.git
   ```
2. **Open the project**: 
   Simply open the `index.html` file in any browser to start using the rich text editor.

## 🤝 Contributions

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README should provide a good first impression of your project on GitHub. You can add a screenshot to showcase the interface and update the `git clone` URL with your repository link after uploading the project.
