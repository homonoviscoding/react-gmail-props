import EmailListItem from "./EmailListItem.jsx"

export default function emailsList({emailFiltering, setEmailsState}) {

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        setEmailsState(updatedEmails)
    }
    
    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        setEmailsState(updatedEmails)
    }

    return (
        <main className="emails">
            <ul>
                {emailFiltering.map((email, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <EmailListItem emailMap={email} key={index} togglingRead={toggleRead} togglingStar={toggleStar}/>
                ))}
            </ul>
        </main>
    )
}