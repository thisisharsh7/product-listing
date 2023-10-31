import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  color: #000; 
`;

const Message = styled.p`
  font-size: 1.5rem; 
`;

const HomeLink = styled(Link)`
  text-decoration: underline;
  color: #0073e6; 
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Message>Page not found</Message>
      <Message>
        Return to <HomeLink to="/">Home</HomeLink>
      </Message>
    </NotFoundContainer>
  );
};

export default NotFound;
