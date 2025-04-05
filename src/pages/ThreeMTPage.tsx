import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';

const agentId = 'agent_135eb156acf01166991e4b8576';

export const ThreeMTPage = () => {
	const { isCalling, toggleCall } = useCall(agentId);

	return (
		<div className="app-container">
			<CallButton
				label={isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={toggleCall}
				className={isCalling ? 'btn-stopCall' : 'btn-startCall'}
			/>
		</div>
	);
};
