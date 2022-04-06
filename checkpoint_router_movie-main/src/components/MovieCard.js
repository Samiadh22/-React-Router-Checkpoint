import React from 'react'
import {Card,Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
function MovieCard({listMovie}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={listMovie.image} />
                <Card.Body>
                    <Card.Title>{listMovie.name}</Card.Title>
                    <Card.Text>
                    {listMovie.description}
                    </Card.Text>
                   <Link to={`/Details/${listMovie.id}`}> <Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
