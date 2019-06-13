import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createCustomerRecord, redirectToCheckout } from '../../common/api';

const initialValues = {
  email: '',
  first: '',
  last: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: '',
};

const onSubmit = async (values, formikBag) => {
  try {
    const { id } = await createCustomerRecord(values);
    formikBag.setSubmitting(false);

    await redirectToCheckout({
      clientReferenceId: id,
      customerEmail: values.email,
    });

  } catch (ex) {
    console.error('Error on form submission', ex);
    // TODO: Display error
    formikBag.setSubmitting(false);
  }
};

const AddressForm = () => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              label="Email"
              autoComplete="email"
              component={Input}
            />
            <Field
              type="text"
              name="first"
              label="First Name"
              autoComplete="given-name"
              component={Input}
            />
            <Field
              type="text"
              name="last"
              label="Last Name"
              autoComplete="family-name"
              component={Input}
            />
            <Field
              type="text"
              name="address1"
              label="Address 1"
              autoComplete="address-line1"
              component={Input}
            />
            <Field
              type="text"
              name="address2"
              label="Address 2"
              autoComplete="address-line2"
              component={Input}
            />
            <Field
              type="text"
              name="city"
              label="City"
              autoComplete="address-level2"
              component={Input}
            />
            <Field
              type="text"
              name="state"
              label="State"
              autoComplete="address-level1"
              component={Input}
            />
            <Field
              type="text"
              name="zipcode"
              label="Zipcode"
              autoComplete="postal-code"
              component={Input}
            />

            <button type="submit" disabled={isSubmitting}>
              Continue to Payment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const Input = ({
  field: { name, value, ...field },
  label,
  id,
  type,
  ...props
}) => (
  <div>
    <label>{label}</label>
    <input
      {...field}
      {...props}
      type={type}
      name={name}
      id={name}
      value={value}
    />
    <ErrorMessage name={name} component="div" />
  </div>
);

export default AddressForm;
