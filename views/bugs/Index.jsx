const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { bugs } = this.props;
        return(
            <DefaultLayout>
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