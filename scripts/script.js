const startPage = document.getElementById('internal__start-page');
const templatePage = document.getElementById('internal__template');

const wait = (time) => new Promise(resolve => setTimeout(resolve, time * 1000));

// Check if API is alive
fetchStatus()
    .catch(() => alert('API is down or an error occurred.'));

if (!startPage || !templatePage) {
    alert("Base website template got corrupted! Can't find either start page or template page. Closing the window.");
    window.close();
} else {
    async function proceed() {
        const input = document.querySelector('#internal__start-page > input');
        const patches = await fetchResource(input.value);

        if (!patches) return alert('Bad access code!');
        applyPatches(patches);
        await fadeBlock();
    }

    function applyPatches(patches) {
        for (const [key, object] of Object.entries(patches)) {
            const element = document.querySelector(key);
            if (!element) {
                alert(`Bad data source template! No HTML element found for selector '${key}'.`);
                continue;
            }

            parsePatch(element, object);
        }
    }

    function parsePatch(element, object) {
        for (const [key, value] of Object.entries(object)) {
            if (typeof value === 'object')
                parsePatch(element[key], value);
            else
                element[key] = value;
        }
    }

    async function fadeBlock() {
        startPage.style.opacity = 0;
        await wait(0.2);
        startPage.style.display = 'none';
        await wait(0.2);
        templatePage.style.display = 'block';
        templatePage.style.opacity = 1;
    }

    internal__submit.addEventListener('click', async () => await proceed())
}
