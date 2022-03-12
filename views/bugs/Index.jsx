const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <html>
            <DefaultLayout>
                <div class="card index-card">
                <h2 id="home-text">Home: All Bugs</h2>
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