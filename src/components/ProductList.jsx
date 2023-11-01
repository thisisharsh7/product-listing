import { useSelector } from 'react-redux';
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


const ProductList = () => {

  const { data, cPage } = useSelector((state) => state.productReducer);


  return <GridContainer>
    {
      data.length ? data.slice(cPage * 8, (cPage + 1) * 8).map((sdata, index) => {
        return (
          <Product key={index} name={sdata.name} price={sdata.price} description={sdata.description} img={sdata.imgSrc} />
        )
      })
        : <div>No Items found.</div>
    }
  </GridContainer>
};

export default ProductList;
