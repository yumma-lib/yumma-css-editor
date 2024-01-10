import React from 'react';
import DOMPurify from 'dompurify';

const CodePreview = ({ html }) => {
    const sanitize = DOMPurify.sanitize(html);

    return <div dangerouslySetInnerHTML={{ __html: sanitize }} />;
};

export default CodePreview;