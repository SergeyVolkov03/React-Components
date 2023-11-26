"use client"

import { ChangeEvent, FormEvent, useState } from 'react';
// import styles from './input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSearch } from '../../store/reducers/searchSlice';

export function Input() {
  const searchText = useSelector(
    (state: RootState) => state.searchReducer.search
  );
  const [inputValue, setInputValue] = useState(searchText);
  const dispatch = useDispatch();

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.currentTarget.value);
  }

  function onSubmit(event: FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    dispatch(setSearch(inputValue));
  }

  return (
    <form className='form'>
      <input
        placeholder="enter a name"
        onChange={onChange}
        value={inputValue}
      ></input>
      <button type="submit" onClick={onSubmit}>
        search
      </button>
    </form>
  );
}
