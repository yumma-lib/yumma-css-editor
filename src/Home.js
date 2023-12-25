import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

const Home = () => {
    const yummacss = '<link rel="stylesheet" href="https://unpkg.com/yummacss/public/css/yumma.min.css" crossorigin="anonymous">';
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await fetch('/Model.html');
                const Model = await response.text();
                setCode(Model);
            } catch (err) {
                console.error('ERROR:', err.message);
            }
        };

        fetchModel();
    }, []);

    const onChange = (newValue, e) => {
        setCode(newValue);
    };

    function handleEditorDidMount(editor, monaco) {
        
        monaco.editor.defineTheme('vortyxTheme', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'tag', foreground: '#855fa8' },
                { token: 'attribute.name', foreground: '#a863a8' },
                { token: 'attribute.value', foreground: '#ffffff' },
                { token: 'string', foreground: '#ffffff' },
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
                'editor.cursorColor': '#ffffff',
                'editor.lineHighlightBackground': '#20222b',
                'editor.selectionBackground': '#3e3f4a'
            },
        });
        monaco.editor.setTheme('vortyxTheme');
    }

    return (
        <div className="editor-container">
            <div className="editor-wrapper">
                <Editor
                    height="100vh"
                    language="html"
                    value={code}
                    options={{
                        language: 'html',
                        fontFamily: 'Consolas !important',
                        minimap: {
                            enabled: false
                        }
                    }}
                    onChange={onChange}
                    onMount={handleEditorDidMount}
                />
            </div>
            <div className="preview-container">
                <iframe
                    className='h-full w-full'
                    title="Preview"
                    srcDoc={`<!DOCTYPE html><html><head>${yummacss}</head><body>${code}</body></html>`}
                    frameBorder='0'
                />
            </div>
        </div>
    );
};

export default Home;
