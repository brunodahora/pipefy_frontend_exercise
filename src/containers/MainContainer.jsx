import * as React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Loading, Main } from '../components';
import { PUBLIC_FORM_QUERY, PUBLIC_FORM_MUTATION } from '../graphql';

const MainContainer = () => {
  const { loading, data } = useQuery(PUBLIC_FORM_QUERY);
  const [submitPublicForm] = useMutation(PUBLIC_FORM_MUTATION);

  return loading ? (
    <Loading />
  ) : (
    <Main data={data.publicForm} submitPublicForm={submitPublicForm} />
  );
};

export default MainContainer;
