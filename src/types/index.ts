export interface RegisterCallResponse {
	ok: boolean;
	msg: string;
	data: CallData;
}

export type ClientAiConnect = '3mt' | 'workshopcity' | 'sellmycar' | 'aiconnect';

interface CallData {
	call_id: string;
	call_type: string;
	agent_id: string;
	call_status: string;
	latency: Latency;
	call_cost: CallCost;
	opt_out_sensitive_data_storage: boolean;
	access_token: string;
}

interface Latency {
	// Puedes definir campos aquí si el backend los incluye en el futuro
}

interface CallCost {
	product_costs: any[]; // Si sabes la estructura, reemplaza 'any' por el tipo correspondiente
	total_duration_unit_price: number;
	total_duration_seconds: number;
	total_one_time_price: number;
	combined_cost: number;
}
