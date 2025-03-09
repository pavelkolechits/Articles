type Mods = Record<string, boolean | string>


export function classNames(
    cls?: string,
    mods?: Mods,
    additional?: string[]
): string {

    const modsEntries = Object.entries(mods).filter(([className, boolean]) => Boolean(boolean))
    const modsClassNames = modsEntries.map(([className, boolean]) => className)
    const classNamesResult = [cls, ...modsClassNames, ...additional].join(' ')

    return classNamesResult

}