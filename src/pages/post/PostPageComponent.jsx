import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { givePost } from './../../thunkAction/postThunk';
import { useAppDispatch } from './../../state/store.hook';

const PostPageComponent = ({ post }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(givePost());
  }, []);
  return (
    <div>
      <h1>{JSON.stringify(post)}</h1>
    </div>
  );
};

const mapState = (state) => ({
  post: state.postReducer,
});
export default connect(mapState)(PostPageComponent);
