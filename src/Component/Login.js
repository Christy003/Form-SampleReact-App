import React from 'react';

import '../App.css';
import Button from './Button'
import Label from './Label'
import Text from './Text'
import Component1 from './Context'
function Login(props) {

  return (
    <>  <div className="Login">
    <Label label1="Firstname:" />
    <Text id="Christy" name="Christy" placeholder="Firstname" type="text"/><br/><br/>
    <Label label1="Lastname:" />
    <Text  id="password" name="password" placeholder="Password" type="password"/>
    <Button value12="Submit" />
    <Component1 />
    </div>

    </>
  );
}
export default Login;