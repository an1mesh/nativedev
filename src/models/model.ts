export interface ButtonModel {
  buttonTitle: string;
  addTask(): void;
}
export interface InputTextModel {
  hintText: string;
  changeText(text: string): void;
}
export interface TaskListModel {
  taskList: {id: string; title: string}[];
}
