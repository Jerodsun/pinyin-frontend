import React, { Component } from 'react'; // lazy, Suspense 
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   Badge,
//   Button,
//   ButtonDropdown,
//   ButtonGroup,
//   ButtonToolbar,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Col,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Progress,
//   Row,
//   Table,
// } from 'reactstrap';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const axios = require('axios').default;

const API = 'http://127.0.0.1:8000/api/pinyin/'



export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiCall:false,
      apiResult: [],
    }
  }

  componentDidMount() {

    // axios.get(API)
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });

    axios.post(API, {
      "input_string": "孫子曰：兵者，國之大事，死生之地，存亡之道，不可不察也。"
        }
    )
        .then(response => {
          if (response.data.message === "success") {
            this.setState( { apiResult : response.data} );
            console.log(this.state.apiResult )
            console.log(response)
          }
          
          else {
            console.log("Error!")
            console.log(response)
          }
          
          
        })
        .catch(error => {
          console.log(error);
        });

    // axios.post(API, {
    //   "input_string": "孫子曰：兵者，國之大事，死生之地，存亡之道，不可不察也。"
    //     }
    // )
    //     .then(response => response.data)
    //     .then((data) => {
    //       this.setState( { apiResult : data } );
    //       console.log( this.state.apiResult )

    //     })
  }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Standard Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Normal
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="secondary">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success">Success</Button>
              </Col>

            </Row>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <strong>Standard Buttons</strong>
          </CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col col="12" xl className="mb-3 mb-xl-0">
                Normal
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="primary">Primary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="secondary">Secondary</Button>
              </Col>
              <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <Button block color="success">Success</Button>
              </Col>

            </Row>
          </CardBody>
        </Card>
 
      </div>

    );
  }
}