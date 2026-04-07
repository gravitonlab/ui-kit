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
import type { SizeProp } from "../../theme/types";

export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  width?: number;
  options: DropdownOption[];
  value?: string | number;
  size?: SizeProp;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (value: string | number) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  width,
  options,
  value,
  size,
  onChange,
  placeholder = "Выберите...",
  disabled = false,
  className = "",
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const rootStyles: React.CSSProperties = {
    width,
    borderRadius: theme.borderRadius,
  };

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
        styles[size || theme.size],
        styles[theme.color],
        className,
        isOpen && styles["root--open"],
        disabled && styles["root--disabled"],
      )}
      style={rootStyles}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
        style={rootStyles}
      >
        <span className={styles.selected}>
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
