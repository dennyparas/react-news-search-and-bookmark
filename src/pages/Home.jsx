import React, { Fragment, useState, useEffect } from 'react';
import CategorySourceSearchForm from '../components/CategorySourceSearchForm';
import { setTopNews, clearTopNews } from '../actions/news';
import NewsList from '../components/NewsList';
import { connect } from 'react-redux';

const Home = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);
  const [categorySourceUrl, setCategorySourceUrl] = useState('');

  const handleCategorySourceSearch = categorySourceUrl => {
    setPage(1);
    setCategorySourceUrl(categorySourceUrl);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (categorySourceUrl) {
      const url = `${categorySourceUrl}`;
      setTopNews(url, page);
    }

    return () => {
      clearTopNews();
    };
    // eslint-disable-next-line
  }, [categorySourceUrl, page]);

  return (
    <Fragment>
      <CategorySourceSearchForm
        onCategorySourceSearch={categorySourceUrl => {
          handleCategorySourceSearch(categorySourceUrl);
        }}
      />
      <NewsList
        newsItemsTotal={news.newsItemsTotal}
        loading={news.newsLoading}
        newsItems={news.newsItems}
        theme={news.theme}
        loadMore={() => handleLoadMore()}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { setTopNews, clearTopNews }
)(Home);
