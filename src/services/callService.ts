import { ClientAiConnect, RegisterCallResponse } from '../types';


const urlBase = 'https://aiconnect.flec-ec.com';

/**
 * Registra una nueva llamada con el agente de Retell
 * @param agentId ID del agente con el que se quiere iniciar la llamada
 * @returns Información de la llamada registrada
 */
export async function registerCall(
	agentId: string,
	client: ClientAiConnect
): Promise<RegisterCallResponse> {
	try {
		const response = await fetch(`${urlBase}/api/aiconnect/${client}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ agent_id: agentId }),
		});

		if (!response.ok) {
			throw new Error(`Error en la llamada al backend: ${response.status}`);
		}

		const data: RegisterCallResponse = await response.json();
		// console.log('[registerCall] ✅ Call registered:', data);
		return data;
	} catch (err) {
		console.error('[registerCall] ❌ Error:', err);
		throw new Error(err instanceof Error ? err.message : String(err));
	}
}
