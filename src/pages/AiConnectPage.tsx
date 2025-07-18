import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import { useState } from 'react';

const agentIdEN = 'agent_e4248813362415cbefdb9d61f0';
const agentIdES = 'agent_23c0a869a6160a558f02ca51b2';
const client: ClientAiConnect = 'aiconnect';

export const AiConnectPage = () => {
	const [selecLanguage, setSelecLanguage] = useState('es');

	// const queryParameters = new URLSearchParams(window.location.search);
	// const language =
	// 	queryParameters.get('language') === null
	// 		? 'en'
	// 		: queryParameters.get('language') === 'es'
	// 		? 'es'
	// 		: 'en';

	const { isCalling, toggleCall, isLoading } = useCall(
		selecLanguage === 'en' ? agentIdEN : agentIdES,
		client
	);

	const textColling = selecLanguage === 'en' ? 'Calling...' : 'Llamando...';
	const textStopCall = selecLanguage === 'en' ? 'Stop call' : 'Detener llamada';
	const textAskAnExpert = selecLanguage === 'en' ? 'Ask an expert' : 'Prueba a nuestro agente IA';

	return (
		<>
			<div className="select-container">
				<label htmlFor="language-select" className="select-label">
					Choose your language:
				</label>
				<select
					name="language"
					id="language-select"
					className="select-dark"
					onChange={(e) => setSelecLanguage(e.target.value)}
				>
					<option value="es">Español (es)</option>
					<option value="en">English (en)</option>
				</select>
			</div>
			<div className="app-container app-container-aic">
				<CallButton
					isCalling={isCalling}
					label={isLoading ? textColling : isCalling ? textStopCall : textAskAnExpert}
					onClick={isLoading ? () => {} : toggleCall}
					className={isCalling ? 'btn glow-on glow-on-stop-call' : 'btn glow-on'}
				/>
			</div>
		</>
	);
};
