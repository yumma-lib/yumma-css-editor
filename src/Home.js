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
        monaco.editor.defineTheme("onyx", {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'comment', foreground: '#5C6370', fontStyle: 'italic' },
                { token: 'comment.js', foreground: '#8F93A2', fontStyle: 'bold' },
            ],
            colors: {
                'editor.background': '#282a36',
                'editorCursor.foreground': '#ffffff',
                'editor.lineHighlightBackground': '#222432',
                'editorLineNumber.foreground': '#dbdee1',
                'editor.foreground': '#dbdee1',
                'editor.selectionBackground': '#3d465b',
            },
        });
        monaco.editor.setTheme("onyx");
    }


    return (
        <div className="editor-container">
            <div className="editor-wrapper">
                <Editor
                    height="100vh"
                    language="html"
                    theme="onyx"
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
