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
        <div className="interface d-f h-1/1">
            <div className="code-editor f-1">
                <CodeEditor code={code} onChange={onChange} />
            </div>
            <div className="code-preview f-1 ovf-auto">
                <CodePreview html={code} />
            </div>
        </div>
    );
};

export default Home;
