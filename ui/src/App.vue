<template>
  <form
    class="console"
    @submit.prevent="onSubmit"
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
        <input
          v-model="log.message"
          type="text"
          :readonly="isLoading || isSuccess"
        >
      </template>

      <template v-if="activeLogIndex === index || log.messageType === 'INPUT' && !isSuccess">
        <span v-if="!isLoading" class="cursor">_</span>
        <span v-else class="loader">{{ loaderFrame }}</span>
      </template>
    </div>
  </form>
  <template v-if="isLoading && (!user || !status)">
    <span class="loader">{{ loaderFrame }}</span>
  </template>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue';
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
    { type: 'WELCOME', message: `Welcome, ${user.value.username}!`, delay: 1000 },
    { type: '', message: '', delay: 500 },
    { type: '', message: 'Your console is live. New raids, challenges, and loot drops are incoming.', delay: 1000 },
    { type: '', message: '', delay: 0 },
    { type: 'INFO', message: `Your balance: ${user.value.balance} $RDRS`, delay: 750 },
    { type: '', message: '', delay: 500 },
    { type: 'INFO', message: 'Enter the secret code to claim 500 $RDRS Tokens.  Don’t waste time—tokens wait for no one.', delay: 750 },
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

function handleInputAppearance(input) {
  input?.focus()

  input.addEventListener('input', updateWidth);
  input.addEventListener('blur', () => {
    input?.focus();
    updateWidth();
  });

  function updateWidth() {
    const inputWidth = input.value.length; // Предположим, что один символ — 10px
    input.style.width = `${inputWidth}ch`;
  }
}

const observer = new MutationObserver((mutationsList) => {
  let isFound = false;

  for (const mutation of [...mutationsList].reverse()) {
    if (mutation.type === 'childList') {
      // Ищем новые элементы <input> в добавленных узлах
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'INPUT' && !isFound) {
          isFound = true;
          handleInputAppearance(node);
        }
        // Проверяем вложенные элементы, если это контейнер
        else if (node.querySelectorAll) {
          const inputs = node.querySelectorAll('input');
          inputs.forEach(handleInputAppearance);
        }
      });
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true, attributes: true, });

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

const goAirdrop = async () => {
  try {
    const input = logs.value.find(({ messageType }) => messageType === 'INPUT');
    const success = (await httpClient('/airdrop/claim/2', { method: 'POST', data: { code: input?.message  } }))?.success;

    if (!success) {
      log('ERROR', 'Incorrect code, Raider. Double-check your entry and move fast—your window is closing!');
      const input = logs.value.find(({ messageType }) => messageType === 'INPUT');

      if (!input) return;

      input.message = '';

      return;
    }

    isSuccess.value = true;
    log('SUCCESS', 'Success! The loot is yours. $RDRS Token have been added.');
    log('REMINDER', 'Today, you left behind the slow raiders.');
    log('REMINDER', 'Keep going');
  } catch (err) {
    console.error(err);
    log('ERROR', 'SYSTEM ERROR')
    throw new Error();
  }
};

const onSubmit = async (): void => {
  try {
    startLoader();
    await goAirdrop();
  } catch (error) {
    log('ERROR', 'SYSTEM ERROR')
    log('INPUT', '');
  } finally {
    stopLoader();
  }
};

const fetchUser = async () => {
  try {
    user.value = await httpClient('/user');
  } catch (err) {
    console.error(err);
    coldstart.value = true;
    try {
      user.value = (await httpClient('/user', { method: 'POST' }));
    } catch (err) {
      log('ERROR', 'SYSTEM ERROR')
    }
  }
};

const status = ref<'eligible'| 'expired' | 'claimed'>();

const fetchStatus = async () => {
  status.value = (await httpClient(`/airdrop/claim/2/status`))?.status;
}

watch(isAllReady, () => {
  if (status.value === 'claimed') {
    log('SUCCESS', 'Success! The loot is yours. $RDRS Token have been added.')
  }

  if (status.value === 'expired') {
    log('ERROR', 'Too slow, Raider. The loot’s already been claimed. Speed is survival. Try again next time!\n')
  }

  if (status.value === 'eligible') {
    log('INPUT', '')
  }
});


onBeforeMount(async () => {
  startLoader();
  await fetchUser();
  afterAll();

  await Promise.all([
    fetchStatus()
  ]);

  stopLoader();
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
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  width: 1ch;
  text-align: left;
  overflow: hidden;
  caret-color: transparent;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
