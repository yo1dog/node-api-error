import http from 'http';

export class APIError<T = unknown> extends Error {
  public status!: number;
  public code?: string;
  public details?: T;
  
  constructor(
    status: number,
    message: string,
    options?: {
      code?: string;
      details?: T;
    }
  ) {
    if (!message) {
      message = http.STATUS_CODES[status] || 'Unknown';
    }
    
    super(message);
    Object.defineProperty(this, 'name', {enumerable: false, value: this.constructor.name});
    Object.defineProperty(this, 'status', {enumerable: false, value: status});
    Object.defineProperty(this, 'code', {enumerable: false, value: options?.code});
    Object.defineProperty(this, 'details', {enumerable: false, value: options?.details});
  }
}
export default APIError;