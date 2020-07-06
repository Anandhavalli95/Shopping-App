import React from 'react';
import loadable from 'utils/loadable';
import Skeleton from '@material-ui/lab/Skeleton';

export default loadable(() => import('./index'), {
  fallback: <Skeleton />,
});
