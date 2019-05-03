class IndecisionApp extends React.Component {

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in hand of computer";
        const options = ["thing one", "thing two", "thing three"];
        return (
            <div>
            <Header title={title} subTitle={subTitle} >
            </Header>
            <Action>
            </Action>
            <Options  options= {options}/>
            <Addoptions />
            </div>          
        )
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
            <h1>Indecision {this.props.subTitle}</h1>
            <p>Put your hands in front of computer</p>
            </div>
        )
    }

}

class Action extends React.Component {

    handle() {
        alert("Clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.handle}> What should we do ?</button>
            </div>
        )
    }

}

class Options extends React.Component {
    
    render() {
        return (
            <div>
                <p> What are my options {this.props.options.length}</p>
                {this.props.options.map((option)=> 
                     <Option key={option} optionText={option} />)}
            </div>
        )
    }
}

class Option extends React.Component {

    render(){
        return (
            <div>
            {this.props.optionText}
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


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))