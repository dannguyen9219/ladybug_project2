const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <html>
            <DefaultLayout>
                <a href="/bugs/new"><button>Create New Support Ticket</button></a>
                <div class="card">
                    {
                        bugs.map((bug) => (
                            <article>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <a href={`/bugs/${ bug._id }`}>
                                            <h3>Bug Ticket: {bug.title}</h3>
                                        </a>
                                    </li>
                                </ul>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
            </html>
        )
    }
};


module.exports = Index;