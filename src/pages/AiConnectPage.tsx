import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentIdEN = 'agent_e4248813362415cbefdb9d61f0';
const agentIdES = 'agent_23c0a869a6160a558f02ca51b2';
const client: ClientAiConnect = 'aiconnect';

export const AiConnectPage = () => {
	const queryParameters = new URLSearchParams(window.location.search);
	const language =
		queryParameters.get('language') === null
			? 'en'
			: queryParameters.get('language') === 'es'
			? 'es'
			: 'en';

	const { isCalling, toggleCall, isLoading } = useCall(
		language === 'en' ? agentIdEN : agentIdES,
		client
	);

	const textColling = language === 'en' ? 'Calling...' : 'Llamando...';
	const textStopCall = language === 'en' ? 'Stop call' : 'Detener llamada';
	const textAskAnExpert = language === 'en' ? 'Ask an expert' : 'Preguntar a un experto';

	return (
		<div className="app-container app-container-aic">
			<CallButton
				isCalling={isCalling}
				label={isLoading ? textColling : isCalling ? textStopCall : textAskAnExpert}
				onClick={isLoading ? () => {} : toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall-aic-pulse neon-pulse'}
			/>
		</div>
	);
};
