
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SETDATA, SETPAGE } from '../state/reducers';

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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSorting, setSelectedSorting] = useState('Price');
  const { data, rdata } = useSelector((state) => state.productReducer)
  const dispatch = useDispatch();
  const inputRef = useRef();


  const handleClick = () => {
    const { value } = inputRef.current;
    if (value) {
      const filteredProduct = data.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
      dispatch(SETDATA(filteredProduct));
    }
    inputRef.current.value = "";
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }

  }


  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };



  const handleSortingChange = (e) => {
    const { value } = e.target;
    setSelectedSorting(value);
  };

  const handleSelect = () => {

    const filteredProducts = selectedCategory === 'All'
      ? rdata
      : rdata.filter(product => product.category === selectedCategory);

    const sortedProducts = [...filteredProducts];
    if (selectedSorting === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSorting === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts.sort(() => Math.random() - 0.5);
    }
    dispatch(SETDATA(sortedProducts));
  }


  useEffect(() => {
    handleSelect();
  }, [selectedCategory, selectedSorting])



  return (
    <SearchBarContainer>
      <LogoImage>
        <Icon icon="fontisto:shopping-store" />
      </LogoImage>
      <SearchInputGroup>
        <SearchInput type="text" placeholder="Search..." ref={inputRef} onKeyDown={handleEnter} />
        <SearchButton onClick={handleClick}><Icon icon="heroicons:magnifying-glass-20-solid" /></SearchButton>
      </SearchInputGroup>
      <FirstSelect value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Appliances">Appliances</option>
        <option value="Footwear">Footwear</option>
        <option value="Clothing">Clothing</option>
        <option value="Home & Garden">Home & Garden</option>
        <option value="Gaming">Gaming</option>
      </FirstSelect>
      <SecSelect value={selectedSorting} onChange={handleSortingChange}>
        <option value="Price">Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </SecSelect>

    </SearchBarContainer>
  );
}

export default SearchBar;
