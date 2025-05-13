import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentId = 'agent_e50d99d6ba77488de284abacd4';
const client: ClientAiConnect = 'workshopcity';

export const WorkShopCityPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);

	return (
		<div className="app-container">
			<CallButton
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall-wsc'}
			/>
		</div>
	);
};
