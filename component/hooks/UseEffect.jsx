import React from 'react'
import Editor from '../Editor'

const code = `<span>use effect</span>`

const BasicEffectCode = ` () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = 'You clicked ' + count + ' times'
    })

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count+1)}>+1</button>
        </div>
    )
}
`
const BasicEffect = () => <Editor code={BasicEffectCode}></Editor>

export {
    BasicEffect
}
export default function () {
    return <Editor code={code} />
}