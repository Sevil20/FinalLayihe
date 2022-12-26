import React, { useState } from 'react';
import axios from 'axios';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './SignupStyles';
import { Container } from '../../GlobalStyles';
import SignupDataform from '../Signup/SignupDataform';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [data,setData] = useState('');
	const[setemail , setCheckEmail] = useState(name)

	const handleChange = (e) =>{
		const resultError = SignupDataform({ name, email, password, confirmPass });
		if (resultError == null) {
			setCheckEmail(resultError);
			return;
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = SignupDataform({ name, email, password, confirmPass });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPassword('');
		setConfirmPass('');
		setError(null);
		setSuccess('Application was submitted! ');
		setData(<a style={{textDecoration:'none',color:'red',marginLeft:'10px'}} href="mailto:nowhere@mozilla.org" onClick={handleChange}>Check your email</a>
		)
		
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};
	 const SendEmail = async ({
		name,
		email,
		password,
		success,
		setSend,
	  }) => {
		try {
		  const datas = { name, email, password, success };
		  let res = await axios.post(`http://localhost:5174/send`, datas);
		  if (res) {
			setSend(res.data);
			SendEmail(res.name);
		  }
		} catch (error) {
		  alert(error.response.data.message);
		}
	  };
	   const SendMessage = async ({
		name,
		email,
		password,
		success,
		setSend,
	  }) => {
		try {
		  const datas = { name, email, password, success };
		  let res = await axios.post(`${URL}/send`, datas);
		  if (res) {
			setSend(res.data);
			SendEmail(res.name);

		  }
		} catch (error) {
		  alert(error.response.data.msg);
		}
	  };
	const Dataform = [
		{ label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
		{
			label: 'Password',
			value: password,
			onChange: (e) => setPassword(e.target.value),
			type: 'password',
		},
		{
			label: 'Confirm Password',
			value: confirmPass,
			onChange: (e) => setConfirmPass(e.target.value),
			type: 'password',
		},
	];
	
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Sign up</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{Dataform.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Signup</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
								{data  } 
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Signup;
