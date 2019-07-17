import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { bookmarkItem, unBookmarkItem } from '../actions/bookmarks';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import NewsDefaultImage from './news-default-image.jpg';

const NewsItem = ({
  item,
  theme,
  bookmarkItem,
  unBookmarkItem,
  bookmarkItems
}) => {
  const isBookmark = item => {
    if (bookmarkItems !== null) {
      return (
        bookmarkItems.findIndex(bookmark => bookmark.title === item.title) > -1
      );
    }
  };
  const bookmark = item => {
    bookmarkItem(item);
  };

  const unBookmark = item => {
    unBookmarkItem(item);
  };

  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4} className='my-2'>
      <Card>
        {item.urlToImage ? (
          <div
            className='urlImage'
            style={{ backgroundImage: `url(${item.urlToImage})` }}
          />
        ) : (
          <div
            className='urlImage'
            style={{ backgroundImage: `url(${NewsDefaultImage})` }}
          />
        )}

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
          {isBookmark(item) ? (
            <FaBookmark
              className='float-right mt-2 icon-button'
              size='1.5em'
              onClick={() => unBookmark(item)}
            />
          ) : (
            <FaRegBookmark
              className='float-right mt-2 icon-button'
              size='1.5em'
              onClick={() => bookmark(item)}
            />
          )}
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

const mapStateToProps = state => ({
  bookmarkItems: state.bookmarks.bookmarkItems
});

export default connect(
  mapStateToProps,
  { bookmarkItem, unBookmarkItem }
)(NewsItem);
