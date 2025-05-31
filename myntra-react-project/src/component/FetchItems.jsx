import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { FetchStatusActions } from "../Store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusActions.markFetchingStarted());
    fetch(`${import.meta.env.VITE_BACKEND_URL}/items`, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(FetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
