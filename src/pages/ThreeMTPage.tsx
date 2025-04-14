// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import LiquidButton from '../components/LiquidButton/LiquidButton';

const agentId = 'agent_1ff50ebd05933bc0be855fb727';
const client: ClientAiConnect = '3mt';

export const ThreeMTPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);
	return (
		<div className="app-container">
			<LiquidButton
				text={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
