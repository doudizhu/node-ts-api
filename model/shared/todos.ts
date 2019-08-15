export class Todo {
  postId: number;
  todoTitle: string;
  todoText: string;
  star: number;
  constructor(data: any){
    this.postId = data.postId;
    this.todoTitle = data.todoTitle;
    this.todoText = data.todoText;
    this.star = data.star;
  }
}