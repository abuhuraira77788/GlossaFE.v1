interface ExampleCardProps {
  title?: string;
}

export default function ExampleCard({
  title = "Hello Glossa",
}: ExampleCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">
        This is a reusable Tailwind + TypeScript component.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Click me
      </button>
    </div>
  );
}
