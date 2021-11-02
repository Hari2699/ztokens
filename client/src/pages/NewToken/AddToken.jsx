import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/NavB";
import Footer from "../../components/Footer/Footer";
import AddTokenForm from "./AddTokenForm";
import { shortText } from "../../utils/validation";
import classes from "./AddToken.module.css"

const initalFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initalFormError = {
    subject: false,
    issueDate: false,
    detail: false,
  };

const AddToken = () => {
  const [formData, setformData] = useState(initalFormData);
  const [formError, setformError] = useState(initalFormError)

  useEffect(() => {}, [formData, formError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setformError(initalFormError);

    const isSubjectValid = await shortText(formData.subject)

    setformError({
        ...initalFormError,
        subject: !isSubjectValid
    })

    console.log("Submitted Successfully", formData);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.Container}>
        <AddTokenForm
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          formError={formError}
          formData={formData}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddToken;
