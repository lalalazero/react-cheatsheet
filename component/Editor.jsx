import React, { useState } from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import github from 'prism-react-renderer/themes/github';


const Editor = ({ code }) => {
    return (
        <div>
            <LiveProvider code={code} scope={{ useState }} theme={github}>
                <LiveEditor disabled={true}/>
                <LiveError />
                <LivePreview />
            </LiveProvider>
        </div>
    )
}

Editor.defaultProps = {
    code: '()=>(<span>:)</span>)'
}

export default Editor