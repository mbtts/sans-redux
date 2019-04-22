import { TodoListEvents } from "../components/TodoList/events";

export enum CommonEvents {
  RANDOM_THING_HAPPENS = "RANDOM_THING_HAPPENS"
}

export type StoreEvent = CommonEvents | TodoListEvents
