const React = require('react');
const DefaultLayout = require('../Default.jsx');


class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <form action="/bugs" method="post">
                    <div>
                        <h1>Enter New Support Ticket</h1>
                        <div>
                                <ul>
                                    <li>
                                        <h3>Title</h3>
                                        <input type="text" id="title" name="title"></input>
                                    </li>
                                    <li>
                                        <h3>Ticket Status</h3>
                                        <select name="ticketStatus" id="ticketStatus">
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
                        </div>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
};


module.exports = New;