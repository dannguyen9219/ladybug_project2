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
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

                    <link rel="stylesheet" href="/css/intro.css" />
                </head>

                <body>
                    <div id="intro">
                        <h2>Bug tracking for all your project needs</h2>
                    </div>
                    <div id="imglogo">
                        <img class="logo" src="./assets/ladybugLogo-BG.png" />
                    </div>
                    <div id="loginbtns">
                        <a href="/user/Signup"><button type="button" class="btn btn-light">Sign Up</button></a>
                        <a href="/user/Login"><button type="button" class="btn btn-light">Login</button></a>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </body>
            </html>
        )
    }
};



module.exports = Index;