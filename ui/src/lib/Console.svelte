<script lang="ts">
    import { onMount } from 'svelte';

    let {username, coldstart}: {username: string, coldstart: boolean} = $props();

    let logs: Array<{ messageType: string, message: string, currentText: string }> = $state([]);
    let typingInterval: number;

    let queue: Array<() => Promise<void>> = []; // Queue для обработки log вызовов
    let isProcessing = false; // Флаг обработки очереди
    let activeLogIndex: number | null = $state(null); // Индекс строки, где должен мигать курсор

    // log функция с параметром delay
    export function log(messageType: any, message: any, delay = 0) {
        queue.push(() => processLog(messageType, message, delay));
        processQueue();
    }

    // Обработка очереди по порядку
    async function processQueue() {
        if (isProcessing) return; // Если уже идет обработка, не начинаем
        isProcessing = true;

        while (queue.length > 0) {
            const task = queue.shift();
            if (task) await task(); // Ожидаем выполнения текущей записи
        }

        isProcessing = false;
        activeLogIndex = null; // Сбросить активную строку, когда все завершено
    }

    async function processLog(messageType: any, message: any, delay: number) {
        if (delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay)); // Задержка перед началом
        }
        logs = [...logs, { messageType, message, currentText: '' }];
        activeLogIndex = logs.length - 1; // Устанавливаем курсор в конец новой строки
        await typeInMessage(logs.length - 1); // Ожидаем завершения typing анимации
    }

    function typeInMessage(index: number): Promise<void> {
        return new Promise((resolve) => {
            const { messageType, message } = logs[index];
            let i = 0;

            typingInterval = setInterval(() => {
                if (i < message.length) {
                    logs[index] = {
                        messageType,
                        message,
                        currentText: logs[index].currentText + message[i],
                    };
                    i++;
                } else {
                    clearInterval(typingInterval);
                    resolve(); // Завершаем typing анимацию
                }
            }, 50); // Скорость типинга
        });
    }

    onMount(() => {
        if (coldstart) {
            log('INFO', 'Initializing Raider Terminal v2.077...', 1000);
            log('INFO', 'Checking system integrity...', 1500);
            log('WARNING', 'Detected unauthorized access attempts: 2', 1000);
            log('INFO', 'Loading security protocols...', 0);
            log('ERROR', 'Neural interface synchronization failed!', 3000);
            log('INFO', 'Attempting backup connection...', 0);
            log('SUCCESS', 'Terminal synchronized', 5000);
            log('', '.', 500);
            log('', '.', 500);
            log('', '.', 500);
        } else {
            log('INFO', 'Establishing a connection...', 1000);
            log('SUCCESS', 'Terminal synchronized', 2000);
            log('', '.', 500);
            log('', '.', 500);
            log('', '.', 500);
        }

        log('WELCOME', `Welcome, ${username}!`, 1000)
        log('', '', 500)
        log('', `Your console is live. New raids, challenges, and loot drops incoming.`, 1000)
        log('', '', 0)
        log('REMINDER', 'Slow raiders get left behind.', 0)
    });
</script>

<div class="console">
    {#each logs as { messageType, currentText, message }, index}
        <div class="log-message">
            {#if messageType}
                <span class={`prefix-${messageType.toLowerCase()}`}>
                    [{messageType.toUpperCase()}]
                </span>{' '}
            {/if}

            {#if currentText}
                {currentText}
            {:else}
                <br/>
            {/if}

            {#if activeLogIndex === index}
                <span class="cursor">_</span>
            {/if}
        </div>
    {/each}
</div>

<style>
  .console {
    background-color: #000;
    color: #fff;
    font-family: 'Courier New', monospace;
    padding: 1rem;
    overflow-y: auto;
    height: 100%;
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

  .log-message {
    line-height: 1.5;
  }

  .cursor {
    display: inline-block;
    color: #00FFFF;
    font-weight: bold;
    animation: blink 1s step-start infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>