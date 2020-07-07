import React from 'react'
import Editor from '../Editor'


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

const MultipleEffectCode = `() => {
    useEffect(() => {
        console.log('useEffect-1 call')
    })

    useEffect(() => {
        console.log('useEffect-2 call')
    })
    return '打开 console 查看打印结果'
}`

const MultipleEffect = () => <Editor code={MultipleEffectCode} />

const CleanupEffectCode = `
    const Foo = () => {
        useEffect(() => {
            const clicked = () => { console.log('document clicked') }
            console.log('add docment click new handler')
            window.addEventListener('click', clicked)
            return () => {
                console.log('clean previous effect')
                window.removeEventListener('click', clicked)
            }
        })
        return <p>Foo: click on document to see console.log message.</p>
    }
    
    
    const App = () => {
        console.log('App will render...')
        const [_, setState] = useState()
        const onClick = () => {
            console.log('button clicked')
            setState({})
        }
        return (
            <div>
                <Foo />
                <button onClick={onClick}>re-render App</button> -- > re-render App will unmount Foo
            </div>
        )
    }
    
    render(<App />)
`

const CleanupEffect = () => <Editor code={CleanupEffectCode} noInline={true} />
const EmptyDependencyCode = `
    const Foo = () => {
        const [count, setCount] = useState(0)
        console.log('Foo render')
        useEffect(() => {
            console.log('after-render with [] dependency, 约等于 componentDidMount 钩子')
        },[])
        return <div>
            <p>Foo 组件，+1 不会执行 useEffect </p>
            <span>count {count}</span><button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    }
    const App = () => {
        const [count, setCount] = useState(0)
        const [visible, setVisible] = useState(true)
        return <div>
            App组件, +1 会导致 Foo 重新执行，但是 useEffect 不会，因为它依赖为空数组
            <p>
                count: {count}<button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setVisible(!visible)}>mount or unmount Foo</button>
            </p>
            { visible && <Foo /> }
        </div>
    }

    render(<App />)
`
const EmptyDependency = () => <Editor code={EmptyDependencyCode} noInline={true}></Editor>
export {
    BasicEffect,
    MultipleEffect,
    CleanupEffect,
    EmptyDependency
}
