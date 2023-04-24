import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Cities = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const [modalShow, setModalShow] = React.useState(false);
  
  
    const fetchData = useCallback(async () => {
      try {
        const { data } = await axios.get(
          "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/states",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(data);
      } catch (e) {
        console.log(e);
      }
    }, [token]);
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  
    function MyVerticallyCenteredModal(props) {
      const [country, setCountry] = useState("");
      const [code, setCode] = useState("");
  
  
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/admin/states",
            {
              country , state :code
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(data);
          toast.success("Added");
          props.onHide();
          fetchData();
        } catch (e) {
          console.log(e);
          toast.success(e?.response?.data?.message)
        }
      };
  
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Country
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
              <Form onSubmit={postHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control type='text' min={0} onChange={(e) => setCode(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type='text' min={0} onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <Button
                  style={{ backgroundColor: "#19376d", borderRadius: "0" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
         
          </Modal.Body>
        </Modal>
      );
    }
  
    const deleteHandler = async (id) => {
      try {
        const { data } = await axios.delete(
          `http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/admin/states/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        fetchData();
        toast.success("Deleted");
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
  
        <section>
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              All States ( Total : {data?.data?.length} )
            </span>
  
            <button
              onClick={() => {
                setModalShow(true);
              }}
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
            >
              Add State
            </button>
          </div>
  
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Number</th>
                <th>State</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td>#{index + 1} </td>
                  <td>{i.state}</td>
                  <td> {i.country} </td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => deleteHandler(i._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </>
    );
  };

export default HOC(Cities)