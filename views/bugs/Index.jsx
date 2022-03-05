const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <DefaultLayout>
                <a href="/bugs/new"><button>Create New Support Ticket</button></a>
                <div>
                    {
                        bugs.map((bug) => (
                            <article>
                                <a href={`/bugs/${ bug._id }`}>
                                    <h3>Support Ticket Subject: {bug.title}</h3>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
};


module.exports = Index;