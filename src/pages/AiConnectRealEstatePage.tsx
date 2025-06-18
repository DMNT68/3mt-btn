import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import { useState } from 'react';

const agentId = 'agent_c2786b37cc68eb9b4c1ba2710d';
const client: ClientAiConnect = 'aiconnect';

export const AiConnectRealEstatePage = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const queryParameters = new URLSearchParams(window.location.search);
	const language =
		queryParameters.get('language') === null
			? 'en'
			: queryParameters.get('language') === 'es'
			? 'es'
			: 'en';

	const { isCalling, toggleCall, isLoading } = useCall(agentId, client, {
		client_name: form.name,
		client_email: form.email,
		client_phone: form.phone,
	});

	const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

	const onClick = () => {
		if (form.name === '' && form.email === '' && form.phone === '') {
			alert(textAlert);
		} else if (isLoading) {
			() => {};
		} else {
			toggleCall();
		}
	};

	const textColling = language === 'en' ? 'Calling...' : 'Llamando...';
	const textStopCall = language === 'en' ? 'Stop call' : 'Detener llamada';
	const textAskAnExpert = language === 'en' ? 'Ask an expert' : 'Preguntar a un experto';
	const textAlert = language === 'en' ? 'Fill all the fields' : 'Llenar todos los campos';
	const textName = language === 'en' ? 'Name' : 'Nombre';
	const textEmail = language === 'en' ? 'Email' : 'Correo';
	const textPhone = language === 'en' ? 'Phone' : 'Teléfono';

	return (
		<div className="container-realestate">
			<div className="form">
				<input
					className="input-form"
					type="text"
					placeholder={textName}
					name="name"
					value={form.name}
					onChange={onChange}
				/>
				<input
					className="input-form"
					type="email"
					placeholder={textEmail}
					name="email"
					value={form.email}
					onChange={onChange}
				/>
				<input
					className="input-form"
					type="text"
					placeholder={textPhone}
					name="phone"
					value={form.phone}
					onChange={onChange}
				/>
			</div>
			<div className="app-container app-container-aic">
				<CallButton
					isCalling={isCalling}
					label={isLoading ? textColling : isCalling ? textStopCall : textAskAnExpert}
					onClick={onClick}
					className={isCalling ? 'btn glow-on glow-on-stop-call' : 'btn glow-on'}
				/>
			</div>
		</div>
	);
};
