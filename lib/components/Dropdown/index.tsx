import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import styles from "./styles.module.scss";
import cx from "clsx";
import { useTheme } from "../../theme";

export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  width?: number;
  options: DropdownOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  width,
  options,
  value,
  onChange,
  placeholder = "Выберите...",
  disabled = false,
  className = "",
}) => {
  const { color } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = useCallback(() => {
    if (!disabled) setIsOpen((prev) => !prev);
  }, [disabled]);

  const handleSelect = useCallback(
    (optionValue: string | number) => {
      onChange?.(optionValue);
      setIsOpen(false);
    },
    [onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle();
      }
    },
    [handleToggle],
  );

  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value],
  );

  return (
    <div
      ref={containerRef}
      className={cx(
        styles.root,
        styles[color],
        className,
        isOpen && styles["root--open"],
        disabled && styles["root--disabled"],
      )}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        style={{ width }}
      >
        <span className={styles["root__selected"]}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={styles.arrow} aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className={styles.list} role="listbox" aria-label="Список опций">
          {options.map((option) => (
            <li
              key={option.value}
              className={cx(
                styles.option,
                option.value === value && styles["option--selected"],
              )}
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleSelect(option.value)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(option.value);
                }
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
