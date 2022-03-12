const React = require('react');
const DefaultLayout = require('../Default.jsx');


class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <form action="/bugs" method="POST">
                    <fieldset>
                        <div class="card index-card border border-3">
                            <div class="card-header">
                                <h2 id="new-text">Enter New Ladybug</h2>
                            </div>
                                <div class="mb-3 card-body">
                                    <ul id="newList">
                                        <li>
                                            <label for="title" class="form-label">Title</label>
                                            <input type="text" class="form-control" name="title" id="title" placeholder="Title"></input>
                                        </li>
                                        <li>
                                            <label for="category" class="form-label">Category</label>
                                            <select class="form-select" name="category" id="category">
                                                <option selected>Choose...</option>
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
                                                <option selected>Choose...</option>
                                                <option value="Open">Open</option>
                                                <option value="In-Progress">In-Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label for="description" class="form-label">Description</label>
                                            <textarea class="form-control" name="description" id="description" rows="5" placeholder="Description"></textarea>
                                        </li>
                                        <li>
                                            <label for="priority" class="form-label">Priority</label>
                                            <select class="form-select" name="priority" id="priority">
                                                <option selected>Choose...</option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </fieldset>
                    <div id="createBtn">
                        <input type="submit" class="btn btn-outline-primary" value="Create New Ladybug" />
                    </div>
                </form>
            </DefaultLayout>
        )
    }
};


module.exports = New;