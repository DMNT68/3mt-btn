// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
// import LiquidButton from '../components/LiquidButton/LiquidButton';
import CallButton from '../components/CallButton';

const agentId = 'agent_3679b58873fa01661b86fdff83';
const client: ClientAiConnect = 'aiconnect';

export const Abogado = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container app-container-aic">
			<CallButton
				className={isCalling ? 'btn btn-stopCall threemt' : 'btn btn-startCall-3mt'}
				isCalling={isCalling}
				label={isLoading ? 'Llamando...' : isCalling ? 'Detener llamada' : 'Pregunta a un experto'}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
