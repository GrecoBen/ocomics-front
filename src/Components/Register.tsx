import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

// Fonction appelée lorsque le formulaire est soumis avec succès
const onFinish = (values: any) => {
  console.log('Success:', values);
};

// Fonction appelée lorsque la soumission du formulaire échoue
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

// Définition des types de champs pour le formulaire
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

// Composant Register qui affiche le formulaire d'inscription
const Register: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish} // Appel de la fonction lorsque le formulaire est soumis avec succès
    onFinishFailed={onFinishFailed} // Appel de la fonction lorsque la soumission échoue
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default Register;