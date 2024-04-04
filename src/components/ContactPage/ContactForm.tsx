"use client";
import Button from "@/components/UI/Buttons/Button";
import Input from "@/components/UI/Inputs/Input";
import { Formik } from "formik";

export default function ContactForm() {
  function handleSubmit(values: any, { setSubmitting, resetForm }: any) {
    console.log(values);
    setSubmitting(false);
    resetForm();
  }
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validate={(values) => {
        const errors = {} as any;
        if (!values.name) {
          errors.name = "Can’t be empty";
        }
        if (!values.email) {
          errors.email = "Can’t be empty";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.phone) {
          errors.phone = "Can’t be empty";
        }
        if (!values.message) {
          errors.message = "Can’t be empty";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 items-center md:items-end px-6 md:px-[58px] lg:px-0 pb-[72px] lg:pb-0"
        >
          <div className="w-full lg:w-[380px] flex flex-col gap-6">
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name"
              errorMessage={
                errors.name && touched.name ? errors.name : undefined
              }
            ></Input>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              errorMessage={
                errors.email && touched.email ? errors.email : undefined
              }
            ></Input>
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="Phone"
              errorMessage={
                errors.phone && touched.phone ? errors.phone : undefined
              }
            ></Input>
            <Input
              Container="textarea"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              placeholder="Your Message"
              rows="4"
              errorMessage={
                errors.message && touched.message ? errors.message : undefined
              }
            ></Input>
          </div>

          <Button $type="3" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
