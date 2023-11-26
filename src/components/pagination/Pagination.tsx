import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../services/postApi';
import './pagination.css';
import { RootState } from '../../store/store';
import { setPage } from '../../store/reducers/pageSlice';

export function Pagination() {
  const page = useSelector((state: RootState) => state.pageReducer.page);
  const searchText = useSelector(
    (state: RootState) => state.searchReducer.search
  );
  const { data } = useGetPostsQuery({ page, searchText });
  const dispatch = useDispatch();

  function getPrevPage() {
    if (data?.previous) {
      const page = data.previous.split('page=')[1];
      dispatch(setPage(page));
    }
  }

  function getNextPage() {
    if (data?.next) {
      const page = data.next.split('page=')[1];
      dispatch(setPage(page));
    }
  }

  return (
    <>
      {data && (
        <div className="pagination">
          <button disabled={!data.previous} onClick={getPrevPage}>
            prev page
          </button>
          <p className="page">
            Page: {page} from {Math.ceil(data.count / 10)}
          </p>
          <button disabled={!data.next} onClick={getNextPage}>
            next page
          </button>
        </div>
      )}
    </>
  );
}
