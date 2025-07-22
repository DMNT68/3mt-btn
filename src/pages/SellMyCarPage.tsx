import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentId = 'agent_f5aef7f32aeab5598f50318531';
const client: ClientAiConnect = 'sellmycar';

export const SellMyCarPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container">
			<CallButton
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
				className={isCalling ? 'btn btn-stopCall' : 'btn btn-startCall-smc'}
			/>
		</div>
	);
};
