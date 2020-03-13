import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

function PostCard({ title, description, id }) {

  return (
    <Row>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle><Link to={`/${id}`}>{title}</Link></CardTitle>
            <CardText>{description}</CardText>
            {/* <div className="card-footer">
            <small>{votes} votes</small>
            <i className="fas fa-thumbs-up text-success ml-2"
            onClick={() => vote("up", id)} />
            <i className="fas fa-thumbs-down text-danger ml-2"
            onClick={() => vote("down", id)} />
          </div> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default PostCard;