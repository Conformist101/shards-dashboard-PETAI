import React from "react";
import PropTypes from "prop-types";
// import { ListGroupItem, Slider } from "shards-react";
// import './ImagePosition.css';

import {
  Row, 
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";


const Discussions = ({ title, discussions }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
	
      <Form className="quick-post-form">
        
        {/* Body */}
        <div>
          <img src={discussions.image} width ="500" alt="N/A"  object-fit="cover" class="center"/>
        </div>
		 </Form>
         <CardFooter className="border-top">
        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Display Hough Transformation
          </Button>
        </FormGroup>
      </CardFooter>
    </CardBody>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Hough transform of Image",
  discussions: [
    {
      image : require("../../images/placeholder-image.png"),
    }
  ]
};

export default Discussions;
