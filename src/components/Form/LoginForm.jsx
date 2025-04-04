import Form from './Form';

const LoginForm = () => {
  const handleLogin = userData => {
    console.log(userData);
  };

  return (
    <div>
      <h1>Please login to your account</h1>
      <Form onLogin={handleLogin} />
    </div>
  );
};
export default LoginForm;
