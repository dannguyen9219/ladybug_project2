const React = require('react');
const DefaultLayout = require('../Default.jsx');


class Edit extends React.Component {
    render() {
        const { bug } =this.props;
        return(
            <DefaultLayout>
                <form action={`/bugs/${bug._id}?_method=PUT`} method="post">
                    <fieldset>
                        <div>
                            <h1>Edit {bug.title}</h1>
                                <div>
                                    <ul>
                                        <li>
                                            <h3>Title</h3>
                                            <input type="text" id="title" name="title" defaultValue = {bug.title}></input>
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
                                            <input type="text" id="description" name="description" defaultValue = {bug.description}></input>
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
                                </div>
                        </div>
                    </fieldset>
                    <input type="submit" value="Edit Ticket" />
                </form>
            </DefaultLayout>
        )
    }
};


module.exports = Edit;