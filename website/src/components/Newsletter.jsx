import { Send } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import swal from "sweetalert";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');

  const onSubscribe = () => {
    if(email !== ""){
      swal('Evelyn Store', `Thanks for subscribing to News Letter (${email})`, 'success');
    }
  }

  const onMessage = () => {
    if(message !== ""){
      const number = 265991444573;
      const text = encodeURI(message);
      window.open(`https://wa.me/${number}?text=${text}`, "_blank")
    }
   
  }
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} />
        <Button>
          <Send  onClick={onSubscribe} />
        </Button>
      </InputContainer>
      <br/><br/><br/>
      <br/><br/><br/>
      <br/><br/><br/>
      <Title>Send Us a Message</Title>
      <Desc>Get in touch with us instantly on Whatsapp</Desc>
      <InputContainer>
        <Input placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
        <Button>
          <Send  onClick={onMessage} />
        </Button>
      </InputContainer>
      <br/><br/><br/>
    </Container>
  );
};

export default Newsletter;
