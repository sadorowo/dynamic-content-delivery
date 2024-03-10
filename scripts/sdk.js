async function fetchResource(id) {
    const response = await fetch(ROUTES.GET_RESOURCE(id));
    if (!response.ok) {
        const json = await response.json();

        throw new Error(`${json.error}: ${json.message}`);
    }

    return (await response.json()).resource;
}

async function fetchStatus() {
    const response = await fetch(ROUTES.STATUS);

    if (!response.ok) {
        const json = await response.json();

        throw new Error(`${json.error}: ${json.message}`);
    }

    const json = await response.json();
    if (json.status !== 'ok') {
        throw new Error('API status is not OK. Something went wrong.');
    }

    return json;
}

// on error, provide alert to the user
window.addEventListener('unhandledrejection', event => alert(event.reason));