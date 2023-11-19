import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Post } from '../components/posts-list-item/PostsListItem';

describe('<Post />', () => {
  it('renders the post with the given name', () => {
    const hero = { name: 'Luke Skywalker' };
    const { getByText } = render(<Post {...hero} />);
    expect(getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
