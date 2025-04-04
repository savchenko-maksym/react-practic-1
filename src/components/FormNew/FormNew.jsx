import { Formik, Form, Field } from 'formik';
import s from './FormNew.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

const FormNewSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'too short')
    .max(50, 'too long')
    .required('Required'),
  email: Yup.string().email('must be a valid email').required('Required'),
  feedback: Yup.string()
    .min(2, 'too short')
    .max(250, 'too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  feedback: '',
  level: 'good',
};

const FormNew = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const feedbackFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormNewSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage className={s.errorMsg} name="username" component="span" />
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <ErrorMessage className={s.errorMsg} name="email" component="span" />

        <label htmlFor={feedbackFieldId}>Feedback</label>
        <Field as="textarea" name="feedback" id={feedbackFieldId} rows="5" />
        <ErrorMessage className={s.errorMsg} name="feedback" component="span" />

        <label htmlFor={levelFieldId}>Level of satisfaction</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </Field>
        <ErrorMessage className={s.errorMsg} name="level" component="span" />

        <button className={s.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormNew;
