import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link?: string;
}

export interface Stat {
  label: string;
  value: string;
  subLabel?: string;
}