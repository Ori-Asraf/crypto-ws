import { get, writable } from "svelte/store";

interface cryptoStateType {
  btcusdt: any;
  ethusdt: any;
  bnbusdt: any;
}

const store = () => {
  const cryptoStorage: cryptoStateType = {
    btcusdt: {},
    ethusdt: {},
    bnbusdt: {},
  };

  const { subscribe, set, update } = writable(cryptoStorage);

  const methods = {
    receiveUpdate(coin: string, data: any) {
      update((state) => {
        state[coin] = {
          label: String(data.s),
          current: Number(data.c).toFixed(2),
          highest: Number(data.h).toFixed(2),
          lowest: Number(data.l).toFixed(2),
        };

        return state;
      });
    },
  };

  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};

export default store();
