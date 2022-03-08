const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { bug } = this.props
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

                    <link rel="stylesheet" href="/css/main.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
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
                        <div>
                            <article>
                                <h2>Support Ticket Subject: {bug.title}</h2>
                                <h2>Category: {bug.category}</h2>
                                <h2>Status: {bug.ticketStatus}</h2>
                                <h2>Description: {bug.description}</h2>
                                <h2>Priority: {bug.priority}</h2>
                                <div id="nav2-btns">
                                    <a href={`/bugs/${ bug._id }/edit`}><button>Edit</button></a>
                                    <form action={`/bugs/${ bug._id }?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete"/></form>
                                    <a href="/bugs/"><button>Back to Main Index</button></a>
                                </div>
                            </article>
                        </div>
                    </main>

                    <footer>
                    </footer>

                </body>
            </html>
        )
    }
};


module.exports = Show; 