import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

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

    return (
        <div className="editor-container">
            <div className="editor-wrapper">
                <CodeEditor code={code} onChange={onChange} />
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
