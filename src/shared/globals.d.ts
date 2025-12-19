// SCSS modules return CSS module object with class names
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// Inline SCSS returns a string
declare module '*.scss?inline' {
  const content: string;
  export default content;
}

// CSS modules return CSS module object with class names
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Inline CSS returns a string
declare module '*.css?inline' {
  const content: string;
  export default content;
}

// HTML files return a string
declare module '*.html' {
  const content: string;
  export default content;
}
