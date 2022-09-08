/* This example requires Tailwind CSS v2.0+ */
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Error({ error }) {
  return (
    <div className="bg-red-50 p-4 rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{error}</h3>
        </div>
      </div>
    </div>
  );
}
