import React, { Component } from 'react'; // lazy, Suspense 
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

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
    this.axiosPost();
  }

  axiosPost = () => {
    axios
      .post(API, {
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
  }

  buttonsCard = () => {
    return (
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
    );
  }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        {this.buttonsCard()}

        <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Text Input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                {/* <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button> */}
              </CardFooter>
            </Card>
       
      </div>

    );
  }
}