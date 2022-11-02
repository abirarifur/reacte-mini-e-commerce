import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export default function Products() {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Product item={product} key={product.id} />;
      })}
    </Container>
  );
}
