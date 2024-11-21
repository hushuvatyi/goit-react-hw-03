import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `The "Name" is too short!`)
    .max(50, `The "Name" is too long!`)
    .required('The "Name" is required field!'),
  number: Yup.string()
    .min(3, `The "Number" is too short!`)
    .max(50, `The "Number" is too long!`)
    .required('The "Number" is required field!'),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: contactId };
    onAdd(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={s.formContact}>
          <label className={s.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <div className={s.formInputWrapper}>
            <Field
              className={s.formInput}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={s.formErrorMessage}
              name="name"
              component="div"
            />
          </div>

          <label className={s.formLabel} htmlFor={numberFieldId}>
            Number
          </label>
          <div className={s.formInputWrapper}>
            <Field
              className={s.formInput}
              type="tel"
              inputMode="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={s.formErrorMessage}
              name="number"
              component="div"
            />
          </div>

          <button
            className={s.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
