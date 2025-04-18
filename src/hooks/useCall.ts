import { useEffect, useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { registerCall } from '../services/callService';
import { ClientAiConnect } from '../types';

const retellWebClient = new RetellWebClient();

export const useCall = (agentId: string, client: ClientAiConnect) => {
	const [isCalling, setIsCalling] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		retellWebClient.on('call_started', () => {
			// console.log('call started');
		});

		retellWebClient.on('call_ended', () => {
			// console.log('call ended');
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
			setIsLoading(true);
			const { data } = await registerCall(agentId, client);
			if (data.access_token) {
				await retellWebClient.startCall({ accessToken: data.access_token });
				setIsCalling(true);
			}
			setIsLoading(false);
		}
	};

	return { isCalling, toggleCall, isLoading };
};
