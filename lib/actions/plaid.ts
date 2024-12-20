import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox, 
    baseOptions: {
        headers: {
            'PLIAD-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLIAD-SECRET': process.env.PLAID_SECRET,
        }
    }
})

export const plaidClient = new PlaidApi(configuration);