const React = require('react');
const DefaultLayout = require('../Default.jsx');


class Login extends React.Component {
    render() {
        return(
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/main.css" />
                    <link rel="stylesheet" href="/css/login.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                    <title>LadyBug | Bug Tracker</title>
                    <link rel="shortcut icon" href="/assets/ladybugLogo-plain-transparent.png"></link>
                </head>

                <body>
                    <header>
                        <div class="container-fluid" id="main-nav-bar">
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <ul class="nav justify-content-end">
                                    <li>
                                        <a class="navbar-brand" href="/bugs/">
                                        <img src="/assets/ladybugLogo-plain-transparent.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />Home</a>
                                    </li>
                                    <li>
                                        <a class="navbar-brand" href="/user/logout">Logout</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <div>
                        <form action="/user/login" method="POST">
                            <fieldset id="fieldset">
                                <legend>User Login</legend>
                                <div class="form-floating mb-3">
                                    <input name="username" type="username" class="form-control" id="floatingInput" placeholder="Username" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating">
                                    <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <input id="submitBtn" class="btn btn-light" type="submit" value="Login" />
                            </fieldset>
                        </form>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                
                </body>

            </html>
        )
    }
};



module.exports = Login;