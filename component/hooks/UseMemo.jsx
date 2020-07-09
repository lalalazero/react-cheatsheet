import React from 'react'
import Editor from '../Editor'

const withoutMemoCode = `
    const App = () => {
        const [n, setN] = useState(0)
        return (
            <div>App 组件, n={n} 
                <button onClick={() => setN(n+1)}>n+1</button>
                <Child />
            </div>
        )
    }
    const Child = () => {
        return (
            <div>Child 组件，render 一个随机数: {Math.random()}</div>
        )
    }
    render(<App />)
`

const WithoutMemo = () => <Editor code={withoutMemoCode} noInline={true}></Editor>

const withMemoCode = `
    const App = () => {
        const [n, setN] = useState(0)
        const [m, setM] = useState(0)
        return (
            <div>App 组件, n={n} 
                <button onClick={() => setN(n+1)}>n+1</button>
                <button onClick={() => setM(m+1)}>m+1</button>
                <Child m={m}/>
            </div>
        )
    }
    const Child = React.memo(({m}) => {
        return (
            <div>Child 组件: m = {m}，render 一个随机数: {Math.random()}</div>
        )
    })
    render(<App />)
`

const WithMemo = () => <Editor code={withMemoCode} noInline={true}></Editor>

const withClickFuncCode = `
    const App = () => {
        const [n, setN] = useState(0)
        const onClick = () => {
            console.log('click')
        }
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

const WithClickFunc = () => <Editor code={withClickFuncCode} noInline={true}></Editor>

const withUseMemoCode = `
    const App = () => {
        const [n, setN] = useState(0)
        const onClick = useMemo(() => {
            return () => {
                console.log('click')
            }
        },[])
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

const WithUseMemo = () => <Editor code={withUseMemoCode} noInline={true}></Editor>

export {
    WithoutMemo,
    WithMemo,
    WithClickFunc,
    WithUseMemo
}