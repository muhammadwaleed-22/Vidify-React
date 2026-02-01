export default function MakeAIVideoModal({ open, onClose, product }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl rounded-xl bg-white shadow-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Make AI Video – {product?.Product}
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-500"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 rounded-lg border bg-gray-50 flex items-center justify-center text-gray-400">
              Start Image
            </div>
            <div className="h-48 rounded-lg border border-dashed bg-gray-50 flex items-center justify-center text-gray-400">
              End Image
            </div>
          </div>

          <textarea
            placeholder="Describe your video idea..."
            className="w-full h-24 rounded-lg border px-3 py-2"
          />
        </div>

        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-lg">
            Generate AI Video
          </button>
        </div>
      </div>
    </div>
  );
}
