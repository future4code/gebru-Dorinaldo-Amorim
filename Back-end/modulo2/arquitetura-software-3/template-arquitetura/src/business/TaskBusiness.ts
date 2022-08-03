import { TaskDatabase } from "../data/TaskDatabase";
import { TaskInputDTO } from "../model/taskDTO";
import { generateId } from "../services/generateId";

export class TaskBusiness {
  public createTask = async (input: TaskInputDTO) => {
    try {
      const { title, description, deadline, authorId } = input;

      if (!title || !description || !deadline || !authorId) {
        throw new Error(
          '"title", "description", "deadline" e "authorId" são obrigatórios'
        );
      }

      const id: string = generateId()

      const taskDatabase = new TaskDatabase();
      await taskDatabase.insertTask({
        id,
        title,
        description,
        deadline,
        authorId,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
