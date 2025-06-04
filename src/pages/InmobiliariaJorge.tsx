// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
// import LiquidButton from '../components/LiquidButton/LiquidButton';
import CallButton from '../components/CallButton';

const agentId = 'agent_90fa979c17c710c8479a772147';
const client: ClientAiConnect = 'aiconnect';

export const InmobiliariaJorge = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container app-container-aic">
			<CallButton
				className={isCalling ? 'btn-stopCall threemt' : 'btn-startCall-3mt'}
				isCalling={isCalling}
				label={isLoading ? 'Lamando...' : isCalling ? 'Detener llamada' : 'Pregunta a un experto'}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
