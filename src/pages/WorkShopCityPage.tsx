import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';

const agentId = 'agent_04a04b623c46dbe6d96d472a4b';
const client: ClientAiConnect = 'workshopcity';

export const WorkShopCityPage = () => {
	const { isCalling, toggleCall } = useCall(agentId, client);

	return (
		<div className="app-container">
			<CallButton
				isCalling={isCalling}
				label={isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall-wsc'}
			/>
		</div>
	);
};
