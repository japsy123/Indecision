class IndecisionApp extends React.Component {

    render() {
        return (
            <div>
            <Header>
            </Header>
            <Action>
            </Action>
            <Options />
            <Addoptions />
            </div>          
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
            <h1>Indecision  </h1>
            <p>Put your hands in front of computer</p>
            </div>
        )
    }

}

class Action extends React.Component {

    render() {
        return (
            <div>
                <button> What should we do ?</button>
            </div>
        )
    }

}

class Options extends React.Component {
    
    render() {
        return (
            <div>
                <p> What are my options</p>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {

    render(){
        return (
            <div>
            <p>Option Component</p>
            </div>
        )
    }
}

class Addoptions extends React.Component {
    
    render() {
        return (
            <div>
                <p> What are my other options</p>
            </div>
        )
    }
}


ReactDOM.render(IndecisionApp,document.getElementById('app'))