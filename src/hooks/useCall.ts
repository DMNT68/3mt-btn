import { useEffect, useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { registerCall } from '../services/callService';

const retellWebClient = new RetellWebClient();

export const useCall = (agentId: string) => {
	const [isCalling, setIsCalling] = useState(false);

	useEffect(() => {
		retellWebClient.on('call_started', () => {
			console.log('call started');
		});

		retellWebClient.on('call_ended', () => {
			console.log('call ended');
			setIsCalling(false);
		});

		// Otros eventos...

		retellWebClient.on('error', (error) => {
			console.error('An error occurred:', error);
			retellWebClient.stopCall();
		});
	}, []);

	const toggleCall = async () => {
		if (isCalling) {
			retellWebClient.stopCall();
		} else {
			const { data } = await registerCall(agentId);
			if (data.access_token) {
				await retellWebClient.startCall({ accessToken: data.access_token });
				setIsCalling(true);
			}
		}
	};

	return { isCalling, toggleCall };
};
