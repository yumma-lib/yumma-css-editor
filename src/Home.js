import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';

const Home = () => {
    const [code, setCode] = useState('');

    useEffect(() => {
        const fetchModel = async () => {
            try {
                const response = await fetch('/Model.html');
                const model = await response.text();
                setCode(model);
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
        <div className="interface">
            <div className="code-editor">
                <CodeEditor code={code} onChange={onChange} />
            </div>
            <div className="code-preview">
                <CodePreview html={code} />
            </div>
        </div>
    );
};

export default Home;
