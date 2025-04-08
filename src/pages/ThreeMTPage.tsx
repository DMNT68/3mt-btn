// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
import LiquidButton from '../components/LiquidButton/LiquidButton';

const agentId = 'agent_135eb156acf01166991e4b8576';
const client: ClientAiConnect = '3mt';

export const ThreeMTPage = () => {
	const { isCalling, toggleCall } = useCall(agentId, client);

	return (
		<div className="app-container">
			<LiquidButton text={isCalling ? 'Stop call' : 'Ask an expert'} onClick={toggleCall} />
		</div>
	);
};
