const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { bug } = this.props
        return(
            <DefaultLayout>
                    <main>
                        <div class="card index-card">
                            <div class="card-header">
                                <h2 id="title">LadyBug: {bug.title}</h2>
                            </div>
                                <article>
                                    <div id="bugsList" class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <h2 id="category">Category: {bug.category}</h2>
                                            <h2 id="status">Status: {bug.ticketStatus}</h2>
                                            <h2 id="description">Description: {bug.description}</h2>
                                            <h2 id="priority">Priority: {bug.priority}</h2>
                                        </li>
                                    </div>
                                </article>
                        </div>
                        <div id="editBtn" class="btn-group" role="group">
                            <a href={`/bugs/${ bug._id }/edit`}><button type="button" class="btn btn-outline-primary">Edit</button></a>
                            <form action={`/bugs/${ bug._id }?_method=DELETE`} method="POST">
                                <input type="submit" class="btn btn-outline-primary"value="Delete"/></form>
                        </div>
                    </main>

            </DefaultLayout>
        )
    }
};


module.exports = Show; 