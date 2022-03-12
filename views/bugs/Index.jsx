const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <DefaultLayout>
                <div class="card index-card">
                    <div class="card-header">
                        <h2 id="home-text">Home: All Bugs</h2>
                    </div>
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
        )
    }
};


module.exports = Index;