import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            {/*eslint-disable-next-line*/}
            <a className="list-group-item">Tuiter</a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            {/*eslint-disable-next-line*/}
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
