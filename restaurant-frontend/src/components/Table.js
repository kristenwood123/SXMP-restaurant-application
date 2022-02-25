import React from "react";
import MaterialTable from "material-table";
import { useGlobalContext } from "../contexts/context";

import axios from "axios";

const Table = () => {
  const { restaurants, setRestaurants } = useGlobalContext();
  const columns = [
    { title: "Name", field: "name", searchable: true },
    { title: "Address", field: "address", searchable: true },
    { title: "Likes", field: "likes", align: "right" },
  ];

  return (
    <div>
      <MaterialTable
        title="Restaurants"
        data={restaurants}
        columns={columns}
        options={{
          search: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowAdd: (newRow) => {
            console.log("dnew row", newRow);

            axios
              .post("http://localhost:8080/restaurants/add", newRow)
              .then((res) => {
                console.log("dnew row", newRow);
                // if success, then add to frontend
                new Promise((resolve, reject) => {
                  setRestaurants([...restaurants, newRow]);
                  resolve();
                });
              });
          },
        }}
      />
    </div>
  );
};

export default Table;
