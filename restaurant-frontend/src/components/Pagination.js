import React from "react";
import { useGlobalContext } from "../contexts/context";
import { Button } from "react-bootstrap";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useGlobalContext();

  return (
    <div>
      <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
      <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
    </div>
  );
};

export default Pagination;
