import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../assets/pageNotFound.jpg';
import './PageNotFound.scss';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <div className="pageNotFound">
          <h1>Oops..! 404 Page Not Found</h1>
          <p>
            Looks like you came to wrong page on our server
          </p>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
