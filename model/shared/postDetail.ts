import { PostSummary } from "./postSummary";
import { Todo } from "./todos";

export class PostDetail extends PostSummary{
  price: number;
  currency: string;
  todos: Todo;

  constructor(postData:any,todoData:any) {
    super(postData);
    this.price = postData.price;
    this.currency = postData.currency;
    this.todos = todoData.map((item:any)=>new Todo(item))
  }
}