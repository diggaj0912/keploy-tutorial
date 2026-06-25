type CalloutProps = {
  type?: "info" | "warning" | "success" | "danger";
  children: React.ReactNode;
};

const styles = {
  info: "bg-blue-50 border-blue-400 text-blue-900",
  warning: "bg-yellow-50 border-yellow-400 text-yellow-900",
  success: "bg-green-50 border-green-400 text-green-900",
  danger: "bg-red-50 border-red-400 text-red-900",
};

const icons = {
  info: "ℹ️",
  warning: "⚠️",
  success: "✅",
  danger: "🚨",
};

export default function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div className={`border-l-4 p-4 my-4 rounded-r-lg ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}