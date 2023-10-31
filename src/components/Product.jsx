import styled from 'styled-components';
import { faker } from '@faker-js/faker';

const ProductCard = styled.div`
  border: 1px solid white;
  background-color: #f0f8ff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  key: ${props => props.id};
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

const ProductTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  color: #87CEEB;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  border: 2px dotted #75F03D;
  color: #40B224;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  padding: 0.5rem;
  font-weight: 500;
  
`;
const ProductDescription = styled.p`
  font-size: 1rem; 
  margin: 1rem 0; 
  color:#545454;
`;

const Product = () => {

  const product = {
    name: faker.commerce.productName('fashion'),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };


  return (
    <ProductCard>
      <ProductImage src={faker.image.urlLoremFlickr({ category: 'books' })} />
      <ProductInfo>
        <ProductHeader>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>₹{product.price}</ProductPrice>
        </ProductHeader>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>
    </ProductCard>
  );
};

export default Product;




