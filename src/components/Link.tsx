import * as React from 'react';

interface ILinkProps {
  active: boolean;
  children: React.ReactChildren;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Link = ({ active, children, onClick }: ILinkProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

export default Link;
