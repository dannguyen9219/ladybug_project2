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
                                <a href={`/bugs/${bug._id }`}></a>
                                    <h3>Support Ticket Subject: {bug.title}</h3>
                                    <h3>Status: {bug.ticketStatus}</h3>
                                    <h3>Description: {bug.description}</h3>
                                    <h3>Priority: {bug.priority}</h3>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
};


module.exports = Index;