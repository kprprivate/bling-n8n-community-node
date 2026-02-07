import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IPollFunctions,
	IHttpRequestMethods,
	IRequestOptions,
	IDataObject,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

const BASE_URL = 'https://api.bling.com.br/Api/v3';

export async function blingApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject> {
	const options: IRequestOptions = {
		method,
		uri: `${BASE_URL}${endpoint}`,
		qs,
		body,
		json: true,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	try {
		const response = await this.helpers.requestOAuth2.call(
			this,
			'blingOAuth2Api',
			options,
		);
		return response as IDataObject;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function blingApiRequestAllItems(
	this: IExecuteFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	const allItems: IDataObject[] = [];
	let page = 1;
	const limit = 100;

	qs.limite = limit;

	do {
		qs.pagina = page;
		const response = await blingApiRequest.call(this, method, endpoint, body, qs);

		const data = (response.data as IDataObject[]) || [];
		allItems.push(...data);

		if (data.length < limit) {
			break;
		}

		page++;
		// Rate limit: Bling allows ~3 req/s
		await new Promise((resolve) => setTimeout(resolve, 340));
	} while (true);

	return allItems;
}
