import React from 'react'
import Editor from '../Editor'

const code01 = `
    const x = () => {
        console.log('执行x re-render')
        render(<Foo />)
    }
    let _state
    const myUseState = (initState) => {
        // state 写在这里每次x() 会执行 re-render，导致这里重复初始化, 所以 _state 的声明要放在外面
        // let state = initState; console.log('重置 state', _state)
        _state = _state === undefined ? initState : _state
        console.log(_state)
        
        function setState(newState){
            _state = newState
            console.log('mySetState 调用了', _state)
            x() // 为了模拟 re-render
        }
        return [_state, setState]
    }
    const Foo = () => {
        const [count, setCount] = useState(0)
        const [count2, setCount2] = myUseState(0)
        return <div>
            count: {count} 
            <button onClick={() => setCount(count+1)}>+1</button>
            <p> --- myUseState --- </p>
            count2: {count2}
            <button onClick={() => setCount2(count2+1)}>+1</button>
        </div>
    }
    render(<Foo />)
`

const MyUseStateDemo01 = () => <Editor code={code01} noInline={true} />

const code02 = `
    let _state = []
    let index = 0
    const x = () => {
        index = 0
        console.log('执行x re-render')
        render(<Foo />)
    }
    const myUseState = (initState) => {
        let currentIndex = index
        _state[currentIndex] = _state[currentIndex] === undefined ? initState : _state[currentIndex]
        console.log('_state', _state)
        console.log('currentIndex', currentIndex)
        console.log('index', index)
        function setState(newState){
            _state[currentIndex] = newState
            console.log('setState 调用了', _state[currentIndex])
            x() // 为了模拟 re-render
        }
        index++
        return [_state[currentIndex], setState]
    }
    const Foo = () => {
        const [count1, setCount1] = myUseState(0)
        const [count2, setCount2] = myUseState(0)
        return <div>
            <p> --- myUseState --- </p>
            count1: {count1}
            <button onClick={() => setCount1(count1+1)}>+1</button>
            <br />
            count2: {count2}
            <button onClick={() => setCount2(count2+1)}>+1</button>
        </div>
    }
    render(<Foo />)
`

const MyUseStateDemo02 = () => <Editor code={code02} noInline={true} />

export {
    MyUseStateDemo01,
    MyUseStateDemo02
}