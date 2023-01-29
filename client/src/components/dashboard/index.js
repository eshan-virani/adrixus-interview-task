import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Headers from "../header/index";
import {
  Table,
  ThSort,
  SearchBar,
  SearchButton,
  SearchBarDiv,
  PaginationButton,
} from "./styles";
import { BsCaretUpFill } from "react-icons/bs";

const FilterQuery = gql`
  query FetchUser($data: Filter) {
    usersdata(filters: $data) {
      _id
      name
      email
      age
      phone
      registered
    }
  }
`;

const Dashboard = () => {
  const [ageSort, setAgeSort] = useState(false);
  const [dateSort, setDateSort] = useState(false);
  var [limit, setLimit] = useState(0);
  const [userdata, setUserdata] = useState();
  var authtoken = localStorage.getItem("authtoken");

  useQuery(FilterQuery, {
    context: {
      headers: {
        auth: authtoken,
      },
    },
    variables: {
      data: {
        ageSort: ageSort,
        dateSort: dateSort,
        limit: limit,
      },
    },
    onCompleted(data) {
      setUserdata(data.usersdata);
    },
  });

  return (
    <Table>
      <Headers />
      <div className="table-wrapper">
        <SearchBarDiv>
          <SearchBar
            type="text"
            name="email"
            // onChange={(e) =>
            // 	setEmail({ ...email, email: e.target.value })
            // }
          ></SearchBar>
          <SearchButton>Search</SearchButton>
        </SearchBarDiv>
        <table className="fl-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <ThSort onClick={() => setAgeSort(!ageSort)}>
                Age <BsCaretUpFill />
              </ThSort>
              <ThSort onClick={() => setDateSort(!dateSort)}>
                Register Date <BsCaretUpFill />
              </ThSort>
            </tr>
          </thead>
          <tbody>
            {userdata?.map((data, index) => {
              var date = new Date(data.registered);
              var year = date.getFullYear();
              var day = date.getDate();
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.age}</td>
                  <td>
                    {date.toLocaleString("en-US", { month: "short" }) +
                      " " +
                      day +
                      ", " +
                      year}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <SearchBarDiv>
          <PaginationButton type="submit">previous</PaginationButton>
          <PaginationButton type="submit">next</PaginationButton>
        </SearchBarDiv>
      </div>
    </Table>
  );
};

export default Dashboard;
