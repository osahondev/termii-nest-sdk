import { TmNumberPayload } from '../payload';
import { TmNumberResponse } from '../response';
export abstract class AbstractNumberService {
  abstract sendMessage(payload: TmNumberPayload): Promise<TmNumberResponse>;
}
