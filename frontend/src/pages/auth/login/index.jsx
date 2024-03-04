import { Flex, Form } from "antd";
import { Link } from "react-router-dom";
import {
  // Description,
  MessageContainer,
  // LinkBox,
  LoginForm,
  SubmitButton,
  Title,
  Text,
} from "./styles";
import { useEffect, useState } from "react";
import { Helmet, Toast, TextField } from "../../../components";
// import { setLoading } from '~/store/slices/auth'

const Login = () => {
  //   const dispatch = useDispatch()
  //   const [Login, { isLoading }] = useLoginMutation()
  const [form] = Form.useForm();
  const [error, setError] = useState(false);
  //   if (isLoading) {
  //     dispatch(setLoading(true))
  //   }
  useEffect(() => {
    if (error) {
      setInterval(() => setError(false), 5000);
    }
  }, [error]);
  const handleSubmit = (value) => {
    // if (values.username !== '' && values.password !== '') {
    //   Login({
    //     username: values.username,
    //     password: values.password,
    //     // client_id: import.meta.env.VITE_client_id,
    //     client_id: 4,
    //     client_secret: '7to1BNC1e6iHHkn46kG9RM5WdReQoUtzkBp2jrjr',
    //     // client_secret: import.meta.env.VITE_client_secret,
    //     grant_type: 'password'
    //   })
    //     .unwrap()
    //     .then(() => {
    //       dispatch(setLoading(false))
    //     })
    //     .catch(() => {
    //       setError(true)
    //       dispatch(setLoading(false))
    //     })
    // } else {
    //   setError(true)
    // }
  };

  useEffect(() => {
    form.submit();
  }, []);

  return (
    <div>
      <Helmet title="Teach Me" />
      <Title level={1}>Log In</Title>
      <LoginForm layout="vertical" form={form} onFinish={handleSubmit}>
        {error && (
          <MessageContainer>
            <Toast
              type="error"
              message="The info entered doesn't match our records. Please try again or select Forget Username or Password."
            />
          </MessageContainer>
        )}
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email"
          name="email"
          autoComplete="off"
        />
        <TextField
          required
          type="password"
          message="Password  is Required!"
          placeholder="Enter your Password"
          label="Password"
          name="password"
          autoComplete="off"
        />
        <SubmitButton block type="primary" htmlType="submit">
          Sign In
        </SubmitButton>
        <Text>
          Don&apos;t have an account?
          <Flex vertical>
            <Link to="/register/student">Sign Up as Student</Link>
            <Link to="/register/teacher">Sign Up as Teacher</Link>
          </Flex>
        </Text>
      </LoginForm>
    </div>
  );
};

export default Login;
