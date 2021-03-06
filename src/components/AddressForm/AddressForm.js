import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { createCustomerRecord, redirectToCheckout } from '../../common/api';
import { validationErrorMessages } from '../../common/constants';
import { isValidZipcode } from '../../common/utils';
import { Button } from '../Button';
import LoadingSpinner from '../LoadingSpinner';
import Input from '../Input';
import styles from './AddressForm.module.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
  first: Yup.string()
    .nullable()
    .required(validationErrorMessages.required),
  last: Yup.string()
    .nullable()
    .required(validationErrorMessages.required),
  address1: Yup.string()
    .nullable()
    .required(validationErrorMessages.required),
  address2: Yup.string().nullable(),
  city: Yup.string()
    .nullable()
    .required(validationErrorMessages.required),
  zipcode: Yup.string()
    .nullable()
    .required(validationErrorMessages.required)
    .test('zipcode', validationErrorMessages.zipcode, isValidZipcode),
  specialDeliveryInstructions: Yup.string().nullable(),
});

const initialValues = {
  email: '',
  first: '',
  last: '',
  address1: '',
  address2: '',
  city: '',
  zipcode: '',
  specialDeliveryInstructions: '',
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

    formikBag.setSubmitting(false);
  }
};

const AddressForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.ungroupedInput}>
              <Field
                type="email"
                name="email"
                label="Email*"
                autoComplete="email"
                component={Input}
              />
            </div>

            <div className={styles.fieldGrouping}>
              <Field
                type="text"
                name="first"
                label="First Name*"
                autoComplete="given-name"
                component={Input}
                disabled={isSubmitting}
              />
              <Field
                type="text"
                name="last"
                label="Last Name*"
                autoComplete="family-name"
                component={Input}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.fieldGrouping}>
              <Field
                type="text"
                name="address1"
                label="Street Address*"
                autoComplete="address-line1"
                component={Input}
                disabled={isSubmitting}
              />
              <Field
                type="text"
                name="address2"
                label="Unit / Room Number"
                autoComplete="address-line2"
                component={Input}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.fieldGrouping}>
              <Field
                type="text"
                name="city"
                label="City*"
                autoComplete="address-level2"
                component={Input}
                disabled={isSubmitting}
              />

              <Field
                type="text"
                name="zipcode"
                label="Zipcode*"
                autoComplete="postal-code"
                component={Input}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.ungroupedInput}>
              <Field
                type="text"
                name="specialDeliveryInstructions"
                label="Special Delivery Instructions"
                component={Input}
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.buttonContainer}>
              <Button type="submit" disabled={isSubmitting} theme="secondary">
                {isSubmitting ? <LoadingSpinner /> : 'Continue to Payment'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddressForm;
