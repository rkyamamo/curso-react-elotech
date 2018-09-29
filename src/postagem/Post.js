import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({post: {content, authorName, authorUserName, timestamp}}) => {
    return (

        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{authorName} - {authorUserName} - {new Date(timestamp).toDateString()}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post;