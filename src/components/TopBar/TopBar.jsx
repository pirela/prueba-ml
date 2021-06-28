
import { useState } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import {
  Form,
  MLLogo,
  SearchIcon,
  SearchInput,
  SearchContainer,
  GeneralContainer,
  SearchInputContainer,
} from "./TopBar.styled";

const TopBar = ({ handleClickLogo, onClick }) => {

  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');

  const redirectFunctionLogo = () => router.push({
    pathname: '/items',
  });

  return (
    <GeneralContainer>
      <SearchContainer>
        <MLLogo onClick={() => redirectFunctionLogo()} />
        <SearchInputContainer>
          <Form
            onSubmit={e => {
              e.preventDefault();
              onClick(searchValue)
            }}>
            <SearchInput
              type="text"
              value={searchValue}
              className='search-input'
              placeholder='Buscador'
              onChange={event => setSearchValue(event.target.value)}
            />
            <SearchIcon className='search' onClick={() => onClick(searchValue)} />
          </Form>
        </SearchInputContainer>
      </SearchContainer>
    </GeneralContainer>
  );
};


TopBar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TopBar;