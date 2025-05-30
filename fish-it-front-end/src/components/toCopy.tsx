import React, { useState } from 'react';

function ExpandableComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand} className="btn btn-blue">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
      {isExpanded && (
        <div className="expanded-content">
          <p>This is the additional data that is shown when the component is expanded.</p>
          {/* Add more data here */}
        </div>
      )}
    </div>
  );
}

export default ExpandableComponent;
