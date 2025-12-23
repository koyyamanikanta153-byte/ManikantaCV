
import React from 'react';

interface EditableFieldProps {
  isEditing: boolean;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  as?: 'input' | 'textarea' | 'h1' | 'h2' | 'p' | 'span';
}

export const EditableField: React.FC<EditableFieldProps> = ({
  isEditing,
  value,
  onChange,
  className = "",
  as = "span"
}) => {
  if (!isEditing) {
    return <span className={className}>{value}</span>;
  }

  const baseStyles = "bg-white/10 border border-cyan-500/50 rounded px-1 text-inherit outline-none focus:ring-2 focus:ring-cyan-400 w-full inline-block";

  if (as === 'textarea') {
    return (
      <textarea
        className={`${baseStyles} ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
      />
    );
  }

  return (
    <input
      type="text"
      className={`${baseStyles} ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
