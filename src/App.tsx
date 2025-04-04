import  { useEffect, useState } from 'react';
import './App.css';
import { RetellWebClient } from 'retell-client-js-sdk';

const agentId = 'agent_135eb156acf01166991e4b8576';

export interface RegisterCallResponse {
	ok: boolean;
	msg: string;
	data: Data;
}

export interface Data {
	call_id: string;
	call_type: string;
	agent_id: string;
	call_status: string;
	latency: Latency;
	call_cost: CallCost;
	opt_out_sensitive_data_storage: boolean;
	access_token: string;
}

export interface CallCost {
	product_costs: any[];
	total_duration_unit_price: number;
	total_duration_seconds: number;
	total_one_time_price: number;
	combined_cost: number;
}

export interface Latency {}

const retellWebClient = new RetellWebClient();

const App = () => {
	const [isCalling, setIsCalling] = useState(false);

	// Initialize the SDK
	useEffect(() => {
		retellWebClient.on('call_started', () => {
			console.log('call started');
		});

		retellWebClient.on('call_ended', () => {
			console.log('call ended');
			setIsCalling(false);
		});

		// When agent starts talking for the utterance
		// useful for animation
		retellWebClient.on('agent_start_talking', () => {
			console.log('agent_start_talking');
		});

		// When agent is done talking for the utterance
		// useful for animation
		retellWebClient.on('agent_stop_talking', () => {
			console.log('agent_stop_talking');
		});

		// Real time pcm audio bytes being played back, in format of Float32Array
		// only available when emitRawAudioSamples is true
		retellWebClient.on('audio', (_audio) => {
			// console.log(audio);
		});

		// Update message such as transcript
		// You can get transcrit with update.transcript
		// Please note that transcript only contains last 5 sentences to avoid the payload being too large
		retellWebClient.on('update', (_update) => {
			// console.log(update);
		});

		retellWebClient.on('metadata', (_metadata) => {
			// console.log(metadata);
		});

		retellWebClient.on('error', (error) => {
			console.error('An error occurred:', error);
			// Stop the call
			retellWebClient.stopCall();
		});
	}, []);

	const toggleConversation = async () => {
		if (isCalling) {
			retellWebClient.stopCall();
		} else {
			const { data } = await registerCall(agentId);
			if (data.access_token) {
				retellWebClient
					.startCall({
						accessToken: data.access_token,
					})
					.catch(console.error);
				setIsCalling(true); // Update button to "Stop" when conversation starts
			}
		}
	};

	async function registerCall(agentId: string): Promise<RegisterCallResponse> {
		try {
			const urlBase = 'http://82.180.161.223:4000';
			// Update the URL to match the new backend endpoint you created
			const response = await fetch(`${urlBase}/api/aiconnect/3mt`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					agent_id: agentId,
				}),
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const data: RegisterCallResponse = await response.json();
			console.log('-->', { data });
			return data;
		} catch (err) {
			console.log('error', err);
			throw new Error(err instanceof Error ? err.message : String(err));
		}
	}

	return (
		<button className={isCalling ? 'btn-stopCall' : 'btn-startCall'} onClick={toggleConversation}>
			{isCalling ? 'stop call' : 'Ask an expert'}
		</button>
	);
};

export default App;
