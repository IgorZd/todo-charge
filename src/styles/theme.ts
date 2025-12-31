export const theme = {
  colors: {
    // Primary colors
    primary: "#3b82f6",
    primaryHover: "rgba(59, 130, 246, 0.9)",
    primaryLight: "#eff6ff",

    // Destructive/Error colors
    destructive: "#ef4444",
    destructiveHover: "rgba(239, 68, 68, 0.9)",

    // Text colors
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      white: "#ffffff",
    },

    // Background colors
    background: {
      primary: "#ffffff",
      secondary: "#f3f4f6",
      hover: "#f9fafb",
      selected: "#eff6ff",
      skeleton: "#f3f4f6",
    },

    // Border colors
    border: {
      default: "#e5e7eb",
      hover: "#d1d5db",
      focus: "#3b82f6",
      selected: "#3b82f6",
      selectedHover: "#2563eb",
    },
  },

  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    selected:
      "0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -2px rgba(59, 130, 246, 0.2)",
    selectedHover:
      "0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -4px rgba(59, 130, 246, 0.3)",
  },

  borderRadius: {
    sm: "0.375rem",
    md: "0.375rem",
    lg: "0.75rem",
    xl: "0.75rem",
  },

  spacing: {
    xs: "0.375rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2.25rem",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1,
    normal: 1.2,
    relaxed: 1.6,
  },

  transitions: {
    fast: "0.15s ease-in-out",
    normal: "0.2s ease-in-out",
    slow: "0.3s ease-in-out",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export type Theme = typeof theme;
