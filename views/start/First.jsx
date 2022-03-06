const React = require('react');
const DefaultLayout = require('../Default.jsx')

class First extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <h2>Welcome</h2>
                <div>
                    <img class="logo" src="./assets/ladybugLogo-BG.png" />
                </div>
                <a href="/bugs/"><button>Enter LadyBug</button></a>
            </DefaultLayout>
        )
    }
};



module.exports = First;