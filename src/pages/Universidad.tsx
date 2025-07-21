// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
// import LiquidButton from '../components/LiquidButton/LiquidButton';
import CallButton from '../components/CallButton';

const agentId = 'agent_024c8cd142bff7db044d085aa9';
const client: ClientAiConnect = 'aiconnect';

export const Universidad = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container app-container-aic">
			<CallButton
				className={isCalling ? 'btn btn-stopCall threemt' : 'btn btn-startCall-universidad'}
				isCalling={isCalling}
				label={
					isLoading
						? 'Llamando...'
						: isCalling
						? 'Detener llamada'
						: 'Conversa con tu asesor de admisión IA'
				}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
