/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button, Container } from "react-bootstrap";

const Astrologers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [viewModal, setViewModal] = useState(false);

  // Add Astrologer
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{textTransform : 'uppercase'}}>
            Add Astrologer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expert Tag</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price per min</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discounted Price per min</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expertise</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Min. of consultation</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Commission</Form.Label>
              <Form.Control type="number" min={0} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>About</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // View Astrolger
  function ViewModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{textTransform : 'uppercase'}}>
            View Astrologer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <p className="View">
              {" "}
              <strong>Name </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Expert Tag </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Description </strong> : Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry'sstandard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Language </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Experience</strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Rating</strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Price per min </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong>Discounted Price per min</strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Expertise </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Skills </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Min. of consultation </strong> : Demo{" "}
            </p>
            <p className="View">
              {" "}
              <strong> Commission</strong> : $100{" "}
            </p>
            <p className="View">
              {" "}
              <strong> About</strong> : Demo{" "}
            </p>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  const Lorem =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type";

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ViewModal show={viewModal} onHide={() => setViewModal(false)} />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Parcels
          </span>
        </div>

        <div className="wcomp overflow-x-auto">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Number</th>
                <th>Customer</th>
                <th>Shipping From </th>
                <th>Shipping To</th>
                <th>Quote Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>#1</td>
              <td>Neymar</td>
              <td>India 110037 New Delhi</td>
              <td>Austraila 3075 Northcote vict</td>
              <td>255 March, 2023</td>
                <td>
                  <span className="d-flex gap-2">
                    <i className="fa-solid fa-trash" />
                    <i
                      className="fa-sharp fa-solid fa-eye"
                      onClick={() => setViewModal(true)}
                    ></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Astrologers);
