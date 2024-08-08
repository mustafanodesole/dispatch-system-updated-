import { useState, Dispatch, SetStateAction } from "react";
import { useDebounce } from "usehooks-ts";

/**
 * `useDebouncedState()` can be used as both normal state & debounced state.
 * @param defaultValue
 * @param delay
 * @returns [debouncedValue, setValue, value]
 */
export default function useDebouncedState<T>(
  defaultValue: T,
  delay?: number
): [T, Dispatch<SetStateAction<T>>, T] {
  const [value, setValue] = useState<T>(defaultValue);
  const debouncedValue = useDebounce(value, delay);
  return [debouncedValue, setValue, value];
}
