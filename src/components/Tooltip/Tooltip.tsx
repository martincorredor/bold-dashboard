import React, { useEffect } from 'react';
import { Props } from './interface';
import './styles.css'

const Tooltip: React.FC<Props> = ({ type, text }) => {
  // useEffect(() => {
  //   if (window.bootstrap) {
  //     const tooltipTriggerList = [].slice.call(
  //       document.querySelectorAll('[data-bs-toggle="tooltip"]')
  //     );
  //     tooltipTriggerList.map((tooltipTriggerEl) => {
  //       return new window.bootstrap.Tooltip(tooltipTriggerEl);
  //     });
  //   } else {
  //     console.error('Bootstrap is not defined');
  //   }
  // }, []);

  const infoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );

  const helpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-question-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
    </svg>
  );

  const getIcon = () => {
    if (type === 'info') {
      return infoIcon();
    }
    if (type === 'help') {
      return helpIcon();
    }
    return null;
  };

  return (
    <div>
      <div
        className='tooltip'
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={text}
      >
        {getIcon()}
      </div>
    </div>
  );
};

export default Tooltip;
