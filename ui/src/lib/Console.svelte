<script lang="ts">
    import { onMount } from 'svelte';

    let {
        user,
        coldstart
    }: {user: {username: string, balance: number},
        coldstart: boolean
    } = $props();

    let logs: Array<{ messageType: string, message: string, currentText: string }> = $state([]);
    let typingInterval: number;

    let queue: Array<() => Promise<void>> = [];
    let isProcessing = false;
    let activeLogIndex: number | null = $state(null);


    export function log(messageType: any, message: any, delay = 0) {
        queue.push(() => processLog(messageType, message, delay));
        processQueue();
    }


    async function processQueue() {
        if (isProcessing) return;
        isProcessing = true;

        while (queue.length > 0) {
            const task = queue.shift();
            if (task) await task();
        }

        isProcessing = false;
        activeLogIndex = null;
    }

    async function processLog(messageType: any, message: any, delay: number) {
        if (delay > 0) {
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        logs = [...logs, { messageType, message, currentText: '' }];
        activeLogIndex = logs.length - 1;
        await typeInMessage(logs.length - 1);
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
                    resolve();
                }
            }, 50);
        });
    }

    onMount(() => {
        if (coldstart) {
            log('INFO', 'Initializing Raider Console v2.077...', 1000);
            log('INFO', 'Checking system integrity...', 1500);
            log('WARNING', 'Detected unauthorized access attempts: 2', 1000);
            log('INFO', 'Loading security protocols...', 0);
            log('ERROR', 'Neural interface synchronization failed!', 3000);
            log('INFO', 'Attempting backup connection...', 0);
            log('SUCCESS', 'Console synchronized', 5000);
            log('', '.', 500);
            log('', '.', 500);
            log('', '.', 500);
        } else {
            log('INFO', 'Console synchronized', 1000);
        }

        log('WELCOME', `Welcome, ${user.username}!`, 1000);
        log('', '', 500);
        log('', `Your console is live. New raids, challenges, and loot drops are incoming.`, 1000);
        log('', '', 0);
        log('INFO', 'Installing treasury extension...', 0);
        log('SUCCESS', 'Installation complete.', 3000);
        log('', '', 0);
        log('INFO', `Your balance: ${user.balance} $RDRS`, 750);
        log('', '', 500);
        log('REMINDER', 'Today, you left behind the slow raiders.', 0);
        log('REMINDER', 'Keep going!', 750);
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