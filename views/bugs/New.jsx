const React = require('react');
const DefaultLayout = require('../Default.jsx');


class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <div>
                    <h1>Enter New Support Ticket</h1>
                    <nav>
                        <a href="/bugs"><button>Back to All Support Tickets</button></a>
                    </nav>
                    <div>
                        <form action="/bugs" method="POST">
                            <ul>
                                <li>
                                    <h3>Title</h3>
                                    <input type="text" id="title" name="title"></input>
                                </li>
                                <li>
                                    <h3>Ticket Status</h3>
                                    <select name="ticket-status" id="ticket-status">
                                        <option value="Open">Open</option>
                                        <option value="In-Progress">In-Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </li>
                                <li>
                                    <h3>Description</h3>
                                    <input type="text" id="description" name="description"></input>
                                </li>
                                <li>
                                    <h3>Priority</h3>
                                    <select name="priority" id="priority">
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </li>
                            </ul>
                            <input type="submit" value="Create New Ticket" />
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
};


module.exports = New;