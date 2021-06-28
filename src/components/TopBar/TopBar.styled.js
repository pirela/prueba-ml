import styled from 'styled-components';

export const Form = styled.form`
   width: 100%;
   display: flex;
`;

export const GeneralContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 4px 0px;
  display: flex;
  justify-content: center;
`;

export const Shit = styled.div`
  width: 40px;
  height: 48px;
  border: 1px solid green;
`

export const SearchContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputContainer = styled.div`
  width: 70vw;
  height: 40px;
  margin: 0 16px;
  display: flex;
`;

export const SearchInput = styled.input`
  margin: 0;
  padding: 0 4px;
  width: 100%;
  border: 0px;
  height: 40px;
  &:focus {
    outline: none;
  }
`;


export const MLLogo = styled.div`
  width: 40px;
  height: 28px;
  background-image: url(${({ theme }) => theme.assets.MLLogo});
  background-size: cover;
`;

export const SearchIcon = styled.button`
  border: 0px;
  margin: 0;
  padding: 0px;
  background-color:  ${({ theme }) => theme.colors.secondary};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-image: url(${({ theme }) => theme.assets.searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
`;
