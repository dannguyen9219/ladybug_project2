const React = require('react');
const DefaultLayout = require('../Default.jsx');


class Edit extends React.Component {
    render() {
        const { bug } =this.props;
        return(
            <DefaultLayout>
                <form action={`/bugs/${bug._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <div class="card index-card">
                            <div class="card-header">
                                <h1 id="edit-text">Edit {bug.title}</h1>
                            </div>
                                <div class="mb-3 card-body">
                                    <ul id="editList">
                                        <li>
                                            <label for="title" class="form-label">Title</label>
                                            <input type="text" class="form-control" id="title" name="title" defaultValue = {bug.title}></input>
                                        </li>
                                        <li>
                                            <label for="category" class="form-label">Category</label>
                                            <select class="form-select" name="category" id="category">
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
                                            <label for="ticketStatus" class="form-label">Status</label>
                                            <select class="form-select" name="ticketStatus" id="ticketStatus">
                                                <option value="Open">Open</option>
                                                <option value="In-Progress">In-Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label for="description" class="form-label">Description</label>
                                            <textarea class="form-control" id="description" name="description" rows="5" defaultValue = {bug.description}></textarea>
                                        </li>
                                        <li>
                                            <label for="priority" class="form-label">Priority</label>
                                            <select class="form-select" name="priority" id="priority">
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </fieldset>
                    <div id="editBtn2">
                        <input type="submit" class="btn btn-outline-primary" value="Edit Ticket" />
                    </div>
                </form>
            </DefaultLayout>
        )
    }
};


module.exports = Edit;