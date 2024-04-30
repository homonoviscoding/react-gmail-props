export default function emailListItem({emailMap, togglingRead, togglingStar}) {

    return (
        <li
            className={`email ${emailMap.read ? 'read' : 'unread'}`}
        >
            <div className="select">
            <input
                className="select-checkbox"
                type="checkbox"
                checked={emailMap.read}
                onChange={() => togglingRead(emailMap)}
            />
            </div>
            <div className="star">
            <input
                className="star-checkbox"
                type="checkbox"
                checked={emailMap.starred}
                onChange={() => togglingStar(emailMap)}
            />
            </div>
            <div className="sender">{emailMap.sender}</div>
            <div className="title">{emailMap.title}</div>
        </li>
    )
}