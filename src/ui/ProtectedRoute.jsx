import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100v;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // If there is no authenticated user, redicrect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  // While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // If there is a user render the app

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
