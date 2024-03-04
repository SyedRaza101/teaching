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
import {
  Helmet,
  Toast,
  TextField,
  InputNumber,
  CustomSelect,
} from "../../../components";
// import { setLoading } from '~/store/slices/auth'

const departmentOptions = [
  { label: "Software", value: "Software" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Physics", value: "Physics" },
  { label: "Chemistry", value: "Chemistry" },
  { label: "Electrical", value: "Electrical" },
  { label: "Mechanical", value: "Mechanical" },
  { label: "Industrial Management", value: "Industrial Management" },
];

const Register = ({ isTeacher }) => {
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

  return (
    <div>
      <Helmet title="Teach Me" />
      <Title level={1}>Sign Up</Title>
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
          message=" Name is Required!"
          placeholder="Enter your Name"
          label="Name"
          name="email"
          autoComplete="off"
        />
        <TextField
          required
          message=" Email is Required!"
          placeholder="Enter your Email"
          label="Email Address"
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
        <TextField
          required
          type="password"
          message="Confirm Password  is Required!"
          placeholder="Enter your Confirm Password"
          label="Confirm Password"
          name="confirm_password"
          autoComplete="off"
        />
        {isTeacher ? (
          <TextField
            required
            message=" Teacher ID is Required!"
            placeholder="Enter your Teacher ID"
            label="Teacher ID"
            name="teacher_id"
            autoComplete="off"
          />
        ) : (
          <TextField
            required
            message=" Student ID is Required!"
            placeholder="Enter your Student ID"
            label="Student ID"
            name="student_id"
            autoComplete="off"
          />
        )}
        <CustomSelect
          label="Department"
          placeholder="Enter your Department"
          name="department"
          options={departmentOptions}
          message="Department is Required!"
          required
        />
        {isTeacher && (
          <>
          <TextField
            required
            message=" Course is Required!"
            placeholder="Enter your Course"
            label="Course"
            name="course"
            autoComplete="off"
          />
            <InputNumber
              label="Price"
              placeholder="Enter your Price"
              name="price"
              message="Price is Required!"
              required
              isBorder
            />
            <TextField
              required
              message=" Grade is Required!"
              placeholder="Enter your Grade"
              label="Grade"
              name="grade"
              autoComplete="off"
            />
          </>
        )}

        <InputNumber
          label="Phone No"
          placeholder="Enter your Phone Number"
          name="phone"
          maxLength={14}
          message="Phone Number is Required!"
          required
          isBorder
        />
        <SubmitButton block type="primary" htmlType="submit">
          Sign Up
        </SubmitButton>
        <Text>
          Already have an account?
          <Link to="/login"> Login</Link>
        </Text>
      </LoginForm>
    </div>
  );
};

export default Register;
