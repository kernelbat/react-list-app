import React from 'react';
// listing cards
const PostCard = (props) => {
    let { ie, children, liClass } = props
    return (
        <li className={liClass} key={ie}>
            <a href="#">
                <div className="flex flex-col items-center">

                    {children}
                </div>
            </a>
        </li>
    )
}
export default PostCard