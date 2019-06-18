import React from 'react';
import { Field, Form, Formik } from 'formik';

import { createCustomerRecord, redirectToCheckout } from '../../common/api';
import { Button } from '../Button';
import Input from '../Input';

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
  } catch (error) {
    console.error('Error on form submission', error);
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
              label="Street Address"
              autoComplete="address-line1"
              component={Input}
            />
            <Field
              type="text"
              name="address2"
              label="Unit / Room Number"
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

            <Button type="submit" disabled={isSubmitting}>
              Continue to Payment
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
