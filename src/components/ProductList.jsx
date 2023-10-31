import Product from './Product';
import styled from 'styled-components';


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


const ProductList = ({ count }) => {
    const products = Array.from({ length: count }, (_, index) => (
        <Product key={index} />
    ));

    return <GridContainer>
        {products}
    </GridContainer>
};

export default ProductList;
