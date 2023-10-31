
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const SearchBarContainer = styled.div`
  background-color: #fff; 
  border: 1px solid #fff; 
  border-radius: 1.5rem; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 660px) {
    display: grid;
    grid-template-columns: 32px 1fr 32px  1fr;
    grid-rows: auto;
  }
`;

const LogoImage = styled.div`
  width: 2rem; 
  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 2rem;
  color: skyblue;
`;

const SearchInputGroup = styled.div`
  border: 2px solid #E6E6E6 ;
  border-radius: 0.5rem;
  padding: 7px 15px;
  display: flex;
  gap: 1rem;
  grid-column: span 2;


  @media (max-width: 660px) {
    grid-column: span 3;
  }
`;


const SearchInput = styled.input`
background-color: transparent;
  font-size: 1rem;
  outline: none;
  border: none;
  flex: 1;
  min-width: 80px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;


const FirstSelect = styled.select`
  border: none;
  background-color: transparent;
  
  @media (max-width: 660px) {
    grid-column: span 2;
  }
`;
const SecSelect = styled.select`
  border: none;
  background-color: transparent;
  @media (max-width: 660px) {
    grid-column: span 2;
  }
`;

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <LogoImage>
                <Icon icon="fontisto:shopping-store" />
            </LogoImage>
            <SearchInputGroup>
                <SearchInput type="text" placeholder="Search..." />
                <SearchButton><Icon icon="heroicons:magnifying-glass-20-solid" /></SearchButton>
            </SearchInputGroup>
            <FirstSelect>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </FirstSelect>
            <SecSelect>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
            </SecSelect>

        </SearchBarContainer>
    );
}

export default SearchBar;
