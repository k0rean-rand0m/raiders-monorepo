<template>
  <form
    class="console"
  >
    <div
      v-for="(log, index) in logs"
      :key="index"
      class="log-message"
    >
      <template v-if="log.messageType">
        <span :class="`prefix-${log.messageType.toLowerCase()}`">
          [{{ log.messageType.toUpperCase() }}]
        </span>
      </template>
      <template v-if="log.messageType !== 'INPUT' && log.currentText">
        {{ log.currentText }}
      </template>
      <template v-if="log.messageType === 'INPUT'">
        <span class="relative">
          <input
            :class="{ 'aaaaa': !isTabed }"
            v-model="log.message"
            type="text"
            :readonly="isLoading || isSuccess"
            @click="isTabed = true"
          >
          <span class="pointer" v-if="!isTabed">Tap here</span>
        </span>
      </template>
      <template v-else><br></template>
      <template v-if="activeLogIndex === index || log.messageType === 'INPUT' && !isSuccess">
        <span v-if="!isLoading" class="cursor">_</span>
        <span v-else class="loader">{{ loaderFrame }}</span>
      </template>
    </div>
    <template v-if="isLoading && !user">
      <span class="loader">{{ loaderFrame }}</span>
    </template>
  </form>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref, watch } from 'vue';
import { httpClient } from './shared/api';

interface Log {
  messageType: string;
  message: string;
  currentText: string;
}

// Моки
const user = ref<{ username: string, balance: number }>();
const coldstart = ref(false);

// State
const queue: Array<() => Promise<void>> = [];
const isProcessing = ref(false);
const activeLogIndex = ref<number | null>(null);
const logs = ref([]);

// Functions
function log(messageType: string, message: string, delay = 0) {
  queue.push(() => processLog(messageType, message, delay));
  processQueue();
}

async function processQueue() {
  if (isProcessing.value) return;
  isProcessing.value = true;

  while (queue.length > 0) {
    const task = queue.shift();
    if (task) await task();
  }

  isProcessing.value = false;
  activeLogIndex.value = null;
}

async function processLog(messageType: string, message: string, delay: number) {
  if (delay > 0) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  logs.value.push({messageType, message, currentText: ''});
  activeLogIndex.value = logs.value.length - 1;
  await typeInMessage(logs.value.length - 1);
}

function typeInMessage(index: number): Promise<void> {
  return new Promise((resolve) => {
    const log = logs.value[index];
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < log.message.length) {
        log.currentText += log.message[i];

        logs[index] = {
          ...log,
          currentText: log.currentText,
        };
        i++;
      } else {
        clearInterval(typingInterval);
        resolve();
      }
    }, 20);
  });
}

const isTabed = ref(false);

const isAllReady = ref(false);

// Lifecycle
const afterAll = (() => {
  const logss = coldstart.value
    ? [
      { type: 'INFO', message: 'Initializing Raider Console v2.077...', delay: 1000 },
      { type: 'INFO', message: 'Checking system integrity...', delay: 1500 },
      { type: 'WARNING', message: 'Detected unauthorized access attempts: 2', delay: 1000 },
      { type: 'INFO', message: 'Loading security protocols...', delay: 0 },
      { type: 'ERROR', message: 'Neural interface synchronization failed!', delay: 3000 },
      { type: 'INFO', message: 'Attempting backup connection...', delay: 0 },
      { type: 'SUCCESS', message: 'Console synchronized', delay: 5000 },
      { type: '', message: '.', delay: 500 },
      { type: '', message: '.', delay: 500 },
      { type: '', message: '.', delay: 500 },
    ]
    : [{ type: 'INFO', message: 'Console synchronized', delay: 1000 }];

  logss.push(
    { type: 'WELCOME', message: `Welcome, ${user.value?.username}!`, delay: 1000 },
    { type: 'INFO', message: `Your balance: ${user.value?.balance} $RDRS`, delay: 750 },
    { type: '', message: '', delay: 500 },
    { type: 'INFO', message: `Connecting to Raiding Party Network...`, delay: 750 },
    { type: 'SUCCESS', message: `Our first USDT raid is live! Your console is active, and you’re in! 🚀`, delay: 1500 },
  );

  let delay = 0;

  logss.forEach(({ type, message, delay: preDelay  }, index) => {
    delay += preDelay;
    setTimeout(() => {
      log(type, message);
      setTimeout(() => {
        isAllReady.value = index === logss.length - 1;
      }, preDelay);
    }, delay);
  });
});

const isLoading = ref(false);
const isSuccess = ref(false);
// Создаем реактивные переменные
const loaderFrame = ref('|'); // Начальный кадр анимации
const frames = ['|', '/', '—', '|', '—', '\\']; // Массив кадров для анимации
let currentFrameIndex = 0; // Индекс текущего кадра
let loaderInterval: number | undefined = undefined; // Интервал для анимации

// Функция для старта анимации
const startLoader = () => {
  isLoading.value = true;

  loaderInterval = setInterval(() => {
    loaderFrame.value = frames[currentFrameIndex]; // Обновляем кадр
    currentFrameIndex = (currentFrameIndex + 1) % frames.length; // Перемещаемся по массиву кадров
  }, 200); // Обновляем каждый 200 миллисекунд
};

// Функция для остановки лоадера
const stopLoader = () => {
  if (loaderInterval) {
    clearInterval(loaderInterval); // Останавливаем анимацию
  }
  isLoading.value = false; // Останавливаем отображение лоадера
};

const fetchUser = async () => {
  try {
    user.value = await httpClient('/user');
  } catch (err) {
    console.error(err);
    coldstart.value = true;
    try {
      user.value = (await httpClient('/user', { method: 'POST' }));
    } catch (error) {
      log('ERROR', 'SYSTEM ERROR' + ' ')
    }
  }
};

onBeforeMount(async () => {
  startLoader();
  await fetchUser();
  stopLoader();
  afterAll();
});
</script>

<style>
.console {
  padding: 1rem;
  width: 100vw;
  min-height: 100vh;
}

.prefix-info {
  color: #00FFFF;
  text-shadow: 0 0 8px #00FFFF, 0 0 16px #00DBDB;
}

.prefix-error {
  color: #FF073A;
  text-shadow: 0 0 8px #FF073A, 0 0 16px #FF4671;
}

.prefix-warning, .prefix-reminder {
  color: #FFD700;
  text-shadow: 0 0 8px #FFD700, 0 0 16px #FFC83D;
}

.prefix-success, .prefix-welcome {
  color: #00FF00;
  text-shadow: 0 0 8px #00FF00, 0 0 16px #00B700;
}

.prefix-input {
  color: #FF00FF;
  text-shadow: 0 0 8px #FF00FF, 0 0 16px #FF00FF;
}

.log-message {
  line-height: 1.5;
}

.cursor {
  display: inline-block;
  color: #00FFFF;
  font-weight: bold;
  animation: blink 1s step-start infinite;
}

.loader {
  display: inline-block;
  color: #00FFFF;
  font-weight: bold;
  margin-left: 8px;
}

input {
  padding: 0;
  background: transparent;
  outline: none;
  font-size: 16px;
  width: 1ch;
  text-align: left;
  border: none;
  overflow: hidden;
  caret-color: transparent;
}
.aaaaa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.pointer {
  pointer-events: none;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
