export interface LogEntry {
  _id: string;
  title: string;
  description?: string;
  comments?: string;
  image?: string;
  rating: number;
  latitude: number;
  longitude: number;
  visitDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLogEntryData {
  title: string;
  description?: string;
  comments?: string;
  image?: string;
  rating?: number;
  latitude: number;
  longitude: number;
  visitDate: string;
  apiKey: string;
}

export interface ViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

export interface AddEntryLocation {
  latitude: number;
  longitude: number;
}
