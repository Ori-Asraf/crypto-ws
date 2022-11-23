<script lang="ts">
  import listen from "../handlers/websocket";
  import cryptoStore from "../database/cryptoStore";

  const ToggleListener = async () => {
    const url = "wss://stream.binance.com:9443/ws/ethusdt@miniTicker/btcusdt@miniTicker/bnbusdt@miniTicker";
    listen(url);
  };

  ToggleListener();
</script>

<div>
  <div class="flex justify-center items-center w-screen h-screen">
    <div class="grid grid-cols-3 gap-10vh">
      {#each Object.entries($cryptoStore) as [key, value]}
        <div class="bg-pallete-300 p-1vw font-sans rounded-xl shadow-xl">
          <div class="w-full">
            <h1 class="font-semibold text-5vh text-center">{value.label || "Loading"}</h1>
            <div class="grid grid-cols-2 gap-0.5vw p-1vw">
              <div class="text-1.75vh">
                <span class="font-semibold">Symbol -</span>
                <span>{value.label || "Loading"}</span>
              </div>
              <div class="text-1.75vh">
                <span class="font-semibold">Current -</span>
                <span>${Number(value.current || 0).toLocaleString()}</span>
              </div>
              <div class="text-1.75vh">
                <span class="font-semibold">Highest (24hr) -</span>
                <span>${Number(value.highest || 0).toLocaleString()}</span>
              </div>
              <div class="text-1.75vh">
                <span class="font-semibold">Lowest (24hr) -</span>
                <span>${Number(value.lowest || 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
