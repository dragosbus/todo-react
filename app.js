class App extends React.Component {
    render() {
        return(
            <div className="app">
                <Header/>
                <Main />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>ToDo App</h1>
            </header>
        );
    }
}

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          id: 1
        };
        this.addTask = this.addTask.bind(this);
    }
    
    addTask(e) {
        e.preventDefault();
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
        let newTask = {
            id: this.state.id++,
            text: this._taskValue.value,
            date: {
                day: weekDays[new Date().getDay()],
                moment: new Date().toLocaleTimeString()
            }
        };
        this.setState(prevState=>{
           return{
               items: prevState.items.concat(newTask)
           }; 
        });
    }
    
    render() {
        return(
            <main>
                <form onSubmit = {this.addTask}>
                    <input type="text" className="form-value" ref={val=>this._taskValue = val}/>
                    <input type="submit" className="form-submit"/>
                </form>
                <Tasks items={this.state.items}/>
            </main>    
        );
    }
}

class Tasks extends React.Component {
    render() {
        return(
          <ul>
            {this.props.items.map((task, i)=><Task key={i} id={task.id} name={task.text} date={task.date}/>)}
          </ul>  
        );
    }
}

class Task extends React.Component {
    render() {
        return(
            <li className="task" id={this.props.id}>
                <div className="task-info">
                    <p className="task-id">{this.props.id}</p>
                    <p className="task-date-day">{this.props.date.day}</p>
                    <p className="task-date-momment">{this.props.date.moment}</p>
                </div>
                <p className="task-name">{this.props.name}</p>
            </li>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);