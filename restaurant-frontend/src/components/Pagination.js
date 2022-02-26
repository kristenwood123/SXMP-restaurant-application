import React from "react";
import { useGlobalContext } from "../contexts/context";
import { Button } from "react-bootstrap";
import styles from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <Container>
      <Button
        variant="outline-danger"
        size="lg"
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <GrPrevious />
      </Button>
      <Button
        variant="outline-danger"
        size="lg"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <GrNext fill="red" />
      </Button>
    </Container>
  );
};

export default Pagination;

const Container = styles.div`
display: flex;
justify-content: center;
justify-content: space-around;
margin-bottom: 5rem;
`;
