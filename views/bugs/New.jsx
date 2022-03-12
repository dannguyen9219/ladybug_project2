const React = require('react');
const DefaultLayout = require('../Default.jsx');


class New extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <form action="/bugs" method="post">
                    <fieldset>
                        <div class="card index-card">
                            <div class="card-header">
                                <h2 id="new-text">Enter New Ladybug</h2>
                            </div>
                                <div class="mb-3 card-body">
                                    <ul id="newList">
                                        <li>
                                            <label for="bugTitle" class="form-label">Title</label>
                                            <input type="text" class="form-control" id="bugTitle" placeholder="Title"></input>
                                        </li>
                                        <li>
                                            <label for="bugCategory" class="form-label">Category</label>
                                            <select class="form-select" id="bugCategory">
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
                                            <label for="bugStatus" class="form-label">Status</label>
                                            <select class="form-select" id="bugStatus">
                                                <option selected>Choose...</option>
                                                <option value="Open">Open</option>
                                                <option value="In-Progress">In-Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label for="bugDescription" class="form-label">Description</label>
                                            <textarea class="form-control" id="bugDescription" rows="3" placeholder="Description"></textarea>
                                        </li>
                                        <li>
                                            <label for="bugPriority" class="form-label">Priority</label>
                                            <select class="form-select" id="bugPriority">
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