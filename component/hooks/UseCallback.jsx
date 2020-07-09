import React from 'react'
import Editor from '../Editor'

const code = `
    const App = () => {
        const [n, setN] = useState(0)
        const onClick = useMemo(() => console.log('click') ,[])
        return (
            <div>App 组件, n={n} 
                <button onClick={() => setN(n+1)}>n+1</button>
                <Child onClick={onClick}/>
            </div>
        )
    }
    const Child = React.memo(({ onClick }) => {
        return (
            <div>Child 组件，render 一个随机数: {Math.random()} <button onClick={onClick}>click</button></div>
        )
    })
    render(<App />)
`

const Demo = () => <Editor code={code} noInline={true}></Editor>

export default Demo