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

const jsx = (
    <div>
        <Header>
        </Header>
        <Action>
        </Action>
    </div>
)