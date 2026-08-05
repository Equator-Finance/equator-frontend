import { isConnected, getPublicKey } from '@stellar/freighter-api';

export async function checkFreighterConnection(): Promise<boolean> {
  return await isConnected();
}

export async function getFreighterAddress(): Promise<string | null> {
  const connected = await isConnected();
  if (!connected) return null;
  return await getPublicKey();
}
