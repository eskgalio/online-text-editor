const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const toolbarButtons = document.querySelectorAll('.toolbar button');

function renderMarkdown(text) {
    // Simple markdown parsing (bold, italic, blockquote, link, and code)
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')   // Bold
        .replace(/_(.*?)_/g, '<em>$1</em>')                 // Italic
        .replace(/`(.*?)`/g, '<code>$1</code>')             // Inline code
        .replace(/\>\s(.*?)\n/g, '<blockquote>$1</blockquote>')  // Blockquote
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>'); // Link
}

function updatePreview() {
    const markdownText = editor.value;
    const htmlContent = renderMarkdown(markdownText);
    preview.innerHTML = htmlContent;
}

function insertMarkdown(e) {
    const markdown = e.target.getAttribute('data-markdown');
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.slice(start, end);

    // Insert markdown around the selected text
    editor.setRangeText(markdown.replace(/(.*?)(\1*)/, `$1${selectedText}$2`), start, end, 'select');
    updatePreview();
}

editor.addEventListener('input', updatePreview);
toolbarButtons.forEach(button => button.addEventListener('click', insertMarkdown));

// Initialize preview on page load
updatePreview();
