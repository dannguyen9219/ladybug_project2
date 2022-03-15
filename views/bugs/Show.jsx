const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { bug } = this.props
        return(
            <DefaultLayout>
                    <main>
                        <div class="card index-card border border-3">
                            <div class="card-header">
                                <h2 id="title">LadyBug: {bug.title}</h2>
                            </div>
                                <article>
                                    <div id="bugsList">
                                        <li id="listCategories" class="row">
                                            <dt id="category" class="col-sm-3">Category: </dt>
                                            <dd class="col-sm-9">{bug.category}</dd>
                                            <dt id="status" class="col-sm-3">Status: </dt>
                                            <dd class="col-sm-9">{bug.ticketStatus}</dd>
                                            <dt id="description" class="col-sm-3">Description: </dt>
                                            <dd class="col-sm-9">{bug.description}</dd>
                                            <dt id="priority" class="col-sm-3">Priority: </dt>
                                            <dd class="col-sm-9">{bug.priority}</dd>
                                        </li>
                                    </div>
                                </article>
                        </div>
                        <div id="editBtn" class="btn-group" role="group">
                            <a href={`/bugs/${ bug._id }/edit`}><button type="button" class="btn btn-outline-primary">Edit</button></a>
                            <form action={`/bugs/${ bug._id }?_method=DELETE`} method="POST">
                                <input type="submit" class="btn btn-outline-primary" value="Delete"/></form>
                        </div>
                    </main>

            </DefaultLayout>
        )
    }
};


module.exports = Show; 