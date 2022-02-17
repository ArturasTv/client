import RestService from "../common/rest-service";

class TaskService {
  getTasks = () => {
    return RestService.get(`/tasks`);
  };
  getTaskByID = (id) => {
    return RestService.get(`/task/${id}`);
  };
  postTask = (data) => {
    return RestService.post(`/task`, data);
  };
  updateTask = (id, data) => {
    return RestService.put(`/task/${id}`, data);
  };
  deleteTask = (id) => {
    return RestService.delete(`/task/${id}`);
  };
}

const taskService = new TaskService();

export default taskService;
