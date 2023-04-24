/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";

const Banners = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/admin/offer",
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
    const [image, setImage] = useState("");

    const postDetails = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/admin/offer",
          { image },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        toast.success("Added");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => postDetails(e)} />
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
        const { data } = await axios.delete(`ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:7777/api/v1/admin/offer/${id}`)
        console.log(data)
        toast.success

    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banner
          </span>
          <Button
            style={{ backgroundColor: "#19376d", borderRadius: "0" }}
            onClick={() => {
              setModalShow(!modalShow);
            }}
          >
            Add-Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {data?.offer?.map((i, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-body">
                <img
                  src={i.image}
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
                <div>
                  <Button
                    style={{
                      backgroundColor: "#d4281c",
                      border: "1px solid #d4281c",
                      borderRadius: "0",
                      width: "100%",
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HOC(Banners);
