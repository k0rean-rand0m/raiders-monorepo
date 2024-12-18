<script lang="ts">
    import { ApiClient } from './lib/apiClient';
    import Console from "./lib/Console.svelte";

    const apiClient = new ApiClient();
    let coldstart = $state(false);
    let user: any | undefined = $state(undefined);

    const fetchUser = async () => {
        try {
            user = await apiClient.get('/user');
        } catch (err) {
            console.error(err);
            coldstart = true;
            try {
                user = (await apiClient.post<{ username: string }>('/user', {}));
            } catch (err) {
                console.error(err);
            }
        }
    };

    fetchUser();
</script>

<div class="w-[100vw] h-[100vh] overflow-x-hidden">
    {#if user}
        <div class="h-full">
            <Console username={user.username} {coldstart}></Console>
        </div>
    {:else}
        <p>...</p>
    {/if}
</div>

<style>

</style>