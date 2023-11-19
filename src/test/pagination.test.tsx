import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { CustomContext } from '../context';
import { Pagination } from '../components/pagination/Pagination';

// Mock the CustomContext values
interface CustomContextValues {
  page: string;
  searchText: string;
  setSearchText: (text: string) => void;
  setPage: (page: string) => void;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: [];
  } | null;
}

describe('<Pagination />', () => {
  const mockSetPage = vi.fn();

  const renderComponent = (contextValues: CustomContextValues) =>
    render(
      <CustomContext.Provider value={contextValues}>
        <Pagination />
      </CustomContext.Provider>
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders pagination with both buttons disabled if no data', () => {
    const { getByText } = renderComponent({
      page: '1',
      setPage: mockSetPage,
      data: { count: 0, previous: null, next: null, results: [] },
      searchText: '',
      setSearchText: () => {},
    });
    expect(getByText('prev page')).toBeDisabled();
    expect(getByText('next page')).toBeDisabled();
  });

  it('enables next button if there is a next page', () => {
    const { getByText } = renderComponent({
      page: '1',
      setPage: mockSetPage,
      data: { count: 20, next: 'url?page=2', previous: null, results: [] },
      setSearchText: () => {},
      searchText: '',
    });
    expect(getByText('next page')).not.toBeDisabled();
  });

  it('updates page on next button click', () => {
    const { getByText } = renderComponent({
      page: '1',
      setPage: mockSetPage,
      data: { count: 20, next: 'url?page=2', previous: null, results: [] },
      setSearchText: () => {},
      searchText: '',
    });
    fireEvent.click(getByText('next page'));
    expect(mockSetPage).toHaveBeenCalledWith('2');
  });
});
