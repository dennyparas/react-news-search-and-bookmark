import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Truncate from 'react-truncate';
import Moment from 'react-moment';

const NewsItem = ({ item, theme }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className='my-2'>
      <Card>
        <Card.Img variant='top' src={item.urlToImage} />

        <Card.Body>
          <Card.Title>
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {item.title}
            </Truncate>
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {item.source.name} <br />
            <span style={{ fontWeight: 'normal' }}>{item.author}</span>
          </Card.Subtitle>
          <Card.Text>
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {item.description}
            </Truncate>
          </Card.Text>
          <Button variant={theme} href={item.url} target='_blank'>
            Go to Page
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>
            Published: <Moment format='YYYY/MM/DD' date={item.publishedAt} />
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NewsItem;
