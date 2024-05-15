import { Button, Col, Form, FormGroup, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowData } from '../../Reduxtoolkit/slice/homeslice';
import * as formik from 'formik';
import * as yup from 'yup';
import style from "../../StyleComponent/Login.module.scss";
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setShowData(false));
  const { isshow } = useSelector((state) => state.inputFieldSlice);
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
const handleSubmit=(e)=>{
  e.preventDeafault();
  console.log(e)
}
  return (
    <Modal show={isshow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login here...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik102"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                  />

                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <FormGroup className={style.forgot_pass}>
                <Button variant="link">Forgot Password</Button>
             
                </FormGroup>
                <FormGroup  as={Col}
                 
                  className={`${style.cardwrapper} position-relative `}
                  >
                <Button type="submit">Submit form</Button>

                </FormGroup>
                <FormGroup className={style.spandata}>
                <Button variant="link">New user? </Button><span> Create an account now!</span> 

                    </FormGroup>
              </Row>

             
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};
export default LoginPage;
