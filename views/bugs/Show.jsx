const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { bug } = this.props
        return(
            <DefaultLayout>
                <div>
                    <article>
                        <h2>Support Ticket Subject: {bug.title}</h2>
                        <h2>Status: {bug.ticketStatus}</h2>
                        <h2>Description: {bug.description}</h2>
                        <h2>Priority: {bug.priority}</h2>
                        <a href={`/bugs/${ bug._id }/edit`}><button>Edit</button></a>
                        <form action={`/bugs/${ bug._id }?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete"/></form>
                        <a href="/bugs/"><button>Back to Main Index</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
};


module.exports = Show; 