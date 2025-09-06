export type SignalStatus = 'new' | 'completed';

export interface Signal {
  id: string;
  title: string;
  subtitle?: string;
  time: string; // e.g., "2h ago"
  avatarUrl?: string | null;
  read: boolean;
  status?: SignalStatus;
}
