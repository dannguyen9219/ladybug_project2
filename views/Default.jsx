const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
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

                    <link rel="stylesheet" href="/css/main.css" />
                </head>

                <body>
                    <header>
                        <h1> LadyBug - A Bug Tracker App </h1>
                        <div>
                            <nav id="nav-btns">
                                <a href="/bugs/">Home</a>
                                <a href="/bugs/New">New Ticket</a>
                                <a>Sign Out</a>
                            </nav>
                        </div>
                    </header>

                    <main>
                        {this.props.children}
                    </main>

                    <footer>

                    </footer>
                </body>

            </html>
        )
    }
};


module.exports = DefaultLayout;