import React, { useState } from 'react';

const Collapse = ({ title, children, customClasses }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
      <div className={`collapse ${customClasses?.collapse ?? ''}`}>
        <div className={`collapse-header ${customClasses?.header ?? ''}`} onClick={toggleCollapse}>
          <h3 className={`collapse-title ${customClasses?.title ?? ''}`}>{title}</h3>
          <span className={`collapse-icon ${customClasses?.icon ?? ''}`}>{isCollapsed ? 'V' : 'Ʌ'}</span>
        </div>
        {!isCollapsed && (
          <div className={`children-container ${customClasses?.children ?? ''}`}>
            <div className={`collapse-content ${customClasses?.content ?? ''}`}>
              {children}
            </div>
          </div>
        )}
      </div>
  );
};

export default Collapse;
