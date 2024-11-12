import { useState } from 'react'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

export default function Nav ({ emails, filteredEmails }) {

    const [hideRead, setHideRead] = useState(false)
    const [currentTab, setCurrentTab] = useState('inbox')

    const unreadEmails = emails.filter(email => !email.read)
    const starredEmails = emails.filter(email => email.starred)

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (currentTab === 'starred') {
        // eslint-disable-next-line no-unused-vars
        filteredEmails = getStarredEmails(filteredEmails)
    }

    return (

        <>
            <nav className="left-menu">
                <ul className="inbox-list">
                <li
                    className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('inbox')}
                >
                    <span className="label">Inbox</span>
                    <span className="count">{unreadEmails.length}</span>
                </li>
                <li
                    className={`item ${currentTab === 'starred' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('starred')}
                >
                    <span className="label">Starred</span>
                    <span className="count">{starredEmails.length}</span>
                </li>

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                    id="hide-read"
                    type="checkbox"
                    checked={hideRead}
                    onChange={e => setHideRead(e.target.checked)}
                    />
                </li>
                </ul>
            </nav>
        </>
    )
}