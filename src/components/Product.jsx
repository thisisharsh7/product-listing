
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeAnimateVariants } from '../service/animate';

const ProductCard = styled(motion.div)`
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
  margin: 0.2rem 0; 
  color:#545454;
`;

const API_KEY = import.meta.env.VITE_API_KEY;

const Product = ({ name, price, description }) => {
  const [getImg, setImg] = useState('./assets/noProduct.png');

  const getProductImageFromAPI = async (setQuery) => {
    const url = 'https://api.pexels.com/v1/search';

    try {
      const response = await fetch(`${url}?query=${setQuery}&per_page=1`, {
        headers: {
          Authorization: API_KEY,
        },
      });

      const data = await response.json();
      const filterImg = data.photos[0].src.large;
      setImg(filterImg)
      return filterImg;
    } catch (error) {
      console.log('Fetching data from api got reject due to some reason.');
    }

  }

  useEffect(() => {
    getProductImageFromAPI(name);
  }, [name])
  return (
    <ProductCard
      as={motion.div}
      variants={fadeAnimateVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={Math.random().toFixed(1)}
    >
      <ProductImage src={getImg} />
      <ProductInfo>
        <ProductHeader>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>₹{price}</ProductPrice>
        </ProductHeader>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
    </ProductCard>
  );
};

export default Product;




