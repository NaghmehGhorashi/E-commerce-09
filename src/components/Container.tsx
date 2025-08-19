import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto container">{children}</div>;
};

export default Container;
