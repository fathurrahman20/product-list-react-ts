// import { useState } from 'react';

interface Props {
  count: number;
  status: string;
  onSetCount: (count: number) => void;
}

export default function Button({ count, status, onSetCount }: Props) {
  //   const [count, setCount] = useState(0);
  const stat: boolean = status === 'plus' ? true : false;

  return (
    <>
      {!stat && (
        <button
          type="button"
          className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          onClick={() => onSetCount(count + 1)}
        >
          Plus
        </button>
      )}
      {stat && (
        <button
          type="button"
          className={`rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`}
          onClick={() => onSetCount(count - 1)}
        >
          Min
        </button>
      )}
    </>
  );
}
