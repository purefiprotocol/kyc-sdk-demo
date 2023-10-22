import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="alert alert-dark" role="alert">
            <span className="mr-2">Page not found</span>
            <div>
              <Link to="/">Go to main page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
