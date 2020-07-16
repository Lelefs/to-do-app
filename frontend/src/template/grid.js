import React, { useState, useEffect } from 'react';

export default ({ cols, children }) => {
  const [gridClasses, setGridClasses] = useState('');

  useEffect(() => {
    const numbers = cols ? cols.split(' ') : [];
    let classes = '';

    if (numbers[0]) classes += `col-xs-${numbers[0]}`;
    if (numbers[1]) classes += ` col-sm-${numbers[1]}`;
    if (numbers[2]) classes += ` col-md-${numbers[2]}`;
    if (numbers[3]) classes += ` col-lg-${numbers[3]}`;

    setGridClasses(classes);
  }, []);

  return <div className={gridClasses}>{children}</div>;
};
