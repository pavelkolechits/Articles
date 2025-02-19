// declare module '*.scss' {
//     interface IClassNames {
//       [className: string]: string
//     }
//     const classNames: IClassNames;
//     export = classNames;
//   }
  declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
  }
  declare module '*.css'
  declare module '*[FTName].module.scss'