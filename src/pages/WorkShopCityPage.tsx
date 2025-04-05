import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';

const agentId = 'agent_135eb156acf01166991e4b8576';

export const WorkShopCityPage = () => {
	const { isCalling, toggleCall } = useCall(agentId);

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
