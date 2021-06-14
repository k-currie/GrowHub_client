import React from 'react';

const KnowHowDetail = ({knowHow, currentUser}) => {

    const monthLower = knowHow.month.toLowerCase();
    const month = monthLower[0].toUpperCase() + monthLower.slice(1);

    const getReplies = () => {
        return knowHow.replies.map((reply, index) => {
                return (
                    <li key={index}>
                        <ul>
                            <li>{reply.body}</li>
                            <li>By: {reply.author} on {reply.date}</li>
                        </ul>
                    </li>
                )
        })
    }

    const getRepliesSection = () => {
        if (knowHow.replies){
            return(
                <div>
                    <h3>Replies:</h3>
                    <ul>
                        {getReplies()}
                    </ul>
                </div>
            )
        }
        return
    }

    return(
        <>
            <h4>{knowHow.title}</h4>
            <ul>
                <li>{knowHow.body}</li>
                <li>Applies to month: {month}</li>
                <li>Posted by {knowHow.author.shortName} - <i>{knowHow.date}</i></li>
            </ul>

            {getRepliesSection()}
        </>
    )
}

export default KnowHowDetail;