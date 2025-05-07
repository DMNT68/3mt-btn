// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
// import LiquidButton from '../components/LiquidButton/LiquidButton';
import CallButton from '../components/CallButton';

const agentId = 'agent_1ff50ebd05933bc0be855fb727';
const client: ClientAiConnect = '3mt';

export const ThreeMTPage = () => {
	const { isCalling, toggleCall, isLoading } = useCall(agentId, client);
	const queryParameters = new URLSearchParams(window.location.search);
	const poweredBy =
		queryParameters.get('poweredBy') === null
			? true
			: queryParameters.get('poweredBy') === 'false'
			? false
			: true;
	return (
		<div className="app-container">
			<CallButton
				isLabelPoweredBy={poweredBy ? true : false}
				className={isCalling ? 'btn-stopCall threemt' : 'btn-startCall-3mt'}
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
