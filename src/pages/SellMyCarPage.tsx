import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentId = 'agent_29916533bf18195fbf6342b612';
const client: ClientAiConnect = 'sellmycar';

export const SellMyCarPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container">
			<CallButton
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall-smc'}
			/>
		</div>
	);
};
