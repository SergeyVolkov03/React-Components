import { useOutletContext, useParams } from 'react-router-dom';
import './postDetail.css';
import { useGetPostDetailsQuery } from '../../services/postApi';

export function PostDetail() {
  const { id } = useParams();
  const [setIsOpened] = useOutletContext<[(isOpened: boolean) => void]>();
  setIsOpened(true);

  const { data: hero, isFetching } = useGetPostDetailsQuery(id || '');

  if (!id) {
    setIsOpened(false);
    return;
  }

  return (
    <>
      {isFetching ? (
        <p className="post-loading hero">loading...</p>
      ) : (
        <div className="post-detail hero">
          <h2 className="hero">{hero?.name}</h2>
          <p className="hero">birth_year: {hero?.birth_year}</p>
          <p className="hero">height: {hero?.height}</p>
          <p className="hero">gender: {hero?.gender}</p>
          <p className="hero">eye_color: {hero?.eye_color}</p>
          <p className="hero">hair_color: {hero?.hair_color}</p>
          <button className="post-detail-button">hide information</button>
        </div>
      )}
    </>
  );
}
