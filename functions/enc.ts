export const Rot13 = (s: string): string => s.replace(/[a-zA-Z]/g, rot13Char)

const rot13Char = (c: string): string =>
  String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
