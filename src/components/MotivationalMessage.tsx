interface MotivationalMessageProps {
  message: string;
  author: string;
}

export function MotivationalMessage(props: MotivationalMessageProps) {
  return (
    <div>
      <p>"{props.message}"</p>
      <p>"{props.author}"</p>
    </div>
  );
}