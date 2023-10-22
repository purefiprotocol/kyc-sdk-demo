import openSrc from '../../assets/icons/open.svg';

import './LinkToast.css';

const LinkToast = (props) => {
  const { text, linkText, url } = props;
  return (
    <div className="link-toast">
      {text && <span className="link-toast-text">{text}</span>}
      {linkText && (
        <a
          href={url}
          className="link-toast-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-toast-link-text">{linkText}</span>
          <img height="12px" src={openSrc} alt="open" />
        </a>
      )}
    </div>
  );
};

export default LinkToast;
