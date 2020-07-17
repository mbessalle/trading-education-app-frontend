import React from "react";
import { selectToken } from "../../store/user/selector";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Chart from "../../components/Chart";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';


export default function Trades() {
  const token = useSelector(selectToken);
  const history = useHistory();
  console.log("token in /trades", token);

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <>
      <h1>Trades</h1>
      <Chart />
      <Button style={{margin:'1rem'}}>Buy BTC</Button>
      <Button style={{margin:'auto'}}>Sell BTC</Button>
      <Table striped bordered hover size="sm" style={{width:'60%', textAlign:'center', margin:'auto'}}>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </>
  );
}
