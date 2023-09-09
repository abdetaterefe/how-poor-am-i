import {
	VITE_GOOGLE_SHEET_ID,
	VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
	VITE_GOOGLE_PRIVATE_KEY
} from '$env/static/private';
import type { PageServerLoad } from './$types';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export const load = (async () => {
	const transactions: { isDebit: string; balance: string; tBalance: string; emailDate: string }[] =
		[];
	const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

	const jwt = new JWT({
		email: VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
		key: VITE_GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
		scopes: SCOPES
	});

	const doc = new GoogleSpreadsheet(VITE_GOOGLE_SHEET_ID, jwt);
	await doc.loadInfo();

	const sheet = doc.sheetsByIndex[0];
	const rows = await sheet.getRows();

	for (let i = 0; i <= 2; i++) {
		const isDebit = rows[i].get('Is Debit');
		const balance = rows[i].get('Balance');
		const tBalance = rows[i].get('Total Balance');
		const emailDate = rows[i].get('Email Date');
		transactions[i] = { isDebit, balance, tBalance, emailDate };
	}
	return { transactions };
}) satisfies PageServerLoad;
