import styled from 'styled-components';

const ProductSection = styled.section`
  width: 390px;
  padding: 20px 0 20px 16px;
  background-color: #fff;
  margin: 6px 0;
  /* overflow-x: scroll;
  overflow-y: hidden; */
  h2 {
    margin-bottom: 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 10px;

    li {
      display: flex;
      gap: 10px;
    }
  }
`;

export default ProductSection;
