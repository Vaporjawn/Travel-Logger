import axios from 'axios';
import { LogEntry, CreateLogEntryData } from '../types';

const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:1337'
  : import.meta.env.VITE_API_URL || 'http://localhost:1337';

export const listLogEntries = async (): Promise<LogEntry[]> => {
  const response = await axios.get<LogEntry[]>(`${API_URL}/api/logs`);
  return response.data;
};

export const createLogEntry = async (entry: CreateLogEntryData): Promise<LogEntry> => {
  const { apiKey, ...data } = entry;

  const response = await axios.post<LogEntry>(`${API_URL}/api/logs`, data, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
  });

  return response.data;
};
