export function addQueryParams(params: Record<string, string>) {

    const searchParams = new URLSearchParams(window.location.search)

    Object.entries(params).forEach(([key, value]) => {

        if (params !== undefined) {
            searchParams.set(key, value)
        }

    })

    window.history.pushState(null, '', `?${searchParams.toString()}`)
}