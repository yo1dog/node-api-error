declare class APIError extends Error {
  /**
   * Creates an API Erorr.
   */
  public constructor(
    status  : number,
    message?: string,
    options?: {
      code?   : string,
      details?: any
    }
  );
  
  public status : number;
  public code   : string;
  public details: any;
}

export = APIError;