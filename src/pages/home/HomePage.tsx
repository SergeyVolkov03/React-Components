import { useState, MouseEvent, useEffect } from 'react';
import { Post } from '../../components/posts-list-item/PostsListItem';
import { Input } from '../../components/input/Input';
import { HeroList } from '../../types/types';
import { Pagination } from '../../components/pagination/Pagination';
import './home.css';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useGetPostsQuery } from '../../services/postApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function HomePage() {
  const [isOpened, setIsOpened] = useState(false);
  const page = useSelector((state: RootState) => state.pageReducer.page);
  const searchText = useSelector(
    (state: RootState) => state.searchReducer.search
  );
  const { data, isFetching } = useGetPostsQuery({ page, searchText });
  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: page, search: searchText });
  }, [page, searchText, setSearchParams]);

  function onClick(event: MouseEvent) {
    if (!isOpened) {
      return;
    }
    if (
      event.target instanceof HTMLElement &&
      !event.target.classList.contains('hero') &&
      !event.target.classList.contains('post') &&
      !event.target.classList.contains('post-link')
    ) {
      event.preventDefault();
      setIsOpened(false);
      return navigate('/');
    }
  }

  return (
    <>
      <div className="app" onClick={onClick}>
        <h1 className="title">The Star Wars Hero</h1>
        <Input />
        <div className="content">
          <div className="posts-list">
            {isFetching ? (
              <p className="loading">loading...</p>
            ) : (
              data?.results.map((hero: HeroList) => {
                const id = hero.url?.split('/')[5];
                return (
                  <Link className="post-link" key={id} to={`herous/${id}`}>
                    <Post name={hero.name} />
                  </Link>
                );
              })
            )}
            {data && data.results.length === 0 && (
              <p className="incorrect-name">Incorrect name</p>
            )}
            <Pagination />
          </div>
          <Outlet context={[setIsOpened]} />
        </div>
      </div>
    </>
  );
}
