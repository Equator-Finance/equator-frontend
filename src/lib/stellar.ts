import { Horizon } from '@stellar/stellar-sdk';

export const STELLAR_TESTNET_URL = 'https://horizon-testnet.stellar.org';
export const server = new Horizon.Server(STELLAR_TESTNET_URL);

export async function fetchAccountBalance(publicKey: string) {
  try {
    const account = await server.loadAccount(publicKey);
    return account.balances;
  } catch (error) {
    console.error('Error loading Stellar account:', error);
    return [];
  }
}
