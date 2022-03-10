const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>LadyBug | Bug Tracker</title>
                    <link rel="shortcut icon" href="/assets/ladybugLogo-plain-transparent.png"></link>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                    <link rel="stylesheet" href="/css/main.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                </head>

                <body>
                    <header>
                        <h1> LadyBug - A Bug Tracker App </h1>
                        <div>
                            <nav id="nav-btns">
                                <ul class="nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/bugs/"><button type="button" class="btn btn-outline-light">Home</button></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/bugs/New"><button type="button" class="btn btn-outline-light">New Ticket</button></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/user/logout"><button type="button" class="btn btn-outline-light">Logout</button></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <main>
                        <div id="propsChildren">
                            {this.props.children}
                        </div>
                    </main>

                    <footer>

                    </footer>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </body>

            </html>
        )
    }
};


module.exports = DefaultLayout;