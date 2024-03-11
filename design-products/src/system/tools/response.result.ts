import { Result } from "../../modules/common/models/result.models";

export async function response<R>(fn: () => Promise<Result<R>>): Promise<Result<R | null>> {
  try {
    return await fn();
  } catch (error: any) {
    let message = `Cachando error: ${error.message}`;
    let response: Result<R | null>;

    response = {
      status: "error",
      data: null,
      error: message,
    };
    return response;
  }
}
