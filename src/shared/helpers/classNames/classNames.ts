type Mods = Record<string, boolean | string | undefined>


export function classNames(
    cls?: string,
    mods: Mods = {},
    additional: Array<string |undefined> = [undefined]
): string {

    const modsEntries = Object.entries(mods).filter(([className, boolean]) => Boolean(boolean))
    const modsClassNames = modsEntries.map(([className, boolean]) => className)
    const classNamesResult = [cls, ...modsClassNames, ...additional.filter(Boolean)].join(' ')

    return classNamesResult

}