// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import LiquidButton from '../components/LiquidButton/LiquidButton';

const agentId = 'agent_3badf23c0c8c79c15b4f9d8139';
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
