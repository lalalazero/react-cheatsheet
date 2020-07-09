import React from 'react'
import Editor from '../Editor'

const ContextCode = `
    const ThemeContext = React.createContext()
    const App = () => {
        const [theme, setTheme] = useState('light')
        return <ThemeContext.Provider value={{ theme, setTheme, otherValue: 'otherValue' }}>
            <div className="app">
                App 组件, theme = {theme}
                <Foo />
                <Bar />
                <Other />
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
    const Other = () => {
        const { otherValue } = useContext(ThemeContext)
        console.log('Other render~')
        return <div>Other 组件, { otherValue } 每次 render 一个随机数：{ Math.random()} </div>
    }
    render(<App />)         
`
const ContextDemo = () => <Editor code={ContextCode} noInline={true} ></Editor>

const multipleContextCode = `
    const ThemeContext =  React.createContext()
    const UserContext = React.createContext()
    const App = () => (
        <ThemeContext.Provider value={'light'}>
            <UserContext.Provider value={{ name: 'jack'}}>
                <Foo />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
    const Foo = () => (
        <ThemeContext.Consumer>
            {
                theme => (
                    <UserContext.Consumer>
                        {
                            user => <div>theme: {theme}; user: {user.name}</div>
                        }
                    </UserContext.Consumer>
                )
            }
        </ThemeContext.Consumer>
    )
    render(<App />)
`

const MultipleContext = () => <Editor code={multipleContextCode} noInline={true}></Editor>

export {
    ContextDemo,
    MultipleContext
}
