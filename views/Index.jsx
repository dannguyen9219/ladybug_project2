const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return(
            <html lang="en">
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>LadyBug - Bug Tracker App</title>
                    <link rel="stylesheet" />
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossOrigin="anonymous"
                    ></script>

                    <link rel="stylesheet" href="/css/login.css" />
                </head>
                <div>
                    <h2>Welcome</h2>
                    <div>
                        <img class="logo" src="./assets/ladybugLogo-BG.png" />
                    </div>
                    <a href="/bugs/"><button>Enter LadyBug</button></a>
                </div>
                <div>
                    <a href="/user/Signup"><button>Signup</button></a>
                    <a href="/user/Login"><button>Login</button></a>
                </div>
            </html>
        )
    }
};



module.exports = Index;