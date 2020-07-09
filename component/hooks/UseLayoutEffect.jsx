import React from 'react'
import Editor from '../Editor'

const code = `() => {
    useEffect(() => {
        console.log('useEffect 执行')
    })
    useLayoutEffect(() => {
        console.log('useLayoutEffect 执行')
        document.querySelector('#demo1').innerText = 'hello~~world'
    })
    return (
        <div id='demo1'>hello</div>
    )
}`

const Demo = () => <Editor code={code}></Editor>

export default Demo
