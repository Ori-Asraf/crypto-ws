import cryptoStore from "../database/cryptoStore";

let state = false;

const connect = (endpoint: string | URL) => {
  return new Promise((resolve, reject) => {
    try {
      const ws = new WebSocket(endpoint);

      ws.onopen = () => {
        resolve(ws);
      };
    } catch (err) {
      reject(false);
    }
  });
};

const listen = async (endpoint: string | URL) => {
  const process: any = await connect(endpoint);

  state = !state;

  if (!process) return;

  process.onmessage = (e: any) => {
    if (!state) {
      process.close();
      return;
    }

    if (e.data) {
      const resolved_data = JSON.parse(e.data);
      const coin = resolved_data["s"].toLowerCase();

      cryptoStore.receiveUpdate(coin, resolved_data);
    }
  };
};

export default listen;
