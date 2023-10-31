import styled from "styled-components";
import Pagination from "../components/Pagination"
import ProductList from "../components/ProductList"
import SearchBar from "../components/SearchBar"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 3rem; 
  width: 100%;
  min-height: 100vh; 
`;

const Home = () => {
    return (
        <HomeContainer>
            <SearchBar />
            <ProductList count={10} />
            <Pagination />
        </HomeContainer>
    );
};

export default Home