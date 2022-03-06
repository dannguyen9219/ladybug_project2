const React = require('react');
const DefaultLayout = require('../Default.jsx');


class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <form action="/bugs" method="post">
                    <fieldset>
                        <div>
                            <h1>Enter New Support Ticket</h1>
                            <div>
                                    <ul>
                                        <li>
                                            <h3>Title</h3>
                                            <input type="text" id="title" name="title"></input>
                                        </li>
                                        <li>
                                            <h3>Category</h3>
                                            <select name="category" id="category">
                                                <option value="Software/Hardware Question">Software/Hardware Question</option>
                                                <option value="Software/Hardware Issue">Software/Hardware Issue</option>
                                                <option value="Software/Hardware Training">Software/Hardware Training</option>
                                                <option value="Frontend Issue">Frontend Issue</option>
                                                <option value="Backend Issue">Backend Issue</option>
                                                <option value="Database Issue">Database Issue</option>
                                                <option value="Deployment Issue">Deployment Issue</option>
                                            </select>
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
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </fieldset>
                    <input type="submit" value="Create New Ticket" />
                </form>
            </DefaultLayout>
        )
    }
};


module.exports = New;