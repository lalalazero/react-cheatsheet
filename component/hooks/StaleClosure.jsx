import React from 'react'
import Editor from '../Editor'

const Demo = `() => {
    const [count, setCount] = useState(0)
    const log = () => setTimeout(() => console.log('log - ', count), 3000)
    return (
        <div>
            <p>count: {count} </p>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={log}>log</button>
        </div>
    )
}`

export default function () {
    return <Editor code={Demo}></Editor>
}