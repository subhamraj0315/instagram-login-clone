import { useState } from 'react';

interface AuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showPasswordToggle?: boolean;
}

const AuthInput = ({ type, placeholder, value, onChange, showPasswordToggle = false }: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle && showPassword ? 'text' : type;
  const hasValue = value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`instagram-input peer pt-4 ${hasValue ? 'instagram-input-filled' : ''}`}
        placeholder=" "
      />
      <label
        className={`absolute left-2 transition-all duration-200 pointer-events-none text-muted-foreground
          ${hasValue || isFocused 
            ? 'top-1 text-[10px]' 
            : 'top-1/2 -translate-y-1/2 text-xs'
          }`}
      >
        {placeholder}
      </label>
      {showPasswordToggle && hasValue && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default AuthInput;
