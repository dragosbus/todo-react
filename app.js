class App extends React.Component {
    render() {
        return(
            <Header />
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>ToDo App</h1>
                <Form />
            </header>
        );
    }
}

class Form extends React.Component {
    render() {
        return(
            <form>
                <input type="text" className="form-value" ref={val=>this._taskValue = val}/>
                <input type="submit" className="form-submit"/>
            </form>
        );
    }
}

class Tasks extends React.Component {
    render() {
        return(
          <ul>
          
          </ul>  
        );
    }
}

class Task extends React.Component {
    render() {
        return(
            <li></li>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);