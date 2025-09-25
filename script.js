/* DokuWiki Bureaucracy Toolbar Plugin */
var bureaucracyToolbar = {
    lastTextarea: null,
    addSyntax: function(type) {
        var textareas = document.querySelectorAll('textarea[name^="bureaucracy["]');
        if (!textareas.length) {
            console.error('No bureaucracy textareas found!');
            return;
        }
        var textarea;
        var active = document.activeElement;
        if (active.tagName === 'TEXTAREA' && active.name.startsWith('bureaucracy[')) {
            textarea = active;
        } else {
            textarea = bureaucracyToolbar.lastTextarea || textareas[0];
        }
        if (!textarea) {
            console.error('No active bureaucracy textarea found!');
            return;
        }
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = '';
        switch(type) {
            case 'bold':
                newText = '**' + selectedText + '**';
                break;
            case 'italic':
                newText = '//' + selectedText + '//';
                break;
            case 'underscore':
                newText = '__' + selectedText + '__';
                break;
            case 'code':
                newText = '<code>' + selectedText + '</code>';
                break;
            case 'list':
                newText = ' * ' + selectedText;
                break;
            case 'link':
                newText = '[[' + selectedText + ']]';
                break;
            default:
                return;
        }
        var before = textarea.value.substring(0, start);
        var after = textarea.value.substring(end);
        textarea.value = before + newText + after;
        var offsetStart = (type === 'list' ? 3 : type === 'code' ? 6 : 2);
        textarea.setSelectionRange(start + offsetStart, start + offsetStart + (end - start));
        textarea.focus();
    },
};
// Initialize lastTextarea tracking
(function() {
    var textareas = document.querySelectorAll('textarea[name^="bureaucracy["]');

    function handleFocus() {
        bureaucracyToolbar.lastTextarea = this;
    }

    for (var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener('focus', handleFocus);
    }

    // Check for initially focused textarea
    var active = document.activeElement;
    if (active.tagName === 'TEXTAREA' && active.name.startsWith('bureaucracy[')) {
        bureaucracyToolbar.lastTextarea = active;
    }
})();

// Expose insertImage globally for the media manager callback
window.bureaucracyToolbarInsertImage = bureaucracyToolbar.insertImage;
// console.log('Bureaucracy Toolbar script loaded');
var textareas = document.querySelectorAll('textarea[name^="bureaucracy["]');
// console.log('Found textareas:', textareas.length);
