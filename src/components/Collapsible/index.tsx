import { useState } from 'react';

import arrowDown from './../../../public/arrow-down.svg';
import { Card, Content, Header, Title } from './styles';

interface CollapsibleProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
}

export const Collapsible = ({ open, children, title }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Card>
        <Header>
          <Title>{title}</Title>
          <img
            src={arrowDown.src}
            alt="Arrow"
            width="15px"
            onClick={() => handleFilterOpening()}
          />
        </Header>
        {isOpen && <Content>{children}</Content>}
      </Card>
    </>
  );
};
