type CalloutProps = {
  type?: "info" | "warning" | "success" | "danger";
  children: React.ReactNode;
};

const styles = {
  info: "bg-blue-950 border-blue-400 text-blue-100",
  warning: "bg-yellow-950 border-yellow-400 text-yellow-100",
  success: "bg-green-950 border-green-400 text-green-100",
  danger: "bg-red-950 border-red-400 text-red-100",
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