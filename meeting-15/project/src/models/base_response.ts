export class BaseResponse<T, R> {
  status: number;
  message: string;
  data: T;
  errors?: R;

  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

// let baseResponse = new BaseResponse<string>(200, "Success", "Hello, World!");