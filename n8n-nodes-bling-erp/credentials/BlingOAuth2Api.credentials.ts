import type {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BlingOAuth2Api implements ICredentialType {
	name = 'blingOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Bling OAuth2 API';

	documentationUrl = 'https://developer.bling.com.br/aplicativos';

	icon = 'file:../nodes/Bling/bling.svg' as const;

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://bling.com.br/Api/v3/oauth/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://bling.com.br/Api/v3/oauth/token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: 'response_type=code',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
	];
}
