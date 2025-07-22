// import CallButton from '../components/CallButton';
import { useCall } from '../hooks/useCall';
import '../assets/styles.css';
import { ClientAiConnect } from '../types';
// import LiquidButton from '../components/LiquidButton/LiquidButton';
import CallButton from '../components/CallButton';

const agentId = 'agent_298f2b0de337af508f34c3776a';
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
				className={isCalling ? 'btn btn-stopCall threemt' : 'btn btn-startCall-3mt'}
				isCalling={isCalling}
				label={isLoading ? 'Calling...' : isCalling ? 'Stop call' : 'Ask an expert'}
				onClick={isLoading ? () => {} : toggleCall}
			/>
		</div>
	);
};
