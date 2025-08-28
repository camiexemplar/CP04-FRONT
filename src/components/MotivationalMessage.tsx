interface MotivationalMessageProps {
  message: string;
  author: string;
}

export function MotivationalMessage(props: MotivationalMessageProps) {
  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <p style={{ fontStyle: 'italic', margin: '0' }}>
        "{props.message}" - {props.author}
      </p>

    </div>
  );
}
