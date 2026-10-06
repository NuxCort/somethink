export const DEFAULT_BASE_FONT_SIZE = 16 as const;

/**
 * Конвертирует пиксели в rem.
 * @param px - значение в пикселях (число или строка "16px")
 * @param base - базовый размер шрифта (по умолчанию 16)
 * @returns значение в rem (строка)
 */
export function pxToRem(px: number | string, base: number = DEFAULT_BASE_FONT_SIZE): string {
  const value = typeof px === 'string' ? parseFloat(px) : px;

  if (isNaN(value)) {
    throw new Error(`Некорректное значение: ${px}`);
  }

  return `${Math.round((value / base) * 10000) / 10000}rem`;
}
