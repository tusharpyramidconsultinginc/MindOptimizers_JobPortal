import React, { useState } from "react";
import Path from "path";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import BorderBox from "../../UI/BorderBox/BorderBox";
import classes from "./Upload.module.css";
import uploadFileToBlob, { isStorageConfigured } from "../../../azureBlob";

const storageConfigured = isStorageConfigured();

const Upload = () => {
  // all blobs in container
  const [blobList, setBlobList] = useState([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));
  const [successAlert, setSuccessAlert] = useState(false);

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setSuccessAlert(true);
    setInputKey(Math.random().toString(36));
  };

  const displaySuccessAlert = () => (
    <Alert variant="primary">File uploaded successfully!</Alert>
  );

  // display form
  const DisplayForm = () => (
    <Row>
      <Col>
        {successAlert ? displaySuccessAlert() : ""}
        <BorderBox className={classes.headingbox}>
          <h1>
            Upload <span className="coloredtitle">Job Description</span>
          </h1>
          <p>
            <em>Please upload .docx file for processing.</em>
          </p>
          <hr className="spaceddivider" />
          <Form onSubmit={onFileUpload}>
            <Row className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Job Description upload</Form.Label>
                <Form.Control
                  type="file"
                  accept=".docx"
                  onChange={onFileChange}
                  key={inputKey || ""}
                />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </BorderBox>
      </Col>
    </Row>
  );

  const displayUploading = () => (
    <Row>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </Row>
  );

  //For testing if we have file in blob
  // display file name and image
  const DisplayImagesFromContainer = () => (
    <Row>
      <Col>
        <div>
          <h2>Total JD available</h2>
          <ul>
            {blobList.map((item) => {
              return (
                <li key={item}>
                  <div>
                    {Path.basename(item)}
                    <br />
                    {/* <img src={item} alt={item} height="200" /> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Col>
    </Row>
  );

  return (
    <div className="nav-margin pageheight">
      <Container>
        <div>
          {storageConfigured && !uploading && DisplayForm()}
          {storageConfigured && uploading && displayUploading()}
          <hr />
          {storageConfigured &&
            blobList.length > 0 &&
            DisplayImagesFromContainer()}
          {!storageConfigured && <div>Storage is not configured.</div>}
        </div>
      </Container>
    </div>
  );
};

export default Upload;
