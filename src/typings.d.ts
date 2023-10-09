// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ValuesOf<T extends readonly any[]> = T[number];

export type EmojiCategory = ValuesOf<typeof categories>;
