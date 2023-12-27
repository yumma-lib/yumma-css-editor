import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange }) => {
    const handleEditorDidMount = (editor, monaco) => {
        monaco.editor.defineTheme('vortyx', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'tag', foreground: '#855fa8' },
                { token: 'attribute.name', foreground: '#a863a8' },
                { token: 'attribute.value', foreground: '#f4ebf3' },
                { token: 'string', foreground: '#f4ebf3' },
                { token: 'delimiter.angle', foreground: '#dbbcd6' },
                { token: 'delimiter.curly', foreground: '#dbbcd6' },
                { token: 'delimiter.square', foreground: '#dbbcd6' },
                { token: 'keyword', foreground: '#775271' },
                { token: 'number', foreground: '#775271' },
                { token: 'meta.tag', foreground: '#775271' },
                { token: 'meta.tag.custom', foreground: '#775271' },
                { token: 'meta.tag.doctype', foreground: '#775271' },
                { token: 'meta.tag.inline', foreground: '#775271' },
                { token: 'meta.tag.script', foreground: '#775271' },
                { token: 'meta.tag.style', foreground: '#775271' },
                { token: 'meta.tag.xml', foreground: '#775271' },
                { token: 'comment', foreground: '#696a72' },
            ],
            colors: {
                'editor.background': '#282a36',
                'editorSuggestWidget.background': '#282a36',
                'editorHoverWidget.background': '#282a36',
                'editorFindWidget.background': '#282a36',
                'editorFindWidget.input.background': '#282a36',
                'editor.foreground': '#dbbcd6',
                'editor.cursorColor': '#f4ebf3',
                'editor.lineHighlightBackground': '#20222b',
                'editor.selectionBackground': '#3e3f4a'
            },
        });
        
        monaco.editor.setTheme('vortyx');
    };

    return (
        <Editor
            height="100vh"
            language="html"
            value={code}
            options={{
                language: 'html',
                minimap: {
                    enabled: false
                }
            }}
            
            onChange={onChange}
            onMount={handleEditorDidMount}
        />
    );
};

export default CodeEditor;
