import React from 'react'
import Editor from '../Editor'

const ContextCode = `
    const ThemeContext = React.createContext()

    const App = () => {
        const [theme, setTheme] = useState('light')
        return <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="app">
                App 组件, theme = {theme}
                <Foo />
                <Bar />
            </div>
        </ThemeContext.Provider>
    }
        
    const Foo = () => {
        const { theme, setTheme } = useContext(ThemeContext)
        return (
            <div>Foo 组件, theme = {theme} <button onClick={() => setTheme('dark')}>dark</button></div>
        )
    }

    const Bar = () => {
        const { theme, setTheme } = useContext(ThemeContext)
        return (
            <div>Bar 组件, theme = {theme} <button onClick={() => setTheme('light')}>light</button></div>
        )
    }

    render(<App />)      
    
`

const ContextDemo = () => <Editor code={ContextCode} noInline={true} ></Editor>

const ContextCode2 = `
    const Context = React.createContext()
    let user = { name: 'jack', age: 12, fileList: [ { name: 'file1', url: 'xxxx' }] }
    let change = () => {
        user.name = 'mark'
        user.age = 22
        console.log('change user')
    }
    const App = () => <Context.Provider value={{ user, change}}>
        <div>
            <Foo />
            <Bar />
        </div>
    </Context.Provider>

    const Foo = () => {
        let { user, change } = useContext(Context)
        const [_, render] = useState()
        const { name, age, fileList } = user
        console.log('foo', user)
        const onClick = () => {
            change()
            // user.name = 'lily'
            
            render({})
        }
        return (
            <div>   
                Foo 组件
                <div>{ user.name } { user.age} { user.fileList.map(item => item.name + ' ' + item.url) }</div>
                <button onClick={onClick}>change</button>
            </div>
            
        )
    }
    const Bar = () => {
        const { user } = useContext(Context)
        const { name, age, fileList } = user
        console.log('bar', user)
        return (
            <div>Bar 组件， { user.name } { user.age} { user.fileList.map(item => item.name + ' ' + item.url) }</div>
        )
    }
    render(<App />)

`
const ContextDemo2 = () => <Editor code={ContextCode2} noInline={true}></Editor>

export {
    ContextDemo,
    ContextDemo2
}

export default function() {
    return () => <Editor></Editor>
}