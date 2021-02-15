import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap';
import {Button, Col, Row} from 'antd'

export default function Anime() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null)
    const [likes, setLikes] = useState()
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/animes")
            .then(res => {
                if(!res.ok){
                    throw Error('Oops! List cannot be displayed')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setError(null)
                console.log(data)
            })
            .catch(error => {
                setError(error.message)
            })    
        }, 1000);
    }, []);

    return (
        <div>
            <Row>
                <Col span={8}>
                {data.map(element => (
                    <Card key={element.id} style={{backgroundColor: '#fff', marginBottom: "30px", width: "30rem"}}>
                    <Card.Img variant="top" src={element.image} alt="cover pic" style={{width: '18rem'}} />
                    <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                    {element.body}
                    </Card.Text>
                    <p>Likes : {element.likes}</p>
                    <Button type="primary">Like</Button>
                    </Card.Body>
                    </Card>
            ))}
                </Col>
            </Row>
        </div>
    )
}