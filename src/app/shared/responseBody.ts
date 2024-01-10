export class ResponseBody {
  data: any;
  message: string;
  statusCode: number;

  constructor(data: {}, message: '', statusCode: number) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}
