import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runThunk = useCallback((arg) => {
    setLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  });

  return [runThunk, loading, error];
}

export { useThunk };
