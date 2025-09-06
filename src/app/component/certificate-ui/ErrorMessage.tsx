export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="text-red-600 mt-4 font-semibold">{message}</p>
  );
}
