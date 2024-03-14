export async function fetchEthereumAnalysis() {
  const response = await fetch('/api/ethereum-analysis');
  return response.json();
}