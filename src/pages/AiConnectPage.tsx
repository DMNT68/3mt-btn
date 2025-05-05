import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentId = 'agent_e4248813362415cbefdb9d61f0';
const client: ClientAiConnect = 'aiconnect';

export const AiConnectPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container app-container-aic">
			<CallButton
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall-aic'}
			/>
		</div>
	);
};
