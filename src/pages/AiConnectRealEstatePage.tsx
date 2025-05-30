import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import { useState } from 'react';

const agentId = 'agent_d06683cb7d2ccac1c8e3412377';
const client: ClientAiConnect = 'aiconnect';

export const AiConnectRealEstatePage = () => {
	const [name, setName] = useState('');

	const queryParameters = new URLSearchParams(window.location.search);
	const language =
		queryParameters.get('language') === null
			? 'en'
			: queryParameters.get('language') === 'es'
			? 'es'
			: 'en';

	const { isCalling, toggleCall, isLoading } = useCall(agentId, client, {
		client_name: name,
	});

	const textColling = language === 'en' ? 'Calling...' : 'Llamando...';
	const textStopCall = language === 'en' ? 'Stop call' : 'Detener llamada';
	const textAskAnExpert = language === 'en' ? 'Ask an expert' : 'Preguntar a un experto';

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '20px',
			}}
		>
			<div>
				<input
					style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
					type="text"
					placeholder="Escribe tu nombre para hacer la llamada"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="input"
				/>
			</div>
			<div className="app-container app-container-aic">
				<CallButton
					isCalling={isCalling}
					label={isLoading ? textColling : isCalling ? textStopCall : textAskAnExpert}
					onClick={name === '' ? () => { alert('Ingresa tu nombre') } : isLoading ? () => {} : toggleCall}
					className={isCalling ? 'glow-on glow-on-stop-call' : 'glow-on'}
				/>
			</div>
		</div>
	);
};
