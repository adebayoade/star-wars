import { AlertCircle } from 'lucide-react';
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type MessageProps = {
  text: string;
  description?: string;
  variant?: 'default' | 'destructive';
};

export default function Message({ text, description, variant }: MessageProps) {
  return (
    <Alert variant={variant}>
      {variant === 'default' ? (
        <Terminal className="h-4 w-4" />
      ) : (
        <AlertCircle className="h-4 w-4" />
      )}
      <AlertTitle>{text}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
