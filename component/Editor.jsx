import React, { useState } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import github from 'prism-react-renderer/themes/github';

const hookScope = {
    useState
}

const Editor = ({ code, noInline }) => {
    return (
        <div>
            <LiveProvider code={code}
                noInline={noInline}
                scope={hookScope}
                theme={github}>
                <LiveEditor disabled={true} />
                <LiveError />
                <div style={{ background: 'lightblue', marginBottom: 20, padding: '20px' }}>
                    <LivePreview />
                </div>

            </LiveProvider>
        </div>
    )
}

Editor.defaultProps = {
    code: '()=>(<span>:)</span>)',
    onInline: false
}

export default Editor